import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showContactForm = false;
  buttonLabel = 'Otwórz formularz kontaktowy';

  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
    this.buttonLabel = this.showContactForm ? 'Zamknij formularz kontaktowy' : 'Otwórz formularz kontaktowy';
  }
}
