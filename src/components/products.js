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
import { addToCart } from '../actions/actions'


class Products extends Component{

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.products.map(products =>{
        return(
            <Card key={products.id} //maxwidth 345
            >
                <CardActionArea>
                    <img //height 140
                    src={products.image} //src?
                    alt={products.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {products.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: ${products.price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={this.handleClick(products.id)}>
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
                <Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);