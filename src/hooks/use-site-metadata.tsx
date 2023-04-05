import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          description
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
