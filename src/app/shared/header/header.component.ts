import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Version } from 'src/app/interface/version';
import { FirestoreService } from 'src/app/services/firestore.service';
import { IndicadoresService } from 'src/app/services/indicadores.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public app: Version = {
    version: ''
  };
  private serviceSuscription: Subject<boolean> = new Subject();

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getversionId('1')
    .pipe(takeUntil(this.serviceSuscription))
    .subscribe(data => {
      console.log('firestore data home -->', data);
      this.app = {
        version: data.version
      };
      console.log('myuser data -->', this.app);
    });
  console.log('localstorage email -->', localStorage.getItem('email'));

  }
  
  ngOnDestroy() {
    console.log('servicio desuscrito -->', this.serviceSuscription);
    this.serviceSuscription.next(false);
    this.serviceSuscription.complete();
  }

}
