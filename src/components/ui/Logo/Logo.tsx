import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (
    !data?.mobileImage?.childImageSharp?.fixed ||
    !data?.desktopImage?.childImageSharp?.fixed
  ) {
    return <div>Picture not found</div>;
  }

  const sources = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

  return <Img fixed={sources} alt="Snap logo" />;
};
