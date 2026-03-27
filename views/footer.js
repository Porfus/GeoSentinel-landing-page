class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-earth-900 w-full py-12 px-8 mt-auto border-t border-earth-100/10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div class="col-span-1 md:col-span-1">
            <div class="text-lg font-bold text-alpine-bg font-headline mb-4">GeoSentinel Cassini</div>
            <p class="text-alpine-dim text-sm antialiased font-body">Orbital Intelligence for Terrestrial Security.</p>
          </div>
          <div class="space-y-4">
            <h5 class="text-alpine-bg font-bold text-sm uppercase tracking-widest">Platform</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="#">Site Map</a>
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="#">Privacy Policy</a>
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="#">Terms of Service</a>
            </nav>
          </div>
          <div class="space-y-4">
            <h5 class="text-alpine-bg font-bold text-sm uppercase tracking-widest">Data Sources</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="https://open-meteo.com">Meteorological Data</a>
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="https://sentinels.copernicus.eu">EO Sources</a>
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="https://idrogeo.isprambiente.it">IFFI Registry</a>
            </nav>
          </div>
          <div class="space-y-4">
            <h5 class="text-alpine-bg font-bold text-sm uppercase tracking-widest">Contact</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-alpine-dim hover:text-ochre transition-colors text-sm font-body antialiased" href="#">Contact Us</a>
              <div class="flex gap-4 mt-2">
                <span class="material-symbols-outlined text-alpine-muted cursor-pointer hover:text-ochre">language</span>
                <span class="material-symbols-outlined text-alpine-muted cursor-pointer hover:text-ochre">public</span>
                <span class="material-symbols-outlined text-alpine-muted cursor-pointer hover:text-ochre">share</span>
              </div>
            </nav>
          </div>
        </div>
        <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-earth-100/10 text-center">
          <p class="text-alpine-dim text-sm antialiased font-body">&copy; 2026 GeoSentinel Cassini. Orbital Intelligence for Terrestrial Security.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
