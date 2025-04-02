import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateProjectComponent } from './template-project/template-project.component';
import { HomeComponent } from './home/home.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut pour afficher HomeComponent
  { path: 'projet/:slug', component: TemplateProjectComponent }, // Route pour afficher un projet
  { path: 'les-projets', component: ListProjectsComponent }, // Route pour afficher un projet
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
