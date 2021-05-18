import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddObjectComponent } from './add-object/add-object.component';
import { ViewObjectsComponent } from './view-objects/view-objects.component';

const routes: Routes = [{ path: '', component: ViewObjectsComponent },
{ path: 'addObject', component: AddObjectComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
