import React from 'react';
import Footer from '../Footer/Footer';
import SlideShow from './SlideShow';
import ListCareer from './ListCareer.jsx';
import ScrollButton from './ScrollButton';
import Linebanner from './Linebanner';
import ListPrint from './ListPrint';
import dummy from './data.json';
import { useState } from 'react';

const Main = props => {
    return (
        <>
            <div className="main">
                <SlideShow />
                <div className="section">
                    <div className="career">
                        <div className="title">
                            <h2>나에게 필요한 커리어 인사이트</h2>
                            <button type="button">
                                <img style={{ verticalalign: 'top', height: 30 }} src={require('../../../images/question.svg')} alt="" />
                            </button>
                        </div>

                        <ScrollButton data={dummy.SlideList} />
                        <ListPrint data={dummy.CareerList} />

                        <div className="morebutton">
                            <button>
                                더 많은 콘텐츠 보기
                                <img src={require('../../../images/downarrow.png')} alt="" />
                            </button>
                        </div>
                    </div>

                    <ListCareer data={dummy.ArticleList} />
                    <ListCareer data={dummy.ArticleList} />

                    <Linebanner />

                    <div className="subsection">
                        <div className="titleline">
                            <button></button>
                            <div className="title">
                                <h2>커리어 성장을 위한 맞춤 이벤트 </h2>
                                <a href="/#">
                                    <p>아티클 전체보기 {'>'}</p>
                                </a>
                            </div>
                            <button>
                                <img src={require('../../../images/right-arrow.png')} alt="" />
                            </button>
                        </div>

                        <div className="list2">
                            <li>
                                <a href="/#">
                                    <img
                                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2409%2Ff99adacf.jpg&w=1200&q=100"
                                        alt=""
                                    />
                                    <button>교육</button> <h1> 스타트업 Lead를 위한 그룹코칭</h1> <p> 2022.12.08 (목) </p>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img
                                        src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fdjzp%2Fimage%2Fuw5K_9n8JaLzxFb7bX5RkegfByw.jpg&w=500&q=75"
                                        alt=""
                                    />
                                    <button>교육</button> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> 2022.12.08 (목) </p>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="subscribe">
                    <div className="sub">
                        <div className="left">
                            <h1>wanted+ 구독해야 하는 이유</h1>
                            <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                            <button>첫 구독 0원 신청하기</button>
                        </div>
                        <div className="right">
                            <img src={require('../../../images/pass.png')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="info">
                        <div className="title">
                            <h1>채용 정보를 찾고 계셨나요?</h1>
                        </div>

                        <div className="gridcontain">
                            <div className="grid">
                                <img src={require('../../../images/search.png')} alt="" />
                                <h1>
                                    채용공고 <img src={require('../../../images/right-arrow.png')} alt="" />
                                </h1>
                            </div>
                            <div className="grid">
                                <img src={require('../../../images/profile.png')} alt="" />
                                <h1>
                                    내프로필 <img src={require('../../../images/right-arrow.png')} alt="" />
                                </h1>
                            </div>
                            <div className="grid">
                                <img src={require('../../../images/search.png')} alt="" />
                                <h1>
                                    채용공고 <img src={require('../../../images/right-arrow.png')} alt="" />
                                </h1>
                            </div>
                            <div className="grid">
                                <img src={require('../../../images/profile.png')} alt="" />
                                <h1>
                                    내프로필 <img src={require('../../../images/right-arrow.png')} alt="" />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;
