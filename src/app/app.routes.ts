import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';


const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' }
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
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
export default routeConfig;

export const routes = routeConfig;