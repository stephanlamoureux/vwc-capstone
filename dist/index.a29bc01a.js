class mobileNav extends HTMLElement{connectedCallback(){this.innerHTML='\n\t\t\x3c!-- Mobile Menu --\x3e\n\t\t<div id="nav-wrapper" class="nav-wrapper">\n\t\t\t<button\n\t\t\t\tclass="menu hamburger hamburger--vortex"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="Menu"\n\t\t\t\taria-controls="navigation"\n\t\t\t>\n\t\t\t\t<span class="hamburger-box">\n\t\t\t\t\t<span class="hamburger-inner"></span>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t<nav id="navigation" class="navbar">\n\t\t\t\t<ul class="nav-list" role="menu">\n\t\t\t\t\t<li class="menu-link" role="none">\n\t\t\t\t\t\t<a href="/index.html" role="menuitem">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tclass="mobile-profile"\n\t\t\t\t\t\t\t\trole="img"\n\t\t\t\t\t\t\t\taria-label="portfolio picture of Stephan"\n\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="menu-link" role="none">\n\t\t\t\t\t\t<a href="/index.html" role="menuitem">About</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="menu-link" role="none">\n\t\t\t\t\t\t<a href="/blog.html" role="menuitem">Blog</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="menu-link" role="none">\n\t\t\t\t\t\t<a href="/projects.html" role="menuitem">Projects</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="menu-link" role="none">\n\t\t\t\t\t\t<a href="/contact.html" role="menuitem">Contact</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t\x3c!-- Mobile Color Mode Toggle --\x3e\n\t\t\t\t\t<li role="none">\n\t\t\t\t\t\t<div class="mode-toggle" role="menuitem">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\t\t\tclass="mobile-mode-toggle checkbox"\n\t\t\t\t\t\t\t\tid="mobile-checkbox"\n\t\t\t\t\t\t\t\taria-label="color mode selector"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for="mobile-checkbox" class="checkbox-label">\n\t\t\t\t\t\t\t\t<i class="fas fa-moon" alt="moon icon"></i>\n\t\t\t\t\t\t\t\t<i class="fas fa-sun" alt="sun icon"></i>\n\t\t\t\t\t\t\t\t<div class="ball"></div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t\x3c!-- End Mobile Color Mode Toggle --\x3e\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\t\t\x3c!-- End Mobile Menu --\x3e\n',this.updateNavWrapperClass()}updateNavWrapperClass(){const t=window.location.pathname,n=this.querySelector("#nav-wrapper");"/"!==t&&"/index.html"!==t||n.classList.add("about-nav-wrapper")}}customElements.define("mobile-nav",mobileNav);
//# sourceMappingURL=index.a29bc01a.js.map