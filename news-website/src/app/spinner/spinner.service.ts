import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinnerObs = new BehaviorSubject<boolean>(false);
  constructor() {}

  public getSpinnerObs(): Observable<boolean> {
    return this.spinnerObs.asObservable();
  }

  public show(): void {
    this.spinnerObs.next(true);
  }

  public hide(): void {
    this.spinnerObs.next(false);
  }
}
