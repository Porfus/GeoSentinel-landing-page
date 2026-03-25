class AppNavbar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active') || 'home';

    const getLinkClass = (pageName) => {
      const baseClass = "font-headline font-bold tracking-tight transition-colors ";
      if (activePage === pageName) {
        return baseClass + "text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 py-1";
      }
      return baseClass + "text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-300";
    };

    this.innerHTML = `
      <nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-200/50 dark:border-slate-800/50">
        <div class="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto h-20">
          <a href="index.html" class="flex items-center gap-3 text-2xl font-black text-sky-900 dark:text-sky-100 font-headline tracking-tight">
            <img src="logo.png" alt="GeoSentinel Logo" class="h-10 w-10 object-contain" />
            GeoSentinel
          </a>
          <div class="hidden md:flex space-x-8 items-center">
            <a class="${getLinkClass('home')}" href="index.html">Explore Trails</a>
            <a class="${getLinkClass('howitworks')}" href="howitworks.html">How It Works</a>
            <a class="${getLinkClass('aboutus')}" href="aboutus.html">About Us</a>
          </div>
          <div class="flex items-center gap-4">
            <a href="https://gis-landslide-detection.vercel.app/" class="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-headline font-bold transition-all active:opacity-80 active:scale-95 shadow-md">Try the MVP (lago di Fiastra area)</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
