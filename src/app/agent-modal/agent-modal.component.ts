import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { Agent } from '../agent';
import { RestClientService } from '../rest-client.service';
import { BicycleCategory } from '../bicycleCategory';
declare var $:any;

@Component({
  selector: 'app-agent-modal',
  templateUrl: './agent-modal.component.html',
  styleUrls: ['./agent-modal.component.css']
})
export class AgentModalComponent implements OnChanges {

   private workshops:BicycleCategory[] = [new BicycleCategory(1,"","","")];
  
    @Input() private user:Agent;
    @Input() private actionWithUser:string;
    @Output() savedUser = new EventEmitter<Agent>();
    constructor(private restService: RestClientService) { }
  
    ngOnChanges() {
      this.getWorkshops();
    }
  
    get actualUser(): string {
      return JSON.stringify(this.user);
    }
    get title():string {
      if (this.actionWithUser == 'add') {
        return 'Add new Agent';
      } else {
        return 'Edit Agent';
      }
    }

    getWorkshops() {
      this.restService.getBicycleCategory().subscribe(w => {
        
        this.workshops = w;
        this.user.category = this.workshops[0];
      });
    }
  
    onSubmit() {
      this.savedUser.emit(this.user);
      $('#agentModal').modal('hide');
    }

}


