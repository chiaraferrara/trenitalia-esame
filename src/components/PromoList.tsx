import { Promotion } from "@/utils/interfaces";
import { promotions } from "@/utils/mock";
import PromoCard from "./PromoCard";
import { Flex, Stack } from "@chakra-ui/react";

export default function PromoList() {
  return (
    <>
      {" "}
      <Flex
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        p={20}
        marginInline={"20px"}
      >
        {promotions.map((promotion: Promotion) => (
          <PromoCard key={promotion.id} promotion={promotion} />
        ))}
      </Flex>
    </>
  );
}