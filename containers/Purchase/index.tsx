import { Box, Text, Button, Link } from "@chakra-ui/react";
import { User, signOut, getAuth } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { IUser } from "../../types";

interface IProps {
  user: IUser | null;
}

const Purchase = ({ user }: IProps) => {
  const router = useRouter();
  const auth = getAuth();

  const payWithClick = () => {
    // TODO: pay with click
    const service_id = null;
    const merchant_id = null;
    const transaction_param = null;
    const amount = null;
    const return_url = null;
    const card_type = null;

    const clickURL = `https://my.click.uz/services/pay?service_id=${service_id}&merchant_id=${merchant_id}&amount=${amount}&transaction_param=${transaction_param}&return_url=${return_url}&card_type=${card_type}`;
    console.log(clickURL);
  };

  return (
    <Box>
      <Text>Purchase Page</Text>
      <Text>{user?.name}</Text>
      <Text>{user?.surname}</Text>
      <Button onClick={payWithClick} colorScheme={"gray"}>
        Pay with click
      </Button>
      <Button
        colorScheme={"red"}
        onClick={() => {
          signOut(auth);
          router.push("/signup");
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Purchase;
