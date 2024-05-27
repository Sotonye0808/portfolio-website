import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';


const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
    data: { animation: 'AboutPage' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'ProjectsPage' }
  },
  {
    path: 'certificates',
    component: CertificatesComponent,
    data: { animation: 'CertificatesPage' }
  }
  ];
  export default routeConfig;

  export const routes = routeConfig;