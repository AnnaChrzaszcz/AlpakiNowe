import { Injectable } from '@angular/core';
import {Alpaca} from '../models/alpaca';
import {BehaviorSubject, Observable} from 'rxjs';
import {Owner} from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private ownersList: Array<Owner> = [];
  private ownersListObs = new BehaviorSubject<Array<Owner>>(this.ownersList);

  constructor() {
    console.log('owner service');
    this.ownersList.push({id: 1, name: 'Jola', surname: 'Monola'});
    this.ownersList.push({id: 2, name: 'Pola', surname: 'Cocacola'});
    this.ownersList.push({id: 3, name: 'Ola', surname: 'Gola'});
    this.ownersListObs.next(this.ownersList);
  }

  add(owner: Owner) {
    this.ownersList.push(owner);
    this.ownersListObs.next(this.ownersList);
  }

  delete(owner: Owner) {
    this.ownersList = this.ownersList.filter(e => e !== owner);
    this.ownersListObs.next(this.ownersList);
  }

  getownersObs(): Observable<Array<Owner>> {
    return this.ownersListObs.asObservable();
  }

  getOwner(id: number): Owner {
    return this.ownersList.find(e => e.id === id);
  }
}
