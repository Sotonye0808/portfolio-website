import { Component } from '@angular/core';
import { AboutComponent } from '../../pages/about/about.component';
import { CertificatesComponent } from '../../pages/certificates/certificates.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AboutComponent, 
    ProjectsComponent, 
    CertificatesComponent,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
