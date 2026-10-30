// Comprehensive Web History & Specifications Dataset (1993 - 2026)

export const webHistoryData = [
  {
    year: 1993,
    title: "1993: Invention of HTML & The Mosaic Browser",
    subtitle: "CERN releases World Wide Web into the public domain; Marc Andreessen & Eric Bina launch NCSA Mosaic 1.0.",
    layoutType: "raw-html",
    designParadigm: "Unstyled SGML Document Flow",
    eraSites: "info.cern.ch, NCSA What's New, Yahoo! Directory (Jerry and David's Guide)",
    specs: [
      { category: "HTML", item: "HTML+ & HTML 1.0 Internet-Draft published by Tim Berners-Lee and Dan Connolly (IETF)" },
      { category: "HTML", item: "NCSA Mosaic 0.10 / 1.0 introduces the inline <IMG SRC=\"...\"> element for XBM & GIF images" },
      { category: "HTML", item: "Foundational document tags: <H1>-<H6>, <P>, <A HREF>, <UL>, <OL>, <LI>, <DL>, <DT>, <DD>, <ADDRESS>, <HR>" },
      { category: "HTML", item: "<ISINDEX> server-side keyword search prompt and early <FORM> proposals in Mosaic 2.0 pre-releases" },
      { category: "Styling", item: "Zero CSS exists — rendering dictated by browser defaults (#C0C0C0 X11 gray canvas, Times Roman serif)" },
      { category: "Networking", item: "HTTP/0.9 single-line 'GET /path' ASCII protocol; CGI 1.0 specification drafted at NCSA in November 1993" }
    ],
    prevailingTech: "Raw single-column semantic HTML rendered on a #C0C0C0 gray canvas with blue (#0000EE) unvisited links, purple (#551A8B) visited links, and inline GIFs.",
    culturalContext: "On April 30, 1993, CERN officially places World Wide Web software in the public domain with a royalty-free license. Around 600 total web servers exist worldwide by December.",
    codeSnippet: `<!-- 1993 CERN / NCSA Mosaic HTML Document -->
<TITLE>The World Wide Web Project</TITLE>
<H1>World Wide Web</H1>
The WorldWideWeb (W3) is a wide-area <A HREF="WhatIs.html">hypermedia</A>
information retrieval initiative aiming to give universal access to a
large universe of documents.
<P>
<IMG SRC="ncsa_mosaic.gif" ALT="[NCSA Mosaic Globe]">
<HR>
<DL>
  <DT><A HREF="Summary.html">Executive Summary</A>
  <DD>What's out there? Pointers to the world's online information.
</DL>
<ADDRESS>timbl@info.cern.ch - CERN, Geneva</ADDRESS>`,
    retroAudioType: "dialup"
  },
  {
    year: 1994,
    title: "1994: Netscape Navigator 1.0 & W3C Founded",
    subtitle: "Mosaic Netscape 0.9/1.0 ships; Tim Berners-Lee founds the W3C at MIT; HTML 2.0 working draft & HTTP cookies.",
    layoutType: "body-attributes",
    designParadigm: "Centered Presentational Markup & Tiled Backgrounds",
    eraSites: "HotWired (first banner ads), Pizza Hut PizzaNet, WhiteHouse.gov, Yahoo!",
    specs: [
      { category: "HTML", item: "Netscape proprietary <BODY> attributes: BGCOLOR, TEXT, LINK, VLINK, ALINK, and tiled BACKGROUND=\"tile.gif\"" },
      { category: "HTML", item: "Netscape presentational extensions: <CENTER>, <FONT SIZE=\"+2\">, <BLINK>, and <NOBR>" },
      { category: "HTML", item: "HTML 2.0 IETF Working Draft standardizes <FORM>, <INPUT>, <SELECT>, <TEXTAREA>, and server image maps (ISMAP)" },
      { category: "Networking", item: "Lou Montulli invents HTTP Cookies (Set-Cookie header) in Netscape 0.9beta for e-commerce shopping carts" },
      { category: "Security", item: "SSL 1.0 / 2.0 (Secure Sockets Layer) engineered by Netscape for encrypted HTTPS transactions" },
      { category: "Standards", item: "World Wide Web Consortium (W3C) founded by Tim Berners-Lee at MIT/CERN in October 1994; Håkon Wium Lie proposes CHSS (CSS)" }
    ],
    prevailingTech: "Tiled texture GIF wallpapers, <CENTER> blocks, high-contrast neon <FONT> tags, beveled horizontal rules, and server-side CGI scripts in Perl.",
    culturalContext: "Marc Andreessen and Jim Clark found Mosaic Communications (renamed Netscape). HotWired runs the web's first clickable banner ad ('Have you ever clicked your mouse right HERE? You will.').",
    codeSnippet: `<BODY BGCOLOR="#000040" TEXT="#FFFF00" LINK="#00FFFF" VLINK="#FF00FF" BACKGROUND="stars.gif">
<CENTER>
  <H1><FONT SIZE="+4">WELCOME TO NETSCAPE 1.0</FONT></H1>
  <BLINK><B>*** NEW! ONLINE ORDERING VIA HTTP COOKIES ***</B></BLINK>
  <HR WIDTH="75%" SIZE="6">
  <A HREF="/cgi-bin/imagemap/navbar.map">
    <IMG SRC="navbar.gif" ISMAP BORDER="0">
  </A>
</CENTER>
</BODY>`,
    retroAudioType: "click"
  },
  {
    year: 1995,
    title: "1995: Birth of JavaScript, <frameset> & HTML Tables",
    subtitle: "Brendan Eich creates Mocha/LiveScript (JavaScript) in 10 days; Netscape 2.0 introduces Frames, Tables & Java Applets.",
    layoutType: "frameset",
    designParadigm: "Multi-Frame Split Viewports & Early Table Grids",
    eraSites: "Amazon.com (launched July 1995), eBay (AuctionWeb), Craigslist, AltaVista, GeoCities",
    specs: [
      { category: "JavaScript", item: "Brendan Eich creates Mocha -> LiveScript -> JavaScript 1.0 in Netscape Navigator 2.0 (May/Sep 1995)" },
      { category: "HTML", item: "<FRAMESET>, <FRAME>, and <NOFRAMES> split the browser viewport into independent scrollable documents" },
      { category: "HTML", item: "RFC 1866 (HTML 2.0) finalized; Netscape 1.1/2.0 introduces <TABLE BORDER=\"1\" CELLPADDING CELLSPACING>" },
      { category: "HTML", item: "Client-side image maps (<MAP NAME=\"...\"> & <AREA SHAPE=\"RECT\">) and <FONT COLOR=\"#RRGGBB\"> hex colors" },
      { category: "Plugins", item: "Sun Microsystems <APPLET> tag brings interactive Java Applets and scrolling stock tickers to the browser" },
      { category: "JavaScript", item: "DOM Level 0 event handlers: onclick, onmouseover, onchange, document.write(), window.alert()" }
    ],
    prevailingTech: "Three-panel <frameset> navigation, CGI Perl odometer hit counters, JavaScript status-bar scrollers, and 'Best Viewed with Netscape 2.0' 88x31 buttons.",
    culturalContext: "Netscape's August 1995 IPO ignites the Dot-Com Boom. Microsoft awakens to the internet, releasing Internet Explorer 1.0 in the Windows 95 Plus! pack.",
    codeSnippet: `<FRAMESET ROWS="70,*" FRAMEBORDER="1" BORDER="2">
  <FRAME SRC="banner.html" NAME="topNav" SCROLLING="NO" NORESIZE>
  <FRAMESET COLS="180,*">
    <FRAME SRC="sidebar.html" NAME="menuFrame">
    <FRAME SRC="home.html" NAME="mainFrame">
  </FRAMESET>
</FRAMESET>
<SCRIPT LANGUAGE="JavaScript">
  window.status = "Welcome to my Homepage! Visitor #004219";
  function greet() { alert("Powered by LiveScript / JavaScript 1.0!"); }
</SCRIPT>`,
    retroAudioType: "dialup"
  },
  {
    year: 1996,
    title: "1996: CSS Level 1 Recommendation & Browser Wars",
    subtitle: "W3C publishes CSS1 Recommendation; IE 3.0 vs Netscape 3.0; <marquee>, <bgsound>, Animated GIF89a & Flash 1.0.",
    layoutType: "table-css1",
    designParadigm: "Animated GIF Homesteads & Early Inline CSS1",
    eraSites: "Space Jam (Warner Bros. iconic 1996 site), Hotmail, Ask Jeeves, Hampster Dance precursor pages",
    specs: [
      { category: "CSS", item: "W3C CSS Level 1 Recommendation published (Dec 17, 1996) by Håkon Wium Lie & Bert Bos" },
      { category: "CSS", item: "Internet Explorer 3.0 ships the first partial commercial CSS1 implementation (font-family, color, margin)" },
      { category: "HTML", item: "Proprietary IE tags: <MARQUEE SCROLLAMOUNT=\"5\" BEHAVIOR=\"ALTERNATE\"> and <BGSOUND SRC=\"tune.mid\">" },
      { category: "JavaScript", item: "Netscape 3.0 introduces document.images[] array, enabling the iconic JavaScript image rollover button" },
      { category: "Media", item: "FutureSplash Animator acquired by Macromedia (Dec 1996) and rebranded as Macromedia Flash 1.0" },
      { category: "Networking", item: "HTTP/1.0 (RFC 1945) documented; PNG 1.0 (Portable Network Graphics) becomes a W3C Recommendation" }
    ],
    prevailingTech: "Planetary table layouts (like the 1996 Space Jam website), scrolling <marquee> banners, autoplaying MIDI <bgsound>, and document.images rollover buttons.",
    culturalContext: "The first Browser War escalates as Microsoft bundles IE 3.0 with Windows. Personal homepages teem with spinning skulls, flaming logos, and yellow 'Under Construction' barriers.",
    codeSnippet: `<BGSOUND SRC="canyon.mid" LOOP="INFINITE">
<MARQUEE BGCOLOR="#FF0000" BEHAVIOR="ALTERNATE" SCROLLAMOUNT="6">
  <FONT FACE="Comic Sans MS" COLOR="#FFFF00"><B>*** UNDER CONSTRUCTION - UPDATED DEC 1996 ***</B></FONT>
</MARQUEE>
<A HREF="enter.html"
   onMouseOver="document.images['btn'].src='enter_glow.gif'"
   onMouseOut="document.images['btn'].src='enter_off.gif'">
  <IMG NAME="btn" SRC="enter_off.gif" BORDER="0" WIDTH="120" HEIGHT="40">
</A>
<P STYLE="font-family: Verdana, Arial; font-size: 12pt; color: #00FF00;">
  Styled with the brand-new December 1996 W3C CSS Level 1 spec!
</P>`,
    retroAudioType: "click"
  },
  {
    year: 1997,
    title: "1997: HTML 4.0, ECMAScript 1 & The DHTML Wars",
    subtitle: "JavaScript standardized as ECMA-262 (ES1); HTML 4.0 Recommendation; Netscape 4 <layer> vs IE 4 document.all.",
    layoutType: "dhtml-layers",
    designParadigm: "Absolute-Positioned DHTML Layers & GeoCities Neighborhoods",
    eraSites: "GeoCities (SiliconValley/Tokyo/Area51), Slashdot, BabelFish, Netflix.com (DVD mail rentals)",
    specs: [
      { category: "JavaScript", item: "ECMA-262 1st Edition (ECMAScript 1) standardizes JavaScript across vendors (June 1997)" },
      { category: "HTML", item: "HTML 4.0 W3C Recommendation introduces Strict, Transitional, and Frameset doctypes + <IFRAME>" },
      { category: "DHTML", item: "Incompatible DHTML DOM APIs: Netscape 4 document.layers['id'] vs. IE 4 document.all['id']" },
      { category: "CSS", item: "W3C CSS Positioning (CSS-P) working draft enables position: absolute, left, top, and z-index" },
      { category: "Networking", item: "HTTP/1.1 (RFC 2068) introduces persistent keep-alive connections, chunked transfer, and Host headers" },
      { category: "Accessibility", item: "W3C launches the Web Accessibility Initiative (WAI); HTML 4 requires ALT on <IMG> and adds <LABEL>" }
    ],
    prevailingTech: "Browser-sniffing if (document.layers) / else if (document.all) forks, flying DHTML cursor trails, popup windows, WebRings, and GeoCities guestbooks.",
    culturalContext: "Microsoft drops a 10-foot 'e' logo onto Netscape's lawn on the night of IE 4.0's launch. GeoCities hits 1 million homesteaders organized into thematic neighborhoods.",
    codeSnippet: `<SCRIPT LANGUAGE="JavaScript1.2">
function moveLayer(id, x, y) {
  if (document.layers) {
    // Netscape Communicator 4.0
    document.layers[id].left = x;
    document.layers[id].top = y;
  } else if (document.all) {
    // Microsoft Internet Explorer 4.0
    document.all[id].style.pixelLeft = x;
    document.all[id].style.pixelTop = y;
  }
}
</SCRIPT>
<DIV ID="floatingOrb" STYLE="position:absolute; left:120px; top:80px; z-index:10;">
  <FONT COLOR="#FF00FF"><B>⚡ DHTML ABSOLUTE LAYER ⚡</B></FONT>
</DIV>`,
    retroAudioType: "click"
  },
  {
    year: 1998,
    title: "1998: CSS Level 2, DOM Level 1 & Sliced Table Layouts",
    subtitle: "W3C finalizes CSS2, DOM Level 1 & XML 1.0; Designers perfect Photoshop sliced tables with 1x1 spacer.gif.",
    layoutType: "table-slice",
    designParadigm: "Pixel-Locked Nested Tables & ImageReady Slices",
    eraSites: "Google.com Beta (' Google! '), Mozilla.org, HampsterDance.com, IMDb, PayPal (Confinity)",
    specs: [
      { category: "CSS", item: "CSS Level 2 W3C Recommendation (May 1998): position: relative/fixed, z-index, @media print/screen, overflow, :hover" },
      { category: "DOM", item: "W3C DOM Level 1 Recommendation (Oct 1998) unifies tree manipulation to end the document.all vs. layers split" },
      { category: "XML", item: "XML 1.0 W3C Recommendation published (Feb 1998), sparking the structured data revolution" },
      { category: "Layout", item: "Adobe ImageReady 1.0 & Macromedia Fireworks automate slicing PSDs into <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">" },
      { category: "Technique", item: "1x1 transparent spacer.gif stretched with width/height attributes to enforce pixel-exact table cell dimensions" },
      { category: "Standards", item: "Web Standards Project (WaSP) founded by Jeffrey Zeldman & Glenn Davis to demand W3C compliance from browser makers" }
    ],
    prevailingTech: "Deeply nested 3-to-4 level HTML tables, beveled Photoshop tab bars, 1x1 transparent spacer.gif struts, and Macromedia Flash 3 intro splash screens ('Skip Intro').",
    culturalContext: "Netscape open-sources its codebase as Mozilla in March 1998. Larry Page and Sergey Brin incorporate Google in a Menlo Park garage with a minimalist homepage.",
    codeSnippet: `<!-- Adobe ImageReady Sliced Table Layout (1998) -->
<TABLE WIDTH="640" BORDER="0" CELLPADDING="0" CELLSPACING="0">
  <TR>
    <TD COLSPAN="3"><IMG SRC="images/masthead_01.gif" WIDTH="640" HEIGHT="64"></TD>
  </TR>
  <TR>
    <TD WIDTH="150" BGCOLOR="#003366" VALIGN="TOP">
      <IMG SRC="images/nav_home_on.gif" WIDTH="150" HEIGHT="28"><BR>
      <IMG SRC="images/nav_specs_off.gif" WIDTH="150" HEIGHT="28">
    </TD>
    <!-- 1x1 Transparent Pixel Spacer GIF -->
    <TD WIDTH="12"><IMG SRC="images/spacer.gif" WIDTH="12" HEIGHT="1" ALT=""></TD>
    <TD WIDTH="478" VALIGN="TOP">Pixel-locked content cell.</TD>
  </TR>
</TABLE>`,
    retroAudioType: "click"
  },
  {
    year: 1999,
    title: "1999: HTML 4.01, ES3 & Birth of XMLHttpRequest",
    subtitle: "W3C publishes HTML 4.01; IE 5.0 ships ActiveXObject('Microsoft.XMLHTTP') & ContentEditable; ES3 adds RegExp & try/catch.",
    layoutType: "matrix-table",
    designParadigm: "High-Density Web Portals & Y2K Cyber-Terminal Aesthetics",
    eraSites: "Yahoo! Portal, Napster, Blogger.com, LiveJournal, Salesforce, The Matrix (whatisthematrix.com)",
    specs: [
      { category: "HTML", item: "HTML 4.01 W3C Recommendation (Dec 24, 1999) — the definitive pre-HTML5 markup standard for 15 years" },
      { category: "JavaScript", item: "Microsoft IE 5.0 introduces ActiveXObject('Microsoft.XMLHTTP') for Outlook Web Access (the birth of Ajax)" },
      { category: "JavaScript", item: "ECMAScript 3rd Edition (ES3, Dec 1999): Regular Expressions, try/catch/finally exceptions, switch, do-while" },
      { category: "DOM", item: "IE 5.0 introduces designMode / contentEditable and element.innerHTML (faster than W3C DOM node creation)" },
      { category: "HTML", item: "Favicon (<link rel=\"shortcut icon\" href=\"/favicon.ico\">) introduced by Internet Explorer 5.0" },
      { category: "Syndication", item: "RSS 0.90 / 0.91 created by Netscape (My Netscape Network) for XML news syndication; Blogger coins 'blog'" }
    ],
    prevailingTech: "Three-column dense portal tables (My Yahoo! style), Y2K Matrix terminal dark themes, 9pt Verdana pixel typography, Flash 4 microsites, and favicon.ico files.",
    culturalContext: "Y2K bug remediation reaches fever pitch. Napster disrupts the music industry, Blogger ignites self-publishing, and the Dot-Com Bubble surges toward its zenith.",
    codeSnippet: `// 1999 IE 5.0 Asynchronous HTTP Request (Pre-Ajax)
function fetchPortalModule(url) {
  try {
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.all.portalWidget.innerHTML = xhr.responseText;
      }
    };
    xhr.send(null);
  } catch (e) {
    alert("Requires Microsoft Internet Explorer 5.0+");
  }
}`,
    retroAudioType: "dialup"
  },
  {
    year: 2000,
    title: "2000: XHTML 1.0 Strict, DOM Level 2 & Flash 5",
    subtitle: "W3C reformulates HTML as XML (XHTML 1.0); DOM Level 2 introduces getElementById & addEventListener; Flash 5 ActionScript.",
    layoutType: "xhtml-strict",
    designParadigm: "Strict XML Markup Validation & Ultra-Sharp Pixel/Flash UI",
    eraSites: "2Advanced Studios, DeviantArt, Baidu, HotOrNot, Wikipedia (Nupedia)",
    specs: [
      { category: "HTML", item: "XHTML 1.0 W3C Recommendation (Jan 2000): strict XML well-formedness, lowercase tags, quoted attributes, <br />" },
      { category: "DOM", item: "W3C DOM Level 2 Core & Events (Nov 2000): document.getElementById(), addEventListener(), event capturing/bubbling" },
      { category: "Flash", item: "Macromedia Flash 5.0 introduces ECMAScript-based ActionScript 1.0 and XMLSocket real-time communication" },
      { category: "Networking", item: "REST (Representational State Transfer) architectural style defined by Roy Fielding in his UC Irvine dissertation" },
      { category: "CSS", item: "IE 5 for Mac (March 2000, led by Tantek Çelik) becomes the first browser to achieve >99% CSS1 compliance & DOCTYPE switching" },
      { category: "Validation", item: "W3C Markup & CSS Validator 88x31 badges ('Valid XHTML 1.0 Strict') become badges of honor" }
    ],
    prevailingTech: "DOCTYPE switching (Standards Mode vs Quirks Mode), XHTML 1.0 Strict syntax, document.getElementById() replacing document.all, and futuristic Flash 5 interfaces.",
    culturalContext: "The NASDAQ peaks at 5,048 in March 2000 before the Dot-Com Crash wipes out Pets.com, Webvan, and Boo.com. Design agencies like 2Advanced push Flash 5 to cinematic heights.",
    codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Standards Mode Portal</title>
  <script type="text/javascript">
    // DOM Level 2 Standard (2000)
    window.addEventListener("load", function() {
      var badge = document.getElementById("validator-status");
      badge.firstChild.nodeValue = "XHTML 1.0 Strict Verified";
    }, false);
  </script>
</head>
<body>
  <div id="validator-status">Checking...</div>
  <br />
  <img src="valid-xhtml10.png" alt="Valid XHTML 1.0!" width="88" height="31" />
</body>
</html>`,
    retroAudioType: "click"
  },
  {
    year: 2001,
    title: "2001: Internet Explorer 6, Quirks Mode & Box Model Hacks",
    subtitle: "Microsoft ships IE 6 with Windows XP; Tantek's Box Model Hack; SVG 1.0 Recommendation; Wikipedia launches.",
    layoutType: "ie6-luna",
    designParadigm: "Windows XP Luna Plasticity & IE6 CSS Filter Hacks",
    eraSites: "Wikipedia.org (launched Jan 2001), StumbleUpon, Newgrounds, Apple.com Aqua Tabs",
    specs: [
      { category: "Browser", item: "Internet Explorer 6.0 ships with Windows XP (Aug 2001), climbing past 90% global browser market share" },
      { category: "CSS", item: "IE6 Box Model Discrepancy: Quirks Mode includes padding/border inside width; solved via Tantek Çelik's voice-family hack" },
      { category: "HTML", item: "IE Conditional Comments (<!--[if lte IE 6]>...<![endif]-->) isolate proprietary fixes from standards-compliant browsers" },
      { category: "CSS", item: "DirectX AlphaImageLoader CSS filter required to render transparent 24-bit PNGs in IE6 without gray backgrounds" },
      { category: "Graphics", item: "SVG 1.0 (Scalable Vector Graphics) becomes an official W3C Recommendation in September 2001" },
      { category: "CSS", item: "W3C CSS3 Media Queries First Public Working Draft published; CSS3 split into independent specification modules" }
    ],
    prevailingTech: "Windows XP Luna blue/silver bevels, Mac OS X Aqua gel buttons, IE6 conditional stylesheets, voice-family box model hacks, and float clearing via <br clear=\"all\">.",
    culturalContext: "Wikipedia launches on January 15, 2001. Apple debuts Mac OS X with its lickable 'Aqua' UI, while Microsoft releases Windows XP—disbanding the IE team shortly after IE6 ships.",
    codeSnippet: `/* Tantek Çelik's 2001 Box Model Hack for IE5/IE6 Quirks */
div.content-box {
  width: 400px;          /* Width seen by IE5.x / Quirks (includes padding+border) */
  padding: 20px;
  border: 5px solid #0058ee;
  voice-family: "\\"}\\"";
  voice-family: inherit;
  width: 350px;          /* Actual content width for CSS1 Standards browsers */
}

<!--[if IE 6]>
<style type="text/css">
  .floated-col { display: inline; /* Fixes infamous IE6 Double-Margin Float Bug */ }
  .png-alpha {
    background: none;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='badge.png', sizingMethod='crop');
  }
</style>
<![endif]-->`,
    retroAudioType: "click"
  },
  {
    year: 2002,
    title: "2002: Tableless CSS Layouts, Faux Columns & Phoenix 0.1",
    subtitle: "Wired.com & ESPN.com go 100% tableless CSS; A List Apart 'Faux Columns' & Image Replacement; Mozilla 1.0 & Phoenix (Firefox).",
    layoutType: "css-zen-garden",
    designParadigm: "Semantic XHTML + Float-Based Tableless Architecture",
    eraSites: "Wired News (2002 CSS redesign), A List Apart, LinkedIn (founded), Friendster, Mozilla Phoenix",
    specs: [
      { category: "CSS", item: "Tableless CSS Layout Movement: Douglas Bowman leads Wired.com's October 2002 redesign using pure CSS floats" },
      { category: "Technique", item: "CSS Image Replacement (Fahrner / Phark text-indent: -9999px) renders graphic headings over semantic <h1> tags" },
      { category: "Browser", item: "Mozilla 1.0 released (June 2002); Dave Hyatt & Blake Ross fork lightweight 'Phoenix 0.1' (later Mozilla Firefox)" },
      { category: "JS / Data", item: "Douglas Crockford formalizes JSON (JavaScript Object Notation) at json.org as a lightweight alternative to XML" },
      { category: "Syndication", item: "Dave Winer publishes RSS 2.0 (Really Simple Syndication), powering the blogosphere & aggregator boom" },
      { category: "Web Services", item: "SOAP 1.2 and WSDL dominate enterprise XML web services before REST & JSON overtake them" }
    ],
    prevailingTech: "Semantic XHTML markup styled with external CSS stylesheets, float: left multi-column wrappers, background-image 'Faux Columns', and text-indent: -9999px logo headers.",
    culturalContext: "Web standards advocacy hits mainstream media when Wired News and ESPN Ditch tables for CSS, slashing page weight by half and inspiring Dave Shea's CSS Zen Garden (May 2003).",
    codeSnippet: `/* 2002 Tableless Float Layout + Faux Columns + Phark Image Replacement */
#container {
  width: 760px;
  margin: 0 auto;
  background: #f4f1ea url("faux-columns-bg.gif") repeat-y left top;
}
#brand-header h1 {
  width: 240px;
  height: 60px;
  background: url("masthead-logo.gif") no-repeat;
  text-indent: -9999px; /* Preserves <h1> text for screen readers & SEO */
}
#primary-col { float: left; width: 520px; }
#sidebar-col { float: right; width: 220px; }
#footer      { clear: both; border-top: 1px solid #8c7b6c; }`,
    retroAudioType: "click"
  },
  {
    year: 2003,
    title: "2003: CSS Zen Garden, MySpace Profiles, Safari 1.0 & WordPress",
    subtitle: "Dave Shea launches CSS Zen Garden; Apple ships Safari 1.0 (KHTML/WebKit); MySpace & WordPress democratize CSS.",
    layoutType: "myspace-profile",
    designParadigm: "User-Injected Profile CSS vs. Artisanal Botanical CSS",
    eraSites: "CSSZenGarden.com, MySpace.com, WordPress.org, Del.icio.us, iTunes Music Store, 4chan",
    specs: [
      { category: "CSS", item: "Dave Shea launches CSS Zen Garden (May 2003): hundreds of radically different designs built on one locked HTML file" },
      { category: "Browser", item: "Apple unveils Safari 1.0 (Jan/Jun 2003), forking KDE's KHTML into the open-source WebKit layout engine" },
      { category: "CSS", item: "CSS Sliding Doors technique (Douglas Bowman, Oct 2003) uses two overlapping background images for fluid rounded tabs" },
      { category: "User CSS", item: "MySpace allows raw <style> injection inside bio fields—teaching millions to override nested table selectors and scrollbars" },
      { category: "CMS", item: "Matt Mullenweg & Mike Little release WordPress 0.7 (May 2003) with semantic XHTML templates and trackbacks" },
      { category: "CSS", item: "IE proprietary scrollbar colors (scrollbar-face-color) and custom cursors (cursor: url('sparkle.cur'))" }
    ],
    prevailingTech: "CSS Sliding Doors tabs, CSS Zen Garden organic textures, and MySpace 'div overlay' hacks hiding default tables via table table td { background: transparent }.",
    culturalContext: "MySpace launches in August 2003; teenagers worldwide inadvertently become front-end developers by copying and tweaking CSS snippets to rank their 'Top 8' friends.",
    codeSnippet: `/* 2003 MySpace Bio CSS Override + CSS Sliding Doors Tab */
<style type="text/css">
  body {
    background: #000000 url(" skulls_tile.gif ") fixed;
    scrollbar-face-color: #ff007f;
    scrollbar-track-color: #111111;
  }
  /* Override MySpace's deeply nested layout tables */
  table, tr, td { background-color: transparent !important; border: 0px; }
  table table table {
    border: 2px dashed #ff007f !important;
    background-color: #141414 !important;
  }
  /* Sliding Doors Fluid Tab (A List Apart, Oct 2003) */
  #nav li   { float: left; background: url("tab_right.gif") no-repeat right top; }
  #nav li a { display: block; background: url("tab_left.gif") no-repeat left top; padding: 5px 15px; }
</style>`,
    retroAudioType: "click"
  },
  {
    year: 2004,
    title: "2004: Web 2.0, WHATWG Founded, Firefox 1.0 & CSS Sprites",
    subtitle: "Mozilla, Opera & Apple form WHATWG; Firefox 1.0 breaks IE6's monopoly; Gmail, Flickr & Thefacebook launch.",
    layoutType: "web20-glossy",
    designParadigm: "Web 2.0 Glossy Gradients, Wet Floor Reflections & Beta Badges",
    eraSites: "Gmail (1GB storage), Flickr, Thefacebook.com, Digg, Vimeo, Mozilla Firefox 1.0",
    specs: [
      { category: "Standards", item: "WHATWG founded (June 2004) by Ian Hickson (Opera), Mozilla & Apple after W3C rejects HTML evolution in favor of XHTML 2.0" },
      { category: "Browser", item: "Mozilla Firefox 1.0 launches (Nov 9, 2004) with popup blocking, tabbed browsing & extensions, eroding IE6's monopoly" },
      { category: "CSS", item: "CSS Sprites (Dave Shea, March 2004) combine dozens of UI icons into one image shifted via background-position" },
      { category: "Canvas", item: "Apple introduces the <canvas> 2D bitmap drawing tag in WebKit for Mac OS X Dashboard widgets (standardized by WHATWG)" },
      { category: "CSS", item: "Position Is Everything's 'Easy Clearing' (.clearfix::after { content: \".\"; display: block; clear: both; }) replaces <br clear>" },
      { category: "Web App", item: "Google launches Gmail on April 1, 2004 using heavy iframe/XMLHttpRequest RPC caching and keyboard shortcuts" }
    ],
    prevailingTech: "Diagonal stripes, glossy aqua pill buttons, starburst 'BETA' badges, orange XML/RSS chiclets, tag clouds, and CSS background-position icon sprites.",
    culturalContext: "Tim O'Reilly and Dale Dougherty host the first Web 2.0 Conference in October 2004. Mark Zuckerberg launches Thefacebook.com from his Harvard dorm room.",
    codeSnippet: `/* 2004 CSS Sprite Sheet & Piefecta .clearfix Hack */
.icon-sprite {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("web20-master-sprite.png");
  background-repeat: no-repeat;
}
.icon-rss      { background-position: 0px 0px; }
.icon-digg     { background-position: -16px 0px; }
.icon-bookmark { background-position: -32px 0px; }

/* Clearfix without extra markup (2004) */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}`,
    retroAudioType: "click"
  },
  {
    year: 2005,
    title: "2005: The Ajax Revolution, Google Maps, Prototype & sIFR",
    subtitle: "Jesse James Garrett coins 'Ajax'; Google Maps & YouTube launch; Prototype.js & script.aculo.us power Web 2.0 UX.",
    layoutType: "ajax-dashboard",
    designParadigm: "Rich Internet Applications (RIA), Yellow Fade & Drag-and-Drop",
    eraSites: "Google Maps, YouTube ('Broadcast Yourself'), Reddit, Basecamp (37signals), Pandora",
    specs: [
      { category: "Architecture", item: "Jesse James Garrett publishes 'Ajax: A New Approach to Web Applications' (Feb 18, 2005), naming the async XHR stack" },
      { category: "JavaScript", item: "Sam Stephenson's Prototype.js ($() helper, Class.create) & Thomas Fuchs's script.aculo.us bring rich UI effects" },
      { category: "UX Pattern", item: "37signals' Yellow Fade Technique (YFT) & inline-edit inputs signal asynchronous DOM mutations without full page reloads" },
      { category: "Typography", item: "sIFR (Scalable Inman Flash Replacement) embeds custom fonts in headings via overlaid Flash movies before @font-face" },
      { category: "Graphics", item: "Firefox 1.5 (Nov 2005) ships native <canvas> and SVG support; Acid2 browser compliance test published by WaSP" },
      { category: "Media", item: "YouTube launches (Feb 2005) using Macromedia Flash Player 7/8 Sorenson Spark FLV video streaming—solving browser video" }
    ],
    prevailingTech: "Draggable map tiles (Google Maps), Prototype.js Ajax.Updater, script.aculo.us Effect.Highlight (Yellow Fade), rounded corners via Nifty Corners JS, and Flash FLV video.",
    culturalContext: "Google Maps blows minds in February 2005 by letting users pan a map without reloading the page. YouTube's 'Me at the zoo' uploads in April 2005.",
    codeSnippet: `// 2005 Prototype.js + script.aculo.us Ajax & Yellow Fade Technique
function saveTodoItem(formElement) {
  new Ajax.Updater('todo-list-container', '/todos/create', {
    method: 'post',
    parameters: Form.serialize(formElement),
    insertion: Insertion.Bottom,
    onComplete: function(request) {
      // 37signals Yellow Fade Technique (YFT)
      new Effect.Highlight('todo-list-container', {
        startcolor: '#ffff99',
        endcolor: '#ffffff',
        duration: 1.2
      });
    }
  });
  return false;
}`,
    retroAudioType: "click"
  },
  {
    year: 2006,
    title: "2006: jQuery 1.0, Firebug 1.0, YUI Grids & Sass/Haml",
    subtitle: "John Resig releases jQuery 1.0; Joe Hewitt creates Firebug; Twitter ('twttr') launches; IE7 ships after 5 years.",
    layoutType: "jquery-era",
    designParadigm: "DOM Chaining, Lightbox Overlays & 12/16-Column CSS Frameworks",
    eraSites: "Twitter (twttr), Spotify (founded), Facebook News Feed launch, BuzzFeed, SoundCloud",
    specs: [
      { category: "JavaScript", item: "John Resig releases jQuery 1.0 (Aug 2006): CSS selector engine $(...), chainable DOM methods, and cross-browser $.ajax" },
      { category: "DevTools", item: "Joe Hewitt releases Firebug 1.0 for Firefox—inventing the modern DOM inspector, live CSS editor, and console.log()" },
      { category: "Frameworks", item: "Yahoo! open-sources YUI Library & YUI Grids CSS; MooTools and Dojo Toolkit compete in the JS library wars" },
      { category: "Tooling", item: "Hampton Catlin & Natalie Weizenbaum create Haml and Sass (Syntactically Awesome Style Sheets), introducing CSS preprocessing" },
      { category: "Standards", item: "RFC 4627 officially registers application/json MIME type; W3C standardizes the XMLHttpRequest Object Working Draft" },
      { category: "Browser", item: "Internet Explorer 7.0 ships (Oct 2006) fixing native PNG alpha transparency and key IE6 float/box-model bugs" }
    ],
    prevailingTech: "jQuery $(document).ready(), Lokesh Dhakar's Lightbox JS modal image overlays, rounded corners, AJAX autocomplete search bars, and 140-character microblog inputs.",
    culturalContext: "Jack Dorsey sends the first tweet ('just setting up my twttr') in March 2006. Firebug liberates web developers from debugging JavaScript with window.alert() boxes.",
    codeSnippet: `// 2006 jQuery 1.0 Chaining + Firebug console.log()
$(document).ready(function() {
  $("a.lightbox-trigger").click(function() {
    var imgUrl = $(this).attr("href");
    console.log("Firebug Inspector: Opening Lightbox for", imgUrl);

    $("#overlay-backdrop").fadeIn("fast");
    $("#status-drawer")
      .addClass("active-panel")
      .slideDown("slow")
      .load("/api/status.html");
    return false;
  });
});`,
    retroAudioType: "click"
  },
  {
    year: 2007,
    title: "2007: iPhone Mobile Safari, Viewport Meta & CSS Reset Grids",
    subtitle: "Steve Jobs introduces iPhone with desktop-class WebKit Safari, <meta name=\"viewport\"> & Touch Events; Eric Meyer Reset.",
    layoutType: "iphone-safari",
    designParadigm: "Multi-Touch Mobile WebKit, 960px Fixed Grids & Glossy Skeuomorphism",
    eraSites: "Apple iPhone Web Apps, Tumblr, Dropbox, Justin.tv (Twitch), Hulu, Hashable",
    specs: [
      { category: "Mobile", item: "Apple Mobile Safari (June 2007) introduces <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" },
      { category: "Touch API", item: "Multi-touch DOM events debuted in iOS WebKit: touchstart, touchmove, touchend, gesturechange" },
      { category: "CSS", item: "WebKit introduces proprietary -webkit-transition and -webkit-transform (2D scale/rotate) for hardware-accelerated iPhone UI" },
      { category: "CSS", item: "Eric Meyer publishes his canonical 'Reset CSS' (2007); Blueprint CSS & Nathan Smith's 960 Grid System standardize 12/16 columns" },
      { category: "Standards", item: "W3C charters the new HTML Working Group (March 2007), adopting WHATWG's Web Applications 1.0 spec as the basis of HTML5" },
      { category: "Typography", item: "Safari 3.1 / WebKit revives the CSS2 @font-face rule with TrueType/OpenType (.ttf/.otf) web font linking" }
    ],
    prevailingTech: "960px 12-column grids on desktop, iPhone glass pin-striped lists (iUI framework) on mobile, <meta name=\"viewport\">, and apple-touch-icon.png homescreen bookmarks.",
    culturalContext: "Steve Jobs declares 'It runs the real internet—not the baby internet' at Macworld 2007, refusing to support Flash on iPhone and forcing the web toward open HTML5 standards.",
    codeSnippet: `<!-- 2007 Mobile Safari Viewport & Hardware-Accelerated WebKit CSS -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<style type="text/css">
  /* Eric Meyer 2007 CSS Reset excerpt + WebKit Touch Transitions */
  html, body, div, h1, ul, li { margin: 0; padding: 0; border: 0; }
  .iphone-list-row {
    padding: 14px 16px;
    border-bottom: 1px solid #d9d9d9;
    -webkit-tap-highlight-color: rgba(0, 122, 255, 0.3);
    -webkit-transition: background-color 0.2s ease-in-out;
  }
</style>
<script type="text/javascript">
  document.addEventListener("touchstart", function(e) {
    var touch = e.touches[0];
    console.log("Multi-touch at:", touch.pageX, touch.pageY);
  }, false);
</script>`,
    retroAudioType: "click"
  },
  {
    year: 2008,
    title: "2008: Google Chrome V8, HTML5 First Public Draft & Acid3",
    subtitle: "W3C publishes HTML5 First Public Working Draft; Google launches Chrome with V8 JIT compiler; GitHub & Stack Overflow.",
    layoutType: "chrome-v8",
    designParadigm: "High-Velocity Web Apps, Multi-Process Browser Chrome & LocalStorage",
    eraSites: "GitHub.com, StackOverflow.com, Airbnb, Google Chrome Comic Book, Dribbble (invite alpha)",
    specs: [
      { category: "HTML5", item: "W3C publishes HTML5 First Public Working Draft (Jan 22, 2008) introducing <video>, <audio>, <canvas>, <section>, <article>" },
      { category: "Browser", item: "Google Chrome 1.0 (Sep/Dec 2008) debuts process-per-tab sandboxing and Lars Bak's V8 JS engine (compiling JS directly to machine code)" },
      { category: "APIs", item: "HTML5 DOM Storage (localStorage / sessionStorage), Offline Application Cache, and Cross-Document Messaging (window.postMessage)" },
      { category: "JavaScript", item: "ECMAScript 4 ('Harmony') abandoned in Oslo (July 2008) in favor of incremental ES3.1 (which becomes ES5)" },
      { category: "CSS", item: "W3C Selectors API Level 1 introduces document.querySelector() and document.querySelectorAll() natively in browsers" },
      { category: "Standards", item: "WaSP releases the Acid3 test (March 2008) pushing DOM, ECMAScript, SVG, and @font-face browser interoperability" }
    ],
    prevailingTech: "Native document.querySelectorAll(), localStorage persistence, V8-accelerated Canvas 2D visualizations, and bookish code-hosting UIs (GitHub / Stack Overflow).",
    culturalContext: "Google announces Chrome via a 38-page Scott McCloud comic book. GitHub and Stack Overflow both launch in 2008, permanently transforming how developers collaborate.",
    codeSnippet: `// 2008 Native Selectors API + HTML5 localStorage + postMessage
var cards = document.querySelectorAll(".repo-card.featured");
for (var i = 0; i < cards.length; i++) {
  cards[i].style.borderColor = "#4285F4";
}

// Persist state without cookies (5MB HTML5 Web Storage)
if (window.localStorage) {
  localStorage.setItem("lastVisitedEra", "2008-chrome-v8");
}

// Safe cross-origin iframe communication
window.postMessage(JSON.stringify({ event: "v8BenchmarkComplete", ops: 9842 }), "https://example.com");`,
    retroAudioType: "click"
  },
  {
    year: 2009,
    title: "2009: ECMAScript 5, Node.js, WOFF Web Fonts & Vendor Prefixes",
    subtitle: "ES5 standardized; Ryan Dahl unveils Node.js; Typekit & WOFF 1.0 launch; -webkit-/-moz- CSS3 rounded corners & shadows.",
    layoutType: "css3-decorations",
    designParadigm: "Vendor-Prefixed CSS3 Tactile UI & Web Font Typography",
    eraSites: "Typekit, Foursquare, Uber (UberCab), Kickstarter, Square, Nodejs.org",
    specs: [
      { category: "JavaScript", item: "ECMAScript 5th Edition (ES5, Dec 2009): 'use strict', JSON.parse/stringify, Array.prototype.forEach/map/filter/reduce, Object.create/defineProperty" },
      { category: "Runtime", item: "Ryan Dahl presents Node.js at JSConf EU (Nov 2009), pairing Chrome's V8 engine with an event-driven non-blocking I/O loop" },
      { category: "CSS3", item: "Vendor-prefixed CSS3 explosion: -moz-border-radius, -webkit-box-shadow, text-shadow, rgba() alpha colors, and -webkit-gradient()" },
      { category: "Typography", item: "WOFF 1.0 (Web Open Font Format) developed by Mozilla/Opera/Microsoft; Typekit launches commercial cloud web font hosting" },
      { category: "APIs", item: "W3C Geolocation API (navigator.geolocation.getCurrentPosition) & Web Workers API (background JS threads) ship in browsers" },
      { category: "Networking", item: "CORS (Cross-Origin Resource Sharing) working draft enables authorized cross-domain XMLHttpRequest via Access-Control-Allow-Origin" }
    ],
    prevailingTech: "Triplicate CSS rules (-webkit-, -moz-, standard) for border-radius, box-shadow, and gradients; custom @font-face WOFF typography; Modernizr feature detection.",
    culturalContext: "Ryan Dahl receives a standing ovation at JSConf EU for Node.js, uniting front-end and back-end under JavaScript. Custom web fonts end the 15-year reign of Arial, Verdana, and Georgia.",
    codeSnippet: `"use strict"; // ES5 Strict Mode (2009)
var prices = [19.99, 49.00, 5.50];
var taxed = prices
  .filter(function(p) { return p > 10; })
  .map(function(p) { return +(p * 1.08).toFixed(2); });

/* 2009 Vendor-Prefixed CSS3 Stack */
.button-2009 {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
}`,
    retroAudioType: "click"
  },
  {
    year: 2010,
    title: "2010: Responsive Web Design, Death of Flash & WebGL / SVG",
    subtitle: "Ethan Marcotte coins 'Responsive Web Design'; Steve Jobs pens 'Thoughts on Flash'; npm, Backbone.js, AngularJS & Google Fonts.",
    layoutType: "responsive-html5",
    designParadigm: "Fluid Grids, Letterpress Skeuomorphism & Breakpoint Media Queries",
    eraSites: "Boston Globe (RWD prototype), Instagram, Pinterest, Stripe (dev preview), HTML5Rocks.com",
    specs: [
      { category: "Design", item: "Ethan Marcotte publishes 'Responsive Web Design' on A List Apart (May 25, 2010): fluid percentage grids, flexible images, CSS3 @media queries" },
      { category: "HTML5", item: "Steve Jobs publishes 'Thoughts on Flash' (April 2010); YouTube & Vimeo launch HTML5 <video> players using H.264 & WebM" },
      { category: "JavaScript", item: "isaacs launches npm (Node Package Manager, Jan 2010); Jeremy Ashkenas releases Backbone.js & CoffeeScript; AngularJS 1.0 begins" },
      { category: "Typography", item: "Google Font Directory (Google Fonts) launches (May 2010) offering free open-source @font-face delivery via CDN" },
      { category: "Graphics", item: "WebGL 1.0 draft brings hardware-accelerated 3D OpenGL ES 2.0 shaders to <canvas>; WOFF 1.0 submitted to W3C" },
      { category: "APIs", item: "HTML5 History API (history.pushState / replaceState / onpopstate) replaces hashbang (#!) URLs for clean client routing" }
    ],
    prevailingTech: "Subtle noise patterns, 1px white text-shadow 'letterpress' typography, stitched ribbon banners, HTML5 <header>/<nav>/<article> tags, and @media (max-width) breakpoints.",
    culturalContext: "The iPad launches in April 2010, shattering the assumption that screens are either 320px phones or 1024px desktops. Responsive Web Design becomes the new industry paradigm.",
    codeSnippet: `/* Ethan Marcotte's 2010 Responsive Web Design Formula: target / context = result */
.page-shell {
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
}
.main-article { float: left; width: 65.789473%; /* 750px / 1140px */ }
.side-rail    { float: right; width: 31.578947%; /* 360px / 1140px */ }
img, video    { max-width: 100%; height: auto; }

@media screen and (max-width: 768px) {
  .main-article, .side-rail { float: none; width: 100%; }
}`,
    retroAudioType: "click"
  },
  {
    year: 2011,
    title: "2011: Twitter Bootstrap 1.0, CSS3 @keyframes & WebSockets RFC",
    subtitle: "Mark Otto & Jacob Thornton release Twitter Bootstrap; CSS3 Keyframe Animations; WebSockets RFC 6455 & WebRTC.",
    layoutType: "css3-keyframes",
    designParadigm: "Bootstrap Fixed Topbars, Subtle Gradients & Real-Time Sockets",
    eraSites: "GetBootstrap.com, Trello, Twitch.tv, Snapchat, NYTimes 'Snow Fall' (in development)",
    specs: [
      { category: "UI Framework", item: "Twitter releases Bootstrap 1.0 (Aug 2011), standardizing 12-column grids, dark top navbars, pill buttons, and Less variables" },
      { category: "Networking", item: "WebSockets Protocol standardized as IETF RFC 6455 (Dec 2011) for full-duplex, low-latency TCP communication" },
      { category: "CSS3", item: "CSS3 Animations (@keyframes, animation-timing-function: cubic-bezier) & 3D Transforms (-webkit-transform: translate3d)" },
      { category: "Media", item: "Google open-sources WebRTC (May 2011) for plugin-free peer-to-peer audio, video, and data streaming in browsers" },
      { category: "JavaScript", item: "ECMAScript 5.1 (June 2011) aligns with ISO/IEC; AMD (RequireJS) vs CommonJS module loader debates intensify" },
      { category: "Semantics", item: "Google, Bing & Yahoo! launch Schema.org (June 2011) microdata vocabulary; HTML5 declared 'Last Call' at W3C" }
    ],
    prevailingTech: "Twitter Bootstrap 1.x scaffolding, Less/Compass CSS compilers, jQuery plugins, Modernizr + HTML5 Shiv for IE8, and real-time Socket.IO / WebSockets dashboards.",
    culturalContext: "Bootstrap becomes the most starred repository on GitHub within weeks, giving thousands of developer-built startups an instant, cohesive UI language.",
    codeSnippet: `// 2011 RFC 6455 WebSocket + Hardware-Accelerated CSS3 Keyframes
const socket = new WebSocket("wss://realtime.example.com/stream");
socket.addEventListener("message", function(event) {
  const payload = JSON.parse(event.data);
  document.querySelector("#live-ticker").textContent = payload.price;
});

/* CSS3 GPU-Accelerated Keyframe Pulse */
@keyframes badgePulse {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(0, -2px, 0) scale(1.06); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}`,
    retroAudioType: "click"
  },
  {
    year: 2012,
    title: "2012: Full-Bleed Hero Photography, TypeScript 0.8 & Flexbox CR",
    subtitle: "Microsoft unveils TypeScript; CSS Flexbox reaches W3C Candidate Recommendation; Grunt, Webpack & Retina 2x displays.",
    layoutType: "flexbox-spa",
    designParadigm: "Full-Viewport Hero Photography, Slab Serifs & Parallax Scrollytelling",
    eraSites: "NYTimes 'Snow Fall', Medium.com, Square.com, Canva, Coursera, KickStarter",
    specs: [
      { category: "CSS", item: "CSS Flexible Box Layout (Flexbox) reaches W3C Candidate Recommendation (Sep 2012) with modern display: flex syntax" },
      { category: "TypeScript", item: "Anders Hejlsberg & Microsoft unveil TypeScript 0.8 (Oct 2012), adding optional static typing and classes to JavaScript" },
      { category: "HiDPI", item: "Apple Retina MacBook Pro & iPad drive 2x HiDPI web assets (@media (-webkit-min-device-pixel-ratio: 2)) and icon fonts (FontAwesome)" },
      { category: "Tooling", item: "Grunt task runner, Bower package manager, and Tobias Koppers's early Webpack prototype automate front-end build pipelines" },
      { category: "Performance", item: "W3C High Resolution Time (performance.now()) and requestAnimationFrame() enable locked 60fps animations" },
      { category: "APIs", item: "IndexedDB client-side NoSQL database and Fullscreen API (element.requestFullscreen()) gain cross-browser adoption" }
    ],
    prevailingTech: "Full-bleed dark-tinted hero photography, chunky slab-serif headlines (Rockwell/Museo Slab), FontAwesome icon fonts, parallax scrollytelling, and AngularJS/Backbone SPAs.",
    culturalContext: "The New York Times publishes 'Snow Fall: The Avalanche at Tunnel Creek' in December 2012, inaugurating the golden age of immersive long-form digital scrollytelling.",
    codeSnippet: `// 2012 TypeScript 0.8 + 60fps requestAnimationFrame Parallax
interface HeroSlide {
  readonly id: number;
  title: string;
  parallaxRatio: number;
}

function updateParallaxScroll(): void {
  const scrollY = window.pageYOffset;
  const hero = document.querySelector(".hero-backdrop") as HTMLElement;
  hero.style.transform = "translate3d(0, " + (scrollY * 0.35) + "px, 0)";
  window.requestAnimationFrame(updateParallaxScroll);
}`,
    retroAudioType: "click"
  },
  {
    year: 2013,
    title: "2013: React.js Open-Sourced, iOS 7 Flat Design & Blink Engine",
    subtitle: "Jordan Walke & Facebook open-source React at JSConf US; Apple iOS 7 kills skeuomorphism; Google forks WebKit into Blink.",
    layoutType: "flat-react",
    designParadigm: "Ultra-Clean Flat UI, Thin Helvetica Neue & Component Virtual DOM",
    eraSites: "Apple.com iOS 7, Stripe Checkout, Slack (launched), Ghost.org, Figma (founded)",
    specs: [
      { category: "JavaScript", item: "Facebook open-sources React.js (May 2013 at JSConf US), introducing the Virtual DOM, JSX, and unidirectional data flow" },
      { category: "Design", item: "Apple's iOS 7 (June 2013) & Microsoft Metro trigger an industry-wide shift from skeuomorphic textures to Flat Design" },
      { category: "Browser", item: "Google forks WebKit to create the Blink rendering engine (April 2013) for Chrome 28+; Opera switches from Presto to Blink" },
      { category: "Wasm Precursor", item: "Mozilla introduces asm.js (March 2013)—a strictly-typed subset of JS compiling C/C++ Unreal Engine 3 to run in Firefox" },
      { category: "HTML5", item: "W3C HTML <template> element specification standardized for inert, cloneable client-side DOM fragments" },
      { category: "Tooling", item: "Gulp streaming build system, ESLint (created by Nicholas Zakas), and Electron (Atom Shell) debut" }
    ],
    prevailingTech: "Zero drop-shadows, bright flat color blocks (#007AFF, #4CD964, #FF2D55), ultra-light 100/300 font weights, translucent frosted navbars, and declarative React components.",
    culturalContext: "When Jordan Walke first showed JSX combining HTML and JS in the same file at JSConf US 2013, the audience gasped in skepticism—before React went on to conquer the industry.",
    codeSnippet: `// 2013 React 0.3 Component with JSX & Virtual DOM State
var FlatSpecToggle = React.createClass({
  getInitialState: function() {
    return { activeTab: "virtual-dom", flatMode: true };
  },
  handleSwitch: function(tabName) {
    this.setState({ activeTab: tabName });
  },
  render: function() {
    return (
      <div className="ios7-flat-card">
        <h2>{this.props.title}</h2>
        <span className="badge">{this.state.activeTab}</span>
      </div>
    );
  }
});`,
    retroAudioType: "click"
  },
  {
    year: 2014,
    title: "2014: HTML5 W3C Recommendation, Responsive <picture> & Flat 2.0",
    subtitle: "HTML5 reaches final W3C Recommendation after 10 years; <picture> & srcset ship; Vue.js, Babel (6to5) & Let's Encrypt.",
    layoutType: "html5-webcomponents",
    designParadigm: "Flat 2.0, Translucent Ghost Buttons & Inline SVG Vector Systems",
    eraSites: "Google Polymer Project, Product Hunt, Monument Valley Web, Vox.com, CodePen",
    specs: [
      { category: "HTML5", item: "HTML5 officially becomes a W3C Recommendation (Oct 28, 2014), completing a decade-long journey from WHATWG's 2004 rebellion" },
      { category: "Images", item: "Responsive Images specification (<picture>, <source media>, and <img srcset sizes>) ships to solve multi-DPI art direction" },
      { category: "Web Components", item: "Web Components v0 (document.registerElement, Shadow DOM v0, HTML Imports) ships in Chrome 36 alongside Google Polymer" },
      { category: "JavaScript", item: "Evan You releases Vue.js 0.11 (Feb 2014); Sebastian McKenzie creates 6to5 (renamed Babel) enabling ES6 transpilation today" },
      { category: "Security", item: "Let's Encrypt announced (Nov 2014) by EFF/Mozilla to automate free TLS certificates and transition the web to 100% HTTPS" },
      { category: "Graphics", item: "Inline <svg> sprites with <use xlink:href=\"#icon\"> and CSS stroke-dasharray animations replace blurry icon fonts" }
    ],
    prevailingTech: "Full-width dimmed hero banners with hollow 'Ghost Buttons' (2px white border, transparent fill), inline SVG line-art animations, and Babel-transpiled ES6.",
    culturalContext: "In 2014, almost every startup landing page featured a darkened stock video/photo background with a centered 2px-bordered 'Ghost Button' and crisp SVG line icons.",
    codeSnippet: `<!-- 2014 HTML5 W3C Recommendation: Native <picture> & srcset Art Direction -->
<picture>
  <source media="(min-width: 1024px)"
          srcset="hero-widescreen-2x.webp 2x, hero-widescreen-1x.webp 1x"
          type="image/webp">
  <source media="(min-width: 600px)"
          srcset="hero-tablet.jpg 1x, hero-tablet-retina.jpg 2x">
  <img src="hero-mobile-fallback.jpg"
       alt="HTML5 W3C Recommendation October 2014"
       width="1200" height="600">
</picture>

<!-- 2014 Ghost Button Aesthetic -->
<a href="#specs" class="ghost-btn" style="border: 2px solid #fff; background: transparent; color: #fff; padding: 12px 28px;">
  EXPLORE HTML5 SPECS
</a>`,
    retroAudioType: "click"
  },
  {
    year: 2015,
    title: "2015: ES6 (ES2015) Watershed, Fetch API, HTTP/2 & Material Design",
    subtitle: "ECMAScript 2015 (ES6) approved; Fetch API & Service Workers ship; HTTP/2 standardized; Redux, GraphQL & Microsoft Edge.",
    layoutType: "es6-modern",
    designParadigm: "Google Material Design (Quantum Paper), Z-Depth Shadows & FABs",
    eraSites: "Material.io, Discord (launched), Robinhood, Medium, GraphQL.org, Redux.js.org",
    specs: [
      { category: "JavaScript", item: "ECMAScript 2015 (ES6) approved (June 2015): let/const, arrow functions () => {}, classes, Promises, destructuring, Map/Set, ES Modules" },
      { category: "Networking", item: "WHATWG Fetch API (fetch(url).then(r => r.json())) ships as a Promise-based replacement for 16-year-old XMLHttpRequest" },
      { category: "HTTP/2", item: "HTTP/2 standardized as IETF RFC 7540 (May 2015): binary framing, multiplexed streams over a single TCP connection, HPACK header compression" },
      { category: "Architecture", item: "Facebook open-sources GraphQL and React Native; Dan Abramov & Andrew Clark introduce Redux with hot-reloading time travel" },
      { category: "PWA", item: "Alex Russell & Frances Berriman coin 'Progressive Web Apps' (PWAs) powered by Service Workers and Web App Manifests" },
      { category: "Browser", item: "Microsoft retires Internet Explorer on Windows 10, launching Microsoft Edge (EdgeHTML engine) in July 2015" }
    ],
    prevailingTech: "Google Material Design tactile 'Quantum Paper' cards with calibrated multi-layer box-shadows (z-depth 1-5), Floating Action Buttons (FAB), and Babel + Webpack + Redux.",
    culturalContext: "ES6 (ES2015) is the largest language upgrade in JavaScript's 20-year history, establishing the annual TC39 release train and modern syntax we write today.",
    codeSnippet: `// 2015 ES6 Modules, Classes, Destructuring, Template Literals & Fetch API
import { createStore } from 'redux';

export class SpecRepository {
  constructor(baseUrl = 'https://api.example.com/v1') {
    this.baseUrl = baseUrl;
  }

  async loadEra({ year = 2015, category = 'JavaScript' } = {}) {
    const response = await fetch(\`\${this.baseUrl}/specs/\${year}?cat=\${category}\`);
    const { items, meta } = await response.json();
    return items.map(item => ({ ...item, verified: meta.w3cApproved }));
  }
}`,
    retroAudioType: "click"
  },
  {
    year: 2016,
    title: "2016: Skeleton Screens, CSS Custom Properties & Component SPAs",
    subtitle: "CSS Variables (--*) go cross-browser; Web Components v1; Create React App, Next.js 1.0, Vue 2.0 & Angular 2.",
    layoutType: "async-dashboard",
    designParadigm: "Shimmering Skeleton Placeholders, Dark IDE Dashboards & CSS Variables",
    eraSites: "Vercel (Zeit Now / Next.js), Slack Web Client, Facebook Feed Skeletons, Notion 1.0",
    specs: [
      { category: "CSS", item: "CSS Custom Properties for Cascading Variables (--primary: #61dafb; var(--primary)) achieve cross-browser production support" },
      { category: "Web Components", item: "Web Components v1 spec (customElements.define(), attachShadow({ mode: 'open' })) replaces deprecated v0 APIs" },
      { category: "JavaScript", item: "ES2016 (Array.prototype.includes, exponentiation **) approved; ES2017 async/await ships in Chrome 55, Firefox 52 & Safari 10.1" },
      { category: "Frameworks", item: "Create React App (zero-config CLI), Zeit's Next.js 1.0 (universal SSR React), Vue 2.0, and TypeScript-based Angular 2 launch" },
      { category: "Typography", item: "WOFF2 font compression (Brotli-based, 30% smaller than WOFF 1.0) & system font stacks (-apple-system, BlinkMacSystemFont) gain traction" },
      { category: "UX Pattern", item: "Animated CSS shimmer 'Skeleton Screens' (pioneered by Luke Wroblewski) replace spinning loading wheels across SPAs" }
    ],
    prevailingTech: "Shimmering gradient skeleton loading screens, runtime CSS Custom Property theming, CSS Modules / Styled-Components (CSS-in-JS), and Yarn deterministic lockfiles.",
    culturalContext: "After the March 2016 npm 'left-pad' incident briefly broke thousands of builds worldwide, Yarn and lockfiles emerged to harden the JavaScript supply chain.",
    codeSnippet: `/* 2016 Runtime CSS Custom Properties + Shimmer Skeleton UI */
:root {
  --surface-card: #20202a;
  --shimmer-base: #2a2a35;
  --shimmer-peak: #3f3f50;
}

.skeleton-line {
  background: linear-gradient(90deg, var(--shimmer-base) 25%, var(--shimmer-peak) 50%, var(--shimmer-base) 75%);
  background-size: 200% 100%;
  animation: pulseShimmer 1.4s ease-in-out infinite;
}

// Web Components v1 Standard (2016)
customElements.define('spec-skeleton', class extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = \`<div class="skeleton-line"></div>\`;
  }
});`,
    retroAudioType: "click"
  },
  {
    year: 2017,
    title: "2017: The CSS Grid Revolution, WebAssembly 1.0 & Stripe-Core UI",
    subtitle: "CSS Grid ships simultaneously in Chrome, Firefox, Safari & Edge (March 2017); WebAssembly 1.0 MVP; ES2017 async/await.",
    layoutType: "css-grid",
    designParadigm: "2D Asymmetric Editorial CSS Grids & Skewed Diagonal Stripe Gradients",
    eraSites: "Stripe.com (iconic angled mesh hero), Mozilla Quantum, Figma in-browser Wasm, GridByExample.com",
    specs: [
      { category: "CSS Grid", item: "Historic March 2017 simultaneous launch: CSS Grid Layout ships unprefixed in Chrome 57, Firefox 52, Safari 10.1 (and Edge 16 in Oct)" },
      { category: "CSS Grid", item: "2D intrinsic track sizing: grid-template-areas, minmax(), fr flexible units, and repeat(auto-fit, minmax(240px, 1fr))" },
      { category: "WebAssembly", item: "WebAssembly (Wasm) 1.0 MVP reaches cross-browser consensus (March 2017), running C++/Rust binary modules at near-native speed" },
      { category: "JavaScript", item: "ES2017 standardized: native async / await functions, Object.values(), Object.entries(), String.prototype.padStart(), SharedArrayBuffer" },
      { category: "Graphics", item: "WebGL 2.0 ships in Chrome & Firefox; dynamic import() proposal enables route-level code splitting" },
      { category: "CSS", item: "CSS @supports (...) Feature Queries allow progressive enhancement for Grid layouts with Flexbox fallbacks" }
    ],
    prevailingTech: "Two-dimensional CSS Grid magazine layouts (Rachel Andrew / Jen Simmons), Stripe-inspired skewed diagonal gradient headers (-4deg), and WebAssembly engines (Figma).",
    culturalContext: "For the first time in web history, web designers gained a true native 2D layout system designed specifically for the screen—ending 24 years of table and float hacks.",
    codeSnippet: `/* March 2017: Native 2D CSS Grid Layout with Named Template Areas */
.editorial-magazine-grid {
  display: grid;
  grid-template-columns: minmax(180px, 1fr) 2fr 1.2fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "masthead  hero      hero"
    "sidebar   feature   aside-stack"
    "footer    footer    footer";
  gap: 1.5rem;
}

/* Intrinsic responsive cards without a single @media query */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}`,
    retroAudioType: "click"
  },
  {
    year: 2018,
    title: "2018: IntersectionObserver, Variable Fonts, Scroll Snap & GDPR UX",
    subtitle: "OpenType Variable Fonts & CSS Scroll Snap; IntersectionObserver kills scroll-jank; React Hooks announced; WebAuthn & GDPR.",
    layoutType: "pwa-scroll",
    designParadigm: "Split-Screen Vector SaaS ('Corporate Memphis'), Variable Type & Cookie Banners",
    eraSites: "Dropbox 2018 Rebrand, Intercom, Airtable, Glitch.com, Squoosh.app (Google Chrome Labs)",
    specs: [
      { category: "API", item: "IntersectionObserver API achieves universal support—replacing main-thread window.onscroll listeners for lazy loading & scroll reveals" },
      { category: "Typography", item: "OpenType Variable Fonts (font-variation-settings, weight/width/slant axes in a single file) & CSS font-display: swap" },
      { category: "CSS", item: "CSS Scroll Snap (scroll-snap-type: x mandatory; scroll-snap-align: center) enables native physics-based carousels without JS" },
      { category: "Security", item: "WebAuthn (Web Authentication API) reaches W3C Candidate Recommendation for hardware security keys & biometric passkeys" },
      { category: "JavaScript", item: "ES2018 standardized: Object Rest/Spread ({ ...state }), Promise.prototype.finally(), and for-await-of async iterators" },
      { category: "Frameworks", item: "Sophie Alpert & Dan Abramov unveil React Hooks (useState, useEffect) at React Conf Oct 2018; iOS 11.3 adds PWA Service Workers" }
    ],
    prevailingTech: "Custom flat geometric human illustrations ('Corporate Memphis' / Alegria), bold clashing brand palettes (Dropbox rebrand), Variable Fonts, and GDPR consent modals.",
    culturalContext: "On May 25, 2018, the EU's General Data Protection Regulation (GDPR) takes effect, instantly making cookie consent banners and privacy toggles a permanent fixture of web design.",
    codeSnippet: `// 2018 Zero-Jank Scroll Reveals via IntersectionObserver + Object Spread
const revealObserver = new IntersectionObserver((entries, obs) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.dataset.revealed = "true";
      obs.unobserve(entry.target);
    }
  }
}, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });

/* 2018 OpenType Variable Font Continuous Axis + Native Scroll Snap */
.kinetic-headline {
  font-family: "Inter var", sans-serif;
  font-variation-settings: "wght" 780, "slnt" -6;
  font-display: swap;
}`,
    retroAudioType: "click"
  },
  {
    year: 2019,
    title: "2019: OS Dark Mode (prefers-color-scheme), Tailwind CSS & Neumorphism",
    subtitle: "CSS prefers-color-scheme & prefers-reduced-motion; ResizeObserver; Tailwind CSS 1.0, Svelte 3 & Jamstack boom.",
    layoutType: "dark-mode-sync",
    designParadigm: "OS-Adaptive Dark Themes, Utility-First Tokens & Tactile Neumorphism",
    eraSites: "TailwindCSS.com, GitHub Dark Mode Preview, Svelte.dev, Netlify Jamstack, Dribbble Neumorphism",
    specs: [
      { category: "CSS", item: "@media (prefers-color-scheme: dark) and (prefers-reduced-motion: reduce) sync web pages with OS-level user preferences" },
      { category: "API", item: "ResizeObserver API ships across engines—letting components react to their own element dimension changes rather than window.resize" },
      { category: "CSS", item: "CSS :focus-visible pseudo-class shows high-contrast focus rings for keyboard navigation while suppressing mouse-click outlines" },
      { category: "HTML", item: "Native lazy loading (<img loading=\"lazy\" width=\"...\" height=\"...\">) lands in Chromium 76 without JavaScript observers" },
      { category: "JavaScript", item: "ES2019 (Array.prototype.flat/flatMap, Object.fromEntries, Optional catch binding); Rich Harris releases compiler-first Svelte 3" },
      { category: "Styling", item: "Adam Wathan releases Tailwind CSS 1.0 (May 2019), catalyzing the shift from semantic BEM classes to composable utility tokens" }
    ],
    prevailingTech: "Dual Light/Dark CSS custom property palettes synced via prefers-color-scheme, soft extruded Neumorphic cards (dual light/dark drop shadows), and Jamstack static builds.",
    culturalContext: "Following macOS Mojave and iOS 13's system-wide Dark Mode, supporting automatic dark themes becomes table stakes for every modern website and application.",
    codeSnippet: `/* 2019 OS-Synchronized Dark Mode + Reduced Motion + Neumorphic Surface */
:root {
  color-scheme: light dark;
  --surface: #e0e5ec;
  --shadow-outset: 8px 8px 16px #b8b9be, -8px -8px 16px #ffffff;
}
@media (prefers-color-scheme: dark) {
  :root {
    --surface: #1e2028;
    --shadow-outset: 8px 8px 16px #14151a, -8px -8px 16px #282b36;
  }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}`,
    retroAudioType: "click"
  },
  {
    year: 2020,
    title: "2020: Glassmorphism, Unbundled ESM (Vite), Core Web Vitals & ES2020",
    subtitle: "Browser-native ES Modules power Vite & Snowpack; Google launches Core Web Vitals; CSS clamp(), min(), max() & aspect-ratio.",
    layoutType: "esm-vitals",
    designParadigm: "macOS Big Sur Glassmorphism, Mesh Gradients & Layout-Shift Stability",
    eraSites: "Vitejs.dev, Apple macOS Big Sur page, Hopin, Linear (launch), Vercel Next.js 10",
    specs: [
      { category: "JavaScript", item: "ES2020 finalized: Optional Chaining (obj?.prop), Nullish Coalescing (a ?? b), BigInt, Promise.allSettled(), globalThis, import.meta" },
      { category: "Tooling", item: "Native browser <script type=\"module\"> enables Evan You's Vite and Fred K. Schott's Snowpack with instant unbundled HMR" },
      { category: "CSS", item: "CSS Math Functions min(), max(), and clamp(1.2rem, 2.5vw + 0.5rem, 3rem) unlock fluid intrinsic typography without breakpoints" },
      { category: "Performance", item: "Google introduces Core Web Vitals (LCP: Largest Contentful Paint, FID: First Input Delay, CLS: Cumulative Layout Shift)" },
      { category: "CSS", item: "CSS aspect-ratio: 16 / 9 and Flexbox gap property eliminate padding-bottom % wrappers and negative-margin hacks" },
      { category: "Browser", item: "Microsoft Edge switches to Chromium (Jan 2020); Adobe Flash Player reaches official End-of-Life on December 31, 2020" }
    ],
    prevailingTech: "Frosted glass panels (backdrop-filter: blur(20px) saturate(180%)) floating over colorful blurred mesh gradients, fluid clamp() typography, and CLS-free aspect-ratio boxes.",
    culturalContext: "As the world shifted to remote work in 2020, web applications became humanity's primary town square—and Adobe Flash Player took its final bow on New Year's Eve 2020.",
    codeSnippet: `/* 2020 Glassmorphism + Fluid clamp() Typography + CLS-Safe aspect-ratio */
.glass-panel {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 16px;
}
.hero-heading {
  font-size: clamp(1.75rem, 1rem + 3.5vw, 3.5rem);
}
.video-frame {
  aspect-ratio: 16 / 9; /* Reserves layout space before media loads (0.00 CLS) */
  inline-size: 100%;
}`,
    retroAudioType: "click"
  },
  {
    year: 2021,
    title: "2021: Neo-Brutalism, CSS Logical Properties, accent-color & Import Maps",
    subtitle: "Gumroad & Figma popularize Neo-Brutalist web design; CSS Logical Properties, content-visibility, WebSockets/HTTP3 & Top-Level Await.",
    layoutType: "css-layers",
    designParadigm: "Neo-Brutalism: Stark Ink Borders, Hard Offset Shadows & Acid Fills",
    eraSites: "Gumroad.com (2021 redesign), Figma Config 2021, Astro.build, Deno Deploy, Poolsuite FM",
    specs: [
      { category: "CSS", item: "CSS Logical Properties (inline-size, block-size, margin-inline, padding-block, inset) replace physical top/right/bottom/left" },
      { category: "Forms", item: "CSS accent-color: #e52521 natively themes checkboxes, radio buttons, range sliders, and progress bars in one declaration" },
      { category: "Performance", item: "CSS content-visibility: auto & contain-intrinsic-size skip offscreen layout/paint work, boosting initial render up to 7x" },
      { category: "JavaScript", item: "ES2021 (Logical assignment ||= &&= ??=, String.prototype.replaceAll, Promise.any, numeric separators 1_000_000) & Top-Level Await" },
      { category: "Modules", item: "HTML <script type=\"importmap\"> allows bare module specifiers (import { html } from 'lit') directly in the browser without bundlers" },
      { category: "Architecture", item: "Islands Architecture (Astro, Marko, Qwik) & React Server Components (RSC) pioneer zero-JS-by-default partial hydration" }
    ],
    prevailingTech: "Neo-Brutalist 2px-3px solid #000000 borders, unblurred hard offset box-shadows (5px 5px 0 #000), acid yellow/pink color blocking, and zero-JS Islands architecture.",
    culturalContext: "Rebelling against years of homogeneous SaaS minimalism, Gumroad and Figma ignite the Neo-Brutalist design wave—bringing bold ink outlines, sticker badges, and raw editorial personality back to the web.",
    codeSnippet: `/* 2021 Neo-Brutalist Card + CSS Logical Properties + Native accent-color */
.neo-brutalist-card {
  inline-size: min(100%, 42rem);
  padding-block: 1.5rem;
  padding-inline: 1.75rem;
  background-color: #ffde00;
  color: #000000;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  accent-color: #ff0055;
  content-visibility: auto;
  contain-intrinsic-size: auto 260px;
}`,
    retroAudioType: "click"
  },
  {
    year: 2022,
    title: "2022: CSS :has(), @container Queries, @layer, <dialog> & Bento Grids",
    subtitle: "Interop 2022 delivers a CSS renaissance: Container Queries, :has() parent selector, Cascade Layers (@layer), dvh units & <dialog>.",
    layoutType: "container-queries",
    designParadigm: "Modular Bento Box Grids & Precision Obsidian UI (Linear / Raycast Style)",
    eraSites: "Linear.app, Raycast.com, Apple Keynote Bento Summaries, Vercel.com, Chronicles",
    specs: [
      { category: "CSS", item: "CSS Container Queries (container-type: inline-size; @container (inline-size > 400px)) let components adapt to their parent box, not viewport" },
      { category: "CSS", item: "CSS :has() Relational Pseudo-Class ('the parent selector', e.g., .bento-cell:has(input:checked)) unlocks zero-JS state-driven layouts" },
      { category: "CSS", item: "CSS Cascade Layers (@layer reset, base, tokens, components, utilities) give authors explicit control over cascade precedence" },
      { category: "HTML", item: "Native <dialog> element (.showModal(), ::backdrop, <form method=\"dialog\">) reaches Baseline across Safari 15.4, Firefox 98 & Chrome" },
      { category: "Viewport", item: "Dynamic, Small & Large Viewport Units (100dvh, 100svh, 100lvh) solve mobile browser URL-bar height jump bugs" },
      { category: "Networking", item: "HTTP/3 (QUIC over UDP) standardized as IETF RFC 9114 (June 2022); ES2022 adds Array.prototype.at(-1), Object.hasOwn(), and #private fields" }
    ],
    prevailingTech: "Apple-inspired modular Bento Box grids, Linear-style dark obsidian surfaces with 1px gradient borders, @container queries, :has() parent selectors, and native <dialog>.",
    culturalContext: "2022 is widely hailed as the greatest single year for CSS since CSS2: browser vendors collaborated via Interop 2022 to ship @container, :has(), @layer, and <dialog> in the same year.",
    codeSnippet: `@layer base, components;

@layer components {
  .bento-cell {
    container: bento / inline-size;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  /* Component adapts to its own track width inside the Bento Grid */
  @container bento (inline-size > 360px) {
    .bento-body { display: grid; grid-template-columns: 1fr auto; gap: 1rem; }
  }
  /* Parent styles itself based on child state without JavaScript */
  .bento-cell:has(input[type="checkbox"]:checked) {
    border-color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
  }
}`,
    retroAudioType: "click"
  },
  {
    year: 2023,
    title: "2023: View Transitions, Native CSS Nesting, Subgrid, OKLCH & Command-K AI UI",
    subtitle: "View Transitions API morphs DOM states; Native CSS Nesting & Subgrid hit Baseline; Wide-gamut oklch() colors & <search> element.",
    layoutType: "view-transitions",
    designParadigm: "AI Command Palettes (⌘K), Streaming Tokens, Subgrid Alignment & OKLCH Color",
    eraSites: "ChatGPT Web UI, v0.dev, Perplexity.ai, EvilMartians OKLCH Picker, Baseline Web.dev",
    specs: [
      { category: "CSS", item: "CSS Subgrid (grid-template-rows: subgrid) reaches Baseline Widely Available (Sep 2023), aligning card internals across sibling tracks" },
      { category: "CSS", item: "Native CSS Nesting (.card { & h3 { ... } &:hover { ... } }) ships in Chrome, Safari & Firefox—no Sass preprocessor required" },
      { category: "Color", item: "CSS Color Level 4: perceptually uniform oklch(L C H) & oklab(), display-p3 wide gamut, and dynamic color-mix(in oklch, ...)" },
      { category: "API", item: "Same-Document View Transitions API (document.startViewTransition()) morphs layouts seamlessly using view-transition-name" },
      { category: "HTML", item: "Semantic HTML <search> landmark element added to the HTML Living Standard; ES2023 adds non-mutating toSorted(), toReversed(), with()" },
      { category: "Graphics", item: "WebGPU 1.0 ships in Chrome 113 (May 2023), unlocking compute shaders and in-browser LLM token inference via WebLLM" }
    ],
    prevailingTech: "Command-K (⌘K) AI prompt bars, streaming markdown token UIs, perceptually uniform oklch() palettes, CSS Subgrid card rows, and document.startViewTransition().",
    culturalContext: "Generative AI reshapes user interfaces around conversational command bars and streaming responses, while Google, Apple, and Mozilla launch the 'Baseline' status badge for web features.",
    codeSnippet: `/* 2023 Native CSS Nesting + Subgrid + Perceptually Uniform OKLCH */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & .spec-card {
    grid-row: span 3;
    display: grid;
    grid-template-rows: auto 1fr auto; /* Fallback */
    grid-template-rows: subgrid;       /* Aligns header/body/footer across row! */
    background: color-mix(in oklch, oklch(0.22 0.03 260) 85%, oklch(0.72 0.19 150));

    &:hover {
      border-color: oklch(0.78 0.17 200);
    }
  }
}`,
    retroAudioType: "click"
  },
  {
    year: 2024,
    title: "2024: Native Popover API, @starting-style, light-dark(), text-wrap & INP",
    subtitle: "Declarative Popover API & Declarative Shadow DOM hit Baseline; @starting-style animates top-layer entry; INP replaces FID.",
    layoutType: "anchor-positioning",
    designParadigm: "Top-Layer Spatial Overlays, Balanced Editorial Typography & INP Responsiveness",
    eraSites: "Chrome.dev, Bluesky (bsky.app), Zed.dev,Stripe Press, Web.dev Baseline 2024",
    specs: [
      { category: "HTML", item: "Native HTML Popover API (<button popovertarget=\"menu\"> + <div id=\"menu\" popover=\"auto\">) promotes non-modal menus to the top layer with light-dismiss" },
      { category: "CSS", item: "@starting-style and transition-behavior: allow-discrete animate elements entering/exiting display: none and the top layer" },
      { category: "CSS", item: "CSS light-dark(white, black) color function & text-wrap: balance (for headlines) / text-wrap: pretty (for body copy)" },
      { category: "Web Components", item: "Declarative Shadow DOM (<template shadowrootmode=\"open\">) achieves cross-browser support for zero-JS SSR custom elements" },
      { category: "Performance", item: "Interaction to Next Paint (INP) officially replaces FID as a Google Core Web Vital (March 2024), measuring full-session responsiveness" },
      { category: "JavaScript", item: "ES2024 approved: Object.groupBy(), Map.groupBy(), Promise.withResolvers(), and Set mathematical methods (union, intersection, difference)" }
    ],
    prevailingTech: "Zero-JS top-layer [popover] menus styled with @starting-style transitions, text-wrap: balance headlines, single-line light-dark() theme tokens, and Object.groupBy().",
    culturalContext: "With Popover, <dialog>, and @starting-style all working together natively, thousands of lines of third-party portal, focus-trap, and z-index library code become obsolete.",
    codeSnippet: `<!-- 2024 Zero-JS Declarative Top-Layer Popover + @starting-style -->
<button popovertarget="era-popover">Inspect Top-Layer Popover</button>
<div id="era-popover" popover="auto">Promoted to browser top-layer with native light-dismiss!</div>

<style>
  :root { color-scheme: light dark; }
  h1, h2 { text-wrap: balance; }
  p      { text-wrap: pretty; }

  [popover] {
    background: light-dark(#ffffff, #18181b);
    color: light-dark(#09090b, #fafafa);
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
    transition: opacity 0.2s, transform 0.2s, display 0.2s allow-discrete, overlay 0.2s allow-discrete;
  }
  [popover]:popover-open { opacity: 1; transform: translateY(0) scale(1); }
  @starting-style {
    [popover]:popover-open { opacity: 0; transform: translateY(-8px) scale(0.96); }
  }
</style>`,
    retroAudioType: "click"
  },
  {
    year: 2025,
    title: "2025: Scroll-Driven Animations, Exclusive <details>, Invoker Commands & Customizable <select>",
    subtitle: "CSS animation-timeline: scroll()/view(); <dialog closedby=\"any\">; commandfor/command invokers; appearance: base-select.",
    layoutType: "scroll-animations",
    designParadigm: "Zero-JS Kinetic Scroll Scrollytelling & Declarative HTML Invokers",
    eraSites: "Scroll-Driven-Animations.style, Open-UI Showcase, Web.dev Baseline 2025, Anthropic Claude Artifacts",
    specs: [
      { category: "CSS", item: "CSS Scroll-Driven Animations (animation-timeline: scroll() and view(), animation-range) run off the main thread at 120fps without JS" },
      { category: "HTML", item: "Exclusive Accordion Disclosures (<details name=\"accordion-group\">) and <dialog closedby=\"any\"> for native light-dismiss modals" },
      { category: "HTML", item: "Invoker Commands API (<button commandfor=\"my-dialog\" command=\"show-modal\">) triggers dialogs & popovers declaratively without onclick" },
      { category: "Forms", item: "Customizable <select> (appearance: base-select with ::picker(select)) and textarea field-sizing: content finally allow rich native form styling" },
      { category: "CSS", item: "interpolate-size: allow-keywords and calc-size(auto, size) animate height: 0 to height: auto smoothly without max-height hacks" },
      { category: "CSS", item: "Cross-Document View Transitions (@view-transition { navigation: auto; }) bring SPA-smooth morphing to standard multi-page links" }
    ],
    prevailingTech: "Hardware-accelerated CSS view() scroll timelines, <details name=\"...\"> exclusive accordions styled with ::details-content and interpolate-size: allow-keywords, and Invoker Commands.",
    culturalContext: "Two of the oldest pain points in web development—animating to height: auto and styling a native <select> dropdown with rich HTML—are finally solved by the web platform in 2025.",
    codeSnippet: `<!-- 2025 Declarative Invoker Commands + Light-Dismiss Dialog + Exclusive Accordion -->
<button type="button" commandfor="spec-modal" command="show-modal">Open Modal</button>
<dialog id="spec-modal" closedby="any">
  <p>Light-dismisses on backdrop click or Esc with zero JavaScript!</p>
</dialog>

<details name="era-2025-group" open>
  <summary>Scroll-Driven Animations</summary>
  <p>Mutually exclusive accordion using the native name attribute.</p>
</details>

<style>
  :root { interpolate-size: allow-keywords; }
  details::details-content {
    block-size: 0;
    overflow: clip;
    transition: block-size 0.3s ease, content-visibility 0.3s allow-discrete;
  }
  details[open]::details-content { block-size: auto; }
  .scroll-bar { animation: growProgress linear; animation-timeline: scroll(nearest block); }
</style>`,
    retroAudioType: "click"
  },
  {
    year: 2026,
    title: "2026: Bauhaus Architectural Grid, Temporal API, CSS Anchor Positioning & Agentic WebMCP",
    subtitle: "Temporal API replaces legacy Date; CSS Anchor Positioning & @scope mature; Built-in AI Prompt API & WebMCP agent-ready forms.",
    layoutType: "baseline-2026",
    designParadigm: "Neo-Bauhaus Structural Grids, Intrinsic Fluidity & Agent-Native WebMCP",
    eraSites: "W3C WebMCP Specs, TC39 Temporal Docs, Baseline 2026 Platform Observatory, Chrome Built-in AI",
    specs: [
      { category: "JavaScript", item: "TC39 Temporal API (Temporal.Now.zonedDateTimeISO(), Temporal.PlainDate, Temporal.Duration) replaces 1995's mutable, timezone-buggy Date()" },
      { category: "CSS", item: "CSS Anchor Positioning (anchor-name, position-anchor, position-area, position-try-fallbacks: flip-block) tethers overlays across stacking contexts" },
      { category: "Agentic Web", item: "WebMCP (Web Model Context Protocol: toolname / tooldescription on <form> & navigator.modelContext.registerTool) exposes UI tools to AI agents" },
      { category: "Built-in AI", item: "Browser Built-in AI APIs (LanguageModel / Prompt API, Summarizer, Translator, LanguageDetector) run local on-device inference" },
      { category: "CSS", item: "CSS @scope (.component) to (.slot) donut scoping, @function reusable style logic, and typed attr(data-cols type(<number>))" },
      { category: "Baseline", item: "33 Years of Backwards Compatibility: a 1993 CERN HTML document still renders side-by-side with 2026 WebGPU, Temporal, and WebMCP" }
    ],
    prevailingTech: "Bauhaus/Swiss architectural grids with exposed 2px structural borders, high-contrast primary accents, Temporal immutable timestamps, CSS Anchor Positioning, and WebMCP agent forms.",
    culturalContext: "Thirty-three years after Tim Berners-Lee placed HTML into the public domain at CERN, the 2026 Web serves both human eyes with architectural precision and autonomous AI agents via declarative WebMCP.",
    codeSnippet: `// 2026 TC39 Temporal API + WebMCP Agentic Tool Registration
const releaseInstant = Temporal.PlainDate.from("2026-10-30");
const webAge = releaseInstant.since("1993-04-30", { largestUnit: "years" });
console.log(\`The Public Web is \${webAge.years} years, \${webAge.months} months old.\`);

/* 2026 CSS Anchor Positioning with Viewport Flip Fallback + @scope */
@supports (anchor-name: --trigger) {
  .anchor-trigger { anchor-name: --spec-trigger; }
  .tethered-card  {
    position: fixed;
    position-anchor: --spec-trigger;
    position-area: block-end span-inline-end;
    position-try-fallbacks: flip-block, flip-inline;
  }
}

<!-- 2026 Declarative WebMCP Agentic Form -->
<form toolname="jump_to_web_era" tooldescription="Navigate the time machine to a specific year (1993-2026)">
  <input type="number" name="year" min="1993" max="2026" required />
</form>`,
    retroAudioType: "click"
  }
];
