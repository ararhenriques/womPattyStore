import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import bgImage from '../assets/wpsHome.JPG';
import bgImage1 from '../assets/wpsContact.JPG';
import bgImage2 from '../assets/wpsProducts.JPG';

const styles = theme => ({
    "@global": {
        body: {
        height: '100vh',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
  
      }
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    homeBox: {
        maxWidth: 700,
        maxHeight: 900,
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#122F54',
        boxShadow: 3,
        margin: 'auto',
        marginTop: "100px"
    }
  });

class Home extends Component{
    render() {

        const { classes } = this.props;

        return(
            <div className={classes.homeBox} >
                <h1>Home</h1>
            </div>
        );
    };
}

export default (withStyles(styles)(Home));