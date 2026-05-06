class AppNavbar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active-page') || this.getAttribute('active') || 'home';
    const isTransparentPage = activePage === 'home';

    const getLinkClass = (pageName) => {
      const baseClass = "font-headline font-bold transition-colors block md:inline-block w-full text-left md:w-auto px-4 py-3 md:p-0 rounded md:rounded-none ";
      if (activePage === pageName) {
        return baseClass + "text-accent bg-accent/10 md:bg-transparent md:border-b-2 md:border-accent md:py-1";
      }
      return baseClass + "text-text-muted hover:text-accent hover:bg-white/5 md:hover:bg-transparent";
    };

    const ariaCurrent = (pageName) => activePage === pageName ? ' aria-current="page"' : '';

    this.innerHTML = `
      <nav id="main-nav" aria-label="Primary navigation" class="fixed top-0 w-full z-50 border-b transition-all duration-500 ${isTransparentPage ? 'bg-transparent border-transparent' : 'bg-space-900 shadow-lg border-space-700'}">
        <div class="flex justify-between items-center w-full px-4 md:px-8 max-w-screen-2xl mx-auto h-20 relative z-50">
          
          <!-- BRAND -->
          <a href="index.html" class="flex items-center gap-2 text-xl md:text-2xl font-black text-text-main font-headline whitespace-nowrap">
            <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center overflow-hidden">
              <img src="logo.png" alt="GeoSentinel Logo" class="w-full h-full object-contain" />
            </div>
            <span>GeoSentinel</span>
          </a>

          <!-- DESKTOP NAV -->
          <div class="hidden md:flex space-x-10 items-center">
            <a class="${getLinkClass('home')}" href="index.html"${ariaCurrent('home')}>Explore Trails</a>
            <a class="${getLinkClass('howitworks')}" href="howitworks.html"${ariaCurrent('howitworks')}>How It Works</a>
            <a class="${getLinkClass('aboutus')}" href="aboutus.html"${ariaCurrent('aboutus')}>About Us</a>
          </div>

          <!-- CTA DESKTOP -->
          <div class="hidden md:flex items-center gap-4">
            <a href="https://gis-landslide-detection.vercel.app/" class="bg-accent text-space-900 px-6 py-2 rounded font-headline font-bold transition-all hover:bg-accent/80 active:scale-95 shadow-lg shadow-accent/10 whitespace-nowrap">Try the MVP</a>
          </div>

          <!-- HAMBURGER BUTTON (MOBILE) -->
          <button id="mobile-menu-btn" type="button" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open navigation menu" class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded border border-space-700 bg-space-800">
            <span class="w-6 h-0.5 bg-text-main rounded transition-all duration-300 origin-center" id="line1"></span>
            <span class="w-6 h-0.5 bg-text-main rounded transition-all duration-300" id="line2"></span>
            <span class="w-6 h-0.5 bg-text-main rounded transition-all duration-300 origin-center" id="line3"></span>
          </button>
        </div>

        <!-- MOBILE MENU OVERLAY -->
        <div id="mobile-menu" class="absolute top-20 left-0 w-full bg-space-900 z-40 hidden flex-col px-6 py-6 shadow-xl border-b border-space-700">
          <div class="flex flex-col space-y-2 items-start w-full">
            <a class="${getLinkClass('home')}" href="index.html"${ariaCurrent('home')}>Explore Trails</a>
            <a class="${getLinkClass('howitworks')}" href="howitworks.html"${ariaCurrent('howitworks')}>How It Works</a>
            <a class="${getLinkClass('aboutus')}" href="aboutus.html"${ariaCurrent('aboutus')}>About Us</a>
            
            <div class="w-full pt-6 mt-2 border-t border-space-700">
               <a href="https://gis-landslide-detection.vercel.app/" class="block text-center w-full bg-accent text-space-900 px-6 py-3 rounded font-headline font-bold shadow-md">Try the MVP</a>
            </div>
          </div>
        </div>
      </nav>
    `;

    this.initMobileMenu();
    this.initScrollEffect();
  }

  initScrollEffect() {
    const activePage = this.getAttribute('active-page') || this.getAttribute('active') || 'home';
    const isTransparentPage = activePage === 'home';
    
    if (!isTransparentPage) return;

    const nav = this.querySelector('#main-nav');
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.remove('bg-transparent', 'border-transparent');
        nav.classList.add('bg-space-900', 'shadow-lg', 'border-space-700');
      } else {
        nav.classList.add('bg-transparent', 'border-transparent');
        nav.classList.remove('bg-space-900', 'shadow-lg', 'border-space-700');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }

  initMobileMenu() {
    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');
    const line1 = this.querySelector('#line1');
    const line2 = this.querySelector('#line2');
    const line3 = this.querySelector('#line3');
    
    let isOpen = false;
    if(!btn || !menu) return;

    btn.addEventListener('click', () => {
      isOpen = !isOpen;
      if (isOpen) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        btn.setAttribute('aria-expanded', 'true');
        line1.classList.add('translate-y-2', 'rotate-45');
        line2.classList.add('opacity-0');
        line3.classList.add('-translate-y-2', '-rotate-45');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        btn.setAttribute('aria-expanded', 'false');
        line1.classList.remove('translate-y-2', 'rotate-45');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-translate-y-2', '-rotate-45');
      }
    });
  }
}

customElements.define('app-navbar', AppNavbar);
