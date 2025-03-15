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
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    ListPrestationsComponent,
    ListEtapesComponent,
    ListCommentairesComponent,
    HomeComponent,
    ListQuestionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
