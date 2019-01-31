import { Component, OnInit } from '@angular/core';
import { ArchivedBicycle } from '../bicycle-archived';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-bicycle-archived',
  templateUrl: './bicycle-archived.component.html',
  styleUrls: ['./bicycle-archived.component.css']
})
export class BicycleArchivedComponent implements OnInit {
  private bicycles: ArchivedBicycle[] = [];
  private selected: ArchivedBicycle;

  constructor(private restService: RestClientService) { }


  ngOnInit() {
    this.restService.getBicyclesArchived()
    .subscribe(b => this.bicycles = b);
  }

  selectBicycle(bicycle: ArchivedBicycle) : void {
    this.selected = bicycle;
  }

}

