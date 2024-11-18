export interface Promotion {
  id: number;
  name: string;
  description: string;
  image: string;
  codice: string;
  sconto: number;
}

export interface Viaggio {
  id: number;
  da: string;
  a: string;
  prezzo: number;
}

export interface CartItem {
  viaggio: Viaggio;
  data: string;
  ora: string;
}
