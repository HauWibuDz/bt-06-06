import React from "react";
import style from './category.module.css';
import clsx from "clsx";

class Itemcategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return ( 
            <li onClick={(e)=>this.props.clickHandle(this.props.key, e)} className={clsx({ [style.active]: this.props.data.status})} >{this.props.data.name}</li>
         );
    }
}
 
export default Itemcategory;