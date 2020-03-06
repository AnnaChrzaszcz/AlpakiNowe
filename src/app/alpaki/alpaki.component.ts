import { Component, OnInit } from '@angular/core';
import {Alpaca} from '../../models/alpaca';
import {PathString} from '@angular/compiler-cli/src/ngtsc/file_system';
import {Species} from '../../models/species';
import {Owner} from '../../models/owner';
import {AlpacaService} from '../../services/alpaca.service';

@Component({
  selector: 'app-alpaki',
  templateUrl: './alpaki.component.html',
  styleUrls: ['./alpaki.component.css']
})
export class AlpakiComponent implements OnInit {

 alpaki: Array<Alpaca> = [];
 zdjecie: PathString;
 czyklikniety: boolean;
/**/
  constructor(private alpacaService: AlpacaService) {
 this.alpacaService.getalpacasObs().subscribe((alpacs: Array<Alpaca>) => {
  this.alpaki = alpacs;
  this.czyklikniety = true;
 });
  }

  ngOnInit() {
  }

  dupa(src): void {
  this.zdjecie = src;
  this.czyklikniety = true;
  console.log(this.zdjecie);
  }

  delete(alpaca: Alpaca) {
    this.alpacaService.delete(alpaca);
  }
  goToAddAlpaca() {

  }
}
