import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateProjectComponent } from './template-project/template-project.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut pour afficher HomeComponent
  { path: 'project/:id', component: TemplateProjectComponent }, // Route pour afficher un projet
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
