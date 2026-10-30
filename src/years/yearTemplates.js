// Year View HTML/CSS Generator for Web History & Specs (1993 - 2026)

import { soundManager } from '../utils/audio.js';

// Expose soundManager globally for inline authentic era triggers
if (typeof window !== 'undefined') {
  window.soundManager = soundManager;
}

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function renderYearView(yearData) {
  const y = yearData.year;

  return `
    <div class="year-view-wrapper era-${y}" id="year-view-${y}">
      <div class="authentic-render-box">
        ${getAuthenticLayoutHTML(yearData)}
      </div>
    </div>
  `;
}

function getAuthenticLayoutHTML(yearData) {
  const y = yearData.year;

  // 1993: MOSAIC ERA (Raw unstyled HTML 1.0, gray #c0c0c0 background, default blue/purple links)
  if (y === 1993) {
    return `
      <div style="background-color: #c0c0c0; color: #000000; font-family: 'Times New Roman', Times, serif; padding: 28px 34px; border: 4px inset #808080; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <h1 style="color: #000000; font-size: 26pt; margin: 0 0 8px 0;">World Wide Web (W3) Initiative — 1993</h1>
          <p style="font-size: 13pt; margin: 0 0 12px 0;"><i>${escapeHTML(yearData.subtitle)}</i></p>
          <hr size="4" color="#808080" style="margin: 12px 0;" />

          <p style="font-size: 13pt; line-height: 1.45;">
            The WorldWideWeb (W3) is a wide-area <a href="#hypermedia" style="color: #0000ee; text-decoration: underline;" onclick="alert('1993 HTTP/0.9 GET request: Fetching plain HTML document...'); return false;">hypermedia</a> information retrieval initiative aiming to give universal access to a large universe of documents.
          </p>

          <h2 style="font-size: 17pt; margin: 16px 0 8px 0;">1993 Specification Milestones:</h2>
          <ul style="font-size: 12.5pt; line-height: 1.55; padding-left: 26px;">
            ${yearData.specs.map(s => `<li><b>[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
          </ul>

          <hr size="2" color="#808080" style="margin: 14px 0;" />

          <h3 style="font-size: 14pt; margin: 0 0 6px 0;">Historical Context &amp; Prevailing Architecture</h3>
          <dl style="font-size: 12pt; line-height: 1.45; margin: 0;">
            <dt><b>Design Paradigm:</b> ${escapeHTML(yearData.designParadigm)}</dt>
            <dd style="margin-left: 20px; margin-bottom: 6px;">${escapeHTML(yearData.prevailingTech)}</dd>
            <dt><b>Cultural Snapshot (1993):</b></dt>
            <dd style="margin-left: 20px; margin-bottom: 6px;">${escapeHTML(yearData.culturalContext)}</dd>
            <dt><b>Landmark 1993 Sites:</b></dt>
            <dd style="margin-left: 20px;">${escapeHTML(yearData.eraSites)}</dd>
          </dl>

          <p style="font-size: 12pt; margin-top: 12px;">
            Hyperlinks:
            <a href="#mosaic-demo" style="color: #0000ee; text-decoration: underline;" onclick="alert('Mosaic 1.0 inline <IMG> & hyperlink clicked!'); return false;">Unvisited Link (#0000ee)</a> |
            <a href="#visited" style="color: #551a8b; text-decoration: underline;" onclick="return false;">Visited Link (#551a8b)</a> |
            <a href="#audio" style="color: #0000ee; text-decoration: underline;" onclick="window.soundManager && window.soundManager.playDialup(); return false;">[Test 14.4k Baud Modem Handshake]</a>
          </p>
        </div>
        <div>
          <hr size="2" color="#808080" style="margin: 12px 0 8px 0;" />
          <address style="font-size: 11.5pt;">Tim Berners-Lee, CERN, Geneva, Switzerland &amp; Marc Andreessen, NCSA Urbana-Champaign (1993)</address>
        </div>
      </div>
    `;
  }

  // 1994: NETSCAPE 1.0 ERA (Custom body background colors, centered headers, font sizes)
  if (y === 1994) {
    return `
      <div style="background-color: #000040; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 28px 28px; color: #ffff00; font-family: 'Times New Roman', Arial, sans-serif; padding: 24px; border: 5px ridge #00ffff; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <center>
            <font size="6" color="#00ffff"><b>★ Welcome to Mosaic Netscape 1.0 (1994) ★</b></font><br>
            <font size="3" color="#ffffff"><i>${escapeHTML(yearData.subtitle)}</i></font>
            <hr width="85%" size="4" color="#ff00ff" style="margin: 12px auto;">
          </center>

          <table border="2" bgcolor="#000022" cellpadding="10" cellspacing="2" align="center" width="96%">
            <tr bgcolor="#008080">
              <th width="18%"><font color="#ffffff" size="3">Spec Area</font></th>
              <th><font color="#ffffff" size="3">1994 Technical Breakthrough</font></th>
            </tr>
            ${yearData.specs.map(s => `
              <tr>
                <td bgcolor="#001a33"><font color="#00ffff" size="3"><b>${escapeHTML(s.category)}</b></font></td>
                <td><font color="#ffff00" size="3">${escapeHTML(s.item)}</font></td>
              </tr>
            `).join('')}
          </table>

          <table border="1" bgcolor="#000000" cellpadding="10" align="center" width="96%" style="margin-top: 14px;">
            <tr>
              <td>
                <font color="#ff00ff" size="3"><b>1994 Design Paradigm (${escapeHTML(yearData.designParadigm)}):</b></font><br>
                <font color="#ffffff" size="2">${escapeHTML(yearData.prevailingTech)}</font><br><br>
                <font color="#00ff00" size="3"><b>Cultural Context:</b></font><br>
                <font color="#ffffff" size="2">${escapeHTML(yearData.culturalContext)} <b>Notable 1994 Sites:</b> ${escapeHTML(yearData.eraSites)}.</font>
              </td>
            </tr>
          </table>
        </div>

        <center style="margin-top: 14px;">
          <button onclick="alert('HTTP Cookie Set: Set-Cookie: cart_id=1994_netscape; path=/')" style="background: #c0c0c0; border: 3px outset #ffffff; color: #000; font-weight: bold; font-size: 11pt; cursor: pointer; padding: 6px 16px;">
            🍪 Test 1994 Netscape HTTP Cookie
          </button>
        </center>
      </div>
    `;
  }

  // 1995: JAVASCRIPT & FRAMESET ERA (LiveScript, Multi-frame windows, hit counter, Netscape badge)
  if (y === 1995) {
    return `
      <div style="background: #002200; color: #00ff00; font-family: 'Courier New', monospace; padding: 15px; border: 3px double #00ff00; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px;">
        <div style="border: 2px solid #00ff00; padding: 10px 14px; background: #001100; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div>
            <b style="color: #ffff00; font-size: 12pt;">[FRAME 1: topNav — &lt;frameset rows="70,*"&gt;]</b><br>
            <span style="font-size: 10pt; color: #aaffaa;">${escapeHTML(yearData.subtitle)}</span>
          </div>
          <div>
            <a href="#" style="color: #00ffff; font-size: 10.5pt;" onclick="alert('JavaScript 1.0 (Mocha/LiveScript): Created by Brendan Eich in 10 days in May 1995!'); return false;">[Run JS 1.0 alert()]</a>
          </div>
        </div>

        <div style="display: flex; gap: 10px; flex: 1;">
          <div style="width: 28%; border: 2px solid #00ff00; padding: 12px; background: #001500; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <b style="color: #ffff00; font-size: 11pt;">[FRAME 2: menuFrame]</b>
              <ul style="padding-left: 18px; margin-top: 8px; line-height: 1.7; font-size: 10.5pt;">
                <li><a href="#" style="color: #00ff00;" onclick="return false;">LiveScript / JS 1.0</a></li>
                <li><a href="#" style="color: #00ff00;" onclick="return false;">&lt;frameset&gt; Panels</a></li>
                <li><a href="#" style="color: #00ff00;" onclick="return false;">&lt;table border="1"&gt;</a></li>
                <li><a href="#" style="color: #00ff00;" onclick="return false;">Java &lt;applet&gt;</a></li>
              </ul>
              <hr color="#00ff00" size="1" style="margin: 10px 0;">
              <div style="font-size: 9.5pt; color: #88ff88; line-height: 1.4;">
                <b>1995 Sites:</b><br>${escapeHTML(yearData.eraSites)}
              </div>
            </div>
            <div style="border: 1px dashed #00ff00; padding: 8px; text-align: center; margin-top: 10px;">
              <small style="font-size: 9pt;">CGI ODOMETER COUNTER</small><br>
              <span style="background: #000; color: #ff3333; font-size: 15pt; font-weight: bold; padding: 2px 8px; letter-spacing: 3px; border: 1px inset #00ff00;">004219</span>
            </div>
          </div>

          <div style="width: 72%; border: 2px solid #00ff00; padding: 14px; background: #000900; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <b style="color: #ffff00; font-size: 11pt;">[FRAME 3: mainFrame — Target Window]</b>
              <h3 style="font-size: 13.5pt; margin: 6px 0;">1995 Specifications &amp; Architecture</h3>
              <ul style="line-height: 1.5; font-size: 10.5pt; padding-left: 20px;">
                ${yearData.specs.map(s => `<li><b style="color:#00ffff;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
              <div style="margin-top: 12px; padding: 10px; border: 1px solid #008800; background: #001400; font-size: 10pt; line-height: 1.45; color: #ccffcc;">
                <b>Era Context:</b> ${escapeHTML(yearData.culturalContext)}<br>
                <b>Prevailing Tech:</b> ${escapeHTML(yearData.prevailingTech)}
              </div>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <span style="background: #0000aa; color: #fff; padding: 4px 12px; font-weight: bold; border: 2px outset #fff; font-size: 10pt;">
                🌐 BEST VIEWED WITH NETSCAPE NAVIGATOR 2.0 (800x600)
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 1996: CSS LEVEL 1 & MARQUEE ERA (IE3 marquee, bgsound, inline CSS1, animated GIF under construction)
  if (y === 1996) {
    return `
      <div style="background: #000080; color: #ffffff; font-family: 'Comic Sans MS', Arial, sans-serif; padding: 16px; border: 4px ridge #ffff00; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="background: #ff0000; color: #ffff00; padding: 6px; text-align: center; font-weight: bold; margin-bottom: 12px; font-size: 11.5pt; border: 2px outset #ffff00;">
            <marquee scrollamount="5" behavior="alternate">
              🚧 UNDER CONSTRUCTION! DECEMBER 1996: W3C CSS LEVEL 1 RECOMMENDATION &amp; IE 3.0 VS NETSCAPE 3.0! 🚧
            </marquee>
          </div>

          <div style="font-family: Arial, sans-serif; background: #ffffff; color: #000000; padding: 18px; border: 3px inset #cccccc;">
            <h2 style="color: #000080; font-family: 'Times New Roman', serif; text-decoration: underline; font-size: 18pt; margin: 0 0 6px 0;">
              ${escapeHTML(yearData.title)}
            </h2>
            <p style="font-size: 11pt; color: #333333; margin: 0 0 10px 0;">${escapeHTML(yearData.subtitle)}</p>

            <div style="background: #eeeeee; border: 2px inset #999999; padding: 12px 16px; margin: 10px 0;">
              <ul style="line-height: 1.55; font-size: 10.5pt; padding-left: 20px; margin: 0;">
                ${yearData.specs.map(s => `<li><b>[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 10pt; margin-top: 10px;">
              <div style="background: #fff8dc; border: 1px solid #999; padding: 10px;">
                <b style="color: #800000;">Cultural Context (1996):</b><br>${escapeHTML(yearData.culturalContext)}
              </div>
              <div style="background: #f0f8ff; border: 1px solid #999; padding: 10px;">
                <b style="color: #000080;">Iconic 1996 Sites &amp; Tech:</b><br>${escapeHTML(yearData.eraSites)} — ${escapeHTML(yearData.prevailingTech)}
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 12px; display: flex; justify-content: center; gap: 12px;">
          <button style="background: #c0c0c0; border: 3px outset #ffffff; padding: 8px 16px; font-weight: bold; font-size: 10.5pt; cursor: pointer;" onclick="window.soundManager && window.soundManager.toggleBgMusic(1996);">
            🎵 Toggle &lt;bgsound src="canyon.mid"&gt; Synth
          </button>
          <button style="background: #ffcc00; border: 3px outset #ffffff; padding: 8px 16px; font-weight: bold; font-size: 10.5pt; cursor: pointer;" onmouseover="this.style.background='#00ff00'" onmouseout="this.style.background='#ffcc00'">
            ✨ Netscape 3.0 onMouseOver Rollover
          </button>
        </div>
      </div>
    `;
  }

  // 1997: DHTML & WEBRINGS ERA (Dynamic HTML, flashing colors, absolute layers, guestbooks)
  if (y === 1997) {
    return `
      <div style="background: #110022; color: #00ffff; font-family: Verdana, sans-serif; padding: 18px; border: 5px groove #ff00ff; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="text-align: center; font-size: 20pt; font-weight: bold; color: #ff00ff; text-shadow: 0 0 12px #ff00ff;">
            ⚡ 1997: HTML 4.0, ECMASCRIPT 1 &amp; DHTML WARS ⚡
          </div>
          <p style="text-align: center; color: #ffff00; font-size: 10.5pt; margin: 4px 0 12px 0;">${escapeHTML(yearData.subtitle)}</p>

          <div style="background: #220044; border: 2px solid #00ffff; padding: 14px; margin-bottom: 12px;">
            <h3 style="color: #00ff00; font-size: 12.5pt; margin: 0 0 8px 0;">1997 Specifications &amp; DOM Bifurcation:</h3>
            <ul style="line-height: 1.5; font-size: 10pt; padding-left: 20px; margin: 0;">
              ${yearData.specs.map(s => `<li><b style="color:#ffff00;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>
          </div>

          <div style="background: #1a0033; border: 1px dashed #00ff00; padding: 10px 14px; font-size: 9.5pt; color: #ffffff; line-height: 1.45;">
            <b style="color: #00ff00;">GeoCities Homesteads &amp; Browser Wars:</b> ${escapeHTML(yearData.culturalContext)}<br>
            <b style="color: #ff00ff;">Prevailing Tech:</b> ${escapeHTML(yearData.prevailingTech)}
          </div>
        </div>

        <div>
          <div style="border: 2px dashed #ff00ff; background: #000000; padding: 10px; text-align: center; margin-top: 10px;">
            <b style="color: #ffff00; font-size: 11pt;">🔗 SiliconValley GeoCities WebRing (Site #42 of 189)</b><br>
            <small style="font-size: 9.5pt;">[ <a href="#" style="color: #00ffff;" onclick="alert('WebRing: Navigating to Previous Homestead...'); return false;">&lt;&lt; Prev Site</a> |
            <a href="#" style="color: #00ffff;" onclick="alert('WebRing: Jumping to Random Homestead!'); return false;">Random</a> |
            <a href="#" style="color: #00ffff;" onclick="alert('WebRing: Navigating to Next Homestead...'); return false;">Next Site &gt;&gt;</a> ]</small>
          </div>

          <div style="margin-top: 10px; background: #330066; padding: 10px 14px; border: 1px solid #ff00ff; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <b style="color: #ffffff; font-size: 10.5pt;">✍️ Sign My 1997 Guestbook:</b>
            <div>
              <input type="text" placeholder="homesteader@geocities.com" style="background: #000; color: #00ff00; border: 1px solid #00ff00; padding: 5px 8px; font-size: 10pt;" />
              <button style="background: #ff00ff; color: #fff; border: 2px outset #fff; font-weight: bold; cursor: pointer; padding: 5px 12px; font-size: 10pt;" onclick="alert('mailto: guestbook entry submitted!')">Sign Guestbook</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 1998: TABLE SLICES & SPACER GIFS ERA (Photoshop nested tables, pixel.gif, CSS2, Google launched)
  if (y === 1998) {
    return `
      <div style="background: #cccccc; color: #000000; font-family: Verdana, Geneva, Arial, sans-serif; padding: 10px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" bgcolor="#003366" style="flex: 1;">
          <tr>
            <td width="175" bgcolor="#001a33" style="color: #ffffff; padding: 14px; font-size: 10pt; vertical-align: top;">
              <b style="color: #ffcc00;">[IMAGEREADY SLICES]</b><br><br>
              <div style="background:#003366; padding:5px; margin-bottom:4px; border:1px outset #6699cc;">&raquo; slice_01_nav.gif</div>
              <div style="background:#003366; padding:5px; margin-bottom:4px; border:1px outset #6699cc;">&raquo; slice_02_css2.gif</div>
              <div style="background:#003366; padding:5px; margin-bottom:4px; border:1px outset #6699cc;">&raquo; slice_03_dom1.gif</div>
              <div style="background:#003366; padding:5px; margin-bottom:12px; border:1px outset #6699cc;">&raquo; spacer.gif (1x1)</div>
              <div style="font-size: 9pt; color: #99ccff; line-height: 1.4; border-top: 1px solid #004488; padding-top: 8px;">
                <b>1998 Era Sites:</b><br>${escapeHTML(yearData.eraSites)}
              </div>
            </td>
            <td width="10" bgcolor="#999999" title="10px spacer.gif column"><div style="width: 10px; height: 1px;"></div></td>
            <td bgcolor="#ffffff" style="padding: 18px; border: 2px inset #999999; vertical-align: top;">
              <h2 style="color: #003366; margin: 0 0 4px 0; font-size: 16pt;">${escapeHTML(yearData.title)}</h2>
              <p style="font-size: 10.5pt; color: #444; margin: 0 0 12px 0;">${escapeHTML(yearData.subtitle)}</p>

              <table border="1" cellpadding="6" cellspacing="0" bordercolor="#003366" width="100%" style="font-size: 10pt;">
                <tr bgcolor="#003366">
                  <th width="18%" align="left"><font color="#ffffff">Category</font></th>
                  <th align="left"><font color="#ffffff">1998 Specification &amp; Design Milestone</font></th>
                </tr>
                ${yearData.specs.map(s => `
                  <tr>
                    <td bgcolor="#eef4fa"><b>${escapeHTML(s.category)}</b></td>
                    <td>${escapeHTML(s.item)}</td>
                  </tr>
                `).join('')}
              </table>

              <div style="margin-top: 12px; background: #f5f5f5; border: 1px solid #cccccc; padding: 10px; font-size: 9.5pt; line-height: 1.45;">
                <b>Design Paradigm (${escapeHTML(yearData.designParadigm)}):</b> ${escapeHTML(yearData.prevailingTech)}<br>
                <b>Cultural Context:</b> ${escapeHTML(yearData.culturalContext)}
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;
  }

  // 1999: HTML 4.01 & BIRTH OF AJAX ERA (Matrix green/black, ActiveX XMLHTTP, Y2K panic)
  if (y === 1999) {
    return `
      <div style="background: #000000; color: #00ff66; font-family: 'Courier New', monospace; padding: 20px; border: 3px solid #00ff66; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="border-bottom: 2px solid #00ff66; padding-bottom: 8px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <b style="font-size: 15pt;">MATRIX TERMINAL :: 1999 (HTML 4.01, ES3 &amp; XMLHTTP)</b>
            <span style="background: #ff0033; color: #ffffff; padding: 2px 8px; font-weight: bold; font-size: 10pt;">Y2K BUG STATUS: READY</span>
          </div>

          <p style="font-size: 11pt; color: #aaffcc; margin: 0 0 12px 0;">${escapeHTML(yearData.subtitle)}</p>

          <div style="background: #001100; border: 1px dashed #00ff66; padding: 14px; margin-bottom: 12px;">
            <h4 style="color: #ffffff; margin: 0 0 8px 0; font-size: 12pt;">1999 Specifications &amp; Portal Era Milestones:</h4>
            <ul style="line-height: 1.55; font-size: 10.5pt; padding-left: 20px; margin: 0;">
              ${yearData.specs.map(s => `<li><b style="color:#ffff00;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 9.5pt; color: #88ffaa;">
            <div style="border: 1px solid #005522; padding: 10px; background: #000a00;">
              <b style="color:#fff;">Prevailing Tech:</b><br>${escapeHTML(yearData.prevailingTech)}
            </div>
            <div style="border: 1px solid #005522; padding: 10px; background: #000a00;">
              <b style="color:#fff;">1999 Cultural Context:</b><br>${escapeHTML(yearData.culturalContext)}
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 12px;">
          <button style="background: #00ff66; color: #000; border: none; padding: 10px 20px; font-size: 11pt; font-weight: bold; cursor: pointer; font-family: monospace;" onclick="alert('ActiveXObject(&quot;Microsoft.XMLHTTP&quot;) dispatched in IE 5.0! Asynchronous background fetch complete.')">
            ⚡ Execute 1999 IE5 ActiveXObject("Microsoft.XMLHTTP")
          </button>
        </div>
      </div>
    `;
  }

  // 2000: XHTML 1.0 & FLASH 5 ERA (Strict XML rules, lowercase tags, W3C Validator badge)
  if (y === 2000) {
    return `
      <div style="background: #efefef; color: #222222; font-family: 'Trebuchet MS', Tahoma, sans-serif; padding: 20px; border: 1px solid #cccccc; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="background: #2b3a4a; color: #ffffff; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <b style="font-size: 15pt;">${escapeHTML(yearData.title)}</b><br>
              <span style="font-size: 10pt; color: #cbd5e1;">${escapeHTML(yearData.subtitle)}</span>
            </div>
            <span style="background: #fc0; color: #000; padding: 4px 10px; font-size: 9.5pt; font-weight: bold; border: 1px solid #000;">
              ✓ W3C Valid XHTML 1.0 Strict
            </span>
          </div>

          <div style="background: #ffffff; border: 1px solid #cccccc; padding: 14px 18px; margin: 12px 0;">
            <ul style="line-height: 1.55; font-size: 10.5pt; padding-left: 20px; margin: 0;">
              ${yearData.specs.map(s => `<li><b style="color:#0055aa;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 10pt;">
            <div style="background: #fff; border: 1px solid #ccc; padding: 10px;">
              <b>Design Paradigm (${escapeHTML(yearData.designParadigm)}):</b><br>${escapeHTML(yearData.prevailingTech)}
            </div>
            <div style="background: #fff; border: 1px solid #ccc; padding: 10px;">
              <b>Dot-Com Peak &amp; Crash (2000):</b><br>${escapeHTML(yearData.culturalContext)}
            </div>
          </div>
        </div>

        <div style="border: 2px solid #0055aa; background: #111827; color: #38bdf8; padding: 12px; text-align: center; margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 10pt;"><b>[Macromedia Flash 5.0 Movie — ActionScript 1.0 Intro]</b> Loading 482 KB...</span>
          <button onclick="alert('Skipped 2000 Flash 5 Intro -> Entering HTML site')" style="background: transparent; color: #fff; border: 1px solid #38bdf8; padding: 4px 10px; font-size: 9.5pt; cursor: pointer;">[SKIP INTRO &raquo;]</button>
        </div>
      </div>
    `;
  }

  // 2001: IE6 & LUNA SILVER ERA (Windows XP Luna style, IE box model quirks, PNG filters)
  if (y === 2001) {
    return `
      <div style="background: #ece9d8; color: #000000; font-family: Tahoma, Verdana, sans-serif; padding: 18px; border: 3px solid #0055ea; border-radius: 6px 6px 0 0; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="background: linear-gradient(to right, #0058ee, #3a93ff, #0058ee); color: #ffffff; padding: 7px 14px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; margin: -18px -18px 14px -18px; border-bottom: 2px solid #003399;">
          <span>🌐 Microsoft Internet Explorer 6.0 — [Windows XP Luna Blue]</span>
          <span style="font-family: monospace;">[_] [□] [X]</span>
        </div>

        <div style="background: #ffffff; border: 2px inset #d4d0c8; padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2 style="color: #003399; margin: 0 0 4px 0; font-size: 16pt;">${escapeHTML(yearData.title)}</h2>
            <p style="font-size: 10.5pt; color: #444; margin: 0 0 12px 0;">${escapeHTML(yearData.subtitle)}</p>

            <div style="background: #f7f6f2; border: 1px solid #d4d0c8; padding: 12px 16px; margin-bottom: 12px;">
              <ul style="line-height: 1.55; font-size: 10.5pt; padding-left: 20px; margin: 0;">
                ${yearData.specs.map(s => `<li><b style="color:#003399;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 9.5pt;">
              <div style="background: #eef4ff; border: 1px solid #7f9db9; padding: 10px;">
                <b>IE6 Quirks vs Standards Mode:</b><br>${escapeHTML(yearData.prevailingTech)}
              </div>
              <div style="background: #fff9e6; border: 1px solid #7f9db9; padding: 10px;">
                <b>2001 Cultural Context:</b><br>${escapeHTML(yearData.culturalContext)}
              </div>
            </div>
          </div>

          <div style="border: 1px solid #7f9db9; background: #ece9d8; padding: 8px 12px; font-size: 9.5pt; display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <code>voice-family: "\"}\""; voice-family: inherit; /* Tantek Box Model Hack */</code>
            <span style="color: #003399; font-weight: bold;">🔒 Internet Zone</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2002: CSS ZEN GARDEN ERA (Tableless CSS, floated sidebars, external CSS separation)
  if (y === 2002) {
    return `
      <div style="background: #f4f1ea; color: #4a4036; font-family: Georgia, serif; padding: 22px; border-left: 8px solid #8c7b6c; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="border-bottom: 2px solid #8c7b6c; padding-bottom: 10px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
            <div>
              <h1 style="font-weight: normal; font-style: italic; color: #3a3028; margin: 0; font-size: 20pt;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 4px 0 0 0; font-size: 11pt; color: #7a6b5d;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <span style="font-family: Verdana, sans-serif; font-size: 9pt; background: #8c7b6c; color: #fff; padding: 4px 10px;">100% TABLELESS FLOAT LAYOUT</span>
          </div>

          <div style="display: flex; gap: 20px;">
            <div style="width: 32%; background: #e8e3d9; padding: 14px; border: 1px solid #d5cbb8; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <h3 style="font-size: 12pt; color: #3a3028; border-bottom: 1px solid #aaa; margin: 0 0 8px 0; padding-bottom: 4px;">Faux Column Sidebar</h3>
                <p style="font-size: 10pt; line-height: 1.5; margin: 0 0 10px 0;">${escapeHTML(yearData.prevailingTech)}</p>
              </div>
              <div style="font-size: 9.5pt; border-top: 1px dotted #8c7b6c; padding-top: 8px; color: #5a4e42;">
                <b>2002 Pioneers:</b><br>${escapeHTML(yearData.eraSites)}
              </div>
            </div>

            <div style="width: 68%;">
              <h2 style="font-size: 14pt; color: #3a3028; margin: 0 0 8px 0;">2002 Web Standards &amp; CSS Milestones</h2>
              <ul style="line-height: 1.6; font-size: 10.5pt; padding-left: 20px; margin: 0 0 12px 0;">
                ${yearData.specs.map(s => `<li><b>[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
              <div style="background: #ebe6dc; border-left: 4px solid #6b4c3b; padding: 10px 14px; font-size: 10pt; line-height: 1.45;">
                <b>Historical Impact:</b> ${escapeHTML(yearData.culturalContext)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2003: MYSPACE CUSTOM CSS ERA (Embedded styles, custom cursors, Top 8 friends, glitter)
  if (y === 2003) {
    return `
      <div style="background: #08080c; color: #ffffff; font-family: Verdana, Arial, sans-serif; padding: 18px; border: 3px dashed #ff007f; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="background: #14141f; padding: 12px 16px; border: 1px solid #ff007f; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div>
              <h2 style="color: #ff007f; margin: 0; font-size: 16pt;">⚡ ${escapeHTML(yearData.title)} ⚡</h2>
              <p style="color: #00ffff; font-size: 10pt; margin: 4px 0 0 0;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <span style="background: #ff007f; color: #fff; font-size: 9pt; font-weight: bold; padding: 4px 10px;">&lt;style&gt; INJECTION ACTIVE</span>
          </div>

          <div style="display: flex; gap: 16px;">
            <div style="width: 34%; background: #14141f; padding: 12px; border: 1px solid #333; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <b style="color: #ffff00; font-size: 11pt;">Tom's Top 8 Space (2003):</b>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px;">
                  <div style="background: #222; border: 1px solid #ff007f; padding: 6px; text-align: center; font-size: 9.5pt;">👤 Tom (#1)</div>
                  <div style="background: #222; border: 1px solid #00ffff; padding: 6px; text-align: center; font-size: 9.5pt;">🎨 Dave Shea</div>
                  <div style="background: #222; border: 1px solid #00ffff; padding: 6px; text-align: center; font-size: 9.5pt;">📝 Mullenweg</div>
                  <div style="background: #222; border: 1px solid #00ffff; padding: 6px; text-align: center; font-size: 9.5pt;">🧭 Safari 1.0</div>
                </div>
              </div>
              <div style="font-size: 9.5pt; color: #cbd5e1; margin-top: 10px; line-height: 1.4; border-top: 1px dashed #444; padding-top: 8px;">
                <b style="color:#ff007f;">Cultural Impact:</b><br>${escapeHTML(yearData.culturalContext)}
              </div>
            </div>

            <div style="width: 66%; background: #14141f; padding: 14px; border: 1px solid #333;">
              <b style="color: #00ffff; font-size: 11.5pt;">2003 Specifications &amp; Profile CSS Hacks:</b>
              <ul style="font-size: 10pt; padding-left: 18px; line-height: 1.55; margin: 8px 0 12px 0;">
                ${yearData.specs.map(s => `<li><b style="color:#ff007f;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
              <div style="background: #0d0d14; border: 1px solid #2e2e42; padding: 10px; font-size: 9.5pt; color: #a5b4fc;">
                <b>Prevailing Tech (${escapeHTML(yearData.designParadigm)}):</b> ${escapeHTML(yearData.prevailingTech)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2004: WEB 2.0 ERA (Vibrant aqua blue gradients, glossy buttons, RSS feeds, BETA starburst)
  if (y === 2004) {
    return `
      <div style="background: linear-gradient(to bottom, #e4f3fd, #c1e4f9); color: #1a3c54; font-family: 'Lucida Grande', 'Helvetica Neue', Arial, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #9bc9e8; padding-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div>
              <h1 style="margin: 0; color: #0055aa; text-shadow: 0 1px 1px #fff; font-size: 19pt;">
                ${escapeHTML(yearData.title)}
                <span style="background: linear-gradient(to bottom, #ffaa00, #ff6600); color: #fff; font-size: 9.5pt; padding: 3px 10px; border-radius: 12px; vertical-align: middle; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">BETA</span>
              </h1>
              <p style="margin: 4px 0 0 0; font-size: 10.5pt; color: #2b5470;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <button onclick="alert('RSS 2.0 XML Feed Subscribed!')" style="background: linear-gradient(to bottom, #ff9933, #dd5500); color: #fff; border: 1px solid #993300; border-radius: 14px; padding: 6px 16px; font-weight: bold; font-size: 10pt; cursor: pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);">
              🟠 XML / RSS 2.0
            </button>
          </div>

          <div style="background: #ffffff; padding: 16px 20px; border-radius: 10px; margin-top: 14px; box-shadow: 0 3px 8px rgba(0,50,100,0.08); border: 1px solid #b8dcf2;">
            <ul style="line-height: 1.6; font-size: 10.5pt; padding-left: 20px; margin: 0 0 12px 0;">
              ${yearData.specs.map(s => `<li><b style="color:#0066cc;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 9.5pt; background: #f4faff; padding: 10px; border-radius: 6px; border: 1px solid #d5ecfa;">
              <div><b>Web 2.0 Aesthetic:</b> ${escapeHTML(yearData.prevailingTech)}</div>
              <div><b>2004 Cultural Shift:</b> ${escapeHTML(yearData.culturalContext)}</div>
            </div>

            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dotted #cccccc; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; font-size: 9.5pt; color: #555;">
              <span><b>Landmark 2004 Launches:</b> ${escapeHTML(yearData.eraSites)}</span>
              <span style="display: flex; gap: 5px;">
                <button onclick="alert('Digg this story!')" style="background: #1b5891; color: white; border: none; padding: 2px 8px; font-size: 9pt; cursor: pointer; border-radius: 3px;">digg it</button>
                <button onclick="alert('Saved to del.icio.us social bookmarks')" style="background: #3274d0; color: white; border: none; padding: 2px 8px; font-size: 9pt; cursor: pointer; border-radius: 3px;">del.icio.us</button>
                <button onclick="alert('Thefacebook Harvard network')" style="background: #3b5998; color: white; border: none; padding: 2px 8px; font-size: 9pt; cursor: pointer; border-radius: 3px;">[thefacebook]</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2005: AJAX REVOLUTION ERA (Jesse James Garrett paper, Prototype.js, Yellow Fade Technique)
  if (y === 2005) {
    return `
      <div style="background: #f5f7fa; color: #333333; font-family: 'Lucida Grande', Arial, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="background: #2b5797; color: #ffffff; padding: 12px 18px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div>
              <h2 style="margin: 0; font-size: 16.5pt;">${escapeHTML(yearData.title)}</h2>
              <span style="font-size: 10pt; color: #dbeafe;">${escapeHTML(yearData.subtitle)}</span>
            </div>
            <span style="font-size: 9.5pt; background: #1e395b; padding: 5px 10px; border-radius: 4px; font-family: monospace;">new Ajax.Updater()</span>
          </div>

          <div id="ajax-live-panel-${y}" style="background: #ffffff; border: 1px solid #d1d5db; padding: 16px 20px; margin: 14px 0; border-radius: 6px; transition: background-color 0.8s ease;">
            <ul style="line-height: 1.6; font-size: 10.5pt; padding-left: 20px; margin: 0 0 12px 0;">
              ${yearData.specs.map(s => `<li><b style="color:#2b5797;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 9.5pt; background: #f8fafc; padding: 10px; border: 1px solid #e2e8f0; border-radius: 4px;">
              <div><b>Prevailing RIA Stack:</b> ${escapeHTML(yearData.prevailingTech)}</div>
              <div><b>2005 Milestones (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}</div>
            </div>
          </div>
        </div>

        <button style="background: #2b5797; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; font-size: 11pt; font-weight: bold; cursor: pointer; align-self: flex-start;" onclick="
          const p = document.getElementById('ajax-live-panel-${y}');
          p.style.backgroundColor = '#ffff99';
          setTimeout(() => p.style.backgroundColor = '#ffffff', 900);
        ">
          ⚡ Trigger 37signals Yellow Fade Technique (Ajax DOM Update)
        </button>
      </div>
    `;
  }

  // 2006: JQUERY 1.0 & TWITTER LAUNCH ERA (jQuery fadeIn, YUI, JSON format)
  if (y === 2006) {
    return `
      <div style="background: #f0f4f8; color: #102a43; font-family: 'Segoe UI', Tahoma, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div>
              <h2 style="color: #0b69a3; margin: 0; font-size: 18pt;">${escapeHTML(yearData.title)}</h2>
              <p style="margin: 3px 0 0 0; font-size: 10.5pt; color: #486581;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <span style="background: #0b69a3; color: #fff; font-size: 10pt; padding: 5px 12px; border-radius: 16px; font-family: monospace; font-weight: bold;">$(document).ready()</span>
          </div>

          <div style="background: #ffffff; padding: 16px 20px; border-radius: 6px; border: 1px solid #bcccdc;">
            <ul style="line-height: 1.6; font-size: 10.5pt; padding-left: 20px; margin: 0 0 12px 0;">
              ${yearData.specs.map(s => `<li><b style="color:#0b69a3;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 9.5pt; background: #f0f7ff; padding: 10px; border-radius: 4px;">
              <div><b>jQuery &amp; Firebug Era:</b> ${escapeHTML(yearData.prevailingTech)}</div>
              <div><b>2006 Context (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}</div>
            </div>
          </div>
        </div>

        <div style="margin-top: 12px; background: #e0f2fe; padding: 10px 14px; border-radius: 6px; border: 1px solid #7dd3fc; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 10pt;"><b>🐦 twttr (March 2006 — 140-char SMS limit):</b> "just setting up my twttr &amp; chaining $('#box').slideDown()"</span>
          <code style="background: #102a43; color: #7dd3fc; padding: 4px 8px; border-radius: 4px; font-size: 9.5pt;">console.log("Firebug 1.0 Ready")</code>
        </div>
      </div>
    `;
  }

  // 2007: IPHONE & MOBILE SAFARI ERA (Viewport meta tag, touch events, dark glass headers)
  if (y === 2007) {
    return `
      <div style="background: #111115; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 18px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: grid; grid-template-columns: minmax(260px, 360px) 1fr; gap: 20px; align-items: stretch; flex: 1;">
          <!-- Original 2007 iPhone Frame -->
          <div style="background: #000; padding: 14px; border-radius: 26px; border: 3px solid #555; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 25px rgba(0,0,0,0.6);">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 9pt; color: #ccc; margin-bottom: 8px; padding: 0 4px;">
                <span>AT&amp;T EDGE</span>
                <span>9:41 AM</span>
                <span>🔋 100%</span>
              </div>
              <div style="background: linear-gradient(to bottom, #6d84a2, #364f70 50%, #273e5e 51%, #2c4566); padding: 8px 10px; border-radius: 6px; text-align: center; font-size: 11pt; font-weight: bold; margin-bottom: 10px; text-shadow: 0 -1px 0 rgba(0,0,0,0.5);">
                Mobile Safari — Viewport 320px
              </div>
              <div style="background: #c5ccd4; padding: 10px; border-radius: 8px; color: #000;">
                <div style="background: #fff; border-radius: 8px; border: 1px solid #999; overflow: hidden; font-size: 9.5pt;">
                  <div style="padding: 8px 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">meta name="viewport" &raquo;</div>
                  <div style="padding: 8px 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Multi-Touch Events &raquo;</div>
                  <div style="padding: 8px 10px; font-weight: bold;">No Adobe Flash Plugin &raquo;</div>
                </div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <span style="display: inline-block; width: 34px; height: 34px; border-radius: 50%; border: 2px solid #555; background: #111;"></span>
            </div>
          </div>

          <!-- 2007 Specs & Context -->
          <div style="background: #1c1c22; border: 1px solid #2e2e38; border-radius: 12px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h2 style="margin: 0 0 4px 0; color: #60a5fa; font-size: 17pt;">${escapeHTML(yearData.title)}</h2>
              <p style="margin: 0 0 12px 0; color: #9ca3af; font-size: 10.5pt;">${escapeHTML(yearData.subtitle)}</p>
              <ul style="font-size: 10.5pt; line-height: 1.55; padding-left: 20px; margin: 0 0 12px 0;">
                ${yearData.specs.map(s => `<li><b style="color:#60a5fa;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
            </div>
            <div style="background: #121217; border: 1px solid #27272a; padding: 12px; border-radius: 8px; font-size: 9.5pt; line-height: 1.45; color: #d4d4d8;">
              <b style="color:#fff;">Prevailing Tech:</b> ${escapeHTML(yearData.prevailingTech)}<br>
              <b style="color:#fff;">Cultural Context (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2008: CHROME V8 & HTML5 CANVAS ERA (Multiprocess browser tabs, canvas 2D animation, V8 benchmark)
  if (y === 2008) {
    return `
      <div style="background: #dee1e6; color: #202124; font-family: Arial, sans-serif; padding: 14px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="display: flex; gap: 6px;">
          <div style="background: #ffffff; padding: 8px 18px; border-radius: 8px 8px 0 0; font-size: 10.5pt; font-weight: bold; border-top: 3px solid #4285f4;">
            🌐 Google Chrome 1.0 (V8 JIT Engine)
          </div>
          <div style="background: #cacdd1; padding: 8px 14px; border-radius: 8px 8px 0 0; font-size: 10pt; color: #5f6368;">
            W3C HTML5 First Public Working Draft
          </div>
        </div>

        <div style="background: #ffffff; padding: 20px; border-radius: 0 8px 8px 8px; border: 1px solid #bbb; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2 style="color: #1a73e8; margin: 0 0 4px 0; font-size: 17pt;">${escapeHTML(yearData.title)}</h2>
            <p style="margin: 0 0 12px 0; font-size: 10.5pt; color: #5f6368;">${escapeHTML(yearData.subtitle)}</p>

            <ul style="line-height: 1.55; font-size: 10.5pt; padding-left: 20px; margin: 0 0 12px 0;">
              ${yearData.specs.map(s => `<li><b style="color:#1a73e8;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 9.5pt;">
              <div style="background: #f8f9fa; border: 1px solid #dadce0; padding: 10px; border-radius: 6px;">
                <b>2008 Architecture:</b> ${escapeHTML(yearData.prevailingTech)}
              </div>
              <div style="background: #f8f9fa; border: 1px solid #dadce0; padding: 10px; border-radius: 6px;">
                <b>GitHub, Stack Overflow &amp; Chrome:</b> ${escapeHTML(yearData.culturalContext)}
              </div>
            </div>
          </div>

          <div style="background: #f1f3f4; padding: 10px 16px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; margin-top: 10px; font-size: 10pt;">
            <span><b>Acid3 Compliance Score:</b> 100/100 | <b>querySelectorAll()</b> &amp; <b>localStorage</b> active</span>
            <span style="font-weight: bold; color: #0f9d58;">V8 Speedup: 10x Faster JS</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2009: ES5 & CSS3 MODULES ERA (border-radius, box-shadow, linear-gradient, Node.js)
  if (y === 2009) {
    return `
      <div style="background: linear-gradient(135deg, #2b3252 0%, #4b3869 100%); color: #ffffff; font-family: 'Helvetica Neue', Arial, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <div>
              <h2 style="margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.4); font-size: 18pt;">${escapeHTML(yearData.title)}</h2>
              <p style="font-size: 10.5pt; color: #e2e8f0; margin: 4px 0 0 0;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <span style="background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.3); padding: 5px 12px; border-radius: 8px; font-family: monospace; font-size: 9.5pt;">-webkit- / -moz- / "use strict"</span>
          </div>

          <div style="background: rgba(255, 255, 255, 0.12); padding: 16px 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.25); box-shadow: 0 8px 20px rgba(0,0,0,0.25); margin-bottom: 12px;">
            <ul style="line-height: 1.55; font-size: 10.5pt; padding-left: 20px; margin: 0;">
              ${yearData.specs.map(s => `<li><b style="color:#fde047;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 9.5pt;">
            <div style="background: rgba(0,0,0,0.25); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15);">
              <b style="color:#fde047;">Vendor-Prefixed CSS3 &amp; WOFF:</b><br>${escapeHTML(yearData.prevailingTech)}
            </div>
            <div style="background: rgba(0,0,0,0.25); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15);">
              <b style="color:#fde047;">Node.js &amp; Web Fonts (${escapeHTML(yearData.eraSites)}):</b><br>${escapeHTML(yearData.culturalContext)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2010: RESPONSIVE WEB DESIGN & HTML5 ERA (Ethan Marcotte, media queries, letterpress, HTML5 tags, video)
  if (y === 2010) {
    return `
      <div style="background-color: #e5e5e5; background-image: radial-gradient(#cccccc 1px, transparent 1px); background-size: 10px 10px; color: #333333; font-family: 'Helvetica Neue', Arial, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <header style="background: linear-gradient(to bottom, #f5f5f5, #cfcfcf); border: 1px solid #b5b5b5; border-radius: 8px 8px 0 0; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div>
              <h1 style="margin: 0; font-family: Georgia, serif; font-size: 19pt; color: #333; text-shadow: 0 1px 0 #ffffff;">
                ${escapeHTML(yearData.title)}
              </h1>
              <p style="color: #555; font-style: italic; margin: 3px 0 0 0; font-size: 10pt; text-shadow: 0 1px 0 #ffffff;">
                ${escapeHTML(yearData.subtitle)}
              </p>
            </div>
            <span style="background: #333; color: #fff; font-size: 9pt; padding: 4px 10px; border-radius: 4px;">@media (max-width: 768px)</span>
          </header>

          <div style="display: flex; gap: 16px; margin-top: 14px;">
            <article style="width: 65%; background: #ffffff; border: 1px solid #ccc; padding: 16px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
              <ul style="line-height: 1.55; font-size: 10.5pt; color: #333; padding-left: 20px; margin: 0;">
                ${yearData.specs.map(s => `<li><b style="color: #b94a48;">[${escapeHTML(s.category)}]</b> ${escapeHTML(s.item)}</li>`).join('')}
              </ul>
            </article>

            <aside style="width: 35%; background: #fafafa; border: 1px solid #ccc; padding: 14px; border-radius: 6px; display: flex; flex-direction: column; justify-content: space-between; font-size: 9.5pt;">
              <div>
                <b style="color: #b94a48;">2010 Design Aesthetic:</b>
                <p style="margin: 4px 0 10px 0; line-height: 1.45;">${escapeHTML(yearData.prevailingTech)}</p>
                <b style="color: #3a87ad;">Cultural Shift:</b>
                <p style="margin: 4px 0 0 0; line-height: 1.45;">${escapeHTML(yearData.culturalContext)}</p>
              </div>
              <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed #ccc; color: #555;">
                <b>2010 Debuts:</b> ${escapeHTML(yearData.eraSites)}
              </div>
            </aside>
          </div>
        </div>
      </div>
    `;
  }

  // 2011: BOOTSTRAP 1.0 & CSS3 CLEAN ERA (Twitter Bootstrap, pill buttons, web fonts, clean gradients, zebra tables)
  if (y === 2011) {
    return `
      <div style="background: #ffffff; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 18px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="background: linear-gradient(to bottom, #333333, #222222); color: #bfbfbf; padding: 10px 18px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.25);">
          <b style="color: #ffffff; font-size: 13pt;">Twitter Bootstrap 1.0 &amp; WebSockets RFC 6455 (2011)</b>
          <span style="font-size: 9.5pt; color: #fff; background: #0064cd; padding: 3px 8px; border-radius: 3px;">12-Col Grid + @keyframes</span>
        </div>

        <div style="display: flex; gap: 16px; flex: 1;">
          <div style="width: 30%; background: #f5f5f5; border: 1px solid #e5e5e5; border-radius: 4px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; font-size: 9.5pt;">
            <div>
              <b style="color: #404040; font-size: 10.5pt;">2011 Architecture</b>
              <p style="line-height: 1.45; color: #555; margin: 6px 0 12px 0;">${escapeHTML(yearData.prevailingTech)}</p>
              <b style="color: #404040; font-size: 10.5pt;">Cultural Context</b>
              <p style="line-height: 1.45; color: #555; margin: 6px 0 0 0;">${escapeHTML(yearData.culturalContext)}</p>
            </div>
            <div style="border-top: 1px solid #ddd; padding-top: 8px; color: #0069d6;">
              <b>2011 Sites:</b> ${escapeHTML(yearData.eraSites)}
            </div>
          </div>

          <div style="width: 70%; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="background-color: #f5f5f5; padding: 16px 20px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #eee;">
                <h2 style="margin: 0 0 4px 0; font-size: 17pt; color: #404040;">${escapeHTML(yearData.title)}</h2>
                <p style="font-size: 10.5pt; color: #666; margin: 0;">${escapeHTML(yearData.subtitle)}</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; font-size: 10pt;">
                <thead>
                  <tr>
                    <th style="border-bottom: 2px solid #ddd; padding: 7px; text-align: left; background: #f9f9f9;">Category</th>
                    <th style="border-bottom: 2px solid #ddd; padding: 7px; text-align: left; background: #f9f9f9;">2011 Specification &amp; Tooling Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  ${yearData.specs.map((s, i) => `
                    <tr style="background: ${i % 2 === 0 ? '#ffffff' : '#f9f9f9'};">
                      <td style="border-top: 1px solid #ddd; padding: 7px; color: #0069d6; font-weight: bold;">${escapeHTML(s.category)}</td>
                      <td style="border-top: 1px solid #ddd; padding: 7px;">${escapeHTML(s.item)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2012: FULL-BLEED HERO PHOTOGRAPHY, SLAB SERIFS, PARALLAX & FLEXBOX CR
  if (y === 2012) {
    return `
      <div style="background: linear-gradient(rgba(15, 23, 42, 0.82), rgba(15, 23, 42, 0.94)); color: #f4efe6; font-family: Georgia, 'Rockwell', serif; padding: 24px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed rgba(255,255,255,0.25); padding-bottom: 12px; margin-bottom: 16px; flex-wrap: wrap;">
            <div>
              <h1 style="font-size: 18pt; font-weight: 900; color: #ffffff; margin: 0; letter-spacing: 0.5px;">
                ${escapeHTML(yearData.title)}
              </h1>
              <p style="font-family: sans-serif; font-size: 10pt; color: #cbd5e1; margin: 4px 0 0 0;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <span style="background: #d9534f; color: #fff; padding: 5px 12px; font-family: sans-serif; font-size: 9.5pt; font-weight: bold; border-radius: 4px;">
              RETINA 2X + FLEXBOX CR
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin-bottom: 14px; font-family: sans-serif;">
            ${yearData.specs.map(s => `
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.16); border-radius: 6px; padding: 12px;">
                <b style="color: #5bc0de; font-size: 9.5pt; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHTML(s.category)}</b>
                <p style="margin: 6px 0 0 0; font-size: 10pt; color: #f4efe6; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; padding: 12px 16px; font-family: sans-serif; font-size: 9.5pt; line-height: 1.45;">
          <b style="color: #f0ad4e;">2012 Scrollytelling &amp; Hero Era (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}<br>
          <b style="color: #5bc0de;">Prevailing Tech:</b> ${escapeHTML(yearData.prevailingTech)}
        </div>
      </div>
    `;
  }

  // 2013: APPLE FLAT DESIGN ERA (iOS 7, React.js, Blink engine)
  if (y === 2013) {
    return `
      <div style="background: #f2f2f7; color: #000000; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="background: #ffffff; border-bottom: 1px solid #d1d1d6; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; margin: -20px -20px 16px -20px;">
            <span style="color: #007aff; font-size: 11pt;">&lt; Skeuomorphism</span>
            <span style="font-weight: 600; font-size: 12pt; color: #000000;">${escapeHTML(yearData.title)}</span>
            <span style="background: #007aff; color: #fff; font-size: 9.5pt; padding: 3px 10px; border-radius: 12px;">React.js 0.3 JSX</span>
          </div>

          <p style="font-weight: 300; font-size: 11pt; color: #3a3a3c; margin: 0 0 12px 0;">${escapeHTML(yearData.subtitle)}</p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map(s => `
              <div style="background: #ffffff; border-radius: 10px; padding: 12px 14px; border-left: 4px solid #007aff; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <b style="color: #007aff; font-size: 9.5pt; font-weight: 600; text-transform: uppercase;">${escapeHTML(s.category)}</b>
                <p style="margin: 5px 0 0 0; font-size: 10pt; color: #1c1c1e; font-weight: 400; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: #ffffff; border-radius: 10px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; border: 1px solid #e5e5ea; font-size: 9.5pt;">
          <div style="max-width: 75%;">
            <b>Flat Design &amp; Virtual DOM (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
          </div>
          <div style="display: flex; gap: 6px; align-items: center;">
            <span style="width: 14px; height: 14px; border-radius: 50%; background: #007aff; display: inline-block;"></span>
            <span style="width: 14px; height: 14px; border-radius: 50%; background: #ff2d55; display: inline-block;"></span>
            <span style="width: 14px; height: 14px; border-radius: 50%; background: #4cd964; display: inline-block;"></span>
            <span style="width: 14px; height: 14px; border-radius: 50%; background: #5856d6; display: inline-block;"></span>
          </div>
        </div>
      </div>
    `;
  }

  // 2014: HTML5 W3C RECOMMENDATION, FLAT 2.0, GHOST BUTTONS & RESPONSIVE <PICTURE>
  if (y === 2014) {
    return `
      <div style="background: linear-gradient(160deg, #1b2735 0%, #090a0f 100%); color: #ffffff; font-family: 'Open Sans', 'Helvetica Neue', sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <!-- 2014 Atmospheric Hero with Hollow Ghost Buttons -->
          <div style="border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.03); padding: 20px; text-align: center; margin-bottom: 16px;">
            <span style="display: inline-block; border: 1px solid #e34f26; color: #ff7b54; font-size: 9pt; letter-spacing: 2px; text-transform: uppercase; padding: 3px 10px; margin-bottom: 8px;">
              OCTOBER 28, 2014 • W3C FINAL RECOMMENDATION
            </span>
            <h1 style="margin: 0 0 6px 0; font-size: 20pt; font-weight: 300; letter-spacing: 1px;">${escapeHTML(yearData.title)}</h1>
            <p style="margin: 0 auto 14px auto; max-width: 720px; font-size: 10.5pt; color: #94a3b8;">${escapeHTML(yearData.subtitle)}</p>

            <!-- Iconic 2014 Ghost Buttons -->
            <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
              <button onclick="document.getElementById('pic-readout-2014').innerText = 'Selected Source: hero-widescreen-2x.webp (min-width: 1024px, 2x Retina)'" style="background: transparent; color: #ffffff; border: 2px solid #ffffff; padding: 8px 20px; font-size: 9.5pt; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer;">
                &lt;picture&gt; Desktop 2x
              </button>
              <button onclick="document.getElementById('pic-readout-2014').innerText = 'Selected Source: hero-mobile-fallback.jpg (max-width: 599px, 1x)'" style="background: transparent; color: #38bdf8; border: 2px solid #38bdf8; padding: 8px 20px; font-size: 9.5pt; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer;">
                &lt;img srcset&gt; Mobile 1x
              </button>
            </div>
            <div id="pic-readout-2014" style="margin-top: 8px; font-family: monospace; font-size: 9.5pt; color: #38bdf8;">
              &lt;picture&gt; Art Direction Active: Click a Ghost Button above to test responsive source selection
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map(s => `
              <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); padding: 12px 14px;">
                <b style="color: #ff7b54; font-size: 9.5pt; letter-spacing: 1px; text-transform: uppercase;">&lt;${escapeHTML(s.category)}&gt;</b>
                <p style="margin: 6px 0 0 0; font-size: 10pt; color: #e2e8f0; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="border-top: 1px solid rgba(255,255,255,0.15); padding-top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; font-size: 9.5pt; color: #94a3b8;">
          <div><b style="color:#fff;">2014 Ghost Button &amp; SVG Trend:</b> ${escapeHTML(yearData.culturalContext)}</div>
          <div><b style="color:#38bdf8;">Sites:</b> ${escapeHTML(yearData.eraSites)}</div>
        </div>
      </div>
    `;
  }

  // 2015: MATERIAL DESIGN 1.0 (QUANTUM PAPER) & ES6 WATERSHED
  if (y === 2015) {
    return `
      <div style="background: #eceff1; color: #263238; font-family: Roboto, 'Segoe UI', sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; position: relative;">
        <div>
          <!-- Material Design Indigo 500 App Bar with Z-Depth-2 -->
          <header style="background: #3f51b5; color: #ffffff; padding: 14px 20px; border-radius: 2px; box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
            <div>
              <h1 style="margin: 0; font-size: 17pt; font-weight: 500;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 3px 0 0 0; font-size: 10pt; color: #c5cae9;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <span style="background: #ff4081; color: #fff; padding: 5px 12px; border-radius: 2px; font-size: 9.5pt; font-weight: 600; text-transform: uppercase; box-shadow: 0 2px 5px rgba(0,0,0,0.26);">
              ES6 / ES2015 + HTTP/2
            </span>
          </header>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 14px; margin-bottom: 14px;">
            ${yearData.specs.map((s, idx) => `
              <div style="background: #ffffff; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); padding: 14px; border-top: 3px solid ${idx % 2 === 0 ? '#3f51b5' : '#009688'};">
                <span style="color: ${idx % 2 === 0 ? '#3f51b5' : '#009688'}; font-size: 9.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHTML(s.category)}</span>
                <p style="color: #455a64; font-size: 10pt; line-height: 1.5; margin: 6px 0 0 0;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: #ffffff; border-radius: 2px; padding: 12px 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); display: flex; justify-content: space-between; align-items: center; gap: 16px; font-size: 9.5pt; color: #455a64;">
          <div>
            <b style="color:#3f51b5;">Material Quantum Paper &amp; ES6:</b> ${escapeHTML(yearData.culturalContext)}
            <span style="color:#78909c;">(${escapeHTML(yearData.eraSites)})</span>
          </div>
          <button onclick="alert('Material Design FAB (z-depth: 6dp) -> fetch(\"/api/es6\").then(r => r.json())')" style="background: #ff4081; color: white; border: none; width: 46px; height: 46px; border-radius: 50%; font-size: 20pt; flex-shrink: 0; box-shadow: 0 6px 10px rgba(0,0,0,0.24); cursor: pointer;">
            +
          </button>
        </div>
      </div>
    `;
  }

  // 2016: COMPONENT LOADING, SHIMMER SKELETON SCREENS & CSS VARIABLES
  if (y === 2016) {
    return `
      <style>
        @keyframes skeleton-shimmer-2016 {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skel-bar-2016 {
          background: linear-gradient(90deg, #272732 25%, #3f3f52 50%, #272732 75%);
          background-size: 200% 100%;
          animation: skeleton-shimmer-2016 1.4s infinite;
          border-radius: 4px;
        }
      </style>
      <div id="stage-2016" style="--accent-2016: #61dafb; background: #181820; color: #e4e4e7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #2a2a35; padding-bottom: 12px; flex-wrap: wrap; gap: 10px;">
            <div>
              <h2 style="margin: 0; color: var(--accent-2016); font-size: 18pt;">${escapeHTML(yearData.title)}</h2>
              <p style="color: #a1a1aa; font-size: 10pt; margin: 4px 0 0 0;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; font-size: 9.5pt;">
              <span>Live CSS <code>--accent-2016</code>:</span>
              <button onclick="document.getElementById('stage-2016').style.setProperty('--accent-2016', '#61dafb')" style="width:20px; height:20px; border-radius:50%; background:#61dafb; border:2px solid #fff; cursor:pointer;" title="React Cyan"></button>
              <button onclick="document.getElementById('stage-2016').style.setProperty('--accent-2016', '#42b883')" style="width:20px; height:20px; border-radius:50%; background:#42b883; border:2px solid #fff; cursor:pointer;" title="Vue 2 Emerald"></button>
              <button onclick="document.getElementById('stage-2016').style.setProperty('--accent-2016', '#dd0031')" style="width:20px; height:20px; border-radius:50%; background:#dd0031; border:2px solid #fff; cursor:pointer;" title="Angular 2 Red"></button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map(s => `
              <div style="background: #20202a; border: 1px solid #30303e; border-top: 2px solid var(--accent-2016); border-radius: 6px; padding: 14px;">
                <b style="color: var(--accent-2016); font-size: 9.5pt; text-transform: uppercase;">${escapeHTML(s.category)}</b>
                <p style="margin: 6px 0 0 0; color: #d4d4d8; font-size: 10pt; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2016 Shimmer Skeleton Preview Bar + Context -->
        <div style="background: #20202a; border: 1px solid #30303e; border-radius: 6px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 9.5pt;">
          <div style="flex: 1; min-width: 240px;">
            <b style="color: var(--accent-2016);">2016 Skeleton UI &amp; Lockfile Era (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
          </div>
          <div style="width: 180px; background: #181820; padding: 8px; border-radius: 4px; border: 1px solid #2e2e3a;" title="2016 Shimmer Skeleton Placeholder">
            <div class="skel-bar-2016" style="width: 55%; height: 8px; margin-bottom: 6px;"></div>
            <div class="skel-bar-2016" style="width: 90%; height: 6px;"></div>
          </div>
        </div>
      </div>
    `;
  }

  // 2017: THE CSS GRID REVOLUTION, WEBASSEMBLY 1.0 & "STRIPE-CORE" DIAGONAL GRADIENTS
  if (y === 2017) {
    return `
      <div style="background: #f6f9fc; color: #32325d; font-family: 'Camphor', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;">
        <!-- Iconic 2017 Stripe-Style Skewed Diagonal Multi-Stop Gradient Ribbon -->
        <div style="background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%); color: #ffffff; padding: 18px 22px; border-radius: 8px; box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
          <div>
            <span style="background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 10px; font-size: 8.5pt; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">MARCH 2017 SIMULTANEOUS LAUNCH</span>
            <h1 style="margin: 4px 0 2px 0; font-size: 18pt; font-weight: 700;">${escapeHTML(yearData.title)}</h1>
            <p style="margin: 0; font-size: 10pt; color: #e0f2fe;">${escapeHTML(yearData.subtitle)}</p>
          </div>
          <button onclick="
            const g = document.getElementById('css-grid-2017');
            g.dataset.debug = g.dataset.debug === 'true' ? 'false' : 'true';
            Array.from(g.children).forEach(c => c.style.outline = g.dataset.debug === 'true' ? '2px dashed #6772e5' : 'none');
          " style="background: #ffffff; color: #6772e5; border: none; padding: 8px 14px; border-radius: 4px; font-weight: 700; font-size: 9.5pt; cursor: pointer; box-shadow: 0 4px 6px rgba(50,50,93,0.11);">
            ⌗ Toggle CSS Grid Inspector Lines
          </button>
        </div>

        <!-- True 2D Asymmetric CSS Grid (Spanning Columns & Rows) -->
        <div id="css-grid-2017" data-debug="false" style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 12px; margin-bottom: 14px;">
          ${yearData.specs.map((s, i) => {
            const colSpan = i === 0 || i === 1 ? 'grid-column: span 6;' : 'grid-column: span 3;';
            return `
              <div style="${colSpan} background: #ffffff; border-radius: 6px; padding: 14px; box-shadow: 0 6px 12px -2px rgba(50,50,93,0.12), 0 3px 7px -3px rgba(0,0,0,0.15); border-top: 3px solid ${i < 2 ? '#6772e5' : '#24b47e'};">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <b style="color: #6772e5; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.6px;">${escapeHTML(s.category)}</b>
                  <code style="font-size: 8pt; color: #8898aa; background: #f6f9fc; padding: 1px 5px; border-radius: 3px;">${i < 2 ? 'span 6' : 'span 3'}</code>
                </div>
                <p style="margin: 6px 0 0 0; font-size: 9.8pt; color: #525f7f; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `;
          }).join('')}
        </div>

        <div style="background: #ffffff; border-radius: 6px; padding: 10px 16px; box-shadow: 0 2px 5px rgba(50,50,93,0.1); font-size: 9.5pt; color: #525f7f; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span><b style="color:#32325d;">2017 Grid &amp; Wasm Era (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}</span>
        </div>
      </div>
    `;
  }

  // 2018: SPLIT-SCREEN VECTOR SAAS ("CORPORATE MEMPHIS"), VARIABLE FONTS & GDPR BANNER
  if (y === 2018) {
    return `
      <div style="background: #fff9f2; color: #1e1919; font-family: 'Inter', -apple-system, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <!-- 2018 Warm Split-Hero SaaS Header + Variable Font Axis Scrubber -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0061ff; padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 12px;">
            <div>
              <span style="background: #ffafa2; color: #61082b; font-weight: 800; font-size: 8.5pt; padding: 2px 8px; text-transform: uppercase;">2018 SAAS VECTOR &amp; VARIABLE FONT ERA</span>
              <h1 id="var-font-title-2018" style="margin: 4px 0 2px 0; font-size: 18pt; font-weight: 800; color: #0061ff; transition: font-weight 0.1s;">
                ${escapeHTML(yearData.title)}
              </h1>
              <p style="margin: 0; font-size: 10pt; color: #524a4a;">${escapeHTML(yearData.subtitle)}</p>
            </div>

            <!-- Interactive OpenType Variable Font Weight Axis Control -->
            <div style="background: #f2ebe1; padding: 8px 12px; border-radius: 6px; border: 1px solid #dfd3c3; font-size: 9pt;">
              <label for="wght-slider-2018"><b>Variable Font <code>wght</code>:</b> <span id="wght-val-2018">800</span></label><br>
              <input id="wght-slider-2018" type="range" min="300" max="900" value="800" oninput="
                document.getElementById('var-font-title-2018').style.fontWeight = this.value;
                document.getElementById('wght-val-2018').innerText = this.value;
              " style="width: 140px; cursor: pointer;" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map((s, i) => {
              const accents = ['#0061ff', '#ff5a5f', '#14b8a6', '#7c3aed', '#d97706', '#61082b'];
              const c = accents[i % accents.length];
              return `
                <div style="background: #ffffff; border: 2px solid #1e1919; border-left: 6px solid ${c}; padding: 12px;">
                  <b style="color: ${c}; font-size: 9pt; text-transform: uppercase;">${escapeHTML(s.category)}</b>
                  <p style="margin: 5px 0 0 0; font-size: 9.8pt; color: #1e1919; line-height: 1.45;">${escapeHTML(s.item)}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Iconic May 2018 GDPR Cookie Consent Banner -->
        <div id="gdpr-banner-2018" style="background: #1e1919; color: #fff9f2; padding: 10px 16px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; font-size: 9.5pt;">
          <div>
            🍪 <b>May 25, 2018 GDPR Compliance Notice:</b> We use cookies &amp; <code>IntersectionObserver</code> to personalize your experience. (${escapeHTML(yearData.eraSites)})
          </div>
          <div style="display: flex; gap: 8px;">
            <button onclick="document.getElementById('gdpr-banner-2018').style.opacity='0.4'" style="background: transparent; color: #fff; border: 1px solid #fff; padding: 5px 10px; font-size: 9pt; cursor: pointer;">Manage Preferences</button>
            <button onclick="document.getElementById('gdpr-banner-2018').innerHTML='✅ <b>GDPR Consent Recorded (2018):</b> ' + '${escapeHTML(yearData.culturalContext).replace(/'/g, "\\'")}'" style="background: #0061ff; color: #fff; border: none; padding: 5px 12px; font-weight: bold; font-size: 9pt; cursor: pointer;">Accept All Cookies</button>
          </div>
        </div>
      </div>
    `;
  }

  // 2019: OS DARK MODE SYNC (prefers-color-scheme), TAILWIND UTILITY TOKENS & NEUMORPHISM
  if (y === 2019) {
    return `
      <div id="stage-2019" style="--bg-2019: #1e2028; --card-2019: #232630; --text-2019: #f3f4f6; --muted-2019: #9ca3af; --neu-shadow: 6px 6px 14px #14161c, -6px -6px 14px #2c303c; background: var(--bg-2019); color: var(--text-2019); font-family: 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.25s ease;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="color: #38bdf8; font-family: monospace; font-size: 9pt; font-weight: 600;">@media (prefers-color-scheme: dark)</span>
              <h1 style="margin: 2px 0 4px 0; font-size: 18pt;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 0; font-size: 10pt; color: var(--muted-2019);">${escapeHTML(yearData.subtitle)}</p>
            </div>

            <!-- Interactive OS prefers-color-scheme + Neumorphic Surface Switcher -->
            <button onclick="
              const el = document.getElementById('stage-2019');
              const isLight = el.dataset.scheme === 'light';
              if (isLight) {
                el.dataset.scheme = 'dark';
                el.style.setProperty('--bg-2019', '#1e2028');
                el.style.setProperty('--card-2019', '#232630');
                el.style.setProperty('--text-2019', '#f3f4f6');
                el.style.setProperty('--muted-2019', '#9ca3af');
                el.style.setProperty('--neu-shadow', '6px 6px 14px #14161c, -6px -6px 14px #2c303c');
                this.innerText = '🌙 OS Scheme: Dark (Switch to Soft Light)';
              } else {
                el.dataset.scheme = 'light';
                el.style.setProperty('--bg-2019', '#e0e5ec');
                el.style.setProperty('--card-2019', '#e0e5ec');
                el.style.setProperty('--text-2019', '#1f2937');
                el.style.setProperty('--muted-2019', '#4b5563');
                el.style.setProperty('--neu-shadow', '6px 6px 14px #b8b9be, -6px -6px 14px #ffffff');
                this.innerText = '☀️ OS Scheme: Soft UI Light (Switch to Dark)';
              }
            " style="background: var(--card-2019); color: var(--text-2019); border: 1px solid rgba(56,189,248,0.3); box-shadow: var(--neu-shadow); padding: 8px 14px; border-radius: 10px; font-size: 9.5pt; font-weight: 600; cursor: pointer;">
              🌙 OS Scheme: Dark (Switch to Soft Light)
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 14px; margin-bottom: 14px;">
            ${yearData.specs.map(s => `
              <div style="background: var(--card-2019); box-shadow: var(--neu-shadow); border-radius: 12px; padding: 14px;">
                <span style="display: inline-block; background: rgba(56, 189, 248, 0.15); color: #38bdf8; font-family: monospace; font-size: 8.5pt; font-weight: 700; padding: 2px 8px; border-radius: 9999px;">${escapeHTML(s.category)}</span>
                <p style="margin: 8px 0 0 0; font-size: 9.8pt; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: var(--card-2019); box-shadow: var(--neu-shadow); border-radius: 10px; padding: 10px 16px; font-size: 9.5pt; color: var(--muted-2019);">
          <b style="color: var(--text-2019);">2019 Dark Mode &amp; Utility-First Shift (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
        </div>
      </div>
    `;
  }

  // 2020: GLASSMORPHISM, UNBUNDLED ESM (VITE), CORE WEB VITALS & CLAMP()
  if (y === 2020) {
    return `
      <div style="background: radial-gradient(circle at 15% 20%, #ec4899 0%, transparent 40%), radial-gradient(circle at 85% 75%, #6366f1 0%, transparent 45%), radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%), #0f172a; color: #ffffff; font-family: 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <!-- Frosted Glassmorphism Header -->
          <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 16px; padding: 14px 20px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <h1 style="margin: 0; font-size: clamp(1.25rem, 2vw, 1.65rem);">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 3px 0 0 0; font-size: 10pt; color: rgba(255,255,255,0.85);">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <!-- 2020 Core Web Vitals Tri-Badge -->
            <div style="display: flex; gap: 8px; font-family: monospace; font-size: 9pt;">
              <span style="background: rgba(16, 185, 129, 0.25); border: 1px solid #34d399; color: #a7f3d0; padding: 4px 8px; border-radius: 8px;">LCP: 1.1s</span>
              <span style="background: rgba(16, 185, 129, 0.25); border: 1px solid #34d399; color: #a7f3d0; padding: 4px 8px; border-radius: 8px;">FID: 12ms</span>
              <span style="background: rgba(16, 185, 129, 0.25); border: 1px solid #34d399; color: #a7f3d0; padding: 4px 8px; border-radius: 8px;">CLS: 0.00</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map(s => `
              <div style="background: rgba(255, 255, 255, 0.09); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 14px; padding: 13px;">
                <b style="color: #67e8f9; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHTML(s.category)}</b>
                <p style="margin: 6px 0 0 0; font-size: 9.8pt; color: #f8fafc; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 10px 16px; font-size: 9.5pt; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span><b>2020 Glassmorphism &amp; Flash End-of-Life (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}</span>
        </div>
      </div>
    `;
  }

  // 2021: NEO-BRUTALISM (GUMROAD / FIGMA AESTHETIC), LOGICAL PROPERTIES & ACCENT-COLOR
  if (y === 2021) {
    return `
      <div style="background: #f4f0ea; color: #000000; font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; accent-color: #ff0055;">
        <div>
          <!-- Neo-Brutalist Header Box with 3px Solid Black Border & Hard 6px Shadow -->
          <div style="background: #ff90e8; border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; padding: 14px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="background: #000; color: #ffde00; font-family: monospace; font-size: 8.5pt; font-weight: 700; padding: 2px 8px;">NEO-BRUTALISM • ISLANDS ARCHITECTURE</span>
              <h1 style="margin: 4px 0 2px 0; font-size: 18pt; font-weight: 900;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 0; font-size: 10pt; font-weight: 500;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <!-- Interactive 2021 CSS accent-color Demo -->
            <div style="background: #ffffff; border: 2px solid #000000; box-shadow: 4px 4px 0px #000000; padding: 8px 12px; font-size: 9pt; font-weight: 700;">
              <code>accent-color: #ff0055</code><br>
              <label><input type="checkbox" checked /> Check</label>
              <label style="margin-left:6px;"><input type="radio" checked /> Radio</label>
              <input type="range" min="0" max="100" value="75" style="width:70px; vertical-align:middle;" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 14px; margin-bottom: 14px;">
            ${yearData.specs.map((s, i) => {
              const fills = ['#ffde00', '#ffffff', '#90f6d7', '#ffc900', '#ffffff', '#ff90e8'];
              return `
                <div style="background: ${fills[i % fills.length]}; border: 3px solid #000000; box-shadow: 5px 5px 0px #000000; padding: 12px 14px;">
                  <span style="background: #000000; color: #ffffff; font-family: monospace; font-size: 8.5pt; font-weight: 700; padding: 2px 6px; text-transform: uppercase;">${escapeHTML(s.category)}</span>
                  <p style="margin: 8px 0 0 0; font-size: 9.8pt; font-weight: 500; line-height: 1.45;">${escapeHTML(s.item)}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="background: #ffffff; border: 3px solid #000000; box-shadow: 5px 5px 0px #000000; padding: 10px 14px; font-size: 9.5pt;">
          <b>2021 Neo-Brutalist Wave (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
        </div>
      </div>
    `;
  }

  // 2022: BENTO BOX GRIDS, CSS :has() PARENT SELECTOR, @container QUERIES & NATIVE <dialog>
  if (y === 2022) {
    return `
      <style>
        .bento-stage-2022:has(#filter-css-2022:checked) .bento-card-2022:not([data-cat="CSS"]) {
          opacity: 0.25;
          transform: scale(0.98);
        }
        .bento-stage-2022:has(#filter-css-2022:checked) .bento-card-2022[data-cat="CSS"] {
          border-color: #38bdf8 !important;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
        }
      </style>
      <div class="bento-stage-2022" style="background: #090a0f; color: #f8fafc; font-family: 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="color: #38bdf8; font-family: monospace; font-size: 8.5pt;">INTEROP 2022 • BENTO ARCHITECTURE</span>
              <h1 style="margin: 2px 0; font-size: 18pt; font-weight: 700;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 0; font-size: 10pt; color: #94a3b8;">${escapeHTML(yearData.subtitle)}</p>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <!-- Zero-JS CSS :has() Interactive Filter -->
              <label style="background: #12141d; border: 1px solid rgba(255,255,255,0.18); padding: 6px 12px; border-radius: 8px; font-size: 9pt; cursor: pointer;">
                <input type="checkbox" id="filter-css-2022" style="vertical-align: middle;" />
                Highlight CSS via <code>:has(:checked)</code>
              </label>
              <!-- Native HTML <dialog> Modal Trigger -->
              <button type="button" onclick="document.getElementById('modal-2022').showModal()" style="background: #38bdf8; color: #090a0f; border: none; padding: 7px 12px; border-radius: 8px; font-size: 9pt; font-weight: 700; cursor: pointer;">
                Open Native &lt;dialog&gt;
              </button>
            </div>
          </div>

          <!-- Modular Bento Grid -->
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map((s, i) => {
              const span = i === 0 || i === 1 ? 'grid-column: span 6;' : 'grid-column: span 3;';
              return `
                <div class="bento-card-2022" data-cat="${escapeHTML(s.category)}" style="${span} container-type: inline-size; background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 14px; transition: all 0.2s ease;">
                  <span style="color: #38bdf8; font-family: monospace; font-size: 8.5pt; font-weight: 700; text-transform: uppercase;">${escapeHTML(s.category)}</span>
                  <p style="margin: 6px 0 0 0; font-size: 9.8pt; color: #cbd5e1; line-height: 1.45;">${escapeHTML(s.item)}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <dialog id="modal-2022" style="background: #12141d; color: #fff; border: 1px solid #38bdf8; border-radius: 12px; padding: 20px; max-width: 420px; margin: auto;">
          <h3 style="margin: 0 0 8px 0; color: #38bdf8;">2022 Baseline &lt;dialog&gt; Element</h3>
          <p style="font-size: 10pt; line-height: 1.5; color: #cbd5e1; margin: 0 0 14px 0;">
            Opened via <code>dialog.showModal()</code> in the browser top-layer with automatic focus trapping and <code>Esc</code> dismissal!
          </p>
          <form method="dialog" style="text-align: right;">
            <button style="background: #38bdf8; color: #000; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">Close via method="dialog"</button>
          </form>
        </dialog>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px 14px; font-size: 9.5pt; color: #94a3b8;">
          <b style="color:#fff;">2022 CSS Renaissance (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
        </div>
      </div>
    `;
  }

  // 2023: AI COMMAND PALETTES (⌘K), VIEW TRANSITIONS, CSS SUBGRID & PERCEPTUAL OKLCH
  if (y === 2023) {
    return `
      <div style="background: oklch(0.16 0.02 265); color: oklch(0.95 0.01 265); font-family: 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <!-- 2023 Command-K AI Prompt Bar Header -->
          <div style="background: oklch(0.21 0.025 265); border: 1px solid oklch(0.35 0.04 265); border-radius: 12px; padding: 12px 16px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
            <div style="display: flex; align-items: center; gap: 12px;">
              <kbd style="background: oklch(0.28 0.04 265); border: 1px solid oklch(0.45 0.06 265); color: oklch(0.85 0.14 195); padding: 4px 8px; border-radius: 6px; font-family: monospace; font-size: 10pt; font-weight: bold;">⌘K</kbd>
              <div>
                <h1 style="margin: 0; font-size: 17pt;">${escapeHTML(yearData.title)}</h1>
                <p style="margin: 2px 0 0 0; font-size: 9.5pt; color: oklch(0.75 0.02 265);">${escapeHTML(yearData.subtitle)}</p>
              </div>
            </div>
            <!-- Perceptually Uniform OKLCH Gamut Swatches -->
            <div style="display: flex; align-items: center; gap: 5px; font-family: monospace; font-size: 8.5pt;">
              <span>oklch(0.75 0.18 H):</span>
              <span style="width:16px; height:16px; border-radius:4px; background:oklch(0.75 0.18 30); display:inline-block;"></span>
              <span style="width:16px; height:16px; border-radius:4px; background:oklch(0.75 0.18 140); display:inline-block;"></span>
              <span style="width:16px; height:16px; border-radius:4px; background:oklch(0.75 0.18 220); display:inline-block;"></span>
              <span style="width:16px; height:16px; border-radius:4px; background:oklch(0.75 0.18 320); display:inline-block;"></span>
            </div>
          </div>

          <!-- 2023 CSS Subgrid Card Matrix: Aligns Header & Body Rows Across Siblings -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map((s, idx) => {
              const hue = (idx * 55 + 180) % 360;
              return `
                <div style="grid-row: span 2; display: grid; grid-template-rows: auto 1fr; grid-template-rows: subgrid; background: oklch(0.2 0.02 265); border: 1px solid oklch(0.32 0.03 265); border-top: 2px solid oklch(0.75 0.16 ${hue}); border-radius: 10px; padding: 13px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
                    <b style="color: oklch(0.8 0.15 ${hue}); font-size: 9pt; text-transform: uppercase;">${escapeHTML(s.category)}</b>
                    <code style="font-size: 8pt; color: oklch(0.65 0.02 265);">subgrid</code>
                  </div>
                  <p style="margin: 0; font-size: 9.8pt; color: oklch(0.88 0.01 265); line-height: 1.45;">${escapeHTML(s.item)}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="background: oklch(0.2 0.02 265); border: 1px solid oklch(0.32 0.03 265); border-radius: 10px; padding: 10px 14px; font-size: 9.5pt; color: oklch(0.78 0.02 265);">
          <b style="color:#fff;">2023 AI UI &amp; Baseline Launch (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
        </div>
      </div>
    `;
  }

  // 2024: NATIVE POPOVER API, @starting-style, light-dark(), text-wrap: balance & INP
  if (y === 2024) {
    return `
      <style>
        #demo-popover-2024 {
          background: #18181b;
          color: #fafafa;
          border: 2px solid #a855f7;
          border-radius: 12px;
          padding: 16px 20px;
          max-width: 380px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
          transition: opacity 0.25s ease, transform 0.25s ease, display 0.25s allow-discrete, overlay 0.25s allow-discrete;
        }
        #demo-popover-2024:popover-open {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        @starting-style {
          #demo-popover-2024:popover-open {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
        }
      </style>
      <div style="background: #0c0a14; color: #f5f3ff; font-family: 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.28); border-radius: 12px; padding: 14px 18px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="color: #c084fc; font-family: monospace; font-size: 8.5pt;">TOP-LAYER [popover] • @starting-style • INP &lt; 200ms</span>
              <h1 style="margin: 2px 0; font-size: 18pt; text-wrap: balance;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 0; font-size: 10pt; color: #c4b5fd; text-wrap: pretty;">${escapeHTML(yearData.subtitle)}</p>
            </div>

            <!-- Real Declarative Zero-JS HTML Popover API Trigger -->
            <button type="button" popovertarget="demo-popover-2024" style="background: #a855f7; color: #ffffff; border: none; padding: 8px 14px; border-radius: 8px; font-size: 9.5pt; font-weight: 700; cursor: pointer;">
              ✨ Toggle Native [popover] (Zero JS)
            </button>
          </div>

          <div id="demo-popover-2024" popover="auto">
            <b style="color: #c084fc; font-size: 11pt;">Top-Layer HTML Popover API (2024)</b>
            <p style="font-size: 9.8pt; line-height: 1.5; margin: 8px 0 0 0; color: #e4e4e7;">
              Toggled purely via HTML <code>popovertarget="demo-popover-2024"</code> and animated smoothly from <code>display: none</code> using <code>@starting-style</code>! Click anywhere outside to light-dismiss.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 12px; margin-bottom: 14px;">
            ${yearData.specs.map(s => `
              <div style="background: #151221; border: 1px solid #2e2647; border-radius: 10px; padding: 13px;">
                <b style="color: #c084fc; font-size: 9pt; text-transform: uppercase;">${escapeHTML(s.category)}</b>
                <p style="margin: 6px 0 0 0; font-size: 9.8pt; color: #e9d5ff; line-height: 1.45; text-wrap: pretty;">${escapeHTML(s.item)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: #151221; border: 1px solid #2e2647; border-radius: 10px; padding: 10px 14px; font-size: 9.5pt; color: #c4b5fd; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span><b style="color:#fff;">2024 Platform Maturity (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}</span>
          <code style="color:#4ade80;">INP: 16ms (Good)</code>
        </div>
      </div>
    `;
  }

  // 2025: SCROLL-DRIVEN ANIMATIONS, EXCLUSIVE <details name="..."> ACCORDIONS & INVOKER COMMANDS
  if (y === 2025) {
    return `
      <div style="background: #0a0f0d; color: #ecfdf5; font-family: 'Inter', system-ui, sans-serif; padding: 22px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; interpolate-size: allow-keywords;">
        <div>
          <div style="border-bottom: 1px solid #064e3b; padding-bottom: 12px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="color: #10b981; font-family: monospace; font-size: 8.5pt;">animation-timeline: view() • &lt;details name="..."&gt; • commandfor</span>
              <h1 style="margin: 2px 0; font-size: 17.5pt; text-wrap: balance;">${escapeHTML(yearData.title)}</h1>
              <p style="margin: 0; font-size: 10pt; color: #a7f3d0;">${escapeHTML(yearData.subtitle)}</p>
            </div>
            <button type="button" onclick="document.getElementById('dialog-2025').showModal()" style="background: #10b981; color: #052e16; border: none; padding: 8px 14px; border-radius: 6px; font-size: 9.5pt; font-weight: 700; cursor: pointer;">
              Open &lt;dialog closedby="any"&gt;
            </button>
          </div>

          <dialog id="dialog-2025" closedby="any" style="background: #06281e; color: #ecfdf5; border: 2px solid #10b981; border-radius: 10px; padding: 20px; max-width: 420px; margin: auto;">
            <h3 style="margin: 0 0 8px 0; color: #34d399;">2025 Native Light-Dismiss Dialog</h3>
            <p style="font-size: 10pt; line-height: 1.5; margin: 0 0 12px 0;">
              With <code>closedby="any"</code>, clicking outside on the <code>::backdrop</code> or pressing <code>Esc</code> automatically closes this modal without custom backdrop event listeners!
            </p>
            <form method="dialog"><button style="background:#10b981; color:#000; border:none; padding:6px 12px; border-radius:4px; font-weight:bold; cursor:pointer;">Dismiss</button></form>
          </dialog>

          <!-- Native Mutually Exclusive <details name="exclusive-2025"> Accordion Group + Grid -->
          <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 14px; margin-bottom: 14px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              ${yearData.specs.map(s => `
                <div style="background: #0f1f18; border: 1px solid #134e4a; border-radius: 8px; padding: 12px;">
                  <b style="color: #34d399; font-size: 8.8pt; text-transform: uppercase;">${escapeHTML(s.category)}</b>
                  <p style="margin: 5px 0 0 0; font-size: 9.5pt; color: #d1fae5; line-height: 1.4;">${escapeHTML(s.item)}</p>
                </div>
              `).join('')}
            </div>

            <!-- Live Zero-JS Exclusive <details name="spec-2025"> Demo -->
            <div style="background: #0f1f18; border: 1px solid #10b981; border-radius: 8px; padding: 14px;">
              <div style="font-family: monospace; font-size: 9pt; color: #34d399; margin-bottom: 8px;">
                LIVE DEMO: Exclusive <code>&lt;details name="group-2025"&gt;</code> (Click to toggle — opening one closes the others!)
              </div>
              ${yearData.specs.slice(0, 4).map((s, idx) => `
                <details name="group-2025" ${idx === 0 ? 'open' : ''} style="border-bottom: 1px solid #134e4a; padding: 7px 0;">
                  <summary style="cursor: pointer; font-weight: 700; font-size: 9.8pt; color: #ecfdf5;">
                    [${escapeHTML(s.category)}] Exclusive Disclosure #${idx + 1}
                  </summary>
                  <p style="margin: 6px 0 2px 0; font-size: 9.3pt; color: #a7f3d0; line-height: 1.45;">
                    ${escapeHTML(s.item)}
                  </p>
                </details>
              `).join('')}
            </div>
          </div>
        </div>

        <div style="background: #0f1f18; border: 1px solid #134e4a; border-radius: 8px; padding: 10px 14px; font-size: 9.5pt; color: #a7f3d0;">
          <b style="color:#fff;">2025 Zero-JS Kinetic Platform (${escapeHTML(yearData.eraSites)}):</b> ${escapeHTML(yearData.culturalContext)}
        </div>
      </div>
    `;
  }

  // 2026: BAUHAUS ARCHITECTURAL GRID, TEMPORAL API, CSS ANCHOR POSITIONING & AGENTIC WEBMCP
  return `
    <div style="background: #f4f1ea; color: #000000; font-family: 'Inter', system-ui, sans-serif; padding: 20px; min-height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; border: 4px solid #000000;">
      <div>
        <!-- Bauhaus Architectural Header Grid -->
        <div style="display: grid; grid-template-columns: auto 1fr auto; border: 2px solid #000000; background: #ffffff; margin-bottom: 14px;">
          <div style="background: #e52521; color: #ffffff; padding: 14px 18px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-right: 2px solid #000000;">
            <span style="font-size: 22pt; font-weight: 900; line-height: 1;">2026</span>
            <span style="font-size: 7.5pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 2px;">BASELINE</span>
          </div>
          <div style="padding: 12px 18px; display: flex; flex-direction: column; justify-content: center;">
            <h1 style="margin: 0; font-size: 16.5pt; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em;">${escapeHTML(yearData.title)}</h1>
            <p style="margin: 4px 0 0 0; font-size: 9.8pt; color: #222222;">${escapeHTML(yearData.subtitle)}</p>
          </div>
          <div style="background: #f7c600; color: #000000; padding: 12px 16px; border-left: 2px solid #000000; display: flex; flex-direction: column; justify-content: center; font-family: monospace; font-size: 8.5pt; font-weight: 700;">
            <span>● WEBMCP READY</span>
            <span>■ TEMPORAL ISO</span>
            <span>▲ ANCHOR CSS</span>
          </div>
        </div>

        <!-- Modular Bauhaus 6-Cell Specification Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); border-top: 2px solid #000000; border-left: 2px solid #000000; margin-bottom: 14px;">
          ${yearData.specs.map((s, i) => {
            const badgeColors = ['#e52521', '#0055a5', '#f7c600', '#000000', '#e52521', '#0055a5'];
            const badgeText = i === 2 ? '#000000' : '#ffffff';
            return `
              <div style="background: #ffffff; border-right: 2px solid #000000; border-bottom: 2px solid #000000; padding: 13px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                  <span style="background: ${badgeColors[i % badgeColors.length]}; color: ${badgeText}; font-size: 8pt; font-weight: 800; padding: 2px 7px; text-transform: uppercase; letter-spacing: 0.8px; border: 1px solid #000;">
                    ${escapeHTML(s.category)}
                  </span>
                  <span style="font-family: monospace; font-size: 8.5pt; font-weight: 700;">0${i + 1}</span>
                </div>
                <p style="margin: 0; font-size: 9.8pt; color: #000000; line-height: 1.45;">${escapeHTML(s.item)}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 2026 Declarative WebMCP Agentic Form + Cultural Context Footer -->
      <div style="display: grid; grid-template-columns: 1.4fr 1fr; border: 2px solid #000000; background: #ffffff;">
        <div style="padding: 10px 14px; border-right: 2px solid #000000; font-size: 9.3pt; line-height: 1.45;">
          <b style="background: #0055a5; color: #fff; padding: 1px 6px; font-size: 8pt; text-transform: uppercase;">1993 → 2026 Continuum</b>
          <span style="margin-left: 6px;">${escapeHTML(yearData.culturalContext)}</span>
        </div>
        <form toolname="inspect_web_era" tooldescription="Declarative WebMCP Agent Tool: Jump directly to any historical year (1993-2026)" onsubmit="event.preventDefault(); const yr = this.elements.targetYear.value; window.location.hash = '#' + yr;" style="padding: 10px 14px; background: #000000; color: #ffffff; display: flex; align-items: center; justify-content: space-between; gap: 8px; font-family: monospace; font-size: 8.8pt;">
          <span><b>WebMCP Tool:</b> <code>toolname="inspect_web_era"</code></span>
          <div style="display: flex; gap: 4px;">
            <input type="number" name="targetYear" min="1993" max="2026" value="1993" aria-label="Target Year" style="width: 64px; background: #fff; color: #000; border: 2px solid #f7c600; padding: 3px 6px; font-weight: 800; font-family: monospace;" />
            <button type="submit" style="background: #e52521; color: #fff; border: 1px solid #fff; padding: 3px 10px; font-weight: 800; cursor: pointer; text-transform: uppercase;">GO</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
