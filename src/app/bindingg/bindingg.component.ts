import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bindingg',
  templateUrl: './bindingg.component.html',
  styleUrls: ['./bindingg.component.css']
})
export class BindinggComponent implements OnInit {

  pageTitle:string="interpolation binding"
  btnstatus:boolean=true;
  username:string="lachuma"


  // this is parent to child communication
  @Input()
  childvar: string | any;

  // this is child to parent communication
  @Output()
  notify:EventEmitter<string> =new EventEmitter<string>();

  passData(){
    this.notify.emit("child component msg");

  }

  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(){
    this.pageTitle="event binding";
  }

}


