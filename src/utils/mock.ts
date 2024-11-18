import { CartItem, Promotion } from "./interfaces";

export const promotions: Promotion[] = [
  {
    id: 1,
    name: "Sconto del 50% per sempre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-Offerta-Freccia-2x1-11-24.webp",
    codice: "PROMO50",
    sconto: 50,
  },
  {
    id: 2,
    name: "Promozione città dell'arte",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-freccialink-citta-arte-matera-11-24.webp",
    codice: "PROMO20",
    sconto: 20,
  },
  {
    id: 3,
    name: "Viaggia in 2 con sconti fino al 50%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-Me-you-11-2024.webp",
    codice: "PROMO2X1",
    sconto: 50,
  },
  {
    id: 4,
    name: "Sconto fino al 20% ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-frecciarossa-sistina-24-25.webp",
    codice: "PROMO20",
    sconto: 20,
  },
  {
    id: 5,
    name: "Pendolari con sconti fino al 30%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-REG-ITALIA-IN-TOUR-9-24.webp",
    codice: "PROMO30",
    sconto: 30,
  },
  {
    id: 6,
    name: "Viaggia con il tuo amico",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-Offerta-Famiglia-ICN-05-24.webp",
    codice: "PROMO2X1",
    sconto: 50,
  },
  {
    id: 7,
    name: "Viaggia con la tua famiglia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-Musica-Eventi-XFactor-10-24-2.webp",
    codice: "PROMO3X2",
    sconto: 50,
  },
  {
    id: 8,
    name: "Regionale festeggia i 30 anni",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://www.trenitalia.com/content/dam/tcom/restyling/homepage/325x220/325x220-Regionale-Umbria-Eurochocolate.webp",
    codice: "PROMO3X3",
    sconto: 50,
  },
];

export const viaggi = [
  {
    id: 1,
    da: "Milano",
    a: "Roma",
    prezzo: 50,
  },

  {
    id: 2,
    da: "Palermo",
    a: "Caltabellotta",
    prezzo: 150,
  },
  {
    id: 3,
    da: "Catania",
    a: "Palermo",
    prezzo: 50,
  },
];

export const cart: CartItem[] = [];
