import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { Settings } from '../settings';
import { RestClientService } from '../rest-client.service';
declare var $:any;

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css']
})
export class SettingsModalComponent implements OnChanges {

  
    @Input() private user:Settings;
    @Input() private actionWithUser:string;
    @Output() savedUser = new EventEmitter<Settings>();
    constructor(private restService: RestClientService) { }
  
    ngOnChanges() {
    }

    get actualUser(): string {
      return JSON.stringify(this.user);
    }

    get title():string {
      if (this.actionWithUser == 'add') {
        return 'Add new Settings';
      } else {
        return 'Edit Settings';
      }
    }

    onSubmit() {
      this.savedUser.emit(this.user);
      $('#settingsModal').modal('hide');
    }

}
