import { Stack } from "@chakra-ui/react";
import { Navbar } from "../Navbar";

export const ContainerMaxWidth: any = ({ children }) => {
  return (
    <>
      <Stack maxWidth="68rem" margin="0 auto">
        <Navbar />
        {children}
      </Stack>
    </>
  );
};
