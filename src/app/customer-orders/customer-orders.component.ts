import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import{Router} from "@angular/router";
@Component({
  selector: 'app-customer-orders',
  template: `
    <p>you have selected order with id={{orderId}}</p>
    
    <button><a (click)="goPrevious()">previous</a></button>
    <br>
    <button><a (click)="goNext()">Next</a></button>
  `,
  styles: []
})
export class CustomerOrdersComponent implements OnInit {
public orderId;
public orderItem;
  constructor(private route:ActivatedRoute , private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.router.snapshot.paramMap.get('id'));
    // this.orderId=id;
    // let item=this.router.snapshot.paramMap.get('item');
    // this.orderItem=item;
this.route.paramMap.subscribe((params:ParamMap)=>{
  let id=parseInt(params.get('id'));
  this.orderId=id;
});
this.route.paramMap.subscribe((params:ParamMap)=>{
let item=(params.get('item'));
this.orderItem=item;
});
  }
  goPrevious(){
    let previousId = this.orderId - 1;
    this.router.navigate(['/orders',previousId]);
  }
goNext()
{
  let nextId = this.orderId + 1;
  this.router.navigate(['/orders',nextId]);
}
}
