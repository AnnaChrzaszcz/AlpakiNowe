import { Component, OnInit } from '@angular/core';
import {Alpaca} from '../../models/alpaca';
import {AlpacaService} from '../../services/alpaca.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-alpaca',
  templateUrl: './details-alpaca.component.html',
  styleUrls: ['./details-alpaca.component.css']
})
export class DetailsAlpacaComponent implements OnInit {

  alpaca: Alpaca;

  constructor(private alpacaService: AlpacaService, private route: ActivatedRoute) { /*mozemy sie dobrac przez niego do calego routing*/
console.log('jestem w constructor w detail alpaca component.ts');
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.alpaca = this.alpacaService.getAlpacaById(+param.get('id'));
      console.log('jestem w ngOnInit w detail alpaca component.ts');
    });
  }

}
