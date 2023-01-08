import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import loginSvg from "../public/login.svg";

import Image from "next/image";
import NextLink from "next/link";

const Page = () => {
  return (
    <Flex justifyContent={"center"} h={"100vh"} position="relative">
      <Box
        style={{ transform: "translateY(-50%)" }}
        top={"50%"}
        position="absolute"
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={loginSvg} alt="icon" />
        </Box>
        <Text mb={"31px"} mt={"11px"} color={"white"} textAlign={"center"}>
          Sign up
        </Text>
        <Box display={"flex"} flexDirection={"column"}>
          <Input
            w={"302px"}
            marginBottom={5}
            borderRadius={"12px"}
            background={"#D9D9D9"}
            placeholder="Phone"
          />
          <Input
            w={"302px"}
            marginBottom={5}
            borderRadius={"12px"}
            background={"#D9D9D9"}
            placeholder="Password"
          />
          <Input
            w={"302px"}
            marginBottom={5}
            borderRadius={"12px"}
            background={"#D9D9D9"}
            placeholder="Repeat Password"
          />
          <Button
            w={"fit-content"}
            margin={"0 auto"}
            colorScheme={"red"}
            borderRadius={"12px"}
          >
            Signin
          </Button>
          <Text
            mt={"98px"}
            fontWeight={"semibold"}
            color={"white"}
            textAlign="center"
          >
            Don&apos;t have an account?
            <Text color={"red"}>
              <NextLink href="/signup">Signup</NextLink>
            </Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page;
