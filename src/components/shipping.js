import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardActions, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import { addShipping } from './actions/cartActions'

const styles = theme => ({
    button: {
        color: '#8BD6AE',
        backgroundColor: '#181C3F',
        height: '100%',
        padding: '10px',
    },

    buttonBox: {
        display: 'flex',
        height: '100%',
        margin: 'auto'
    },

    card: {
        minWidth: 200,
        maxWidth: 250,
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
        color: '#8BD6AE',
        margin: '10px'
      },
    
      list: {
        listStyleType: 'none'
      }
});

class Shipping extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        const { classes } = this.props;
        
        return(
            <div className={classes.card}>
                <div className={classes.cardFill}>
                    <li className={classes.list}>
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+4$)</span>
                            </label>
                        </li>
                        <li className={classes.list}><b>Total: {this.props.total} $</b></li>
                    </div>
                    <CardActions>
                        <Button className={classes.button}>Checkout</Button>
                    </CardActions>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Shipping));