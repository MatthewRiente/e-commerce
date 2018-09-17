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

      handleChange(event) {
            this.setState({value: event.target.value});
      }

    render() {
        const products = this.state.products.slice();
        console.log(this.state.products)


        function sortByPriceLo(productA, productB) {
            if (productB.price < productA.price) {
                return 1;
              }
              if (productB.price > productA.price) {
                return -1;
              }
              // price must be equal
              return 0;
        }
        
        function sortByPriceHi(productA, productB) {
            if (productA.price < productB.price) {
                return 1;
              }
              if (productA.price > productB.price) {
                return -1;
              }
              // price must be equal
              return 0;
        }

        // set up SORT
        const sortedProductsLo = products.slice().sort(sortByPriceLo);

        const sortedProductsHi = products.slice().sort(sortByPriceHi);


            // if (this.state.value === "high") {
            //     this.setState(() => {
            //         return {
            //          sortedProducts: sortByPriceHi
            //         }
            //        });
            // }
            // if (this.state.value === "low") {
            //     this.setState(() => {
            //         return {
            //          sortedProducts: sortByPriceHi
            //         }
            //        });
            // }
            // if (this.state.value === "none") {
            //     this.setState(() => {
            //         return {
            //          sortedProducts: sortByPriceHi
            //         }
            //        });
            // }

        console.log("sorted lo", sortedProductsLo);
        console.log("sorted Hi", sortedProductsHi);
        console.log("currentvalue", this.state.value)
        // if statement to decide what comes first based on price
        // render the results

        return (
            <div className='productCard'>
                <label> Pick your price range:
                    <select className='productCard__dropdown' onChange={this.handleChange}>
                        <option value="none"> None </option>
                        <option value="high"> High </option>
                        <option value="low"> Low </option>
                    </select>
                </label>
                {this.state.sortedProducts.map( product =>
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