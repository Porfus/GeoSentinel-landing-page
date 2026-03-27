class AppNavbar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active') || 'home';

    const getLinkClass = (pageName) => {
      const baseClass = "font-headline font-bold tracking-tight transition-colors block md:inline-block w-full text-left md:w-auto px-4 py-3 md:p-0 rounded-lg md:rounded-none ";
      if (activePage === pageName) {
        return baseClass + "text-ochre bg-ochre/10 md:bg-transparent md:border-b-2 md:border-ochre md:py-1";
      }
      return baseClass + "text-alpine-dim hover:text-ochre hover:bg-earth-600/30 md:hover:bg-transparent";
    };

    this.innerHTML = `
      <nav id="main-nav" class="fixed top-0 w-full z-50 transition-all duration-500 bg-transparent border-b border-transparent">
        <div class="flex justify-between items-center w-full px-4 md:px-8 max-w-screen-2xl mx-auto h-20 relative z-50">
          
          <!-- BRAND -->
          <a href="index.html" class="flex items-center gap-1 text-xl md:text-2xl font-black text-white font-headline tracking-tight whitespace-nowrap">
            <div class="w-12 h-12 md:w-14 md:h-14 shrink-0 flex items-center justify-center overflow-hidden">
              <img src="logo.png" alt="GeoSentinel Logo" class="w-full h-full object-contain scale-[1.0]" />
            </div>
            <span>GeoSentinel</span>
          </a>

          <!-- DESKTOP NAV -->
          <div class="hidden md:flex space-x-8 items-center">
            <a class="${getLinkClass('home')}" href="index.html">Explore Trails</a>
            <a class="${getLinkClass('howitworks')}" href="howitworks.html">How It Works</a>
            <a class="${getLinkClass('aboutus')}" href="aboutus.html">About Us</a>
          </div>

          <!-- CTA DESKTOP -->
          <div class="hidden md:flex items-center gap-4">
            <a href="https://gis-landslide-detection.vercel.app/" class="bg-gradient-to-br from-ochre to-ochre-light text-ochre-deep px-6 py-2.5 rounded-lg font-headline font-bold transition-all hover:scale-105 active:scale-95 shadow-md whitespace-nowrap">Try the MVP</a>
          </div>

          <!-- HAMBURGER BUTTON (MOBILE) -->
          <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none rounded-lg bg-earth-600/50 p-2 border border-white/10">
            <span class="w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center" id="line1"></span>
            <span class="w-6 h-0.5 bg-white rounded transition-all duration-300" id="line2"></span>
            <span class="w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center" id="line3"></span>
          </button>
        </div>

        <!-- MOBILE MENU OVERLAY -->
        <div id="mobile-menu" class="absolute top-20 left-0 w-full bg-earth-900 z-40 hidden flex-col px-6 py-6 shadow-xl border-b border-white/10">
          <div class="flex flex-col space-y-2 items-start w-full">
            <a class="${getLinkClass('home')}" href="index.html">Explore Trails</a>
            <a class="${getLinkClass('howitworks')}" href="howitworks.html">How It Works</a>
            <a class="${getLinkClass('aboutus')}" href="aboutus.html">About Us</a>
            
            <div class="w-full pt-6 mt-2 border-t border-white/10">
               <a href="https://gis-landslide-detection.vercel.app/" class="block text-center w-full bg-gradient-to-br from-ochre to-ochre-light text-ochre-deep px-6 py-3 rounded-xl font-headline font-bold shadow-md">Try the MVP</a>
            </div>
          </div>
        </div>
      </nav>
    `;

    this.initMobileMenu();
    this.initScrollEffect();
  }

  initScrollEffect() {
    const nav = this.querySelector('#main-nav');
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.remove('bg-transparent', 'border-transparent');
        nav.classList.add('bg-earth-900/95', 'backdrop-blur-md', 'shadow-lg', 'border-white/10');
      } else {
        nav.classList.add('bg-transparent', 'border-transparent');
        nav.classList.remove('bg-earth-900/95', 'backdrop-blur-md', 'shadow-lg', 'border-white/10');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
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
        line1.classList.add('translate-y-2', 'rotate-45');
        line2.classList.add('opacity-0');
        line3.classList.add('-translate-y-2', '-rotate-45');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        line1.classList.remove('translate-y-2', 'rotate-45');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-translate-y-2', '-rotate-45');
      }
    });
  }
}

customElements.define('app-navbar', AppNavbar);
