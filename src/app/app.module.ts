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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,MatIconModule,MatSelectModule,MatOptionModule} from '@angular/material';  
import {MatGridListModule} from '@angular/material/grid-list';

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
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
