import { SpinnerService } from './spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  private spinnerComponent: HTMLElement;

  constructor(private SpinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerComponent = document.getElementById('spinner');
    this.SpinnerService.getSpinnerObs().subscribe((state) => {
      this.toggleSpinner(state);
    });
  }

  private toggleSpinner(state: boolean): void {
    const displayStatus = state ? 'block' : 'none';
    console.log(state);
    this.spinnerComponent.style.display = displayStatus;
  }
}
