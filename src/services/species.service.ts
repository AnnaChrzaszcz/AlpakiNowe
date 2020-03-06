import { Injectable } from '@angular/core';
import {Owner} from '../models/owner';
import {BehaviorSubject, Observable} from 'rxjs';
import {Species} from '../models/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private speciesList: Array<Species> = [];
  private speciesListObs = new BehaviorSubject<Array<Species>>(this.speciesList);

  constructor() {
    console.log('species service');
    this.speciesList.push({id: 1, name: 'gatunek1'});
    this.speciesList.push({id: 2, name: 'gatunek2'});
    this.speciesListObs.next(this.speciesList);
  }

  add(species: Species) {
    this.speciesList.push(species);
    this.speciesListObs.next(this.speciesList);
  }

  delete(species: Species) {
    this.speciesList = this.speciesList.filter(e => e !== species);
    this.speciesListObs.next(this.speciesList);
  }

  getspeciessObs(): Observable<Array<Species>> {
    return this.speciesListObs.asObservable();
  }
}
