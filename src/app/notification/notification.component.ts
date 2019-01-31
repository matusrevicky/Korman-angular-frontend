import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service';
import { Notification } from '../notification';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private notifications: Notification[] = [];
  private selected: Notification;
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getNotificationsFromServer();
  }

  getNotificationsFromServer() {
    let pipe:Observable<Notification[]> = this.restService.getNotifications();
    pipe.subscribe( notificationsFromPipe => {
      this.notifications = notificationsFromPipe
    },
    errorMsg => {
      this.status = 'error';
      console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
    });
  }

  selectNotification(notification: Notification) : void {
    this.selected = notification;
  }

  deleteNotification(user:Notification) {
    this.restService.deleteNotification(user).subscribe(ok => {
      this.getNotificationsFromServer();
    },
    errorMsg => {
      this.status = 'error'; 
      console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
    });      
  } 

}


