import React from "react";
import { Link } from "react-router";

function Quest() {
    return(
        <div className="quest">
            <div className="container">
                <div className="main">
                    <h1>Викторина!</h1>
                    <p>Мы предлагаем вам пройти викторину и сразить за звание лучшего знатока Великой Отечественной войны</p>

                    <div className="buttons">
                        <Link to='/' className="next"><button className="btn">На главную</button></Link>
                        <Link to='/first' className="next"><button className="btn">Начать викторину</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quest;