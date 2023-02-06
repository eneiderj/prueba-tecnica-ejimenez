import { Component } from '@angular/core';
import { CountriesServices } from '../service/countries.service';
import { Countries } from "../interfaces/countries.interface";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  public countries:any;
  public page:number = 0;
  public buscar:string = '';

  constructor(public countrie:CountriesServices){}

  ngOnInit(){
    this.countrie.getCountries().subscribe(
      (r) => { this.countries = r; console.log(r) },
      (e) => { console.error(e) }
    )
  }

  nextPage() {
    this.page += 6;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 6;
  }

  onBuscarPais(buscar: string) {
    this.page = 0;
    this.buscar = buscar;
  }
}
