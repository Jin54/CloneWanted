import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Hiring = () => {
    function List_UI() {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push(
                <>
                    <div className="item">
                        <Link to={`/Jobdetail/${i + 300}`}>
                            <img
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                                alt=""
                            />
                            <img
                                id="logo"
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                                alt=""
                            />
                            <div className="detail">
                                <h1>로민</h1> <p>11개 포지션</p>
                            </div>
                        </Link>
                    </div>
                </>
            );
        }
        return arr;
    }

    return (
        <div className="hiring">
            <h1>적극 채용중인 회사</h1>
            <div className="hiring_list">{List_UI()}</div>
        </div>
    );
};

export default Hiring;
