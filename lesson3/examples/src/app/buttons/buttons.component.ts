import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   setButtonInactive(buttonId: string) {
    switch (buttonId) {
      case 'gold':
        this.inactiveGold = true;
        break;
      case 'silver':
        this.inactiveSilver = true;
        break;
      case 'copper':
      this.inactiveCopper = true;
      break;
      default:
        break;
    }
   }

   resetButtonStates() {
    this.inactiveGold = false;
    this.inactiveSilver = false;
    this.inactiveCopper = false;

   }

}
