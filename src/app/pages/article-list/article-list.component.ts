import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  sections = [
    { 
      title: 'Jak powstają nasze budynki?', 
      text: 'Domek modułowy jest budowany w kontrolowanych warunkach fabrycznych, co gwarantuje precyzję i jakość wykonania. Poszczególne moduły są produkowane jako oddzielne sekcje, które następnie są transportowane na miejsce budowy. Po przybyciu na działkę, moduły są łączone ze sobą, tworząc pełnowartościowy, trwały budynek. Proces ten nie tylko skraca czas budowy, ale także minimalizuje wpływ na środowisko naturalne oraz pozwala na lepszą kontrolę kosztów.', 
      images: ['assets/images/1a.jpg', 'assets/images/1b.jpg', 'assets/images/1c.jpg'] 
    },
    { 
      title: 'Nasza technologia to podstawa', 
      text: 'Technologia budowy domków modułowych opiera się na zastosowaniu prefabrykowanych modułów, które są wstępnie wytwarzane w zakładzie produkcyjnym. Każdy moduł jest budowany zgodnie z rygorystycznymi normami jakości, co zapewnia wysoką trwałość i odporność na warunki atmosferyczne. Po wyprodukowaniu, moduły są transportowane na plac budowy i łączone na wcześniej przygotowanym fundamencie. Dzięki tej metodzie, budowa domu jest znacznie szybsza i mniej zależna od warunków pogodowych, w porównaniu z tradycyjnymi metodami budowlanymi.', 
      images: ['assets/images/2a.jpg', 'assets/images/2b.jpg', 'assets/images/2c.jpg'] 
    },
    { 
      title: 'Częste pytania naszych klientów', 
      text: 'Klienci często zadają pytania dotyczące trwałości, izolacji termicznej oraz kosztów utrzymania drewnianych domków modułowych. Inne zapytania dotyczą możliwości dostosowania projektu do indywidualnych potrzeb, czasu realizacji budowy oraz gwarancji na wykonane prace. Wielu z nich interesuje się także wpływem takiej budowy na środowisko oraz możliwościami zastosowania rozwiązań ekologicznych. Firma z przyjemnością odpowiada na wszystkie te wątpliwości, dostarczając szczegółowych informacji i doradzając w wyborze optymalnych rozwiązań. Dzięki temu, klienci mogą podjąć świadomą decyzję i cieszyć się komfortem mieszkania w drewnianym domku modułowym.', 
      images: ['assets/images/3a.jpg', 'assets/images/3b.jpg', 'assets/images/3c.jpg'] 
    },
  ];

  selectedImage!: string;

  constructor(private modalService: NgbModal) {}

  open(content: any, image: string) {
    this.selectedImage = image;
      this.modalService.open(content, { 
    ariaLabelledBy: 'modal-basic-title', 
    size: 'lg', // Set the size of the modal to 'xl' (extra large)
    centered: true // Center the modal vertically in the screen
  }).result.then(
      (result) => {
        // Handle closing of modal
      },
      (reason) => {
        // Handle dismissal of modal
      }
    );
  }
}
