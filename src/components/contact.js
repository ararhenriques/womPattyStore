import React, { Component } from 'react';
import bgImage from '../assets/wpsHome.JPG';
import bgImage1 from '../assets/wpsContact.JPG';
import bgImage2 from '../assets/wpsProducts.JPG';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    "@global": {
        body: {
          height: '100vh',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${bgImage2})`,
          backgroundAttachment: "fixed",
    
        }
      },
    aBox: {
        maxWidth: 700,
        maxHeight: 900,
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#122F54',
        boxShadow: 3,
        margin: '100px 0 50px auto',
    },
    mBox: {
        maxWidth: 700,
        maxHeight: 900,
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#122F54',
        boxShadow: 3,
        margin: '100px auto 50px 0'
    }
});

class Contact extends Component{
    
    render() {

        const { classes } = this.props;

        return(
            <div>
                <div className={classes.aBox}>
                    <img></img><h1>Arris</h1>
                </div>
                <div className={classes.mBox}>
                    <img></img><h1>Matt</h1>
                </div>
            </div>
            
        );
    };
}

export default (withStyles(styles)(Contact));