import { Injectable } from '@angular/core';
import {Alpaca} from '../models/alpaca';
import {BehaviorSubject, Observable} from 'rxjs';
import {OwnerService} from './owner.service';

@Injectable({
  providedIn: 'root'
})
export class AlpacaService {
  private alpacsListObs = new BehaviorSubject<Array<Alpaca>>([]);

  constructor(ownerService: OwnerService) {
    console.log('alpaca service');
    const alpacsList = [
      {id: 1, age: 10, gender: 0, name: 'Kubson', src: 'assets/images/alp1.jpg', owner: ownerService.getOwnerById(2)},
      {id: 2, age: 5, gender: 1, name: 'Raf', src: 'assets/images/alp2.png', owner: ownerService.getOwnerById(1)},
      {id: 3, age: 3, gender: 0, name: 'Marian', src: 'assets/images/alp3.jpg'},
      {id: 4, age: 6, gender: 1, name: 'Ann', src: 'assets/images/alp4.jpg'}
    ];
    this.alpacsListObs.next(alpacsList);
  }

  add(alpaca: Alpaca) {
    console.log('dodalismy alpake o ID: ' + alpaca.id);
    const list = this.alpacsListObs.getValue();
    list.push(alpaca);
    this.alpacsListObs.next(list);
  }

  delete(alpaca: Alpaca) {
    console.log('usunelismy alpake o ID: ' + alpaca.id);
    const list = this.alpacsListObs.getValue();
    list.filter(e => e !== alpaca);
    this.alpacsListObs.next(list);
  }

  getalpacasObs(): Observable<Array<Alpaca>> {
    return this.alpacsListObs.asObservable();
 }

 getAlpacaById(id: number): Alpaca {
    return this.alpacsListObs.getValue().find(e => e.id === id);
 }



}
