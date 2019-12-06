import { TabRow } from './../data-domain';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  @Input()
  rows: Array<TabRow> = new Array()

@Output('Delete')
  deleteRow: EventEmitter<TabRow> =new EventEmitter()
  constructor() { }

  ngOnInit() {

    
  }

  onRowDelete(row: TabRow){
    console.log(`Delete Clicked`, row)
    this.deleteRow.emit(row)
  }

}
