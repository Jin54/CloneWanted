import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Data from './JobData.json';
import bookmarkwhite from '../../../images/bookmarkwhite.png';
import bookmarkdark from '../../../images/bookmarkdark.png';
import { useSelector, useDispatch } from 'react-redux';

const CompanyList = ({ page, loading, bookMark }) => {
    const toString = e => {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const [company, setCompany] = useState([...Data.CompanyList]);

    useEffect(() => {
        Data.CompanyList.map(e => {
            e.id = 8 * page + e.id;
        });

        setCompany([...company, ...Data.CompanyList]);
    }, [page]);

    // useEffect(() => {
    //     if (!page) {
    //         setCompany([...company, { ...Data }, { ...Data }, { ...Data }, { ...Data }]);
    //         console.log('[]' + page);
    //     }
    // }, []);

    const dispatch = useDispatch();
    const BookMark = useSelector(state => state.BookMark);

    function bookMarkClick(e) {
        dispatch({ type: 'ADD', id: e.target.id });
    }
    return (
        <div className="company_list">
            {company.map(e => (
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
                        {BookMark.includes(`${e.id}`) ? (
                            <img src={bookmarkdark} alt="" id={e.id} onClick={bookMarkClick} />
                        ) : (
                            <img src={bookmarkwhite} alt="" id={e.id} onClick={bookMarkClick} />
                        )}
                    </div>
                </div>
            ))}

            {loading ? (
                <div className="loading">
                    <img src={require('../../../images/loading.gif')} alt="" />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default CompanyList;
