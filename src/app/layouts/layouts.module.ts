import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutsRoutingModule} from './layouts-routing.module';
import {HomeComponent} from './home/home.component';
import {HeaderNavComponent} from './header-nav/header-nav.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [HomeComponent, HeaderNavComponent, ContactComponent, NotFoundComponent, AboutUsComponent],
  exports: [
    HeaderNavComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule {
}
