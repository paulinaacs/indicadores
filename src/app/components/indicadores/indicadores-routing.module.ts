import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent} from '../../shared/page-not-found/page-not-found/page-not-found.component'
import { IndicadoresComponent} from './/components/indicadores/indicadores.component'

const routes: Routes = [
  {
    path: '',
    component: IndicadoresComponent
  },
  {
    path: '**',
    component:PageNotFoundComponent
    
  }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }