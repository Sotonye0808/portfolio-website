import { Component, ElementRef } from '@angular/core';
import { AboutComponent } from '../../pages/about/about.component';
import { CertificatesComponent } from '../../pages/certificates/certificates.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AboutComponent, 
    ProjectsComponent, 
    CertificatesComponent,
    ThemeToggleComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    const btn = this.elementRef.nativeElement.querySelector('#menu-btn');
    const nav = this.elementRef.nativeElement.querySelector('#mobile-menu');

    btn.classList.toggle('open');

    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
      nav.classList.remove('slide-out');
      nav.classList.add('slide-in');
    } else {
      nav.classList.remove('slide-in');
      nav.classList.add('slide-out');
      setTimeout(() => {
        nav.classList.add('hidden');
      }, 300); // Wait for the animation to finish
    }
  }
}
