import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Indicador } from '../interface/indicador'

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

constructor(private http: HttpClient) { }

public encontrarPorIndicador(indicador: any): Observable<Indicador> {
  return this.http.get<any>(`${environment.indicatorURL}${indicador}`);
}

}
