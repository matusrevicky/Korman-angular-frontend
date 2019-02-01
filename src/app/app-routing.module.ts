import { NgModule } from '@angular/core';
import { AgentComponent } from './agent/agent.component';
import { Routes, RouterModule } from '@angular/router';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BicycleArchivedComponent } from './bicycle-archived/bicycle-archived.component';
import { BicycleCategoryComponent } from './bicycle-category/bicycle-category.component';
import { NotificationComponent } from './notification/notification.component';
import { LogComponent } from './log/log.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/bicycle', pathMatch: 'full' },
  { path: 'bicycle', component: BicycleComponent },
  { path: 'bicycleArchived', component: BicycleArchivedComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'bicycleCategory', component: BicycleCategoryComponent },
  { path: 'agents', component: AgentComponent },
  { path: 'logs', component: LogComponent },
  { path: 'settings', component: SettingsComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
