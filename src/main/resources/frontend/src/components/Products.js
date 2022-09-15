import React from "react";
import Product from "./Product";

class Products extends React.Component{
    

    render(){
        if(this.props.products.length>0)
            return(<div>
                {this.props.products.map((el) => (
                    <Product onEdit={this.props.onEdit}  onDelete={this.props.onDelete} key={el.id} product={el}/>
                ))}
            </div>)
        else
            return(<div className="product">
                <h3>Нет товаров</h3>                
            </div>)
    }
}

export default Products