import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import Icecream from '../../components/Icecream/Icecream';
import classes from './IcecreamBuilder.module.css';

export default class IcecreamBuilder extends Component {
    state={
        items:{
            vanilla:120,
            chocolate:200,
            lemon:300,
            orange:400,
            strawberry:500,
        },
        scoops:[],
        totalPrice:0,
    };

    addScoop=(scoop) => {
        const{scoops, items} =this.state;
        const workingScoops=[...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return{
                scoops:workingScoops,
                totalPrice : prevState.totalPrice+items[scoop],

            };
        }

        );

    };
    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        if(scoopIndex>-1){
        workingScoops.splice(scoopIndex, 1);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],
            };
        });
    }
    };


    render() {
        
        const {items,totalPrice,scoops}=this.state;
        return (
          
            <div className={['container',classes.container].join(' ')}>
                <Icecream scoops={scoops}  />
                <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops} />
            </div>
       
        )
    }
}