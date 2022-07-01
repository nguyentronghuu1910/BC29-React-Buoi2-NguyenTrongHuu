import React, { Component } from 'react';
// import App from '../Components/App/App';
import Glasses from '../Components/Glasses/Glasses'
import Header from '../Components/Layouts/Header/Header';
import style from "./style.module.css";

export default class Home extends Component {
    render() {
        return (
            <div className={style.homeBG}>
                <Header />
                <Glasses />
            </div>
        )
    }
}
