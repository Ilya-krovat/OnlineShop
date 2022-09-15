import React from "react";
import AddProduct from "./AddProduct";
import { IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5';

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editForm:false
        }
    }

    product = this.props.product

    render(){
        return(
            <div className="product">
                <IoCloseCircleSharp onClick={()=> this.props.onDelete(this.product.id)} className="delete-icon"/>
                <IoHammerSharp onClick={()=>{
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon"/>
                <h3>{this.product.name}</h3>
                <h3>{this.product.description}</h3>
                <h3>{this.product.price}</h3>
                <h3>{this.product.pic}</h3>
                <h3>{this.product.date}</h3>
                <b>{this.product.status ? 'Активен' : 'Не активен'}</b>

                {this.state.editForm && <AddProduct product={this.product} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default Product