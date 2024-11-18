import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/logo-trenitalia.svg";
import { Box, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { cart } from "@/utils/mock";
import { useContext } from "react";
import { TravelContext } from "@/Context/TravelContext";

export default function Navbar() {
  const router = useRouter();

  const { carrello } = useContext(TravelContext);

  return (
    <>
      <Box width={"100%"} height={"20px"} bg={"red"}></Box>
      <nav>
        <Flex
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          padding="10px 20px"
          bgColor="white"
          boxShadow="sm"
          fontSize="sm"
          fontWeight="bold"
          color="blackAlpha.800"
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          >
            <img style={{ width: "200px" }} src={Logo.src} alt="Trenitalia" />
          </div>

          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            chi siamo
          </Link>
          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            frecce
          </Link>
          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            intercity e internazionali
          </Link>
          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            regionale
          </Link>
          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            offerte
          </Link>
          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            servizi
          </Link>
          <Link
            cursor={"not-allowed"}
            href=""
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            cartafreccia e x-go
          </Link>
          <Link
            onClick={() => {
              router.push("/cart");
            }}
            _hover={{ color: "teal.500" }}
            fontVariant={"small-caps"}
          >
            <FaShoppingCart /> carrello ({carrello.length})
          </Link>
        </Flex>
      </nav>
    </>
  );
}
