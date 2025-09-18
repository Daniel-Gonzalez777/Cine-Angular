import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactform.html',
  styleUrl: './contactform.css'
})
export class Contactform {
 protected readonly nombre = signal('');
  protected readonly email = signal('');
  protected readonly telefono = signal('');
  protected readonly asunto = signal('Consulta General');
  protected readonly mensaje = signal('');

  protected readonly opcionesAsunto = signal([
    'Consulta General',
    'Soporte Técnico',
    'Sugerencias',
    'Otros'
  ]);

  protected enviarMensaje(): void {
    console.log('Mensaje enviado:', {
      nombre: this.nombre(),
      email: this.email(),
      telefono: this.telefono(),
      asunto: this.asunto(),
      mensaje: this.mensaje()
    });
    alert('✅ Tu mensaje ha sido enviado con éxito');
  }
}
