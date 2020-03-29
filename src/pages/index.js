import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { render } from "react-dom";

import Tabs from '../components/Tabs';
import Tutorials from '../components/Tutorials';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Design and Analysis of Algorithms	- 18CSC204J</h1>
    <div>
      <Tabs>
        <div label="Tutorials">
          <Tutorials></Tutorials>
        </div>
        <div label="Resources">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Assignments">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  </Layout>
)

export default IndexPage
