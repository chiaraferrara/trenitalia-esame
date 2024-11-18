import { CartItem } from "@/utils/interfaces";
import { cart, viaggi } from "@/utils/mock";
import React, { createContext, useEffect, useState } from "react";

export const TravelContext = createContext<any>({
  da: "",
  a: "",
  setDa: () => {},
  setA: () => {},
  data: "",
  setData: () => {},
  setOra: () => {},
  ora: "",
  carrello: [],
  setCarrello: () => {},
  creaArrayDiDestinazioni: () => {},
  trovaMatchDestinazioni: () => {},
  totale: 0,
  setTotale: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function TravelProvider({ children }: Props) {
  const [da, setDa] = useState("");
  const [a, setA] = useState("");
  const [data, setData] = useState("");
  const [ora, setOra] = useState("");
  const [carrello, setCarrello] = useState<any>([]);
  const [totale, setTotale] = useState<number>(0);
  const creaArrayDiDestinazioni = () => {
    const daArray = [...new Set(viaggi.map((viaggio) => viaggio.da))];
    const aArray = [...new Set(viaggi.map((viaggio) => viaggio.a))];

    return { da: daArray, a: aArray };
  };

  const trovaMatchDestinazioni = (inputA: string) => {
    const foundMatch = viaggi.find((viaggio) => viaggio.da === inputA);
    return foundMatch;
  };

  return (
    <TravelContext.Provider
      value={{
        da,
        a,
        setDa,
        setA,
        data,
        setData,
        setOra,
        ora,
        carrello,
        setCarrello,
        creaArrayDiDestinazioni,
        trovaMatchDestinazioni,
        totale,
        setTotale,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}
