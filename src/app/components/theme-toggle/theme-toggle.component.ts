import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  imports: [FontAwesomeModule]
})
export class ThemeToggleComponent {
  darkMode = false;
  faIcon = faMoon;
  faMoon = faMoon;
  faSun = faSun;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      this.faIcon = faSun;      
    } else {
      document.documentElement.classList.remove('dark');
      this.faIcon = faMoon;
    }
  }
}
