import { TabRow } from './data-domain';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-practice';

  data=new Array<TabRow>()
  clickedRow: TabRow

  fetchData(){

    this.data.push({id:1, item: 'pc', qty: 3, price: 3000})
    this.data.push({id:2, item: 'pc', qty: 3, price: 3000})
    this.data.push({id:3, item: 'pc', qty: 3, price: 3000})
    this.data.push({id:4, item: 'pc', qty: 3, price: 3000})
    this.data.push({id:5, item: 'pc', qty: 3, price: 3000})
    this.data.push({id:6, item: 'pc', qty: 3, price: 3000})
    this.data.push({id:7, item: 'pc', qty: 3, price: 3000})
    
  }
  delData(row: TabRow){

  this.clickedRow= row
  console.log(`Delete Clicked`, row)
  this.data.forEach((dt, ind)=>{
    if(dt.id===row.id){
      this.data.splice(ind,1)
    }
  })
    
  }
}
