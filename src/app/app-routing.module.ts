import { NgModule } from '@angular/core';
import {AgentComponent} from './agent/agent.component';
import { Routes, RouterModule } from '@angular/router';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BicycleCategoryComponent } from './bicycle-category/bicycle-category.component';

const routes: Routes = [
  {path:'', redirectTo:'/bicycle', pathMatch: 'full'},
  {path:'bicycle', component: BicycleComponent},
  {path:'bicycleCategory', component: BicycleCategoryComponent},
  {path:'agents', component: AgentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
