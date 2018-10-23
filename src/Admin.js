import React, { Component } from 'react';
import Modal from './Modal';
import Update from './Update';
import './css/index.scss';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isOpen: false,
            isUpdateOpen: false,
            activeModal: null
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    toggleModal = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    clickHandler(e, index) {
        this.setState({ 
            activeModal:  index,
            isUpdateOpen: true
        })
    }
    
    closeModal(index) {
        this.setState({ 
            activeModal: null,
            isUpdateOpen: false
         });
    }

    deleteData(_id) {
      fetch('http://localhost:8080/products/' + _id, {
          method: 'DELETE',
      }).then((res) => {
        if (res.json === 200) {
           console.log("succsessss");
        }
        window.location.reload();
      }).catch((res, error) => {res.status(400).send(error)});
    }

    updateData = (e, prod_id) => {
        e.preventDefault();
        let newUpdate = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            description: document.getElementById("description").value,
            price: document.getElementById("price").value,
            productImage: document.getElementById("productImage").value,
            prodType: document.getElementById("prodType").value,
            productImageCaption: document.getElementById("productImageCaption").value,
            availability: document.getElementById("availability").value
        };
        fetch(`http://localhost:8080/products/${prod_id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUpdate)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
    };

    render() {
        const map =                 
            <div className='admin__productCard'>
                {this.props.products.map( product =>(
                    <div className="admin__productCard__container" key={product.prod_id}>
                        <h4 className="admin__productCard__container__head">{product.author}, {product.title}</h4> 
                        <p className="admin__productCard__container__id"> ID: {product.prod_id} </p>
                        <div className="admin__productCard__container__icons">
                            <i className="fa fa-trash" onClick={() => this.deleteData(product.prod_id)} />
                            <i className="fa fa-pencil" onClick={e => this.clickHandler(e, product.prod_id)}/>
                            <Update id={product.prod_id} show={this.state.activeModal === product.prod_id} onHide={this.hideModal} transitionName="modal-anim">
                                <form className="update__form" id={product.prod_id} onSubmit={(e) => this.updateData(e, product.prod_id)} > 
                                    <div className="update__form__content">
                                        <div>
                                            <label htmlFor='title'> Title </label> 
                                            <input type="text" id="title" defaultValue={product.title} name="title" />
                                        </div>
                                        <div>
                                            <label htmlFor='author'> Author </label> 
                                            <input type="text" id="author" defaultValue={product.author} name="author" />
                                        </div>
                                        <div>
                                            <label htmlFor='price'> Price </label> 
                                            <input type="text" id="price" defaultValue={product.price} name="price" />
                                        </div>
                                        <div>
                                            <label htmlFor='description'> Description </label> 
                                            <input type="text" id="description" defaultValue={product.description} name="description" />
                                        </div>
                                        <div>
                                            <label htmlFor='productType'> Type</label> 
                                            <input type="text" id="prodType" defaultValue={product.prodType} name="productType" />
                                        </div>
                                        <div>
                                            <label htmlFor='productImage'> Image </label> 
                                            <input type="text" id="productImage" defaultValue={product.productImage} name="productImage" />
                                        </div>
                                        <div>
                                            <label htmlFor='productImageCaption'> Caption </label> 
                                            <input type="text" id="productImageCaption" defaultValue={product.productImageCaption} name="productImageCaption" />
                                        </div>
                                        <div>
                                            <label htmlFor='availability'> Availability </label> 
                                            <input type="text" id="availability" defaultValue={product.availability} name="availability" />
                                        </div>
                                        <button type="submit" > SUBMIT </button>
                                        <button type='button' onClick={() => this.clickHandler(product.prod_id)} > CLOSE </button>
                                    </div>
                                </form>
                            </Update>
                        </div>
                    </div>
                ))}
            </div>

        return (
            <div className="admin">
                <div className="admin__header">
                    <div className="admin__header__content">
                        <h1> Admin Management Panel </h1>
                        <i className="fa fa-plus" onClick={this.toggleModal} />
                    </div>
                </div>
                <Modal show={this.state.isOpen}>
                    <form name="modal__form" method="POST" action="http://localhost:8080/products" className="form">
                        <div className="modal__form__container">
                            <div className="modal__form__container__content">
                                <div>
                                    <label htmlFor='title'> Title </label> 
                                    <input type="text" id="title" name="title" />
                                </div>
                                <div>
                                    <label htmlFor='author'> Author </label> 
                                    <input type="text" id="author" name="author" />
                                </div>
                                <div>
                                    <label htmlFor='price'> Price </label> 
                                    <input type="text" id="price" name="price" />
                                </div>
                                <div>
                                    <label htmlFor='description'> Description </label> 
                                    <input type="text" id="description" name="description" />
                                </div>
                                <div>
                                    <label htmlFor='productType'> Type</label> 
                                    <input type="text" id="prodType" name="productType" />
                                </div>
                                <div>
                                    <label htmlFor='productImage'> Image </label> 
                                    <input type="text" id="productImage" name="productImage" />
                                </div>
                                <div>
                                    <label htmlFor='productImageCaption'> Caption </label> 
                                    <input type="text" id="productImageCaption" name="productImageCaption" />
                                </div>
                                <div>
                                    <label htmlFor='availability'> Availability </label> 
                                    <input type="text" id="availability" name="availability" />
                                </div>
                            </div>
                            <button name="edit__modal__close" onClick={this.toggleModal}> Close </button>
                            <button type="submit" value="Submit"> Submit </button>
                        </div>
                    </form>
                </Modal>
                {map}
            </div>
        );
    }

}