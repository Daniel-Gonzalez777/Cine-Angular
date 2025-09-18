import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comprarboletas',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './comprarboletas.html',
  styleUrl: './comprarboletas.css'
})
export class Comprarboletas {
   protected readonly nombreCompleto = signal('');
  protected readonly email = signal('');
  protected readonly telefono = signal('');
  protected readonly cantidadBoletas = signal(1);
  protected readonly cineSeleccionado = signal(0);
  protected readonly horarioSeleccionado = signal(0);

  protected readonly opcionesBoletas = signal([
    { cantidad: 1, precio: 15000, texto: '1 boleta - $15.000' },
    { cantidad: 2, precio: 30000, texto: '2 boletas - $30.000' },
    { cantidad: 3, precio: 45000, texto: '3 boletas - $45.000' },
    { cantidad: 4, precio: 60000, texto: '4 boletas - $60.000' },
    { cantidad: 5, precio: 75000, texto: '5 boletas - $75.000' }
  ]);

  protected readonly cines = signal([
    { id: 0, nombre: 'Selecciona un cine' },
    { id: 1, nombre: 'Cinemark Armenia' },
    { id: 2, nombre: 'Cine Colombia Portal del Quindío' },
    { id: 3, nombre: 'Multiplex La 14 Armenia' },
    { id: 4, nombre: 'Cinema City Centro Comercial Único' },
    { id: 5, nombre: 'Cine Fundadores Armenia' }
  ]);

  protected readonly horarios = signal([
    { id: 0, hora: 'Selecciona un horario' },
    { id: 1, hora: '14:30' },
    { id: 2, hora: '17:00' },
    { id: 3, hora: '19:30' },
    { id: 4, hora: '22:00' }
  ]);

  protected readonly formularioValido = computed(() => {
    return this.nombreCompleto().trim() !== '' &&
           this.email().trim() !== '' &&
           this.telefono().trim() !== '' &&
           this.cineSeleccionado() > 0 &&
           this.horarioSeleccionado() > 0;
  });

  protected readonly precioTotal = computed(() => {
    const opcion = this.opcionesBoletas().find(op => op.cantidad === this.cantidadBoletas());
    return opcion ? opcion.precio : 0;
  });

  onCantidadBoletasChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.cantidadBoletas.set(parseInt(select.value));
  }

  onCineChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.cineSeleccionado.set(parseInt(select.value));
  }

  onHorarioChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.horarioSeleccionado.set(parseInt(select.value));
  }

  comprarBoletas() {
    if (this.formularioValido()) {
      const datosCompra = {
        nombreCompleto: this.nombreCompleto(),
        email: this.email(),
        telefono: this.telefono(),
        cantidadBoletas: this.cantidadBoletas(),
        cine: this.cines().find(c => c.id === this.cineSeleccionado())?.nombre,
        horario: this.horarios().find(h => h.id === this.horarioSeleccionado())?.hora,
        precioTotal: this.precioTotal()
      };

      console.log('Datos de la compra:', datosCompra);
      
      alert(`¡Compra realizada exitosamente!\nTotal: $${this.precioTotal().toLocaleString('es-CO')}\nBoletas: ${this.cantidadBoletas()}`);
      
      this.limpiarFormulario();
    }
  }

  private limpiarFormulario() {
    this.nombreCompleto.set('');
    this.email.set('');
    this.telefono.set('');
    this.cantidadBoletas.set(1);
    this.cineSeleccionado.set(0);
    this.horarioSeleccionado.set(0);
  }
}