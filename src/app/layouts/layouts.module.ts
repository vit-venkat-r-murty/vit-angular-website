import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ProcessComponent } from './process/process.component';
import { CareerComponent } from './career/career.component';


@NgModule({
	declarations: [HomeComponent, HeaderNavComponent, CareerComponent, ContactComponent, NotFoundComponent, AboutUsComponent, FooterComponent, ServicesComponent, ProcessComponent],
	exports: [
		HeaderNavComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		LayoutsRoutingModule
	]
})
export class LayoutsModule {
}
