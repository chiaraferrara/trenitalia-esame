import { TravelContext } from "@/Context/TravelContext";
import {
  Box,
  Input,
  Button,
  Flex,
  Text,
  Switch,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Carousel() {
  const {
    da,
    a,
    data,
    ora,
    setOra,
    setDa,
    setData,
    setA,
    creaArrayDiDestinazioni,
    trovaMatchDestinazioni,
  } = useContext(TravelContext);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [daSuggestions, setDASuggestions] = useState<string[]>([]);
  const [aSuggestions, setASuggestions] = useState<string[]>([]);
  const [aSuggVisible, setASuggVisible] = useState(false);
  const [daSuggVisible, setDASuggVisible] = useState(false);
  const [destDisponibili, setDestDisponibili] = useState(false);
  const [idTravel, setIdTravel] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const array = creaArrayDiDestinazioni();
    setSuggestions(array);
    setDASuggestions(array.da);
    setASuggestions(array.a);
    const match = trovaMatchDestinazioni(da);
    console.log(match);
    if (match) {
      setDestDisponibili(match.a);
      setIdTravel(match.id);
    }

    setTimeout(() => {
      setDASuggVisible(false);
      setASuggVisible(false);
    }, 2000);
  }, [da, a, data, ora]);

  useEffect(() => {
    if (data !== "" && ora !== "") {
      localStorage.setItem("data", data);
      localStorage.setItem("ora", ora);
    }
  }, [data, ora]);

  return (
    <>
      <Box
        css={{
          backgroundImage:
            "url('https://www.trenitalia.com/content/dam/tcom/restyling/homepage/1920x580/1920x450-IC-MERCATINI-NATALE-BOLZANO.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
          position: "relative",
        }}
      >
        <Flex
          direction="row"
          align="flex-end"
          justify="space-between"
          position="absolute"
          bottom="10%"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          width="80%"
          maxW="900px"
        >
          <Flex direction={"column"} gap={2}>
            <Heading>Trova viaggio</Heading>
            <Flex direction="row" align="center">
              <Text fontWeight="bold" color={"red"}>
                Da
              </Text>
              <Input
                onClick={() => setDASuggVisible(!daSuggVisible)}
                size="md"
                variant="outline"
                value={da}
                onChange={(e) => {
                  setDa(e.target.value);
                }}
                p={3}
                border={0}
              />
              {daSuggVisible && (
                <Flex
                  direction="column"
                  position="absolute"
                  top="100%"
                  left="0"
                  bg="white"
                  boxShadow="md"
                  borderRadius="md"
                  cursor={"pointer"}
                  p={4}
                >
                  {daSuggestions.map((da) => (
                    <Text
                      key={da}
                      onClick={() => {
                        setDa(da);
                        setDASuggVisible(false);
                      }}
                    >
                      {da}
                    </Text>
                  ))}
                </Flex>
              )}
            </Flex>
          </Flex>

          <IconButton
            aria-label="Swap"
            size="md"
            variant="ghost"
            color="gray.500"
          />

          <Flex direction="row" align="center">
            <Text fontWeight="bold" color={"red"}>
              A
            </Text>
            <Input
              size="md"
              variant="outline"
              onClick={() => setASuggVisible(!aSuggVisible)}
              p={3}
              border={0}
              value={a}
              onChange={(e) => {
                setA(e.target.value);
                setASuggVisible(!aSuggVisible);
              }}
            />
            {aSuggVisible && (
              <Flex
                direction="column"
                top="100%"
                position="absolute"
                bg="white"
                boxShadow="md"
                borderRadius="md"
                cursor={"pointer"}
                p={4}
              >
                {destDisponibili ? (
                  <Text
                    onClick={() => {
                      setA(destDisponibili);
                      setASuggVisible(false);
                    }}
                  >
                    {destDisponibili}
                  </Text>
                ) : (
                  <>
                    {" "}
                    {aSuggestions.map((a) => (
                      <Text
                        key={a}
                        onClick={() => {
                          setA(a);
                          setASuggVisible(false);
                        }}
                      >
                        {a}
                      </Text>
                    ))}
                  </>
                )}
              </Flex>
            )}
          </Flex>

          <Flex direction="column" align="center">
            <Text fontWeight="bold">Data e Ora</Text>
            <Flex gap={2}>
              <Input
                placeholder="Data"
                size="md"
                variant="outline"
                p={3}
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <Input
                value={ora}
                placeholder="Ora"
                size="md"
                onChange={(e) => setOra(e.target.value)}
                type="time"
              />
            </Flex>
          </Flex>

          <Button
            backgroundColor={"red"}
            size="lg"
            fontWeight="bold"
            p={3}
            m={2}
            onClick={() => {
              setDa("");
              setA("");
              setOra("");
              setData("");
              router.push(`/viaggio/${idTravel}`);
            }}
          >
            Cerca
          </Button>
        </Flex>
      </Box>
    </>
  );
}
