import { Component } from '@angular/core';
import { TabRow } from './data-tab/domain';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-table';

  data= new Array<TabRow>()

  fetchData(){

    this.data.push({id: 1, item:'pc', qty: 3, price:30000})
    this.data.push({id: 2, item:'laptop', qty: 4, price:50000})
    this.data.push({id: 3, item:'Mac', qty: 2, price:60000})
    this.data.push({id: 4, item:'keyboards', qty: 3, price:20000})
    this.data.push({id: 5, item:'External HDD', qty:2, price:10000})
    this.data.push({id: 6, item:'Flash Drives', qty:2, price:10000})
    this.data.push({id: 7, item:'Earphones', qty:2, price:10000})
    this.data.push({id: 8, item:'wireless speakers', qty:2, price:10000})
    this.data.push({id: 9, item:'Mobile', qty:2, price:10000})
    this.data.push({id: 10, item:'Speakers', qty:2, price:10000})
    this.data.push({id: 11, item:'Mouse', qty:2, price:10000})
  }

  onDelete(row: TabRow){
 console.log(`Delete Clicked`)
    this.data.forEach((dt, ind) =>{
      if(dt.id===row.id) {
        this.data.splice(ind ,1)
      }
    })
  }

  onBtnClk(row:TabRow){
   this.data.push(row)
}
}
