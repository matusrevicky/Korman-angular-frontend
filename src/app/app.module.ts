import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BicycleCategoryComponent } from './bicycle-category/bicycle-category.component';
import { ModalComponent } from './modal/modal.component';
import { AgentComponent } from './agent/agent.component';
import { AgentModalComponent } from './agent-modal/agent-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    BicycleComponent,
    BicycleCategoryComponent,
    ModalComponent,
    AgentComponent,
    AgentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
