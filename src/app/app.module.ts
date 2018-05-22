import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LivrosComponent } from './livros/livros.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { VersiculosComponent } from './versiculos/versiculos.component';
import { MainService } from './main.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LivrosComponent,
    CapitulosComponent,
    VersiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
