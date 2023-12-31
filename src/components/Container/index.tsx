import { Box } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const ContainerMaxWidth: any = ({ children }) => {
  return (
    <Box maxWidth="68rem" paddingX="1rem" margin="0 auto">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
