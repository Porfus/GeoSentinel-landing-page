class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-space-900 w-full py-16 px-6 md:px-8 mt-auto border-t border-space-700" aria-label="GeoSentinel footer">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div class="col-span-1 md:col-span-1">
            <div class="text-xl font-bold text-text-main font-headline mb-4 tracking-tight">GeoSentinel</div>
            <p class="text-text-muted text-sm leading-relaxed">Orbital Intelligence for Terrestrial Security. Providing precision hazard assessment through advanced satellite telemetry.</p>
          </div>
          <div class="space-y-4">
            <h5 class="text-text-main font-bold text-xs uppercase tracking-[0.2em]">Platform</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="#">Site Map</a>
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="#">Privacy Policy</a>
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="#">Terms of Service</a>
            </nav>
          </div>
          <div class="space-y-4">
            <h5 class="text-text-main font-bold text-xs uppercase tracking-[0.2em]">Data Sources</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="https://open-meteo.com">Meteorological Data</a>
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="https://sentinels.copernicus.eu">EO Sources</a>
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="https://idrogeo.isprambiente.it">IFFI Registry</a>
            </nav>
          </div>
          <div class="space-y-4">
            <h5 class="text-text-main font-bold text-xs uppercase tracking-[0.2em]">Connect</h5>
            <nav class="flex flex-col space-y-2">
              <a class="text-text-muted hover:text-accent transition-colors text-sm" href="#">Contact Us</a>
              <div class="flex gap-4 mt-2">
                <span class="material-symbols-outlined text-text-muted hover:text-accent cursor-pointer transition-colors">language</span>
                <span class="material-symbols-outlined text-text-muted hover:text-accent cursor-pointer transition-colors">public</span>
                <span class="material-symbols-outlined text-text-muted hover:text-accent cursor-pointer transition-colors">share</span>
              </div>
            </nav>
          </div>
        </div>
        <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-space-700 text-center">
          <p class="text-text-muted text-[10px] uppercase tracking-widest">&copy; 2026 GeoSentinel. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
