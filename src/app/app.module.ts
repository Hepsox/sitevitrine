import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ListPrestationsComponent } from './list-prestations/list-prestations.component';
import { ListEtapesComponent } from './list-etapes/list-etapes.component';
import { ListCommentairesComponent } from './list-commentaires/list-commentaires.component';
import { HomeComponent } from './home/home.component';
import { QuestionsListComponent } from './list-questions/list-questions.component';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListPrestationsComponent,
    ListEtapesComponent,
    ListCommentairesComponent,
    HomeComponent,
    QuestionsListComponent,
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
