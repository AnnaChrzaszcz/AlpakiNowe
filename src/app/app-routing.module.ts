import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AlpakiComponent} from './alpaki/alpaki.component';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {AddAlpacaComponent} from './add-alpaca/add-alpaca.component';
import {DetailsAlpacaComponent} from './details-alpaca/details-alpaca.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'alpaki', component: AlpakiComponent, children: [{path: ':id', component: DetailsAlpacaComponent}] },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-alpaca', component: AddAlpacaComponent },
];

@NgModule({
  declarations: [],
  /*imports: [
    CommonModule
  ],*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
