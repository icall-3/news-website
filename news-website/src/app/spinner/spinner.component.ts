import { SpinnerService } from './spinner.service';
import { Component, OnInit } from '@angular/core';
/**
 * The component that resembles the spinner
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  /**
   * The spinner as an HTML Element
   */
  private spinnerComponent: HTMLElement;

  /**
   * Includes the spinner service for fetching data about the state of the spinner
   * @param SpinnerService The service that shows or hides the spinner
   */
  constructor(private SpinnerService: SpinnerService) {}

  /**
   * Initializes the component by obtaining its state; depending on that state,
   * the spinner is shown or hidden
   */
  ngOnInit(): void {
    this.spinnerComponent = document.getElementById('spinner');
    this.SpinnerService.getSpinnerObs().subscribe((state) => {
      this.toggleSpinner(state);
    });
  }

  /**
   * Method to toggle the spinner between shown and hidden based on its display state
   * @param state The display state of the spinner, if false - hide, if true - show
   */
  private toggleSpinner(state: boolean): void {
    const displayStatus = state ? 'block' : 'none';
    console.log(state);
    this.spinnerComponent.style.display = displayStatus;
  }
}
