import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Estreno {
  id: number;
  titulo: string;
  genero: string;
  img: string;
  trailer: string;
  fechaEstreno: string;
  descripcion: string;
}

@Component({
  selector: 'app-estrenocard',
  imports: [CommonModule],
  templateUrl: './estrenocard.html',
  styleUrl: './estrenocard.css'
})
export class Estrenocard implements OnInit {
  estrenos: Estreno[] = [];
  generoSeleccionado: string = 'todos';
  generosDisponibles: string[] = [];

  ngOnInit(): void {
    this.estrenos = [
      {
        id: 1,
        titulo: 'Deadpool & Wolverine',
        genero: 'Acción / Comedia',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148095/dyw_ynycgy.png',
        trailer: 'https://www.youtube.com/watch?v=73_1biulkYk',
        fechaEstreno: '26 de Julio, 2024',
        descripcion: 'Deadpool y Wolverine se unen en una aventura épica llena de acción y comedia.'
      },
      {
        id: 2,
        titulo: 'Intensamente 2',
        genero: 'Animación / Familia',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148157/intensamente_qusio3.png',
        trailer: 'https://www.youtube.com/watch?v=xiC2iXTXHxw',
        fechaEstreno: '14 de Junio, 2024',
        descripcion: 'Riley regresa con nuevas emociones y aventuras en su mente.'
      },
      {
        id: 3,
        titulo: 'The Long Walk - Camina o Muere',
        genero: 'Ciencia Ficción / Thriller',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148045/com_zyo4kp.png',
        trailer: 'https://www.youtube.com/watch?v=tnhl4igBpLM',
        fechaEstreno: '2 de Agosto, 2024',
        descripcion: 'Una distopía donde los jóvenes deben caminar o morir en una competencia mortal.'
      },
      {
        id: 4,
        titulo: 'Gladiator II',
        genero: 'Acción / Drama',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148153/gladiador_wgcsob.png',
        trailer: 'https://www.youtube.com/watch?v=4rgYUipGJNo',
        fechaEstreno: '22 de Noviembre, 2024',
        descripcion: 'La secuela épica del clásico de gladiadores con nueva generación de héroes.'
      },
      {
        id: 5,
        titulo: 'Mufasa: El Rey León',
        genero: 'Animación / Aventura',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148160/mufasa_npzpf0.png',
        trailer: 'https://www.youtube.com/watch?v=o17MF9vnabg',
        fechaEstreno: '20 de Diciembre, 2024',
        descripcion: 'La historia de Mufasa antes de convertirse en el Rey León.'
      },
      {
        id: 6,
        titulo: 'Demon Slayer',
        genero: 'Acción/Aventura',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148047/dslayer_awjunx.png',
        trailer: 'https://www.youtube.com/watch?v=1iBnWJKbvHI&t=2s',
        fechaEstreno: '18 de Octubre, 2024',
        descripcion: 'Tanjiro continúa su lucha contra los demonios en esta nueva aventura.'
      },
      {
        id: 7,
        titulo: 'El conjuro 4',
        genero: 'Terror',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148045/c4_gtferp.png',
        trailer: 'https://www.youtube.com/watch?v=nXObaGjH4Pc&t=2s',
        fechaEstreno: '13 de Septiembre, 2024',
        descripcion: 'Los Warren enfrentan su caso más aterrador hasta la fecha.'
      },
      {
        id: 8,
        titulo: 'Transformers: El Despertar',
        genero: 'Acción / Ciencia Ficción',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148168/tranformers_fn2hv8.png',
        trailer: 'https://www.youtube.com/watch?v=v0d0id78XdE',
        fechaEstreno: '9 de Agosto, 2024',
        descripcion: 'Los Autobots regresan en una nueva aventura llena de acción y efectos especiales.'
      },
      {
        id: 9,
        titulo: 'Avatar 3',
        genero: 'Aventura / Ciencia Ficción',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148045/avatar3_knegoq.png',
        trailer: 'https://www.youtube.com/watch?v=BlkNo-saOc0',
        fechaEstreno: '19 de Diciembre, 2025',
        descripcion: 'Jake Sully continúa su aventura en Pandora con nuevos desafíos.'
      },
      {
        id: 10,
        titulo: 'Dune: Parte Tres',
        genero: 'Ciencia Ficción / Aventura',
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148048/dune3_xigc9u.png',
        trailer: 'https://www.youtube.com/watch?v=sbXOJFLLE2I',
        fechaEstreno: '17 de Abril, 2026',
        descripcion: 'Paul Atreides completa su destino como el Kwisatz Haderach.'
      }
    ];
    
    // Extraer géneros únicos para los botones de filtro
    this.generosDisponibles = this.obtenerGenerosUnicos();
  }

  // Obtener géneros únicos de todos los estrenos
  obtenerGenerosUnicos(): string[] {
    const generos = new Set<string>();
    this.estrenos.forEach(estreno => {
      // Dividir géneros por "/" y agregar cada uno
      estreno.genero.split('/').forEach(genero => {
        // Normalizar el género: primera letra mayúscula, resto minúscula
        const generoNormalizado = genero.trim().charAt(0).toUpperCase() + 
                                 genero.trim().slice(1).toLowerCase();
        generos.add(generoNormalizado);
      });
    });
    return Array.from(generos).sort();
  }

  // Filtrar estrenos por género
  get estrenosFiltrados(): Estreno[] {
    if (this.generoSeleccionado === 'todos') {
      return this.estrenos;
    }
    return this.estrenos.filter(estreno => {
      // Normalizar el género del estreno para comparar
      const generosEstreno = estreno.genero.split('/').map(g => 
        g.trim().charAt(0).toUpperCase() + g.trim().slice(1).toLowerCase()
      );
      return generosEstreno.includes(this.generoSeleccionado);
    });
  }

  // Cambiar género seleccionado
  cambiarGenero(genero: string) {
    this.generoSeleccionado = genero;
  }

  // Función para obtener estilos dinámicos según el género
  getEstilosGenero(genero: string) {
    const coloresGenero: { [key: string]: any } = {
      'Acción': { 'background-color': '#ff5722', 'color': 'white' },
      'Comedia': { 'background-color': '#ffc107', 'color': 'black' },
      'Drama': { 'background-color': '#9c27b0', 'color': 'white' },
      'Terror': { 'background-color': '#424242', 'color': 'white' },
      'Ciencia Ficción': { 'background-color': '#2196f3', 'color': 'white' },
      'Animación': { 'background-color': '#e91e63', 'color': 'white' },
      'Aventura': { 'background-color': '#4caf50', 'color': 'white' },
      'Familia': { 'background-color': '#ff9800', 'color': 'white' }
    };
    
    return coloresGenero[genero] || { 'background-color': '#607d8b', 'color': 'white' };
  }

  // Función para obtener clases CSS dinámicas según el género
  getClasesGenero(genero: string) {
    const clasesGenero: { [key: string]: string } = {
      'Acción': 'genero-accion',
      'Comedia': 'genero-comedia',
      'Drama': 'genero-drama',
      'Terror': 'genero-terror',
      'Ciencia Ficción': 'genero-ciencia-ficcion',
      'Animación': 'genero-animacion',
      'Aventura': 'genero-aventura',
      'Familia': 'genero-familia'
    };
    
    return clasesGenero[genero] || 'genero-default';
  }

  // Función para obtener clases del botón según el género
  getClasesBotonTrailer(genero: string) {
    const clasesBoton: { [key: string]: string } = {
      'Acción': 'boton-accion',
      'Comedia': 'boton-comedia',
      'Drama': 'boton-drama',
      'Terror': 'boton-terror',
      'Ciencia Ficción': 'boton-ciencia-ficcion',
      'Animación': 'boton-animacion',
      'Aventura': 'boton-aventura',
      'Familia': 'boton-familia'
    };
    
    return clasesBoton[genero] || 'boton-default';
  }
}
