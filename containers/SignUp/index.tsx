// @ts-nocheck

import { useState } from "react";
import { Box, Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import loginSvg from "../../public/login.svg";

import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { auth } from "../../utils/initFirebase";
import NextLink from "next/link";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const generateRecaptcha = () => {
    if (!password || password !== confirmPassword) {
      setError("Passwords do not match");
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          signUpWithPhone();
        },
      },
      auth
    );

    recaptchaVerifier.render();
  };

  const signUpWithPhone = async () => {
    console.log("Am I here");
    let appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      window.password = password;
      window.phone = phone;
      router.push("/verify");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"100vh"}
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (user) {
    router.push("/purchase");
  }

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
            name="phone"
            w={"302px"}
            marginBottom={5}
            borderRadius={"12px"}
            background={"#D9D9D9"}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            w={"302px"}
            marginBottom={5}
            borderRadius={"12px"}
            background={"#D9D9D9"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            w={"302px"}
            marginBottom={5}
            borderRadius={"12px"}
            background={"#D9D9D9"}
            placeholder="Repeat Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div id="recaptcha-container"></div>
          <Button
            onClick={generateRecaptcha}
            w={"fit-content"}
            margin={"0 auto"}
            colorScheme={"red"}
            borderRadius={"12px"}
            disabled={
              !phone.length || !password || confirmPassword !== password
            }
          >
            Signup
          </Button>
          <Text color={"error"}>{error}</Text>
          <Text
            mt={"98px"}
            textAlign={"center"}
            fontWeight={"semibold"}
            color={"white"}
          >
            Already have an account? <br />
            <Text color={"red"}>
              <NextLink href="/signin">Signin</NextLink>
            </Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
