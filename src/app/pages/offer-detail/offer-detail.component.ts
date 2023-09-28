import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../service/house.service'; // Import the HouseService

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
  house: any;
  showDetails: boolean = false;
  houses: any[] = [];

  constructor(private route: ActivatedRoute, private houseService: HouseService) {} // Inject the HouseService

  ngOnInit() {
    this.houses = this.houseService.getHouses();

    this.route.params.subscribe(params => {
      const houseRoute = params['houseRoute'];
      this.house = this.houses.find((h: { route: any; }) => h.route === houseRoute);
    });
  }

  getFeatures() {
    const featuresSet = new Set<string>();
    this.house.variants.forEach((variant: { features: {}; }) => {
      Object.keys(variant.features).forEach(feature => {
        featuresSet.add(feature);
      });
    });
    return Array.from(featuresSet);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}