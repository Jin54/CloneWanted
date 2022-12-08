import { useState, useEffect, useRef } from 'react';
import Map from './Map';
import CompanyList from '../Job/CompanyList';
import likeGray from '../../../images/like.png';
import likeRed from '../../../images/like2.png';

import user1 from '../../../images/user (1).png';
import user2 from '../../../images/user (2).png';
import user3 from '../../../images/user (3).png';
import user4 from '../../../images/user (4).png';

const Jobdetail = props => {
    const [top, setTop] = useState(70);
    const [position, setPosition] = useState('fixed');
    const [flag, setflag] = useState(false);

    const [likeflag, setLikeflag] = useState(false);
    const [likeimg, setLikeimg] = useState(likeGray);
    const [like, setLike] = useState(2);

    const ref = useRef(null);

    const user = [user1, user2, user3, user4];
    function clickLike() {
        if (likeflag) {
            setLikeimg(likeGray);
            setLike(prev => prev - 1);
        } else {
            setLike(prev => prev + 1);
            setLikeimg(likeRed);
        }

        setLikeflag(!likeflag);
    }
    const handleFollow = () => {
        let height = ref.current.clientHeight;
        if (window.pageYOffset > height - 500) {
            if (!flag) {
                setflag(true);
                setTop(height - 500);
                setPosition('absolute');
            }
        } else {
            if (flag) {
                setflag(false);
                setTop(70);
                setPosition('fixed');
            }
        }
    };

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        };
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow);
        };
    });
    function List_UI() {
        var arr = [];
        for (var i = 0; i < like; i++) {
            arr.push(<img src={user[i]} alt="" />);
        }
        return arr;
    }

    return (
        <>
            <div className="job_main">
                <div className="job_detail" ref={ref}>
                    <div className="job_detail_contents">
                        <div id="paginated_gallery" className="gallery">
                            <div className="gallery_scroller">
                                <div>
                                    <img src={require('../../../images/detail1.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../images/detail2.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../images/detail3.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../images/detail4.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../images/detail2.webp')} alt="" />
                                </div>
                            </div>

                            <span className="btn prev"> </span>
                            <span className="btn next"> </span>
                        </div>

                        <div className="job_detail_contents_title">
                            <h1> 프로덕트 매니저 </h1>
                            <div className="sub_title">
                                <p>파워테스크 </p>
                                <button> 응답률 매우 높음</button>
                                <div className="job_detail_divider"></div>
                                <span className="job_detail_location"> 서울.한국</span>
                            </div>

                            <div className="sub_tag">
                                <ul>
                                    <li>
                                        <a href="!#">#퇴사율5%이하</a>
                                    </li>
                                    <li>
                                        <a href="!#">#50명이하</a>
                                    </li>
                                    <li>
                                        <a href="!#">#50명이하</a>
                                    </li>
                                    <li>
                                        <a href="!#">#설립3년이하</a>
                                    </li>
                                    <li>
                                        <a href="!#">#연봉상위11~20%</a>
                                    </li>
                                    <li>
                                        <a href="!#">#IT, 컨텐츠</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="job_detail_description">
                                <p>
                                    안녕하세요, 세계에서 가장 혁신적인 데이터 자동화 플랫폼, 아웃코드를 만들고 있습니다. <br /> <br />
                                    아웃코드팀은 기존에 코딩지식이 없으면 하기 어려웠던 데이터 작업을 누구나 할 수 있도록 하는 ‘아웃코드’를 통해서
                                    많은 기업을 도와주고 있습니다. <br />
                                    <br />
                                    아웃코드는 데이터베이스부터 SaaS, 구글시트, API까지 어떤 데이터도 심플하게 자동화할 수 있는 새로운 플랫폼입니다.
                                    아웃코드를 사용하면 코딩, 스크립트, 쿼리, 워크플로우없이 누구나 스스로 데이터 수집, 가공, 연동까지 자동화할 수
                                    있습니다. <br />
                                    <br />
                                    최근 베타 런칭 후 아무런 마케팅없이 입소문 만으로 전세계 80개국, 400여개 고객들이 사용 중에 있으며, 많은 회사들의
                                    생산성 향상과 어려웠던 문제들을 해결하고 있습니다. <br />
                                    <br />
                                    설립단계부터 예비/초기창업패키지 최우수, 블루포인트파트너스에서 초기 투자 유치와 팁스, 데이터스타즈에 선정되며
                                    점점 성장하고 있습니다 <br />
                                    <br />
                                    진지하게 고객의 문제를 해결하고 글로벌 플랫폼을 만들고 있는 아웃코드팀에서 전직군- 개발/디자인/PM/마케터
                                    포지션에서 멋진 분들을 찾고 있습니다.
                                    <br />
                                    <br />
                                    <br />- Sep, 2020 - 예비창업패키지 선정
                                    <br />- May, 2021 - 시드투자 유치 (블루포인트파트너스)
                                    <br />- May, 2021 - 초기창업패키지 선정
                                    <br />- Sep, 2021- TIPS 선정
                                    <br />- May 2022 - 글로벌 베타 서비스 런칭
                                    <br />- May 2022 - DATA-Stars 선정
                                    <br />- Aug 2022- 아웃코드 2.0 베타 서비스 오픈
                                </p>
                                <h5> 주요업무</h5>
                                <p>
                                    • 아웃코드 플랫폼의 기능들에 대한 요청사항 생성과 지속적인 개선을 주도 <br />• 사용자 요청/피드백부터 개발까지
                                    포괄하는 Request-Delivery Loop 관리
                                    <br />• 플랫폼 기능별 전체 수명 주기 관리하고 Cross-functional 커뮤니케이션의 허브 역할
                                    <br />• 사용자 경험 개선을 리드
                                </p>
                                <h5> 자격요건</h5>
                                <p>
                                    • 데이터베이스, API, 웹애플리케이션 서비스에 대한 기술적인 이해
                                    <br />• 최신의 프로젝트 관리 툴, 사용자 분석 툴에 대한 경험
                                    <br />• 데이터와 운영 전반 업무의 기초적인 이해
                                </p>
                                <h5> 혜택 및 복지</h5>
                                <p>
                                    - 고객 이해와 피드백을 바탕으로 다 함께 고객의 문제를 해결하는데 집중합니다.
                                    <br />- 원팀 스피릿으로 모두가 같이 고민하고, 배려하고 솔선수범합니다.
                                    <br />- 업무 집중도는 높지만, 편안한 매너와 유머를 잃지 않아요
                                    <br />- 자율적인 근무 환경이며, 매주 금요일은 재택이에요.
                                    <br />- 최신 장비와 맥북은 필수입니다.
                                    <br />- 사무실은 강남구 역삼로 160, 8층입니다.
                                </p>
                                <h5> 기술스택 ・ 툴 </h5>
                                <div className="skill">
                                    <ul>
                                        <li> JIRA</li>
                                        <li> SQL</li>
                                    </ul>
                                </div>
                            </div>

                            <hr className="job_divider" />

                            <div className="job_place">
                                <div>
                                    <span className="header">마감일</span>
                                    <span className="body">2022.11.11</span>
                                </div>
                                <div>
                                    <span className="header">근무지역</span>
                                    <span className="body">서울특별시 강남구 역삼로 160</span>
                                </div>
                            </div>

                            <Map />

                            <div className="job_logo">
                                <a href="!#">
                                    <div className="left">
                                        <div>
                                            <img src="https://static.wanted.co.kr/images/wdes/0_5.bab24796.png" alt="" />
                                        </div>

                                        <div>
                                            <h1>파워테스크</h1>
                                            <h6>IT, 컨텐츠</h6>
                                        </div>
                                    </div>
                                </a>
                                <div className="right">팔로우</div>
                            </div>

                            <div className="job_warnning">
                                <svg className="" width="24" height="24" viewBox="0 0 24 24">
                                    <g fillRule="currentColor">
                                        <path
                                            fillRule="nonzero"
                                            d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                                        ></path>
                                        <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                                        <path fillRule="nonzero" d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"></path>
                                    </g>
                                </svg>
                                <div className="job_warnning_description">
                                    <h5>
                                        본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의 <br />
                                        용도로 사용할 수 없습니다.
                                    </h5>
                                    <img src={require('../../../images/arrow.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="job_detail_aside" style={{ top: top, position: position }}>
                        <div className="job_detail_aside_body">
                            <div className="title">
                                <h3>채용보상금</h3>
                                <ul>
                                    <li>
                                        <h4>추천인</h4>
                                        <p>500,000원</p>
                                    </li>
                                    <li>
                                        <h4>지원자</h4>
                                        <p>500,000원</p>
                                    </li>
                                </ul>
                                <div className="share">
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 19 19"
                                        {...props}
                                    >
                                        <defs>
                                            <path
                                                id="shareIcon"
                                                d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z"
                                            />
                                        </defs>
                                        <g fillRule="evenodd">
                                            <use fillRule="#36F" xlinkHref="#shareIcon" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="job_detail_aside_bookmark">
                                <svg
                                    width="16px"
                                    height="16px"
                                    viewBox="-2.561 0 16 16"
                                    id="_09_-_Bookmark"
                                    data-name="09 - Bookmark"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="_09_-_Bookmark-2"
                                        data-name="09 - Bookmark"
                                        d="M14.12 2.17a1.627 1.627 0 0 0 -1.627 -1.627H4.867a1.627 1.627 0 0 0 -1.627 1.627V14.915A1.627 1.627 0 0 0 5.75 16.282L8.68 14.389l2.929 1.893a1.627 1.627 0 0 0 2.511 -1.367V2.17Zm-1.085 0V14.915a0.542 0.542 0 0 1 -0.837 0.455l-3.225 -2.083a0.542 0.542 0 0 0 -0.589 0l-3.225 2.083a0.542 0.542 0 0 1 -0.837 -0.455V2.17a0.542 0.542 0 0 1 0.542 -0.542H12.493A0.542 0.542 0 0 1 13.035 2.17Z"
                                        transform="translate(-5.971 -1)"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                북마크하기
                            </div>
                            <div className="job_detail_aside_apply">지원하기</div>
                            <div className="job_detail_aside_like" onClick={clickLike}>
                                <img src={likeimg} alt="" />
                                <div id="like_number">{like}</div>
                                <div className="sub"> {List_UI()} </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="company_list_title">이 포지션을 찾고 계셨나요?</h5>

                <CompanyList />
            </div>

            <div className="footer_banner">
                <div className="footer_banner_section">
                    <div className="footer_banner_title">[ 서비스기획자 ] 3년차 3,500만원이면 잘 받는 건가요?</div>
                    <button>더알아보기</button>
                </div>
            </div>
        </>
    );
};

export default Jobdetail;
