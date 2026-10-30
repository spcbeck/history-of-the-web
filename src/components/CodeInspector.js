// Code Inspector Drawer Component

export class CodeInspector {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isOpen = false;
    this.currentData = null;
    this.render();
  }

  setData(yearData) {
    this.currentData = yearData;
    if (this.isOpen) {
      this.updateContent();
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.container.classList.add('open');
      this.updateContent();
    } else {
      this.container.classList.remove('open');
    }
  }

  render() {
    this.container.innerHTML = `
      <div class="inspector-drawer">
        <div class="drawer-header">
          <div class="drawer-title">
            <span class="drawer-icon">&lt;/&gt;</span>
            <span id="inspector-year-title">HISTORICAL CODE INSPECTOR</span>
          </div>
          <button id="close-inspector-btn" type="button" class="close-btn" aria-label="Close Code Inspector">&times;</button>
        </div>

        <div class="drawer-body">
          <div class="tech-stack-banner" id="inspector-tech-banner">
            Select a year to inspect its authentic code implementation.
          </div>

          <div class="code-preview-box">
            <div class="code-header">
              <span>AUTHENTIC SOURCE CODE SAMPLE</span>
              <button id="copy-code-btn" type="button" class="copy-btn">📋 Copy Code</button>
            </div>
            <pre tabindex="0"><code id="inspector-code-block">Loading...</code></pre>
          </div>

          <div class="specs-list-box">
            <h4>SPECIFICATION BREAKDOWN</h4>
            <ul id="inspector-specs-list"></ul>
          </div>

          <div class="specs-list-box" id="inspector-context-box">
            <h4>CULTURAL &amp; ARCHITECTURAL CONTEXT</h4>
            <div class="context-card" id="inspector-cultural-context"></div>
          </div>
        </div>
      </div>
    `;

    this.container.querySelector('#close-inspector-btn').addEventListener('click', () => {
      this.toggle();
    });

    this.container.querySelector('#copy-code-btn').addEventListener('click', () => {
      if (this.currentData && this.currentData.codeSnippet) {
        navigator.clipboard.writeText(this.currentData.codeSnippet);
        const btn = this.container.querySelector('#copy-code-btn');
        btn.innerText = '✅ Copied!';
        setTimeout(() => {
          btn.innerText = '📋 Copy Code';
        }, 2000);
      }
    });
  }

  updateContent() {
    if (!this.currentData) return;

    const title = this.container.querySelector('#inspector-year-title');
    const banner = this.container.querySelector('#inspector-tech-banner');
    const codeBlock = this.container.querySelector('#inspector-code-block');
    const specsList = this.container.querySelector('#inspector-specs-list');
    const culturalBox = this.container.querySelector('#inspector-cultural-context');

    title.innerText = `SOURCE INSPECTOR // ${this.currentData.year}`;
    banner.innerText = `${this.currentData.designParadigm || this.currentData.layoutType.toUpperCase()} — ${this.currentData.prevailingTech}`;
    codeBlock.innerText = this.currentData.codeSnippet;

    specsList.innerHTML = this.currentData.specs.map(s => `
      <li>
        <span class="spec-cat-badge">${s.category}</span>
        <span class="spec-desc">${s.item}</span>
      </li>
    `).join('');

    if (culturalBox) {
      culturalBox.innerText = `${this.currentData.culturalContext || ''} ${this.currentData.eraSites ? `(Era Sites: ${this.currentData.eraSites})` : ''}`;
    }
  }
}
