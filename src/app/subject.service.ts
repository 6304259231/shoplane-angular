import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { 

  }

  dataSubject = new Subject();

  emitData(data:string){
    this.dataSubject.next(data);
  }

  getData() : Observable<any>{
    return this.dataSubject.asObservable();
  }

}
