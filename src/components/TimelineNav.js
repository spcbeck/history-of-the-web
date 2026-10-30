// Timeline Navigation Controller Component

import { soundManager } from '../utils/audio.js';

export class TimelineNav {
  constructor(containerId, years, currentYear, onSelectYear, onToggleInspector) {
    this.container = document.getElementById(containerId);
    this.years = years;
    this.currentYear = currentYear;
    this.onSelectYear = onSelectYear;
    this.onToggleInspector = onToggleInspector;
    this.isPlaying = false;
    this.playInterval = null;
    this.audioEnabled = true;

    this.render();
  }

  setYear(year) {
    this.currentYear = year;
    this.updateActiveTick();
  }

  render() {
    this.container.innerHTML = `
      <div class="timeline-control-panel">
        <!-- Top Toolbar: Era Jumps & Controls -->
        <div class="timeline-toolbar">
          <div class="era-jump-buttons">
            <span class="toolbar-label">JUMP TO ERA:</span>
            <button class="era-btn" data-year="1993">💾 1990s Mosaic</button>
            <button class="era-btn" data-year="2000">💿 2000s Web 2.0</button>
            <button class="era-btn" data-year="2010">📱 2010s Responsive</button>
            <button class="era-btn" data-year="2020">🚀 2020s Modern</button>
          </div>

          <div class="playback-controls">
            <button id="btn-prev" class="control-btn" title="Previous Year">&laquo; Prev</button>
            <button id="btn-play" class="control-btn play-btn" title="Auto Tour">▶ Play Tour</button>
            <button id="btn-next" class="control-btn" title="Next Year">Next &raquo;</button>
            <button id="btn-audio" class="control-btn audio-btn" title="Toggle Retro Audio">🔊 Sound: ON</button>
            <button id="btn-inspect" class="control-btn inspect-btn" title="View Source Code">&lt;/&gt; Inspect Code</button>
          </div>
        </div>

        <!-- Scrubber Slider & Tick Track -->
        <div class="scrubber-track-container">
          <input 
            type="range" 
            id="year-scrubber" 
            min="1993" 
            max="2026" 
            value="${this.currentYear}" 
            step="1"
            class="timeline-slider"
          />

          <div class="timeline-ticks">
            ${this.years.map(y => `
              <div 
                class="timeline-tick ${y === this.currentYear ? 'active' : ''}" 
                data-year="${y}"
                title="${y}"
              >
                <span class="tick-label">${y % 5 === 0 || y === 1993 || y === 2026 ? y : "•"}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const slider = this.container.querySelector('#year-scrubber');
    const prevBtn = this.container.querySelector('#btn-prev');
    const nextBtn = this.container.querySelector('#btn-next');
    const playBtn = this.container.querySelector('#btn-play');
    const audioBtn = this.container.querySelector('#btn-audio');
    const inspectBtn = this.container.querySelector('#btn-inspect');
    const eraBtns = this.container.querySelectorAll('.era-btn');
    const ticks = this.container.querySelectorAll('.timeline-tick');

    slider.addEventListener('input', (e) => {
      const year = parseInt(e.target.value, 10);
      soundManager.playClick(year);
      this.onSelectYear(year);
    });

    prevBtn.addEventListener('click', () => {
      const targetYear = Math.max(1993, this.currentYear - 1);
      soundManager.playClick(targetYear);
      this.onSelectYear(targetYear);
    });

    nextBtn.addEventListener('click', () => {
      const targetYear = Math.min(2026, this.currentYear + 1);
      soundManager.playClick(targetYear);
      this.onSelectYear(targetYear);
    });

    playBtn.addEventListener('click', () => {
      this.togglePlayTour();
    });

    audioBtn.addEventListener('click', () => {
      soundManager.muted = !soundManager.muted;
      audioBtn.innerHTML = soundManager.muted ? '🔇 Sound: OFF' : '🔊 Sound: ON';
      if (!soundManager.muted) soundManager.playClick(this.currentYear);
    });

    inspectBtn.addEventListener('click', () => {
      if (!soundManager.muted) soundManager.playClick(this.currentYear);
      this.onToggleInspector();
    });

    eraBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const year = parseInt(btn.dataset.year, 10);
        soundManager.playClick(year);
        this.onSelectYear(year);
      });
    });

    ticks.forEach(tick => {
      tick.addEventListener('click', () => {
        const year = parseInt(tick.dataset.year, 10);
        soundManager.playClick(year);
        this.onSelectYear(year);
      });
    });
  }

  togglePlayTour() {
    const playBtn = this.container.querySelector('#btn-play');
    if (this.isPlaying) {
      clearInterval(this.playInterval);
      this.isPlaying = false;
      playBtn.innerHTML = '▶ Play Tour';
    } else {
      this.isPlaying = true;
      playBtn.innerHTML = '⏸ Pause';
      this.playInterval = setInterval(() => {
        let nextYear = this.currentYear + 1;
        if (nextYear > 2026) nextYear = 1993;
        soundManager.playClick(nextYear);
        this.onSelectYear(nextYear);
      }, 3500);
    }
  }

  updateActiveTick() {
    const slider = this.container.querySelector('#year-scrubber');
    if (slider) slider.value = this.currentYear;

    const ticks = this.container.querySelectorAll('.timeline-tick');
    ticks.forEach(tick => {
      const y = parseInt(tick.dataset.year, 10);
      if (y === this.currentYear) {
        tick.classList.add('active');
      } else {
        tick.classList.remove('active');
      }
    });
  }
}
