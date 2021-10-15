import React from 'react'
import classes from './Icecream.module.css'
import Scoop from './Scoop/Scoop'

const Icecream = ({scoops}) => {
    return (
        <div> 
              <div className={classes.icecream} />
              <div className={classes.cherry} />
              {scoops.map((scoop)=> <Scoop key={`${scoop} ${Math.random}`} scoop={scoop} />)}
              <p className={classes.cone} />
             
              
               
        </div>
    )
}

export default Icecream
