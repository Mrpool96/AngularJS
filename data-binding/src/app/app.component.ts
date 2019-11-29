import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  type='button'
  brd='1px solid red'
  style={
    border: '1px solid black',
    color:'red'
  }
  bxcl='white'

  whatsdate(){
    return Date.now()
  }
  onMouseEnter(event: MouseEvent){
    console.log('Entered', event)
    this.bxcl= this.randomColor()
  }
  onMouseLeave(event: MouseEvent){
    console.log('Exited', event)
    this.bxcl= this.randomColor()
  }
  onBtnclk(event){
   
    console.log('Clicked', event)
  }
randomColor(): string{

  let red= Math.floor(Math.random()*255);
  let green= Math.floor(Math.random()*200);
  let blue= Math.floor(Math.random()*230);
  return `rgb(${red}, ${green}, ${blue})`
}

}

