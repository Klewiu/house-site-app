import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { OfferComponent } from './pages/offer/offer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { HouseOneComponent } from './pages/house-one/house-one.component';
import { HouseTwoComponent } from './pages/house-two/house-two.component';
import { HouseThreeComponent } from './pages/house-three/house-three.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technology', component: ArticleListComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsConditionsComponent},
  { path: 'offer/house-one', component: HouseOneComponent},
  { path: 'offer/house-two', component: HouseTwoComponent},
  { path: 'offer/house-three', component: HouseThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
