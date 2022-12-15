import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit{

  funcionario: string = ''
  idFuncionario: string = ''
  kmL: string = ''
  kmTotal: string = ''
  veiculo: string = ''
  autorizador: string = ''
  classe: string = ''

  salvarcabecalho(){

    console.log(this.funcionario)
    console.log(this.idFuncionario)
    console.log(this.kmL)
    console.log(this.kmTotal)
    console.log(this.veiculo)
    console.log(this.autorizador)
    this.classe = 'alert-success'
  }
  constructor(){

  }
  ngOnInit(): void {
  
  }

}
