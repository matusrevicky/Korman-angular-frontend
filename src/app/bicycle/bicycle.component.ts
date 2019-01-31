import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { RestClientService } from '../rest-client.service';


@Component({
  selector: 'app-bicycle',
  templateUrl: './bicycle.component.html',
  styleUrls: ['./bicycle.component.css']
})
export class BicycleComponent implements OnInit {
  private bicycles: Bicycle[] = [];
  private selected: Bicycle;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getBicycles()
    .subscribe(b => this.bicycles = b);
  }

  selectBicycle(bicycle: Bicycle) : void {
    this.selected = bicycle;
  }
}

