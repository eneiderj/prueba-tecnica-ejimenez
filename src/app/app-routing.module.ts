import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';

const routes: Routes = [
  {path: '', component: CountriesComponent},
  {path: 'pais/:name', component: DetallePaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
