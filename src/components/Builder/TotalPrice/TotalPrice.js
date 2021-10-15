import React from 'react'
import classes from './TotalPrice.module.css'

const TotalPrice = ({price = 0}) => {
    return (
        <div>
           <div className={classes.total}>
                <div>Total Price</div>
                <div>{price}</div>
            </div>
        </div>
    )
}

export default TotalPrice
