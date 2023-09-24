import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  houses = [
    {
      image: 'assets/images/1a.jpg',
      cena: '300,000 PLN',
      dostepnosc: 'Dostępny',
      powierzchnia: '120 m²',
      wykonczenie: 'Standardowe wykończenie',
      route: 'house-one'
    },
    {
      image: 'assets/images/2c.jpg',
      cena: '450,000 PLN',
      dostepnosc: 'Wyprzedany',
      powierzchnia: '150 m²',
      wykonczenie: 'Nowoczesne wykończenie',
      route: 'house-two'
    },
    {
      image: 'assets/images/3c.jpg',
      cena: '200,000 PLN',
      dostepnosc: 'Dostępny',
      powierzchnia: '100 m²',
      wykonczenie: 'Bez wykończenia',
      route: 'house-three'
    },
  ];
}
