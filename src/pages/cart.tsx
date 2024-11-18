import { TravelContext } from "@/Context/TravelContext";
import { CartItem } from "@/utils/interfaces";
import { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { promotions } from "@/utils/mock";
import { useRouter } from "next/router";

export default function Cart() {
  const { carrello, setCarrello, totale, setTotale } =
    useContext(TravelContext);
  const [codice, setCodice] = useState("");
  const [promofound, setPromofound] = useState<boolean | null>(null);
  const [sconto, setSconto] = useState<number>(0);
  const router = useRouter();
  const removeFromCart = (index: number) => {
    const updatedCart = carrello.filter(
      (item: CartItem, i: number) => i !== index
    );
    localStorage.setItem("carrello", JSON.stringify(updatedCart));
    setCarrello(updatedCart);
  };

  const calcolaTotale = () => {
    return carrello.reduce(
      (total: number, item: CartItem) => total + item.viaggio.prezzo,
      0
    );
  };

  const trovaCodicePromo = (codice: string) => {
    const promozione = promotions.find(
      (promotion) => promotion.codice === codice
    );

    if (promozione) {
      setSconto(promozione.sconto);
      setPromofound(true);
      return true;
    } else {
      setPromofound(false);
      return false;
    }
  };

  useEffect(() => {
    const total = calcolaTotale();
    const scontoApplicato = total - total * (sconto / 100);
    setTotale(scontoApplicato);
  }, [sconto]);

  return (
    <Flex p={6} minHeight="100vh" bg="gray.100" justify="center">
      <Box width="70%" p={4} bg="white" borderRadius="md" boxShadow="md">
        <Heading mb={6} fontSize="2xl" textAlign="center" color="gray.700">
          Carrello
        </Heading>
        {carrello.length === 0 ? (
          <Text color="gray.500" textAlign="center">
            Il carrello è vuoto
          </Text>
        ) : (
          carrello.map((item: any) => (
            <Box
              key={item.viaggio.id}
              mb={4}
              p={4}
              bg="gray.50"
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                {item.viaggio.da} → {item.viaggio.a}
              </Text>
              <Text color="gray.600">Data: {item.data}</Text>
              <Text color="gray.600">Ora: {item.ora}</Text>
              <Text color="gray.600">Prezzo: {item.viaggio.prezzo}€</Text>
              <Button
                bg={"red"}
                p={"3px"}
                onClick={() => removeFromCart(item.viaggio.id)}
              >
                Rimuovi
              </Button>
            </Box>
          ))
        )}
      </Box>

      <Box
        width="30%"
        p={6}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        ml={6}
        position="sticky"
        top="20px"
      >
        <Heading fontSize="xl" mb={4} color="gray.700">
          Riepilogo Ordine
        </Heading>
        <Text fontSize="lg" mb={2} color="gray.800">
          Totale: {totale}€
        </Text>
        <Text fontSize="md" mb={2} color="gray.600">
          Articoli: {carrello.length}
        </Text>

        <Box mb={4}>
          <Text fontSize="md" mb={2} color="gray.600">
            Codice Promo:
          </Text>
          <Flex>
            <Input
              size="md"
              variant="outline"
              p={3}
              border={0}
              value={codice}
              onChange={(e) => {
                setCodice(e.target.value);
              }}
            />
            <Button
              p={3}
              bg={"red"}
              colorScheme="blue"
              onClick={() => {
                trovaCodicePromo(codice);
              }}
            >
              Applica
            </Button>
          </Flex>{" "}
          {promofound != null && (
            <>
              {promofound ? (
                <Text color="green.500" fontSize="md" ml={2}>
                  Codice Promo Applicato
                </Text>
              ) : (
                <Text color="red.500" fontSize="md" ml={2}>
                  Codice Promo Non Applicato
                </Text>
              )}
            </>
          )}
        </Box>

        <Button
          backgroundColor={"red"}
          colorScheme="red"
          size="lg"
          width="100%"
          mt={4}
          onClick={() => {
            router.push("/cart/checkout");
          }}
        >
          Procedi all'acquisto
        </Button>
      </Box>
    </Flex>
  );
}
