import React from "react";

class AddProduct extends React.Component{

    productAdd={}

    constructor(props){
        super(props)
        this.state ={
            name:"",
            description:"",
            price:"",
            pic:"",
            date:"",
            status:false,
            category:""
        }
    }

    render(){
        return(
            <form ref={(el) => this.myFrom = el}>
                <input placeholder="Название" onChange={(e)=> this.setState({name: e.target.value})}></input>
                <input placeholder="Описание" onChange={(e)=> this.setState({description: e.target.value})}></input>
                <input placeholder="Цена" onChange={(e)=> this.setState({price: e.target.value})}></input>
                <input placeholder="КАРТИНКА" onChange={(e)=> this.setState({pic: e.target.value})}></input>
                <input placeholder="ДАТА" onChange={(e)=> this.setState({date: e.target.value})}></input>
                <label htmlFor="isActive">Активен</label>
                <input type="checkbox" id="isActive" onChange={(e)=> this.setState({status: e.target.checked})}></input>
                <input placeholder="Категория" onChange={(e)=> this.setState({category: e.target.value})}></input>
                <button type="button" onClick={() => 
                {
                    this.myFrom.reset()
                    this.productAdd ={
                        name: this.state.name,
                        description: this.state.description,
                        price: this.state.price,
                        pic: this.state.pic,
                        date: this.state.date,
                        status: this.state.status,
                        category: this.state.category
                    }
                    if(this.props.product)
                        this.productAdd.id = this.props.product.id
                    this.props.onAdd(this.productAdd)
                }}>Добавить</button>
            </form>
        )
    }
}

export default AddProduct