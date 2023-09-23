import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss'],
})
export class ListaPersonasComponent  implements OnInit {
  personas: any[] = [];
  nuevapersona: any = {};
  personaAEditar: any = {};

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.personasService.getPersonas().subscribe((data: any[]) => {
      this.personas = data;
    });
  }

  agregarEstudiante() {
    this.personasService.addPersona(this.nuevapersona).subscribe(() => {
      this.getEstudiantes();
      this.nuevapersona = {}; 
    });
  }

  editarEstudiante() {
    this.personasService.updatePersona(this.personaAEditar).subscribe(() => {
      this.getEstudiantes();
      this.personaAEditar = {}; // Limpiar el objeto de edición
    });
  }

  eliminarEstudiante(id: number) {
    this.personasService.deletePersona(id).subscribe(() => {
      this.getEstudiantes();
    });
  }
  }

