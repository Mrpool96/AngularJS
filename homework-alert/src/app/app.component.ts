import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-alert';
  type='text'
  brd='1px solid red'
  para='hey this is binding'

  @ViewChild('calcStr',{static: false})
  calcStr :   ElementRef 

  @ViewChild('result',{static: false})
  result: ElementRef

  calculate(){
    console.log(this.calcStr.nativeElement.value)
    this.result.nativeElement.value=eval(this.calcStr.nativeElement.value)
  }
  cls(){
    this.calcStr.nativeElement.value=''
    this.result.nativeElement.value=''
  }
  
}
