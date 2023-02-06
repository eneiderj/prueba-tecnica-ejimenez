import { Component } from '@angular/core';
import { CountriesServices } from '../service/countries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent {
  public country:any;

  constructor(public coun:CountriesServices, public router: Router, public route:ActivatedRoute){}

  ngOnInit(){
    // console.log(this.route.snapshot.paramMap.get('name'))
    this.coun.getDetalleCountries(this.route.snapshot.paramMap.get('name')).subscribe(
      (r) => { this.country = r; console.log(r) },
      (e) => { console.error(e) }
    )
  }
}
