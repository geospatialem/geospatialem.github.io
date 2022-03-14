import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ProjectsComponent } from './projects/projects.component';

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
