import { Component, OnInit } from '@angular/core';
import {Alpaca} from '../../models/alpaca';
import {AlpacaService} from '../../services/alpaca.service';

@Component({
  selector: 'app-add-alpaca',
  templateUrl: './add-alpaca.component.html',
  styleUrls: ['./add-alpaca.component.css']
})
export class AddAlpacaComponent implements OnInit {

  newAlpaca: Alpaca;

  constructor(private alpacaService: AlpacaService) { }

  ngOnInit() {
  }

  add() {
  this.alpacaService.add(this.newAlpaca);
  }

}
