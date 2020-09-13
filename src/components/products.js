import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { addToCart } from '../actions/actions';
import { withStyles } from '@material-ui/core';
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
          backgroundImage: `url(${bgImage1})`,
          backgroundAttachment: "fixed"
        }

      },

      cardImg: {
          maxHeight: 140,
          margin: 'auto'
      },

      card: {
        width: 345,
        minWidth: 300,
        height: 300,
        backgroundColor: '#122F54',
        boxShadow: 3,
        margin: 'auto',
        marginTop: "50px",
        marginBottom: "50px",
        display: 'flex',
        flexDirection: 'row',
        zIndex: 2
      },

      cardFill: {
        display: 'flex',
        flexDirection: 'column',
        verticalAlign: 'middle',
        textAlign: 'center',
        color: '#8BD6AE'
      },

      box: {
        display: 'flex',
        flexDirection: 'column',

      },

      button: {
        color: '#8BD6AE',
        backgroundColor: '#181C3F',
        height: '100%'
      }

});


class Products extends Component{

    handleClick = (id) => {
        console.log(id)
        this.props.addToCart(id);
    }

    render() {

        const { classes } = this.props;

        let itemList = this.props.products.map(products =>{

        return(
            <Card key={products.id} className={classes.card}
            >
                <CardActionArea className={classes.cardFill}>
                    <img
                    src={products.image}
                    alt={products.name}
                    className={classes.cardImg}/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {products.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Price: ${products.price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="meduim" className={classes.button} onClick={() => this.handleClick(products.id)}>
                    Add to cart
                    </Button>
                </CardActions>
            </Card>
        );
    });

        return(
            <React.Fragment>
            <CssBaseline />
            <Container //maxWidth="sm"
            >
                <Box className={classes.box}>
                {itemList}
                </Box>
            </Container>
            </React.Fragment>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));