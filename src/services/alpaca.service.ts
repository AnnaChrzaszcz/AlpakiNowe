import { Injectable } from '@angular/core';
import {Alpaca} from '../models/alpaca';
import {BehaviorSubject, Observable} from 'rxjs';
import {OwnerService} from './owner.service';

@Injectable({
  providedIn: 'root'
})
export class AlpacaService {

  private alpacsList: Array<Alpaca> = [];
  private alpacsListObs = new BehaviorSubject<Array<Alpaca>>(this.alpacsList);

  constructor(ownerService: OwnerService) {
    console.log('alpaca service');
    // tslint:disable-next-line:max-line-length
    this.alpacsList.push({id: 1, age: 10, gender: 0, name: 'Kubson', src: 'assets/images/alp1.jpg', owner: ownerService.getOwner(2)});
    this.alpacsList.push({id: 2, age: 5, gender: 1, name: 'Raf', src: 'assets/images/alp2.png', owner: ownerService.getOwner(1)});
    this.alpacsList.push({id: 3, age: 3, gender: 0, name: 'Marian', src: 'assets/images/alp3.jpg'});
    this.alpacsList.push({id: 4, age: 6, gender: 1, name: 'Ann', src: 'assets/images/alp4.jpg'});

    this.alpacsListObs.next(this.alpacsList);
  }

  add(alpaca: Alpaca) {
    console.log('dodalismy alpake o ID: ' + alpaca.id);
    this.alpacsList.push(alpaca);
    this.alpacsListObs.next(this.alpacsList);
  }

  delete(alpaca: Alpaca) {
    console.log('usunelismy alpake o ID: ' + alpaca.id);
    this.alpacsList = this.alpacsList.filter(e => e !== alpaca);
    this.alpacsListObs.next(this.alpacsList);
  }

  getalpacasObs(): Observable<Array<Alpaca>> {
    return this.alpacsListObs.asObservable();
 }



}
