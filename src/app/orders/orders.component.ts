import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-orders',
  template: `
  <h2>Present available orders</h2>
    <div (click)="onSelect(Order)"*ngFor="let Order of Orders">
    <button><h3><span>{{Order.id}}</span> {{Order.item}}</h3></button>
    </div>
  `,
  styles: []
})
export class OrdersComponent implements OnInit {
Orders=[
  {"id":1,"item":"pizza"},
  {"id":2,"item":"pasta"},
  {"id":3,"item":"prawns"}
];
  constructor(private router:Router) { }

  ngOnInit() {
  }
onSelect(Order){
this.router.navigate(['./orders',Order.id,Order.item]);

}
}
