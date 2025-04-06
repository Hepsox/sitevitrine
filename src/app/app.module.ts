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
import { ListServicesComponent } from './list-services/list-prestations.component';
import { ListStepsComponent } from './list-steps/list-steps.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { TemplateProjectComponent } from './template-project/template-project.component';
import { HeaderComponent } from './header/header.component';
import { TextFormatPipe } from './pipes/pipes/text-format.pipe';
import { FooterComponent } from './footer/footer.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListServicesComponent,
    ListStepsComponent,
    ListTestimonialsComponent,
    ListQuestionsComponent,
    HomeComponent,
    TemplateProjectComponent,
    HeaderComponent,
    TextFormatPipe,
    FooterComponent,
    ListProjectsComponent,
    CardProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SidebarModule,
    FormsModule,
  ],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
