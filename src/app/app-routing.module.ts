import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { OfferComponent } from './pages/offer/offer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technology', component: ArticleListComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'terms', component: TermsConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
