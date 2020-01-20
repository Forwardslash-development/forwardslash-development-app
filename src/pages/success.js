import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import bg6 from '../assets/img/bg6.jpeg';

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <span className="image main">
            <img src={bg6} alt="" />
          </span>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;