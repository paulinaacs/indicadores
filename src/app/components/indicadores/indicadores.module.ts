import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndicadoresComponent } from  './components/indicadores/indicadores.component'
import { IndicadoresRoutingModule } from './indicadores-routing.module'
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    IndicadoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IndicadoresRoutingModule,
    FormsModule,
    MaterialModule

  ]
})
export class IndicadoresModule { }