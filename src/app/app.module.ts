import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TablaTransferenciasComponent } from './components/tabla-transferencias/tabla-transferencias.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaTransferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [TablaTransferenciasComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
