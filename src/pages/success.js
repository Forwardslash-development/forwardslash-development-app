import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
//import GridContainer from "../../../components/Grid/GridContainer.jsx";
//import GridItem from "../../../components/Grid/GridItem.jsx";
//import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
// import Button from "../../../components/CustomButtons/Button.jsx";

import contactStyle from "assets/jss/material-kit-react/views/home/contactStyle.jsx";

import bg6 from '../assets/img/bg6.jpeg';

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <Header
        brand="Forwardslash Development"
        // rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <section id="one">
        <div className="inner">
          <h1>Success/Thank You Page</h1>
          <span className="image main">
            <img src={bg6} alt="" />
          </span>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
    <Footer />
  </Layout >
);

export default Success;