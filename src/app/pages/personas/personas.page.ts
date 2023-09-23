import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PersonasPage implements OnInit {

  personas: any[] = [];
  nuevaPersona: any = {};
  personaAEditar: any = {};

  constructor(private personasService: PersonasService) {}

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.personasService.getPersonas().subscribe((data: any[]) => {
      this.personas = data;
    });
  }

  agregarPersona() {
    this.personasService.addPersona(this.nuevaPersona).subscribe(() => {
      this.getPersonas();
      this.nuevaPersona = {};
    });
  }

  editarPersona(persona: any) {
    this.personaAEditar = { ...persona };
  }

  guardarEdicion() {
    this.personasService.updatePersona(this.personaAEditar).subscribe(() => {
      this.getPersonas();
      this.personaAEditar = {};
    });
  }

  cancelarEdicion() {
    this.personaAEditar = {};
  }

  eliminarPersona(id: number) {
    this.personasService.deletePersona(id).subscribe(() => {
      this.getPersonas();
    });
  }
}
