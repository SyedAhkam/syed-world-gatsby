import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Main from "../components/main";
import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return <Main>{"ifjewifewfuejfie".repeat(100)}</Main>;
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="guest@syed-world" />;
