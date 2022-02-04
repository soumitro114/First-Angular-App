import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {
    path : '', component: TasksComponent
  },
  {
    path : 'pages', component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
