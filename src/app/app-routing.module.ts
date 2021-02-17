import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvaluesComponent } from './addvalues/addvalues.component';
import { CrudComponent } from './crud/crud.component';
import { GettingComponent } from './getting/getting.component';
import { RestComponent } from './rest/rest.component';

const routes: Routes = [
  {path:'rest',component:RestComponent},
  {path:'update/:id',component:CrudComponent},
  {path:'add',component:AddvaluesComponent},
  {path:'get/:id',component:GettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
