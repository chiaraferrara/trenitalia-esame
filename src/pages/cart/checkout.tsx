import { TravelContext } from "@/Context/TravelContext";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Checkout() {
  const { carrello, setCarrello, totale, setTotale } =
    useContext(TravelContext);
  const [intestatario, setIntestatario] = useState("");
  const [numeroCarta, setNumeroCarta] = useState("");
  const [scadenza, setScadenza] = useState("");
  const [cvv, setCvv] = useState("");
  const router = useRouter();

  return (
    <>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading color={"red"} fontSize={"30px"}>
          Effettua Checkout
        </Heading>
        <h1>Totale: €{totale}</h1>
        <Heading color={"red"} fontSize={"24px"}>
          Riepilogo
        </Heading>
        {carrello.map((item: any, index: number) => (
          <Box key={index}>
            <h1>
              Viaggio: {item.viaggio.da} → {item.viaggio.a}
            </h1>
            <h1>Data: {item.data}</h1>
            <h1>Ora: {item.ora}</h1>
          </Box>
        ))}
        <Heading color={"red"} fontSize={"24px"}>
          Dati Carta di Credito
        </Heading>{" "}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            if (
              numeroCarta.length == 0 ||
              intestatario === "" ||
              scadenza === "" ||
              cvv === ""
            ) {
              alert("Compilare tutti i campi");
              return;
            } else {
              router.push("/cart/success");
            }
          }}
        >
          <Box mb={3}>
            <label htmlFor="cardNumber">Numero Carta:</label>
            <Input
              w={"300px"}
              m={2}
              value={numeroCarta}
              onChange={(e) => setNumeroCarta(e.target.value)}
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="cardName">Nome Intestatario:</label>
            <Input
              w={"300px"}
              m={2}
              value={intestatario}
              onChange={(e) => setIntestatario(e.target.value)}
              type="text"
              id="cardName"
              name="cardName"
              required
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="expiryDate">Data di Scadenza:</label>
            <Input
              w={"300px"}
              m={2}
              value={scadenza}
              onChange={(e) => setScadenza(e.target.value)}
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              required
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="cvv">CVV:</label>
            <Input
              w={"300px"}
              m={2}
              value={cvv}
              onChange={(e) => {
                setCvv(e.target.value);
              }}
              type="text"
              id="cvv"
              name="cvv"
              required
            />
          </Box>
          <Button type="submit">Paga</Button>
        </form>
      </Flex>
    </>
  );
}
