class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 mt-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div class="col-span-1 md:col-span-1">
            <div class="text-lg font-bold text-slate-900 dark:text-slate-100 font-headline mb-4">GeoSentinel Cassini</div>
            <p class="text-slate-500 text-sm antialiased font-body">Orbital Intelligence for Terrestrial Security.</p>
          </div>
          <div class="space-y-4">
            <h5 class="text-slate-900 dark:text-slate-100 font-bold text-sm uppercase tracking-widest">Platform</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">Site Map</a>
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">Privacy Policy</a>
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">Terms of Service</a>
            </nav>
          </div>
          <div class="space-y-4">
            <h5 class="text-slate-900 dark:text-slate-100 font-bold text-sm uppercase tracking-widest">Data Sources</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">Meteorological Data</a>
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">EO Sources</a>
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">IFFI Registry</a>
            </nav>
          </div>
          <div class="space-y-4">
            <h5 class="text-slate-900 dark:text-slate-100 font-bold text-sm uppercase tracking-widest">Contact</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-slate-500 hover:text-sky-600 transition-colors text-sm font-body antialiased" href="#">Contact Us</a>
              <div class="flex gap-4 mt-2">
                <span class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">language</span>
                <span class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">public</span>
                <span class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">share</span>
              </div>
            </nav>
          </div>
        </div>
        <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p class="text-slate-500 text-sm antialiased font-body">© 2024 GeoSentinel Cassini. Orbital Intelligence for Terrestrial Security.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
