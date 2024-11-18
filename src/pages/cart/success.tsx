import { TravelContext } from "@/Context/TravelContext";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Success() {
  const router = useRouter();
  const { setCarrello, setTotale } = useContext(TravelContext);

  useEffect(() => {
    setCarrello([]);
    setTotale(0);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Flex direction={"column"} alignItems={"center"} h={"70vh"} p={10}>
        <Heading color={"red"} fontSize={"30px"}>
          Pagamento avvenuto con successo
        </Heading>
        <p>Stai per essere reindirizzato alla home...</p>
      </Flex>
    </>
  );
}
