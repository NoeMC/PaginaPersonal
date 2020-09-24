import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  bandera:boolean = false;
  numeroPestana:number = 1;

//collapsed
  constructor() {
    
  }

  ngOnInit(): void {
    this.bandera = false;
  }

  cambiarEstado(){
    this.bandera = !this.bandera;
  }
  getEstado(){
    return this.bandera;
  }

  cambiarPesta(numero:number){
    this.numeroPestana = numero;
  }

  getPestana(){
    return this.numeroPestana;
  }

}
