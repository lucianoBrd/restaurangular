import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  private card1 = 'A la carte';
  private card2 = 'Burgers';
  private card3 = 'Pizzas';
  private card4 = 'Burritos';
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.card1, cols: 1, rows: 1 },
          { title: this.card2, cols: 1, rows: 1 },
          { title: this.card3, cols: 1, rows: 1 },
          { title: this.card4, cols: 1, rows: 1 }
        ];
      }

      return [
        { title: this.card1, cols: 2, rows: 1 },
        { title: this.card2, cols: 1, rows: 1 },
        { title: this.card3, cols: 1, rows: 2 },
        { title: this.card4, cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
