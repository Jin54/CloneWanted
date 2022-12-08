import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import CompanyList from './CompanyList';
import Hiring from './Hiring';
import KeyWord from './JobData.json';
const Job = props => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleScroll = useCallback(() => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { scrollTop } = document.documentElement;

        if (Math.round(scrollTop + innerHeight) >= scrollHeight && !loading) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setPage(prev => prev + 1);
            }, 2000);
        }
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [handleScroll]);
    return (
        <div>
            <div className="category">
                <div className="joblist">
                    <p>전체</p>
                    <button>
                        <img src={require('../../../images/downarrow.png')} alt="" />
                    </button>
                    <div className="dropdown_joblist">
                        <Link to="../Jobdetail">직군전체</Link> <Link to="../Jobdetail">개발</Link> <Link to="../Jobdetail">경영</Link>
                        <Link to="../Jobdetail">디자인</Link> <Link to="../Jobdetail">영업</Link> <Link to="../Jobdetail">게임제작</Link>
                        <Link to="../Jobdetail">미디어</Link> <Link to="../Jobdetail">금융</Link> <Link to="../Jobdetail">개발</Link>
                        <Link to="../Jobdetail">경영</Link> <Link to="../Jobdetail">디자인</Link> <Link to="../Jobdetail">영업</Link>
                        <Link to="../Jobdetail">게임제작</Link> <Link to="../Jobdetail">미디어</Link> <Link to="../Jobdetail">금융</Link>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="message">
                    <h2>직군을 선택 해주세요</h2>
                </div>
                <div className="joblist" style={{ display: 'none' }}>
                    <p id="sub_joblist">개발전체</p>
                    <button>
                        <img src={require('../../../images/downarrow.png')} alt="" />
                    </button>
                </div>
            </div>
            <div className="filter">
                <div className="filterlist">
                    <div className="left">
                        <button>
                            <p>지역</p>
                            <p>부산</p>
                        </button>
                        <button>
                            <p>경력</p>
                            <p>
                                전체
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                        fillRule="#333333"
                                    ></path>
                                </svg>
                            </p>
                        </button>
                        <button>
                            <p>
                                기술스택
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                        fillRule="#333333"
                                    ></path>
                                </svg>
                            </p>
                        </button>
                    </div>

                    <div className="right">
                        <button>
                            <p>
                                응답률순
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                        fillRule="#333333"
                                    ></path>
                                </svg>
                            </p>
                        </button>
                    </div>
                </div>
                <div className="keywords">
                    <ul className="keywordslides">
                        {KeyWord.KeyWord.map(key => (
                            <li>
                                <button>{key}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="keywordsgradient"></div>
                    <p className="keywordsbutton">
                        <span className="prev">
                            <img src={require('../../../images/left-arrow.png')} alt="" />
                        </span>
                        <span className="next">
                            <img src={require('../../../images/right-arrow.png')} alt="" />
                        </span>
                    </p>
                </div>
            </div>

            <div className="job_main">
                <div className="bookmark">
                    <Link to="/BookMark">
                        <p>
                            <svg width="22px" height="22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                                <path
                                    d="M6.875 2.75C6.116 2.75 5.5 3.366 5.5 4.125V18.443C5.5 19.617 6.878 20.251 7.77 19.487L10.553 17.102C10.81 16.881 11.19 16.881 11.447 17.102L14.23 19.487C15.122 20.251 16.5 19.617 16.5 18.443V4.125C16.5 3.366 15.884 2.75 15.125 2.75H6.875Z"
                                    fill="#3A52EE"
                                />
                            </svg>
                            북마크모아보기
                            <svg width="12" height="12" viewBox="0 0 12 12">
                                <path
                                    fillRule="currentColor"
                                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                                ></path>
                            </svg>
                        </p>
                    </Link>
                </div>
                {/* <Hiring /> */}
                <CompanyList page={page} loading={loading} />
            </div>
        </div>
    );
};

export default Job;
