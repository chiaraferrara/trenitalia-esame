import { TravelContext } from "@/Context/TravelContext";
import { CartItem } from "@/utils/interfaces";
import { cart, viaggi } from "@/utils/mock";
import { Button, Card, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function TravelPage() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState<any>();
  const [data, setData] = useState<any>();
  const [ora, setOra] = useState<any>();
  const { carrello, setCarrello } = useContext(TravelContext);

  const addToCart = (data: any, ora: any) => {
    const object: CartItem = {
      viaggio: found,
      data: data,
      ora: ora,
    };
    console.log("OGGETTO", object);

    const updatedCart = [...carrello, object];

    setCarrello(updatedCart);
  };

  useEffect(() => {
    const foundViaggio = viaggi.find((viaggio) => viaggio.id === Number(id));
    setFound(foundViaggio);
    setLoading(false);
    console.log(foundViaggio);
  }, [id]);

  useEffect(() => {
    console.log("carrello aggiornato", carrello);
  }, [carrello]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setData(data);
    }
    const ora = localStorage.getItem("ora");
    if (ora) {
      setOra(ora);
    }
  }, [found]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (Number(id) === 0 || !found) {
    return <div>Non sono presenti viaggi per questa ricerca</div>;
  }

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <Heading color={"red"} p={"10px"}>
        Viaggia da {found.da} a {found.a}
      </Heading>
      <p>
        Per giorno {data} alle {ora}
      </p>
      <Flex direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Card.Root>
          <Card.Body p={"20px"}>
            <p>Da {found.da}</p>
          </Card.Body>
        </Card.Root>
        <FaArrowRight color="red" />
        <Card.Root>
          <Card.Body p={"20px"}>
            <p>A {found.a}</p>
          </Card.Body>
        </Card.Root>
        <Card.Root border={"0px"}>
          <Card.Body
            p={"20px"}
            color={"white"}
            bgColor={"red"}
            borderRadius={"10px"}
            marginInline={"10px"}
          >
            <p>€{found.prezzo}</p>
          </Card.Body>
        </Card.Root>
      </Flex>
      <Flex direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Button m={2} p={"2px"} bg={"red"} onClick={() => addToCart(data, ora)}>
          Aggiungi al carrello
        </Button>
      </Flex>
    </div>
  );
}
