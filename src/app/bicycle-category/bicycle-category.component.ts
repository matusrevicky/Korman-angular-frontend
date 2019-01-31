import { Component, OnInit } from '@angular/core';
import { BicycleCategory } from '../bicycleCategory';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-bicycle-category',
  templateUrl: './bicycle-category.component.html',
  styleUrls: ['./bicycle-category.component.css']
})
export class BicycleCategoryComponent implements OnInit {
  private bicycleCategory: BicycleCategory[] = [];
  private selected:BicycleCategory;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getBicycleCategory()
    .subscribe(c => this.bicycleCategory = c);
  }

  selectBicycleCategory(bicycleCategory: BicycleCategory) : void {
    this.selected = bicycleCategory;
  }

}
