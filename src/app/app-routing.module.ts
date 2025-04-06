import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateProjectComponent } from './template-project/template-project.component';
import { HomeComponent } from './home/home.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { projectListResolver } from './resolvers/project-list.resolver';
import { projectDetailResolver } from './resolvers/project-detail.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut pour afficher HomeComponent
  {
    path: 'projet/:slug',
    component: TemplateProjectComponent,
    resolve: { project: projectDetailResolver },
  },
  {
    path: 'les-projets',
    component: ListProjectsComponent,
    resolve: { projectsList: projectListResolver },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
