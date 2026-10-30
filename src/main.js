// Main Application Controller

import { webHistoryData } from './data/webHistoryData.js';
import { renderYearView } from './years/yearTemplates.js';
import { TimelineNav } from './components/TimelineNav.js';
import { CodeInspector } from './components/CodeInspector.js';
import { soundManager } from './utils/audio.js';

class App {
  constructor() {
    this.allData = webHistoryData;
    this.years = this.allData.map(d => d.year);
    this.currentYear = this.getYearFromHash() || 1993;

    this.inspector = new CodeInspector('inspector-drawer-wrapper');
    this.nav = new TimelineNav(
      'timeline-nav-wrapper',
      this.years,
      this.currentYear,
      (year) => this.selectYear(year),
      () => this.inspector.toggle()
    );

    this.init();
  }

  getYearFromHash() {
    const hash = window.location.hash.replace('#', '');
    const parsed = parseInt(hash, 10);
    if (!isNaN(parsed) && parsed >= 1993 && parsed <= 2026) {
      return parsed;
    }
    return null;
  }

  init() {
    this.renderCurrentYear();

    // Listen for hash changes in URL
    window.addEventListener('hashchange', () => {
      const year = this.getYearFromHash();
      if (year && year !== this.currentYear) {
        this.selectYear(year, false);
      }
    });

    // Keyboard navigation (Left/Right arrow keys)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const prev = Math.max(1993, this.currentYear - 1);
        soundManager.playClick(prev);
        this.selectYear(prev);
      } else if (e.key === 'ArrowRight') {
        const next = Math.min(2026, this.currentYear + 1);
        soundManager.playClick(next);
        this.selectYear(next);
      }
    });

    // Audio context initialization on user interaction
    document.addEventListener('click', () => soundManager.initContext(), { once: true });
  }

  selectYear(year, updateHash = true) {
    if (this.currentYear === year) return;
    this.currentYear = year;

    if (updateHash) {
      window.location.hash = `#${year}`;
    }

    this.nav.setYear(year);
    this.renderCurrentYear();
  }

  renderCurrentYear() {
    const yearData = this.allData.find(d => d.year === this.currentYear);
    if (!yearData) return;

    // Update Header active year badge
    const yearHeader = document.getElementById('header-year-number');
    if (yearHeader) yearHeader.innerText = yearData.year;

    // Render Authentic Stage Content with View Transitions if available
    const stageContainer = document.getElementById('authentic-stage');
    if (stageContainer) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          stageContainer.innerHTML = renderYearView(yearData);
        });
      } else {
        stageContainer.innerHTML = renderYearView(yearData);
      }
    }

    // Update Code Inspector Data
    this.inspector.setData(yearData);
  }
}

// Start application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
