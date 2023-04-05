import { Box, ChakraProps } from "@chakra-ui/react";
import * as React from "react";

export interface IProps {
  children: React.ReactNode;
}

const Main = ({ children, ...props }: IProps & ChakraProps) => {
  return (
    <Box as="main" {...props}>
      {children}
    </Box>
  );
};

export default Main;
