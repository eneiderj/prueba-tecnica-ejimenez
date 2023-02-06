import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CountriesServices
{
    private API_SERVER = "https://restcountries.com/v3.1/";

    constructor(public http:HttpClient){}

    public getCountries():Observable<any>
    {
        return this.http.get(this.API_SERVER + 'all')
    }

    public getDetalleCountries(pais:any):Observable<any>{    
        return this.http.get(this.API_SERVER + "name/" + pais)
      }
}