import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  private brg = { title: 'Burgers', id: 'brg' };
  private pzz = { title: 'Pizzas', id: 'pzz' };
  private glt = { title: 'Galettes', id: 'glt' };
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.brg.title, cols: 2, rows: 1, id: this.brg.id },
          { title: this.pzz.title, cols: 2, rows: 2, id: this.pzz.id },
          { title: this.glt.title, cols: 2, rows: 1, id: this.glt.id },
        ];
      }

      return [
        { title: this.brg.title, cols: 2, rows: 1, id: this.brg.id },
        { title: this.pzz.title, cols: 1, rows: 2, id: this.pzz.id },
        { title: this.glt.title, cols: 1, rows: 2, id: this.glt.id },
      ];
    })
  );

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {}

  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();

  }
}
