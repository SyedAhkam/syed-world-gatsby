import { Flex } from "@chakra-ui/react";
import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

export interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Flex minH="100vh" minW="100vw" direction="column">
      <Header />
      <Flex h="full" direction="column" flex={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
