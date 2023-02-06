import { Pipe, PipeTransform } from '@angular/core';
import { Countries } from '../interfaces/countries.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(countries: any, page: number = 0, buscar:string = ''): any {
    if (buscar.length === 0)
      return countries.slice(page, page + 6);
    
      const resultado = [];

      for(const pais of countries){
          if(pais.name.common.toLowerCase().indexOf(buscar.toLowerCase()) > -1) {
            resultado.push(pais);
          };
      };
      return resultado.slice(page, page + 6);
  }

}
