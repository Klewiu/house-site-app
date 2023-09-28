import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses = [
  
    { title: "Dom 1",
      initialText:"Oto nasz modelowy dom Nr 1",
      image: 'assets/images/1a.jpg',
      cena: '300,000 PLN',
      dostepnosc: 'Dostępny',
      powierzchnia: '120 m²',
      wykonczenie: 'Standardowe wykończenie',
      route: 'house-one',
      variants: [
        {
          type: 'Surowy Otwarty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '2 szybowa PCV',
            'Elewacja': 'Tynk akrylowy',
            'Dach': 'Papa termozgrzewalna',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Surowy Zamknięty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '3 szybowa PCV',
            'Elewacja': 'Drewno świerk skandynawski',
            'Dach': 'Blacha na rąbek stojący',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Deweloperski',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': 'Aluminiowa',
            'Elewacja': 'Kompozyt HPL',
            'Dach': 'Membrana PVC',
            'Instalacja Elektryczna': 'Zainstalowana opisana podtynkowa rozdzielnia',
          }
        },
      ]    
    },
    { title: "Dom 2",
      initialText:"Oto nasz modelowy dom Nr 2",
      image: 'assets/images/2c.jpg',
      cena: '450,000 PLN',
      dostepnosc: 'Wyprzedany',
      powierzchnia: '150 m²',
      wykonczenie: 'Nowoczesne wykończenie',
      route: 'house-two',
      variants: [
        {
          type: 'Surowy Otwarty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '2 szybowa PCV',
            'Elewacja': 'Tynk akrylowy',
            'Dach': 'Papa termozgrzewalna',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Surowy Zamknięty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '3 szybowa PCV',
            'Elewacja': 'Drewno świerk skandynawski',
            'Dach': 'Blacha na rąbek stojący',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Deweloperski',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': 'Aluminiowa',
            'Elewacja': 'Kompozyt HPL',
            'Dach': 'Membrana PVC',
            'Instalacja Elektryczna': 'Zainstalowana opisana podtynkowa rozdzielnia',
          }
        },
      ]    
    },
    { title: "Dom 3",
      initialText:"Oto nasz modelowy dom Nr 3",
      image: 'assets/images/3c.jpg',
      cena: '200,000 PLN',
      dostepnosc: 'Dostępny',
      powierzchnia: '100 m²',
      wykonczenie: 'Bez wykończenia',
      route: 'house-three',
      variants: [
        {
          type: 'Surowy Otwarty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '2 szybowa PCV',
            'Elewacja': 'Tynk akrylowy',
            'Dach': 'Papa termozgrzewalna',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Surowy Zamknięty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '3 szybowa PCV',
            'Elewacja': 'Drewno świerk skandynawski',
            'Dach': 'Blacha na rąbek stojący',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Deweloperski',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': 'Aluminiowa',
            'Elewacja': 'Kompozyt HPL',
            'Dach': 'Membrana PVC',
            'Instalacja Elektryczna': 'Zainstalowana opisana podtynkowa rozdzielnia',
          }
        },
      ]    
    },
    { title: "Dom 4",
      initialText:"Oto nasz modelowy dom Nr 4",
      image: 'assets/images/3b.jpg',
      cena: '120,000 PLN',
      dostepnosc: 'Dostępny',
      powierzchnia: '80 m²',
      wykonczenie: 'Standardowe wykończenie',
      route: 'house-four',
      variants: [
        {
          type: 'Surowy Otwarty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '2 szybowa PCV',
            'Elewacja': 'Tynk akrylowy',
            'Dach': 'Papa termozgrzewalna',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Surowy Zamknięty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '3 szybowa PCV',
            'Elewacja': 'Drewno świerk skandynawski',
            'Dach': 'Blacha na rąbek stojący',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Deweloperski',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': 'Aluminiowa',
            'Elewacja': 'Kompozyt HPL',
            'Dach': 'Membrana PVC',
            'Instalacja Elektryczna': 'Zainstalowana opisana podtynkowa rozdzielnia',
          }
        },
      ]    
    },
    { title: "Dom 5",
      initialText:"Oto nasz modelowy dom Nr 5",
      image: 'assets/images/1b.jpg',
      cena: '110,000 PLN',
      dostepnosc: 'Wyprzedany',
      powierzchnia: '80 m²',
      wykonczenie: 'Nowoczesne wykończenie',
      route: 'house-five',
      variants: [
        {
          type: 'Surowy Otwarty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '2 szybowa PCV',
            'Elewacja': 'Tynk akrylowy',
            'Dach': 'Papa termozgrzewalna',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Surowy Zamknięty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '3 szybowa PCV',
            'Elewacja': 'Drewno świerk skandynawski',
            'Dach': 'Blacha na rąbek stojący',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Deweloperski',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': 'Aluminiowa',
            'Elewacja': 'Kompozyt HPL',
            'Dach': 'Membrana PVC',
            'Instalacja Elektryczna': 'Zainstalowana opisana podtynkowa rozdzielnia',
          }
        },
      ]    
    },
    { title: "Dom 6",
      initialText:"Oto nasz modelowy dom Nr 6",
      image: 'assets/images/1.jpg',
      cena: '200,000 PLN',
      dostepnosc: 'Dostępny',
      powierzchnia: '100 m²',
      wykonczenie: 'Bez wykończenia',
      route: 'house-six',
      variants: [
        {
          type: 'Surowy Otwarty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '2 szybowa PCV',
            'Elewacja': 'Tynk akrylowy',
            'Dach': 'Papa termozgrzewalna',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Surowy Zamknięty',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': '3 szybowa PCV',
            'Elewacja': 'Drewno świerk skandynawski',
            'Dach': 'Blacha na rąbek stojący',
            'Instalacja Elektryczna': 'Rozprowadzona ukryta',
          }
        },
        {
          type: 'Deweloperski',
          features: {
            'Konstrukcja': 'Szkieletowa z certyfikowanego i atestowanego drewna KVH',
            'Ocieplenie': 'Ścian i dachu wełna drzewna Steico',
            'Stolarka Okien': 'Aluminiowa',
            'Elewacja': 'Kompozyt HPL',
            'Dach': 'Membrana PVC',
            'Instalacja Elektryczna': 'Zainstalowana opisana podtynkowa rozdzielnia',
          }
        },
      ]    
    },
  ];

  constructor() {}

  getHouses() {
    return this.houses;
  }
}