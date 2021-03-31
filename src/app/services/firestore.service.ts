import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Version } from '../interface/version';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public userBd: any;

  constructor(
    private fireStore: AngularFirestore
  ) { }



  getversionId(id: string): Observable<Version> {
    return new Observable(observer => {
      this.fireStore.firestore.collection('version').where('version', '==', id).get().then(querySnapshot => {
        querySnapshot.forEach(resp => {
          this.userBd = resp.data();
        })
        observer.next(this.userBd);
        observer.complete();
      }).catch(error => {
        console.log('error call service firestore -->', error);
        observer.error(error);
        observer.complete();
      })
    });
  }

}
