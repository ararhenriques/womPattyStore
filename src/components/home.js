import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
        maxheight: 900,
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#122F54',
        boxShadow: 3,
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