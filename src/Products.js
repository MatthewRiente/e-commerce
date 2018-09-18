import React, { Component } from 'react';
import './css/index.scss';

export default class Products extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            products: [],
            sortedProducts: [],
            admins: '',
            users: '',
            value: ''

        };

        this.handleChange = this.handleChange.bind(this);
      }


      componentDidMount() {
        fetch('./products.json')
          .then(response => response.json())
          .then(data => {
              this.setState({
                products: data.products,
                admins: data.admins,
                users: data.users
                })
            });
      }

      handleSubmit(event) {
        event.preventDefault();
      }

      sortByPriceHi(productA, productB) {
        if (productA.price < productB.price) {
            return -1;
          }
          if (productA.price > productB.price) {
            return 1;
          }
          return 0;
    }

     sortByPriceLo(productA, productB) {
        if (productB.price < productA.price) {
            return -1;
          }
          if (productB.price > productA.price) {
            return 1;
          }
          return 0;
    }

    // works but has a bug where it does not render on load and shows the wrong array
    // (where the first card is always the mona lisa)
    // at first when rendered, but when rendered another time it is fine??

      handleChange(event) {

        let sortedProductsHi = this.state.products.slice().sort(this.sortByPriceHi);
        let sortedProductsLo = this.state.products.slice().sort(this.sortByPriceLo);

            this.setState({value: event.target.value});
            
            if (this.state.value === "high") {
                this.setState(() => {
                    return {
                     sortedProducts: sortedProductsHi
                    }
                });
            }
            if (this.state.value === "low") {
                this.setState(() => {
                    return {
                     sortedProducts: sortedProductsLo
                    }
                   });
            }
            if (this.state.value === "none" || this.state.value === '') {
                this.setState(() => {
                    return {
                     sortedProducts: this.state.products
                    }
                });
            }
      }

    render() {
        const products = this.state.sortedProducts.slice();
        console.log(this.state.products)
        console.log("currentvalue", this.state.value)

        return (
            <div className='productCard'>
                <label> Pick your price range:
                    <select className='productCard__dropdown' defaultValue="none" onChange={this.handleChange}>
                        <option value="none"> None </option>
                        <option value="high"> High </option>
                        <option value="low"> Low </option>
                    </select>
                </label>
                {products.map( product =>
                <div className="productCard__container" key={product.productId}>
                    <img className="productCard__container__img" key={product.productImages.imageId} src={product.productImages[0].url} alt={product.productImages[0].caption} />
                    <h4 className="productCard__container__head">{product.author}, {product.title}</h4> 
                    <p className="productCard__container__desc"> {product.description} </p>
                    <p className="productCard__container__price"> ${product.price} </p>
                    <p> {product.availability} </p>
                </div>
                 )}
            </div>
        );
    }

}