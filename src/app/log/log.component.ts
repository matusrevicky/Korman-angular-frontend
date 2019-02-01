import { Component, OnInit } from '@angular/core';
import { Log } from '../log';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  private logs: Log[] = [];
  private selected: Log;
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getLogs()
    .subscribe(c => this.logs = c);
  }

  getLogsFromServer() {
    let pipe:Observable<Log[]> = this.restService.getLogs();
    pipe.subscribe( usersFromPipe => {
      this.logs = usersFromPipe
    },
    errorMsg => {
      this.status = 'error';
      console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
    });
  }

  selectLog(log: Log) : void {
    this.selected = log;
  }

  deleteAllLogs() {
    this.restService.deleteAllLogs().subscribe(ok => {
      this.getLogsFromServer();
    },
    errorMsg => {
      this.status = 'error'; 
      console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
    });      
  } 

}
