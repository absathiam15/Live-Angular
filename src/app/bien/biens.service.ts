import { Injectable } from '@angular/core';
import { Bien } from '../biens/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BiensService {

  private biens: Bien[] = [
    {
      id:1, 
      title: 'Voiture', 
    description: 'desc dfghfjgkhjl', 
    price: 870000, 
    image: 'https://source.unsplash.com/1780x720/?voiture', 
    category: 'voiture', 
    state: 1, 
    sale: true, 
    createAt: new Date(2019,4,3,33,45) 
  },
  {
    id:2, 
    title: 'Car', 
  description: 'desc', 
  price: 100000, 
  image: 'https://source.unsplash.com/1780x720/?car', 
  category: 'car', 
  state: 1, 
  sale: true, 
  createAt: new Date(2019,4,3,33,45) 
  },
  {
    id:3, 
    title: 'Maison', 
  description: 'desc', 
  price: 780000, 
  image: 'https://source.unsplash.com/1780x720/?maison', 
  category: 'Immobilier', 
  state: 1, 
  sale: true, 
  createAt: new Date(2019,18,3,23,45) 
  },
  {
    id:4, 
    title: 'Shoes', 
  description: 'desc', 
  price: 60000, 
  image: 'https://source.unsplash.com/1780x720/?shoes', 
  category: 'Immobilier', 
  state: 1, 
  sale: true, 
  createAt: new Date(2019,6,3,10,45) 
  },
  {
    id: 5, 
    title: 'Computer', 
  description: 'desc', 
  price: 60000, 
  image: 'https://source.unsplash.com/1780x720/?computer', 
  category: 'Immobilier', 
  state: 1, 
  sale: true, 
  createAt: new Date(2019,6,3,10,45) 
  },
  {
    id: 6, 
    title: 'Book', 
  description: 'desc', 
  price: 4000, 
  image: 'https://source.unsplash.com/1780x720/?book', 
  category: 'Immobilier',
  state: 1,
  sale: true, 
  createAt: new Date(2019,4,3,33,45) 
  }
];

  constructor() { }

  getAllBiens() {
    return this.biens;
  }

/**
 * Permet de rechercher un bien par son Id 
 * @param id 
 * @return bien: biens
 */
  getBienById(id: number): any{
   const bienFound = this.biens.find(
      (b: Bien) => {
        return b.id === id;
      }
    );
    return bienFound;
  }

  addBien(newBien: Bien) {
    this.biens.push(newBien);
  }
  
  updateBien(bienUpdated: Bien) {
    var oldBien: Bien = this.biens.find(
      (b:Bien) => {
        return b.id === bienUpdated.id;
      }
    );
    if(bienUpdated) {
      oldBien = {...bienUpdated}
    }
  }

  deleteBien(id: number) {

  }

  getLastId(): number{
    return this.biens[this.biens.length -1] ? 
    this.biens[this.biens.length -1].id : 0;
  }

  // getSimilarBienById(id: number): Bien[] {
  //   this.biens.
  // }
}
