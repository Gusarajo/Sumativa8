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

    }
  }


}
