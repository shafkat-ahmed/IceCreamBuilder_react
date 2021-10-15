import React from 'react'
import IcecreamBuilder from '../../containers/IcecreamBuilder/IcecreamBuilder'
import classes from './Body.module.css'

const Body = () => {
    return (
        <div className={classes.mainBody}>
        <IcecreamBuilder/>
        </div>
    )
}

export default Body
