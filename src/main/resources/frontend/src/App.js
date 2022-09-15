import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import axios from 'axios';

const url="http://localhost:8080/api/products"

class App extends React.Component {
  constructor(props){
    super(props)

    axios.get(url).then((res)=>{
      this.setState({products:res.data})
    })

    this.state={
        products: [
        ]
    }
    this.addProduct = this.addProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
}

  render(){
    axios.get(url).then((res)=>{
      this.setState({products:res.data})
    })
    return(
      <div>
        <Header title="Список товаров"/>
        <main>
          <Products products={this.state.products} onEdit ={this.editProduct} onDelete={this.deleteProduct}/>
        </main>
        <aside>
          <AddProduct onAdd={this.addProduct}/>
        </aside>
      </div>
    )
  }

  addProduct(product){
    axios.post(url,product)
  }

  editProduct(product){
    axios.post(url + "/" + product.id, product)
}

  deleteProduct(id){
    axios.delete(url + "/" + id)
  }
}

export default App;