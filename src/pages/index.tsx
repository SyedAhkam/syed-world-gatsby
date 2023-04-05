import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Main from "../components/main";

const IndexPage: React.FC<PageProps> = () => {
  return <Main>{"ifjewifewfuejfie".repeat(100)}</Main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
