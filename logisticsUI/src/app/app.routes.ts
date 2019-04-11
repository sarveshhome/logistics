import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {title: 'Login', name: 'login'}
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {title: 'About logistics'}
  },
  {
      path: 'contact',
      component: ContactComponent,
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  }
];
