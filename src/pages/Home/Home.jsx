import React from "react"
// import { Link } from "gatsby"
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
// Sections for this page
import Services from "./Sections/Services.jsx";
import TeamSection from "./Sections/Team.jsx";
import Contact from "./Sections/Contact.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
// import Button from "../../components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


import homeStyle from "assets/jss/material-kit-react/views/home/homeStyle.jsx";

class Home extends React.Component {
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
                    (Modern)=> // App Development
                  </h1>
                  <h2 className={classes.subtitle}>
                    Progressive application development solutions
                  </h2>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Services />
            <TeamSection />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(homeStyle)(Home);