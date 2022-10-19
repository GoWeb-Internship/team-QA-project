import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Form from '../components/Form'

import { HTMLContent } from '../components/Content'

export default function HomePage({ data }) {
  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    <div className="w-full">
      <div className="space-y-4 text-left">
        <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
          {data.markdownRemark.frontmatter.title}
        </h1>
      </div>
      <HTMLContent
        className="prose max-w-none"
        content={data.markdownRemark.html}
      />
      <Form />
    </div>
  )
}
HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}
export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }, html: {}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
