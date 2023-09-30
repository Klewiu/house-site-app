import { Directive, HostListener, Injector } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component'; // Adjust the path to match your actual component location

@Directive({
  selector: '[appScrollTrigger]'
})
export class ScrollTriggerDirective {
  private navbarComponent: NavbarComponent;

  constructor(private injector: Injector) {
    // Use Injector to get the NavbarComponent instance
    this.navbarComponent = this.injector.get(NavbarComponent);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;
    const scrollThreshold = navbarHeight * 0.8; // Adjust the percentage as needed

    if (scrollY >= scrollThreshold) {
      // Call the collapseNavbar() function from NavbarComponent
      this.navbarComponent.collapseNavbar();
    }
  }
}
