import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ListTestimonialsComponent } from './list-testimonials/list-testimonials.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsService } from './services/testimonials.service';
import { ListServicesComponent } from './list-services/list-prestations.component';
import { ListStepsComponent } from './list-steps/list-steps.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    ListServicesComponent,
    ListStepsComponent,
    ListTestimonialsComponent,
    ListQuestionsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SidebarModule,
  ],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
