import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  img: string;
  calificacion: number;
  esBuena: boolean;
  descripcion: string;
  duracion: string;
  director: string;
}

@Component({
  selector: 'app-peliculacard',
  imports: [RouterLink, CommonModule], 
  templateUrl: './peliculacard.html',
  styleUrl: './peliculacard.css'
})

export class Peliculacard implements OnInit {
  peliculas: Pelicula[] = [];
  generoSeleccionado: string = 'todos';
  generosDisponibles: string[] = [];
  mostrarDescripciones: boolean = false;

  ngOnInit(): void {
    this.peliculas = [
      { 
        id: 1, 
        titulo: 'Inception', 
        genero: 'Ciencia Ficción', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148154/inception_ry8vib.png',
        calificacion: 8.8,
        esBuena: true,
        descripcion: 'Un ladrón que roba secretos a través de la tecnología de los sueños.',
        duracion: '148 min',
        director: 'Christopher Nolan'
      },
      { 
        id: 2, 
        titulo: 'Interstellar', 
        genero: 'Aventura / Ciencia Ficción', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148159/interestelar_donapz.png',
        calificacion: 8.6,
        esBuena: true,
        descripcion: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio.',
        duracion: '169 min',
        director: 'Christopher Nolan'
      },
      { 
        id: 3, 
        titulo: 'Batman: The Dark Knight', 
        genero: 'Acción / Superhéroes', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148044/Batman_lm5bkp.png',
        calificacion: 9.0,
        esBuena: true,
        descripcion: 'Batman debe aceptar uno de los mayores tests psicológicos de su carrera.',
        duracion: '152 min',
        director: 'Christopher Nolan'
      },
      { 
        id: 4, 
        titulo: 'Tenet', 
        genero: 'Acción / Ciencia Ficción', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148167/tenet_vnaqsq.png',
        calificacion: 7.5,
        esBuena: true,
        descripcion: 'Un agente secreto debe prevenir el inicio de la Tercera Guerra Mundial.',
        duracion: '150 min',
        director: 'Christopher Nolan'
      },
      { 
        id: 5, 
        titulo: 'Dunkirk', 
        genero: 'Bélico / Historia', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148048/dunkirk_zfokk4.png',
        calificacion: 7.8,
        esBuena: true,
        descripcion: 'La evacuación aliada de Dunkerque durante la Segunda Guerra Mundial.',
        duracion: '106 min',
        director: 'Christopher Nolan'
      },
      { 
        id: 6, 
        titulo: 'Oppenheimer', 
        genero: 'Drama / Historia', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148162/oppenheimer_s4bnsq.png',
        calificacion: 8.3,
        esBuena: true,
        descripcion: 'La historia de J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.',
        duracion: '180 min',
        director: 'Christopher Nolan'
      },
      { 
        id: 7, 
        titulo: 'Barbie', 
        genero: 'Comedia/Fantasía', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148044/barbie_pkpjla.png',
        calificacion: 4.1,
        esBuena: false,
        descripcion: 'Barbie vive en Barbieland hasta que es expulsada por no ser perfecta.',
        duracion: '114 min',
        director: 'Greta Gerwig'
      },
      { 
        id: 8, 
        titulo: 'El quinto elemento', 
        genero: 'Acción/Ciencia ficción', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148151/eqe_r1v7qh.png',
        calificacion: 7.6,
        esBuena: true,
        descripcion: 'Un taxista debe ayudar a una mujer misteriosa a salvar el mundo.',
        duracion: '126 min',
        director: 'Luc Besson'
      },
      { 
        id: 9, 
        titulo: 'El Planeta de los Simios', 
        genero: 'Acción/Ciencia ficción', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148164/pds_sf7dbl.png',
        calificacion: 6.8,
        esBuena: true,
        descripcion: 'Un astronauta aterriza en un planeta donde los simios dominan a los humanos.',
        duracion: '112 min',
        director: 'Franklin J. Schaffner'
      },
      { 
        id: 10, 
        titulo: 'Chicken Little', 
        genero: 'Infantil/Comedia', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148045/cl_nes5ed.png',
        calificacion: 5.7,
        esBuena: false,
        descripcion: 'Un pollito pequeño debe salvar su ciudad de una invasión alienígena.',
        duracion: '81 min',
        director: 'Mark Dindal'
      },
      { 
        id: 11, 
        titulo: 'Los tipos malos 2', 
        genero: 'Infantil/Comedia', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148159/ltm_vlnhwz.png',
        calificacion: 5.2,
        esBuena: false,
        descripcion: 'Los villanos favoritos regresan para una nueva aventura criminal.',
        duracion: '88 min',
        director: 'Pierre Perifel'
      },
      { 
        id: 12, 
        titulo: 'Otro viernes de locos', 
        genero: 'Comedia/Fantasía', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148163/ovl_zxlpss.png',
        calificacion: 5.5,
        esBuena: false,
        descripcion: 'Una comedia sobre las aventuras de un grupo de amigos en un viernes loco.',
        duracion: '95 min',
        director: 'Director Desconocido'
      },
      { 
        id: 13, 
        titulo: 'Se7en: los siete pecados capitales', 
        genero: 'Crimen/Terror', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148167/seven_twf7q9.png',
        calificacion: 8.6,
        esBuena: true,
        descripcion: 'Dos detectives persiguen a un asesino que mata basándose en los siete pecados capitales.',
        duracion: '127 min',
        director: 'David Fincher'
      },
      { 
        id: 14, 
        titulo: 'F1', 
        genero: 'Deportes/Acción', 
        img: 'https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148151/F1_dlv3lz.png',
        calificacion: 7.8,
        esBuena: true,
        descripcion: 'La historia épica de la Fórmula 1 y sus pilotos legendarios.',
        duracion: '120 min',
        director: 'Director F1'
      }
    ];
    
    this.generosDisponibles = this.obtenerGenerosUnicos();
  }

  obtenerGenerosUnicos(): string[] {
    const generos = new Set<string>();
    this.peliculas.forEach(pelicula => {
      pelicula.genero.split('/').forEach(genero => {
        const generoNormalizado = genero.trim().charAt(0).toUpperCase() + 
                                 genero.trim().slice(1).toLowerCase();
        generos.add(generoNormalizado);
      });
    });
    return Array.from(generos).sort();
  }

  get peliculasFiltradas(): Pelicula[] {
    if (this.generoSeleccionado === 'todos') {
      return this.peliculas;
    }
    return this.peliculas.filter(pelicula => {
      const generosPelicula = pelicula.genero.split('/').map(g => 
        g.trim().charAt(0).toUpperCase() + g.trim().slice(1).toLowerCase()
      );
      return generosPelicula.includes(this.generoSeleccionado);
    });
  }

  cambiarGenero(genero: string) {
    this.generoSeleccionado = genero;
  }

  toggleDescripciones() {
    this.mostrarDescripciones = !this.mostrarDescripciones;
  }

  getClasesCalificacion(calificacion: number) {
    if (calificacion >= 8.0) return 'calificacion-excelente';
    if (calificacion >= 7.0) return 'calificacion-buena';
    if (calificacion >= 6.0) return 'calificacion-regular';
    return 'calificacion-mala';
  }

  getClasesBoton(esBuena: boolean) {
    return esBuena ? 'boton-buena' : 'boton-mala';
  }


  getCalificacionTexto(calificacion: number): string {
    if (calificacion >= 8.0) return 'Excelente';
    if (calificacion >= 7.0) return 'Buena';
    if (calificacion >= 6.0) return 'Regular';
    return 'Mala';
  }

  getEstilosCalificacion(calificacion: number) {
    if (calificacion >= 8.0) {
      return {
        'background-color': '#4caf50',
        'color': 'white',
        'font-weight': 'bold'
      };
    } else if (calificacion >= 7.0) {
      return {
        'background-color': '#8bc34a',
        'color': 'white',
        'font-weight': 'bold'
      };
    } else if (calificacion >= 6.0) {
      return {
        'background-color': '#ff9800',
        'color': 'white',
        'font-weight': 'bold'
      };
    } else {
      return {
        'background-color': '#f44336',
        'color': 'white',
        'font-weight': 'bold'
      };
    }
  }
}

