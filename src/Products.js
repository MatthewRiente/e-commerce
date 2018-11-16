import React, { Component } from 'react';
import './css/index.scss';
import Hero from './Hero';

export default class Products extends Component {
    render() {
        let products = []
            if (this.props.sortedProducts.length === 0) {
                products = this.props.products
            } else {
                products = this.props.sortedProducts
            }

        return (
            <div>
                <Hero />
                <div className='productCard'>
                    <label> Pick your price range: 
                        <select className='productCard__dropdown' defaultValue="none" onChange={this.props.handleChange}>
                            <option value="none"> None </option>
                            <option value="high"> High </option>
                            <option value="low"> Low </option>
                        </select>
                    </label>
                    {products.map( product =>
                    <div className="productCard__container" key={product.prod_id}>
                        <img className="productCard__container__img" key={product._id} src={product.productImage} alt={product.productImageCaption} />
                        <h4 className="productCard__container__head">{product.author}, {product.title}</h4> 
                        <p className="productCard__container__desc"> {product.description} </p>
                        <p className="productCard__container__price"> ${product.price} </p>
                        <p> {product.availability} </p>
                    </div>
                    )}
                </div>
            </div>
        );
    }

}