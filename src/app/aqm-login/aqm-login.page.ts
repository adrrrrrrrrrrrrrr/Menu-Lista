import { Component, OnInit } from '@angular/core';
import { DATOS_USUARIO } from '../interfaces/DatosUsuario';
import { Router } from '@angular/router';
import { DATOS_PARTICIPANTES } from '../interfaces/DatosParticipante';

@Component({
  selector: 'app-aqm-login',
  templateUrl: './aqm-login.page.html',
  styleUrls: ['./aqm-login.page.scss'],
})
export class AqmLoginPage implements OnInit {

  public valorType: string ='password'; // metodo para ocultar password
  public usuario: string = '';
  public password: string = '';

  constructor(private router: Router) { }

  

  public validarUsuario(): void {
    let esCorrecto: boolean = false;
  
    
    for (let usuario of DATOS_USUARIO) {
      if (usuario.usuario === this.usuario && usuario.password === this.password) {
        esCorrecto = true;
        break;
      }
    }
      if (!esCorrecto) {
      for (let participante of DATOS_PARTICIPANTES) {
        if (participante.Nombre === this.usuario ) {
          esCorrecto = true;
          break;
        }
      }
    }
  
    
    if (esCorrecto) {
      this.router.navigate(['/aqm-participantes']);
    } else {
      alert("Usuario / password incorrecto");
    }
  }

  ngOnInit() {
  }
}
