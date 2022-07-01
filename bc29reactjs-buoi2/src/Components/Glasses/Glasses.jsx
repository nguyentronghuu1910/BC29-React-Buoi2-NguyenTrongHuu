import React, { Component } from 'react'
import style from "./style.module.css";
import glassList from "../../Data/glasses.json";
import ProductList from './ProductList';


export default class Glasses extends Component {
    state = {
        selectedProduct: glassList[0]
    };
    renderGlassList = () => {
        const contentProductList = glassList.map((ele) => {
            return (
                <ProductList selectedProduct={this.selectedProduct} item={ele} key={ele.id}></ProductList>
            )
        });
        return contentProductList;
    };

    selectedProduct = (product) => {
        this.setState({
            selectedProduct: product,
        })
    }

    render() {
        const { name, url, desc } = this.state.selectedProduct;
        return (
            <>
                <div className='model__content container mt-3'>
                    <div className="row justify-content-around">
                        <div className={`col-3 ${style.model_item}`}>
                            <img src="./images/v1.png" alt="v3png" />
                            <div className={`${style.glasses_info}`}>
                                <p>DIOR D6700HQ</p>
                                <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>
                        <div className={`col-3 ${style.model_item}`}>
                            <img src={url} alt="..." />
                            <div className={`${style.glasses_info}`}>
                                <p>{name}</p>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.products} container`}>
                    <div className="row mt-5">
                        {this.renderGlassList()}
                    </div>
                </div>
            </>
        )
    }
}
