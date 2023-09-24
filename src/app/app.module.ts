import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { OfferComponent } from './pages/offer/offer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookiePopupComponent } from './shared/cookie-popup/cookie-popup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { HouseOneComponent } from './pages/house-one/house-one.component';
import { HouseTwoComponent } from './pages/house-two/house-two.component';
import { HouseThreeComponent } from './pages/house-three/house-three.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleListComponent,
    OfferComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    CookiePopupComponent,
    NavbarComponent,
    TermsConditionsComponent,
    HouseOneComponent,
    HouseTwoComponent,
    HouseThreeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
