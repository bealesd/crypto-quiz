import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectHelper {
  public route = new BehaviorSubject<string>('envelope');
}
