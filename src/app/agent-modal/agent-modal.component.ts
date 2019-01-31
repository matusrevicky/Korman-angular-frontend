import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { Agent } from '../agent';

declare var $:any;

@Component({
  selector: 'app-agent-modal',
  templateUrl: './agent-modal.component.html',
  styleUrls: ['./agent-modal.component.css']
})
export class AgentModalComponent implements OnChanges {

  
  
    @Input() private user:Agent;
    @Input() private actionWithUser:string;
    @Output() savedUser = new EventEmitter<Agent>();
    constructor() { }
  
    ngOnChanges() {
    }
  
    get actualUser(): string {
      return JSON.stringify(this.user);
    }
    get title():string {
      if (this.actionWithUser == 'add') {
        return 'Pridávanie používateľa';
      } else {
        return 'Editácia používateľa';
      }
    }
  
    onSubmit() {
      this.savedUser.emit(this.user);
      $('#agentModal').modal('hide');
    }

}


