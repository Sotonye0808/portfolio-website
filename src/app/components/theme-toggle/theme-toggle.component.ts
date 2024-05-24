import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent {
  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
