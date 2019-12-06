import { TabRow } from './domain';
import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  @Input()
  rows: Array<TabRow>=new Array()

  @Output('delete')
  deleteRow: EventEmitter<TabRow>=new EventEmitter()

  @Output('Add')
  addRow: EventEmitter<TabRow>=new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }

  onRowDelete(row: TabRow){

    console.log( `Delete Clicked`,row)
    this.deleteRow.emit(row)
  }

  onBtnClk(row:TabRow){
    console.log( `Button Clicked`,row)
    this.addRow.emit(row)

  }
}
