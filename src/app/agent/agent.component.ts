import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
declare var $:any;


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  private agents: Agent[] = [];
  private selected: Agent;
  private action = 'add';
  private editedUser = new Agent();
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
   // this.restService.getAgents()
   // .subscribe(a => this.agents = a);
   this.getUsersFromServer();
  }

  getUsersFromServer() {
    let pipe:Observable<Agent[]> = this.restService.getAgents();
    pipe.subscribe( usersFromPipe => {
      this.agents = usersFromPipe
    },
    errorMsg => {
      this.status = 'error';
      console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
    });
  }

  selectAgent(agent: Agent) : void {
    this.selected = agent;
  }

  editedUserSaved(user: Agent) {
    if (this.action == 'add') {
      this.restService.saveUser(user).subscribe( ok => {
        this.getUsersFromServer();
      },
      errorMsg => {
        this.status = 'error'; 
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });      
    } else {
      this.restService.saveUser(user).subscribe( ok => {
        this.getUsersFromServer();
      },
      errorMsg => {
        this.status = 'error'; 
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });      
    }
  }

  addUserButtonClicked(){
    this.action = 'add';
    this.editedUser = new Agent();
    

  }

  editUserClicked(user:Agent){
    this.action = 'edit';
    this.editedUser = JSON.parse(JSON.stringify(user));
    $('#agentModal').modal('show');
  }

  deleteUser(user:Agent) {
    this.restService.deleteUser(user).subscribe(ok => {
      this.getUsersFromServer();
    },
    errorMsg => {
      this.status = 'error'; 
      console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
    });      
  } 

}

