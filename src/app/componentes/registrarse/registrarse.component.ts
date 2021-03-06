import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent {
  usuario = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, public router: Router) {}

  Registrar() {
    const { email, password } = this.usuario;
    if (email !== '' && password !== '') {
      this.authService.register(email, password).then((res) => {
        console.log('Se registro: ', res);
      });
    } else {
      alert('Complete los campos para registrarse');
    }
  }
}
