import { Promotion } from "@/utils/interfaces";
import { promotions } from "@/utils/mock";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PromoPage() {
  const [promo, setPromo] = useState<Promotion | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const foundPromo = promotions.find(
      (promo: Promotion) => promo.id === parseInt(id as string)
    );
    console.log(foundPromo);
    if (foundPromo) {
      setPromo(foundPromo);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  if (promo === null) {
    return (
      <>
        <h1>Promo not found</h1>
      </>
    );
  }
  return (
    <>
      {" "}
      <Box m={"auto"} w={"50%"} h={"100vh"} p={"2%"}>
        <Heading fontSize={"30px"} color={"red"}>
          {promo.name}
        </Heading>
        <Box
          backgroundImage={`url(${promo.image})`}
          css={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "200px",
            width: "100%",
            position: "relative",
          }}
        ></Box>
        <p>{promo.description}</p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Codice promo : {promo.codice}
        </p>
      </Box>
    </>
  );
}
