import React from 'react';
import './css/index.scss';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Callback from './Callback/Callback';
import Admin from './Admin';
import SecuredRoute from './SecuredRoute';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            products: [],
            sortedProducts: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
        fetch('http://localhost:8080/products')
          .then(res => res.json())
          .then(data => {
              this.setState({
                products: data,
                }, () => console.log(this.state.products))
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
          // one IF, set at end

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
                     sortedProducts: this.state.products.slice()
                    }
                });
            }
      }


    render() {
      return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/Products' render={() => <Products sortedProducts={this.state.sortedProducts} products={this.state.products} handleChange={(event) => this.handleChange(event)} />} />
                    <Route path='/Contact' component={Contact}/>
                    <Route exact path='/Callback' component={Callback} />
                    <SecuredRoute exact path='/Admin' component={Admin} products={this.state.products}/>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
      );
    }
  }
  
  export default App;