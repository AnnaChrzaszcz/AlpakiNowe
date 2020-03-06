import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlpakiComponent } from './alpaki/alpaki.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddAlpacaComponent } from './add-alpaca/add-alpaca.component';
import {AlpacaService} from '../services/alpaca.service';
import {OwnerService} from '../services/owner.service';
import {SpeciesService} from '../services/species.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlpakiComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    AddAlpacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlpacaService, OwnerService, SpeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
