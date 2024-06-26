import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet, RouterModule } from '@angular/router';
import { slideInAnimation } from './animations/slide.animation';
import { AboutComponent } from './pages/about/about.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutComponent, 
    ProjectsComponent, 
    CertificatesComponent, 
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
    FontAwesomeModule
  ],
  animations: [slideInAnimation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-website';
  public animationsDisabled = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
