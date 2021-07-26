import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteModel } from '../models/paciente.model';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = 'http://localhost:4000';

  constructor( private http: HttpClient ) { }

  crearPaciente( paciente: PacienteModel ){

    return this.http.post(`${this.url}/pacientes`, paciente);

  }

  actualizarPaciente( paciente: PacienteModel ){

    return this.http.put(`${this.url}/pacientes/${paciente._id}`, paciente);

  }

  getPacientes(){

    return this.http.get(`${this.url}/pacientes`);

  }

  getPaciente(id: any){

    return this.http.get(`${this.url}/pacientes/${id}`);

  }

  borrarPaciente(id: any){

    return this.http.delete(`${this.url}/pacientes/${id}`);

  }


}
