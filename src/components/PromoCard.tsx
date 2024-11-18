import { Promotion } from "@/utils/interfaces";
import { Button, Card, CardBody, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PromoCard({ promotion }: { promotion: Promotion }) {
  const router = useRouter();
  return (
    <>
      {" "}
      <Card.Root
        cursor={"pointer"}
        width="320px"
        height={"200px"}
        m={"4px"}
        onClick={() => {
          router.push(`/promo/${promotion.id}`);
        }}
      >
        <Card.Body
          gap="2"
          css={{
            backgroundImage: `url(${promotion.image})`,
            borderRadius: "10px",
            "&:hover": {
              fontSize: "25px",
            },
          }}
        >
          <Card.Title m={"auto"} marginTop={"50%"} color={"white"}>
            {promotion.name}
          </Card.Title>
        </Card.Body>
      </Card.Root>
    </>
  );
}
