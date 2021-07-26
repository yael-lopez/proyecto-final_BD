import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PacienteModel } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente:any = new PacienteModel();

  constructor(private pacienteService: PacientesService, 
      private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'nuevo'){

      this.pacienteService.getPaciente(id)
        .subscribe(resp => {
          this.paciente = resp;
        })

    }

  }

  guardar( form: NgForm ){

    if( form.invalid ){
      console.log("Formulario no valido");
      return;
    }

    if(this.paciente._id){

      this.pacienteService.actualizarPaciente(this.paciente)
        .subscribe(resp => {
          Swal.fire('Good Job!', 'Registro actualizado con exito', 'success');
          setTimeout(() => {
            window.location.href = 'pacientes';
          }, 1500);
        })

    }else{

      this.pacienteService.crearPaciente(this.paciente)
      .subscribe(resp => {
        Swal.fire('Good Job!', 'Registro creado con exito', 'success');
        setTimeout(() => {
          window.location.href = 'pacientes';
        }, 1500);
      });

    }

  }

}
