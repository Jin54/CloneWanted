import React from 'react';
import Data from '../Job/JobData.json';
import { useState, useEffect, useCallback } from 'react';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import bookmarkwhite from '../../../images/bookmarkwhite.png';
import bookmarkdark from '../../../images/bookmarkdark.png';
const BookMark = () => {
    const state = useSelector((state) => state.BookMark);
    const Login = useSelector((state) => state.Login);

    const [data, setData] = useState(Data.CompanyList);

    const dispatch = useDispatch();
    function bookMarkClick(e) {
        dispatch({ type: 'ADD', id: e.target.id });
    }

    const BookMark = useSelector((state) => state.BookMark);
    useEffect(() => {
        setData(
            Data.CompanyList.filter((e) => {
                return BookMark.includes('' + e.id);
            })
        );
    }, [BookMark]);

    const toString = (e) => {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className="bookmarkback">
            <div className="job_main">
                <h5>북마크</h5>
                <div className="company_list">
                    {BookMark.length && Login ? (
                        data.map((e) => (
                            <div className="item">
                                <Link to={`../Jobdetail/${e.id}`}>
                                    <img src={e.src} alt="" />
                                    <div className="detail">
                                        <h1>{e.h1}</h1> <h2>{e.h2}</h2>
                                        {e.응답률 === 100 ? (
                                            <button>응답률 매우 높음</button>
                                        ) : e.응답률 > 50 ? (
                                            <button id="normal">응답률 보통</button>
                                        ) : (
                                            <button id="low">응답률 낮음</button>
                                        )}
                                        <h3>{e.h3}</h3>
                                        <p>채용보상금 {toString(`${e.채용보상금}`)} 원</p>
                                    </div>
                                </Link>
                                <div className="bookmark_check">
                                    {state.includes(`${e.id}`) ? (
                                        <img src={bookmarkdark} alt="" id={e.id} onClick={bookMarkClick} />
                                    ) : (
                                        <img src={bookmarkwhite} alt="" id={e.id} onClick={bookMarkClick} />
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="emptybookmark">아직 북마크한 포지션이 없습니다.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookMark;
