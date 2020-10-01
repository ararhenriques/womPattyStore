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
        padding: '15px',
        position: 'relative'
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
    },
    topleft: {
        width: 0,
        height: 0,
        borderTop: '35px solid red',
        borderRight: '35px solid transparent'
     },

     topright: {
        postion: 'absolute',
        marginLeft: '665px',
        marginTop:'-35px',
        marginBottom: '500px',
        width: 0,
        height: 0,
        borderTop: '35px solid red',
        borderLeft: '35px solid transparent'
     },
     bottomleft: {
        postion: 'absolute',
        marginBottom:'-35px',
        width: 0,
        height: 0,
        borderBottom: '35px solid red',
        borderRight: '35px solid transparent'
     },
     bottomright: {
        postion: 'absolute',
        marginLeft: '665px',
        width: 0,
        height: 0,
        borderBottom: '35px solid red',
        borderLeft: '35px solid transparent',
      }

});

class Contact extends Component{

    render() {

        const { classes } = this.props;

        return(
            <div>
                <div className={classes.aBox}>
                    <div className={classes.topleft}></div>
                    <div className={classes.topright}></div>
                    <img></img><h1>Arris</h1>
                    <div className={classes.bottomleft}></div>
                    <div className={classes.bottomright}></div>
                </div>
                <div className={classes.mBox}>
                    <img></img><h1>Matt</h1>
                </div>
            </div>

        );
    };
}

export default (withStyles(styles)(Contact));