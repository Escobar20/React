import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {

  constructor() { }

  get states() {
    return [
      "Aguascalientes",
      "Baja California Norte",
      "Baja California Sur",
      "Campeche",
      "Chiapas",
      "Chihuahua",
      "Ciudad de México",
      "Coahuila",
      "Colima",
      "Durango",
      "Estado de México",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "Michoacán de Ocampo",
      "Morelos",
      "Nayarit",
      "Nuevo León",
      "Oaxaca",
      "Puebla de Zaragoza",
      "Querétaro",
      "Quintana Roo",
      "San Luis Potosí",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz de Ignacio de la Llave",
      "Yucatán",
      "Zacatecas"
    ];
  }
}
