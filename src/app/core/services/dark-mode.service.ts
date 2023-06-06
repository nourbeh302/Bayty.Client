import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorScheme: string = 'dark';


  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    // Check the user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setColorScheme('dark');
    }
  }

  setColorScheme(scheme: string) {
    this.colorScheme = scheme;
    if (scheme === 'dark') {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  toggleColorScheme() {
    if (this.colorScheme === 'dark') {
      this.setColorScheme('light');
    } else {
      this.setColorScheme('dark');
    }
  }
}
