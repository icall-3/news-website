import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
/**
 * The service that shows or hides the spinner
 */
@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  /**
   * Observable to pass data about the spinner to other components
   */
  private spinnerObs = new BehaviorSubject<boolean>(false);
  /**
   * @ignore
   */
  constructor() {}

  /**
   * Method to pass data about the spinner to other components
   * @returns The data about the spinner as an Observable
   */
  public getSpinnerObs(): Observable<boolean> {
    return this.spinnerObs.asObservable();
  }

  /**
   * Sets the spinner as visible by setting the next value of the subject to true
   */
  public show(): void {
    this.spinnerObs.next(true);
  }

  /**
   * Sets the spinner as hidden by setting the next value of the subject to false
   */
  public hide(): void {
    this.spinnerObs.next(false);
  }
}
