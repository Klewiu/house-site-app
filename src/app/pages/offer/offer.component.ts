import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../service/house.service'; // Import the HouseService

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  houses: any[] = [];

  constructor(private houseService: HouseService) {} // Inject the HouseService

  ngOnInit() {
    this.houses = this.houseService.getHouses();
  }
}