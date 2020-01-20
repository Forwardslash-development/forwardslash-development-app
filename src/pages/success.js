import React, { Component } from 'react'
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import successStyle from "../assets/jss/material-kit-react/views/successStyle.jsx"

import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Parallax from "../components/Parallax/Parallax.jsx"
import GridContainer from "../components/Grid/GridContainer.jsx"
import GridItem from "../components/Grid/GridItem.jsx"


class success extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Forwardslash Development"
          // rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg8.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    Success!
                  </h1>
                  <h2 className={classes.subtitle}>
                    Thank you for Sending :-)
                  </h2>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(successStyle)(success);