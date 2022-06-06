import React from "react";
import style from './category.module.css';
import clsx from "clsx";
import Itemcategory from "./itemcategory";
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category : [
                {id:1,name:'menu 1',status: false},
                {id:2,name:'menu 2',status: false},
                {id:3,name:'menu 3',status: false},
                {id:4,name:'menu 4',status: false}
            ]
        }
    }

    itemActive(key){
        let _state = this.state.category;
        _state.map((item) => {
            item.status = false;
        })
        _state[key].status = !_state[key].status;
        this.setState({
            category: _state
        })

    }
    
    render() { 
        return (  
            <div>
                <ul>
                    {
                        this.state.category.map((item,key)=>{
                            return <Itemcategory key={key} data={item} clickHandle={(e)=>this.itemActive(key, e)}/>
                        })
                    }

                </ul>
            </div>
        );
    }
}
 
export default Category;
