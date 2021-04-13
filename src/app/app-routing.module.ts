import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { PageNotFoundComponent } from './shared/pageNotFound/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'tasks',component : TasksComponent },
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
