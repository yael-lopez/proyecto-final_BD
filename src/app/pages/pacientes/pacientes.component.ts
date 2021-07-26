import { Component, OnInit } from '@angular/core';
import { PacienteModel } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: any = [];

  constructor(private pacienteService: PacientesService) { }

  ngOnInit() {

    this.pacienteService.getPacientes()
      .subscribe(resp => this.pacientes = resp );

  }

  deletePaciente(paciente: PacienteModel){

    this.pacienteService.borrarPaciente(paciente._id)
      .subscribe(resp => {
        Swal.fire('Good Job!', 'Registro borrado con exito', 'success');
        setTimeout(() => {
          window.location.href = 'pacientes';
        }, 1000);
      })

  }

}
