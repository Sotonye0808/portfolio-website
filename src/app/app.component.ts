import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutComponent, 
    ProjectsComponent, 
    CertificatesComponent, 
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-website';
}
