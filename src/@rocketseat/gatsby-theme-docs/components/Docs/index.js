import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import PostNav from '@rocketseat/gatsby-theme-docs/src/components/Docs/PostNav';

export default function Docs({ mdx, pageContext }) {
  const { prev, next } = pageContext;
  const { title, description, image, disableTableOfContents } = mdx.frontmatter;
  const { headings, body } = mdx;
  const { slug } = mdx.fields;

  return (
    <>
      <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        <MDXRenderer>{body}</MDXRenderer>
        <iframe id="myWidget"
          src="https://human.biodigital.com/widget/?m=cochlear_implant&dk=f2a828d457e625d5e3989b7e9d9c6c06b7fa2fb1"
          width="100%"
          height="100%">
    </iframe>
        <PostNav prev={prev} next={next} />
      </Layout>
    </>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      disableTableOfContents: PropTypes.bool,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
  }).isRequired,
};
