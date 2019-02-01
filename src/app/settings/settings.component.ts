import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
import { Settings } from '../settings';

declare var $:any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private settings: Settings[] = [];
  private selected: Settings;
  private action = 'add';
  private status = 'ok';
  private editedSettings = new Settings(null,"","");
  private saved:boolean = false;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getSettingsFromServer();
   }
 
   getSettingsFromServer() {
     let pipe:Observable<Settings[]> = this.restService.getSettings();
     pipe.subscribe( usersFromPipe => {
       this.settings = usersFromPipe
     },
     errorMsg => {
       this.status = 'error';
       console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
     });
   }
 
   selectSettings(settings: Settings) : void {
     this.selected = settings;
   }
 
   editedSettingsSaved(user: Settings) {
     if (this.action == 'add') {
       this.restService.saveSettings(user).subscribe( ok => {
         this.getSettingsFromServer();
       },
       errorMsg => {
         this.status = 'error'; 
         console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
       });      
     } else {
       this.restService.saveSettings(user).subscribe( ok => {
         this.getSettingsFromServer();
       },
       errorMsg => {
         this.status = 'error'; 
         console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
       });      
     }
   }
 
   editUserClicked(user:Settings){
    this.action = 'edit';
    this.editedSettings = JSON.parse(JSON.stringify(user));
    $('#settingsModal').modal('show');
  }

   formSubmit() {
    this.restService.saveSettings(this.editedSettings)
     .subscribe(editedSettings => {
        this.saved = true;
        setTimeout(_=> this.saved = false, 5000);
     });
  }

}
