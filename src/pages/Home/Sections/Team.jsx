import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components

import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/home/teamStyle.jsx";

import team1 from "assets/img/faces/Team-Bash.jpg";
import team2 from "assets/img/faces/Team-jv.jpg";
import team3 from "assets/img/faces/Team-Boo.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Bash
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Jowl shank salami, short ribs spare ribs. Frankfurter, pancetta prosciutto jowl chicken meatball turducken drumstick short loin. Shankle venison jowl, bacon t-bone cupim jerky biltong ribeye chicken meatball pork belly. Hamburger alcatra turkey, drumstick pork belly pork chop buffalo. Hamburger salami burgdoggen prosciutto corned beef chuck ball tip frankfurter ham hock. Pork chop kielbasa, shank spare ribs t-bone capicola strip steak tail pig prosciutto bresaola.<a href="#bash">links</a>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaFacebook />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  jv
                  <br />
                  <small className={classes.smallTitle}>Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Shields up. I recommend we transfer power to phasers and arm the photon torpedoes. Something strange on the detector circuit. The weapons must have disrupted our communicators. You saw something as tasty as meat, but inorganically materialized out of patterns used by our transporters. Captain, the most elementary and valuable statement in science, the beginning of wisdom, is 'I do not know.' All transporters off. <a href="#jv">links</a>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaLinkedin />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Boo
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Pork chop buffalo tail, sirloin boudin salami biltong chicken jowl bacon doner picanha short loin pork loin brisket. Kielbasa alcatra shankle doner pig spare ribs sirloin pastrami sausage landjaeger. Beef shank frankfurter cupim, salami swine alcatra tri-tip brisket sirloin burgdoggen pork belly. Shoulder pork chop swine turducken, venison tri-tip rump meatball ham meatloaf beef.<a href="#pablo">links</a>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaFacebook />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
