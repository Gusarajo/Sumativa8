import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  Nombre = new FormControl('');
  correo = new FormControl('');
  Edad = new FormControl('');
  tasks: any = [];
  constructor() { }

  buttonclick() {
    if (this.Nombre.value && this.correo.value && this.Edad.value) {
      const newTask = {
        nombre: this.Nombre.value,
        correo: this.correo.value,
        edad: this.correo.value
      };
      this.tasks.push(newTask);
      console.log('se agrego');
      this.Nombre.setValue('');
      this.correo.setValue('');
      this.Edad.setValue('');

    }else{
      alert('Faltan datos');
    }
  }
  borrar(tasks:any) {
    this.tasks.splice(tasks, 1);
  alert('Se elimino el usuario');
  }
  Editar(tasks:any){
  const task = this.tasks[tasks];
  const nNombre = prompt('Ingrese el nuevo nombre:');
  const nCorreo = prompt('Ingrese el nuevo correo:');
  const nEdad = prompt('Ingrese la nueva edad:');
  if (nNombre !== null && nCorreo !== null && nEdad !== null) {
    this.tasks[tasks] = {
      nombre: nNombre,
      correo: nCorreo,
      edad: nEdad
    };
    alert('Usuario actualizado');
  }
}
}
