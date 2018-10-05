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
    
    closeModal(e, index) {
        this.setState({ 
            activeModal: null,
            isUpdateOpen: false
         });
    }

    deleteData(_id) {
      fetch('http://localhost:3001/products/' + _id, {
          method: 'DELETE',
      }).then((res) => {
        if (res.json === 200) {
           console.log("succsessss");
        }
        window.location.reload();
    })
    }

    updateData = (e, _id) => {
        e.preventDefault();
        let newUpdate = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            description: document.getElementById("description").value,
            price: document.getElementById("price").value,
            productImage: document.getElementById("productImage").value,
            productType: document.getElementById("productType").value,
            productImageCaption: document.getElementById("productImageCaption").value
            // availability: document.getElementById("availability").value
        };
        console.log(`product updated:`, newUpdate)
        fetch('http://localhost:3001/products/' + _id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: newUpdate
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))

    };

    render() {
        // console.log

        const map =                 
            <div className='admin__productCard'>
                {this.props.products.map( product =>(
                    <div className="admin__productCard__container" key={product._id}>
                        <h4 className="admin__productCard__container__head">{product.author}, {product.title}</h4> 
                        <p className="admin__productCard__container__id"> ID: {product._id} </p>
                        <div className="admin__productCard__container__icons">
                            <span className="fa fa-trash" onClick={() => this.deleteData(product._id)} />
                            <span className="fa fa-pencil" onClick={e => this.clickHandler(e, product._id)}/>
                            <Update id={product._id} show={this.state.activeModal === product._id} onHide={this.hideModal} transitionName="modal-anim">
                                <form className="update__form" id={product._id} onSubmit={(e) => this.updateData(e, product._id)} > 
                                        <div className="update__form__content">
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
                                                <input type="text" id="productType" name="productType" />
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
                                                <label htmlFor='availability'> Type</label> 
                                                <input type="text" id="availabiliy" name="availability" />
                                            </div>
                                            <button onClick={this.closeModal} > SUBMIT </button>
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
                        <span className="fa fa-plus" onClick={this.toggleModal} />
                    </div>
                </div>
                <Modal show={this.state.isOpen}>
                    <form name="modal__form" method="POST" action="http://localhost:3001/products" className="form">
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
                                    <input type="text" id="productType" name="productType" />
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
                                    <label htmlFor='availability'> Type</label> 
                                    <input type="text" id="availabiliy" name="availability" />
                                </div>
                            </div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </Modal>
                {map}
            </div>
        );
    }

}