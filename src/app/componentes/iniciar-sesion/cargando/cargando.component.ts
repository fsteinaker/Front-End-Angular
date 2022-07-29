import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css']
})
export class CargandoComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  portfolio() {
    this.router.navigateByUrl('/portfolio');
  }

}

