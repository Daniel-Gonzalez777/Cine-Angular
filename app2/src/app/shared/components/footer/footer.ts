import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  protected readonly contacto = signal("Contacto");
  protected readonly derechos = signal("© 2025 CineApp. Todos los derechos reservados.");
  protected readonly desarrollador = signal("Desarrollado por Daniel Gonzalez S.");
  protected readonly facebookUrl = signal("https://facebook.com");
  protected readonly instagramUrl = signal("https://instagram.com");
  protected readonly twitterUrl = signal("https://twitter.com");
  protected readonly facebookImg = signal('https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148151/facebook_mzfxur.png');
  protected readonly instagramImg = signal('https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148156/instagram_hpulwv.png');
  protected readonly twitterImg = signal('https://res.cloudinary.com/dzjp34qp8/image/upload/v1758148174/x_z7waq3.png');
}
