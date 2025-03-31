import { Component } from '@angular/core';
import { MenuLink } from '../models/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuVisible: boolean = false;

  menuLinks: MenuLink[] = [
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#realisations' },
    { label: "Déroulé d'un projet", href: '#deroule-projet' },
    { label: 'Avis clients', href: '#avis' },
    { label: 'FAQ', href: '#faq' },
    {
      label: 'Réservez un appel gratuit',
      href: 'https://calendly.com/marie-delaire-prise-rdv/30min',
      class: 'call-to-action',
      isExternal: true,
    },
  ];
  menuMobileClick(event: MouseEvent, link: MenuLink) {
    this.menuVisible = false; // Ferme le menu
    // Propagation de l'événement natif
    if (link.isExternal) {
      window.open(link.href, '_blank'); // Ouvre le lien externe dans un nouvel onglet
    } else {
      // Pour les liens internes, vous pouvez utiliser location.href
      location.href = link.href; // Navigue vers le lien interne
    }
  }
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
