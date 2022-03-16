import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { MapComponent } from '../components/map/map.component';
import { ProjectsComponent } from '../components/projects/projects.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'experience', component: MapComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
