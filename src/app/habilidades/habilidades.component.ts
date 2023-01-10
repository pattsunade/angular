import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  showMe:boolean=false;
  hideMe:boolean=true;

  ngOnInit(): void {
  }

  show(){
    this.showMe= !this.showMe
    this.hideMe = !this.hideMe
  }
  hide(){
    this.hideMe= true
    this.showMe= false
  }



}
