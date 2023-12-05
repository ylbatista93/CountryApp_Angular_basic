import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [
    `
      .spinner-container {
        align-items: center;
        background-color: black;
        border-radius: 20px;
        bottom: 15px;
        color: white;
        display: flex;
        padding: 5px 10px;
        position:fixed;
        right: 15px;
        box-shadow:0px 3px 5px rgb(0,0,0,0.5)
      }

      span {
        margin-left:5px;
      }
    `
  ]
})
export class LoadingSpinnerComponent {

}
 