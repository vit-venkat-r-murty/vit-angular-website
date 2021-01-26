import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {ProcessComponent} from './process/process.component';

const routes: Routes = [
  {path: 'welcome', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'page-not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {
}
