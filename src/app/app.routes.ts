import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';


const routeConfig: Routes = [
    {
      path: '',
      component: AboutComponent,
      title: 'About Me',
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      title: 'My Projects',
    },
    {
        path: 'certificates',
        component: CertificatesComponent,
        title: 'My Certificates',
      }
  ];
  export default routeConfig;

  export const routes = routeConfig;