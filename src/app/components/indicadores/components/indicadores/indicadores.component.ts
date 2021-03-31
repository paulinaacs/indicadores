import { Component, OnInit} from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { IndicadoresService} from '../../../../services/indicadores.services'
import { Observable, of } from 'rxjs'; 

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
  
})
export class IndicadoresComponent implements OnInit{

  indicador: String;
  asyncResultadoPorIndicador$: Observable<any>;
  displayedColumns: string[] = ['nombre', 'fecha','valor','unidad'];
  unidad_medida:String;
  nombre:String;
  showSpinner: boolean;
 

  constructor(private indicadoreService: IndicadoresService) {

  }
  ngOnInit() {

  }

  obtenerDatosPorIndicador() {

    this.asyncResultadoPorIndicador$ = this.indicadoreService.encontrarPorIndicador(this.indicador.trim())
    .pipe(
      tap(response => {
        this.unidad_medida = response.unidad_medida;
        this.nombre = response.nombre;
    }), 
    map (
      response => response.serie
      )
   ); 

   

  }



}
