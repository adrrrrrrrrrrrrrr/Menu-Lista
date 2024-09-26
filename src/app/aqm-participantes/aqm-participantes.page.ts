import { Component, OnInit } from '@angular/core';
import { DATOS_PARTICIPANTES } from '../interfaces/DatosParticipante';
import { TDatosParticipante } from '../interfaces/TDatosParticipante';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-aqm-participantes',
  templateUrl: './aqm-participantes.page.html',
  styleUrls: ['./aqm-participantes.page.scss'],
})
export class AqmParticipantesPage implements OnInit {

  mostrarListaParticipantes = false;
  public datos: TDatosParticipante[] = DATOS_PARTICIPANTES;

  

  constructor(private router: Router, private menuCtrl: MenuController) {}


  cerrarMenu(){
    this.router.navigate(['/aqm-login'])
    this.menuCtrl.close();
    this.mostrarListaParticipantes = false;
  }

  mostrarLista(){
    this.mostrarListaParticipantes = true;
    this.menuCtrl.close();
  }

  extraerHora(dateTime: string): string {
    const parts = dateTime.split(' ');
    return parts.length > 1 ? parts[1] : dateTime;
  }

  cambiarColorVerde ( i : number) : void{
    this.datos[i].Estado='Activo'
  }

  cambiarColorRojo ( i: number): void {
    this.datos[i].Estado = 'Inactivo'
  }

  ngOnInit() {
  }


}
