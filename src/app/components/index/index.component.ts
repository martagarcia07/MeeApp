import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Category } from './../../models/post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnChanges {
  @Input() strct : Category[];
  mainLevel: number = 1;
  index: any;
  max: number;
  indexStrct : Map<string, number[]> = new Map<string, number[]>();
  //{ [key:string]:{ [key:string]:string; }; } = {};
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    // HEREEEEEEEEEEEEEEEEE
    console.log(this.strct);
    if (this.strct) {
      this.max = Math.max.apply(Math,this.strct.map(function(o){return o.level;}));
      let levelsArr = Array(this.max);
      this.strct.forEach(s => {
        // label , [row, col]
        if (typeof(levelsArr[parseInt(String(s.value)[0])-1]) != "object"){
          levelsArr[parseInt(String(s.value)[0])-1] = [];
        }
        levelsArr[parseInt(String(s.value)[0])-1].push(s);
        // this.indexStrct.set(s.label, [parseInt( s.value + Array(levels-(String(s.value).length)+1).join("0")), parseInt(s.level)]);
      })
  
      this.strct.sort(function(a, b){
        return a.level[0] == b.level[0] ? 0 : +(a.level[0] > b.level[0]) || -1;
      });
      this.index = levelsArr;
    }
  }
  doSomething(e){
  }
}
