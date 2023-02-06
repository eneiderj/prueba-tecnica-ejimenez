import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesServices } from './service/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { ObjToArrayPipe } from './countries/objToArray.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    ObjToArrayPipe,
    FiltroPipe,
    DetallePaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CountriesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
