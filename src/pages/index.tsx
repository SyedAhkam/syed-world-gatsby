import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Heading } from "@chakra-ui/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box as="main">
      <Heading as="h1">Hello, world!</Heading>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
