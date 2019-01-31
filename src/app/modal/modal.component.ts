import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { Bicycle } from '../bicycle';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {
  
  @Input() private user:Bicycle;
  @Output() savedUser = new EventEmitter<Bicycle>();
  constructor() { }

  ngOnChanges() {
  }

  get actualUser(): string {
    return JSON.stringify(this.user);
  }

}