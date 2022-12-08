import SerachSVG from './SerachSVG';
import Search from './Search';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Number from './Number.json';

import bell from '../../../images/bell.png';
import user from '../../../images/user.png';

const Header = ({ setmodalOpen }) => {
    const [search, setSearch] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (profileMenu) setProfileMenu(false);
    }, [location]);

    const clickSearch = () => {
        setSearch(true);
    };
    const handleClickButton = () => {
        setmodalOpen(0);
    };

    const dispatch = useDispatch();
    const Login = useSelector((state) => state.Login);

    function Logout() {
        dispatch({ type: 'LOGOUT' });
    }
    function dropMenu() {
        setProfileMenu(!profileMenu);
    }

    return (
        <HeaderContain>
            <Mainbar>
                <Left>
                    <Dropdown>
                        <Dropbtn>
                            <img className="bar" src={require('../../../images/bar.png')} alt="bar" />
                        </Dropbtn>
                        {/* overscroll-behavior: contain; */}
                        <DropdownContent>
                            <ul>
                                {Number.menu.map((e) => (
                                    <li>
                                        {e}
                                        <ul>
                                            {Number.menu.map((b) => (
                                                <li>{e} </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </DropdownContent>

                        <Link to="/">
                            <img className="logo" src={require('../../../images/logo.png')} alt="logo" />
                        </Link>
                    </Dropdown>
                    {/* <img src={ require('./images/logo.png') } /> */}
                    <Singup onClick={handleClickButton}>회원가입/로그인</Singup>
                </Left>

                <Center>
                    <li>
                        <Link to="/Job">채용</Link>
                    </li>
                    <li>
                        <Link to="/BookMark">이벤트</Link>
                    </li>
                    <li>
                        <Link to="/">직군별 연봉</Link>
                    </li>
                    <li>
                        <Link to="/CV">이력서</Link>
                    </li>
                    <li>
                        <Link to="/" className="" aria-label="">
                            커뮤니티
                            <em>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                                        fontSize="9"
                                        fontWeight="500"
                                    >
                                        <g fill="#36F">
                                            <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                                <tspan x="0" y="8">
                                                    New
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </em>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">프리랜서</Link>
                    </li>
                    <li>
                        <Link to="/aiscore/resume" className="" aria-label="">
                            AI 합격예측
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                                        fontSize="9"
                                        fontWeight="500"
                                    >
                                        <g fill="#36F">
                                            <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                                <tspan x="0" y="8">
                                                    Beta
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </Link>
                    </li>
                </Center>

                <Right>
                    <Searchbutton onClick={clickSearch}>{SerachSVG()}</Searchbutton>

                    {Login ? (
                        <>
                            <Headerprofile>
                                <img src={bell} alt="bell" />
                                <img src={user} onClick={dropMenu} alt="user" />
                            </Headerprofile>
                            {profileMenu ? (
                                <ProfileMenu>
                                    <ul>
                                        <li>MY 윈티드</li>
                                        <li>프로필</li>
                                        <hr />
                                        <li>지원 현황</li>
                                        <li>제안받기 현황</li>
                                        <li>좋아요 </li>
                                        <li>
                                            <Link to="/BookMark"> 북마크</Link>
                                        </li>
                                        <hr />
                                        <li>추천</li>
                                        <li>포인트</li>
                                        <hr />
                                        <li onClick={Logout}>로그아웃</li>
                                    </ul>
                                </ProfileMenu>
                            ) : (
                                ''
                            )}
                        </>
                    ) : (
                        <Modalbutton onClick={handleClickButton}>회원가입/로그인</Modalbutton>
                    )}

                    <Vborder></Vborder>
                    <DashboardButton>기업 서비스</DashboardButton>
                </Right>
            </Mainbar>
            {search ? <Search setSearch={setSearch} /> : ''}
        </HeaderContain>
    );
};

const HeaderContain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    height: 50px;
    align-items: center;
    z-index: 99;
    @media all and (max-width: 1060px) {
        height: 110px;
    }
`;

const Mainbar = styled.div`
    width: 87.72%;
    margin-bottom: 0px;
    max-width: 1060px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    @media all and (max-width: 1060px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const DashboardButton = styled.div`
    cursor: pointer;
    font-size: 13px;
    color: #666;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    font-weight: 400;
    @media all and (max-width: 1060px) {
        display: none;
    }
`;

const Vborder = styled.div`
    width: 2px;
    height: 10px;
    background-color: rgb(225, 226, 227);
    @media all and (max-width: 1060px) {
        display: none;
    }
`;

const Modalbutton = styled.div`
    cursor: pointer;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    @media all and (max-width: 1060px) {
        display: none;
    }
`;
const ProfileMenu = styled.div`
    position: absolute;
    top: 50px;
    border: 1px solid cdcdcd;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    width: 200px;

    ul {
        list-style: none;
        padding: 0px;
        margin: 0;
        hr {
            margin: 0;
        }
        li {
            width: 200px;
            position: relative;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin: 0;
            text-align: center;
            &:last-child {
                background-color: gainsboro;
            }
        }
    }
`;

const Headerprofile = styled.div`
    img {
        cursor: pointer;
        width: 20px;
        margin-right: 10px;
    }
    @media all and (max-width: 1060px) {
        display: none;
    }
`;

const Searchbutton = styled.div`
    cursor: pointer;
`;

const Right = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

function createCSS() {
    let styles = '';

    for (let i = 7; i > 3; i--) {
        styles += `
        @media all and (max-width: ${i * 100}px) {
            &:nth-child(${i}) {
                display: none;
            }
        }
       `;
    }

    return css`
        ${styles}
    `;
}

const Center = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    li {
        list-style-type: none;
        display: inline-block;
        a {
            position: relative;
            text-decoration: none;
            vertical-align: middle;
            font-size: 13px;
            line-height: 20px;
            font-weight: 600;
            display: inline-block;
            color: rgb(51, 51, 51);
        }

        ${createCSS()};
    }
    @media all and (max-width: 1060px) {
        padding: 1% 0;
        width: 70%;
    }
`;
const Singup = styled.div`
    cursor: pointer;
    line-height: 15px;
    display: none;
    color: blue;
    border: 1px solid rgb(63, 63, 238);
    background-color: white;
    border-radius: 30px;
    padding: 10px 10px;
    @media all and (max-width: 1060px) {
        display: block;
    }
`;

const Dropbtn = styled.div`
    padding: 13px;
    padding-left: 0px;
    margin-right: 10px;
    img {
        height: 14px;
    }
`;
const Dropdown = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;
const DropdownContent = styled.div`
    display: none;
    position: absolute;
    top: 35px;
    left: -10px;
    z-index: 1;
    width: 200px;
    background-color: #fff;
    ul {
        &:hover::-webkit-scrollbar {
            width: 0px;
            opacity: 0;
            display: none;
        }
        overscroll-behavior: contain;
        border: 1px solid gainsboro;
        width: 200px;
        height: calc(70vh - 150px);
        overflow-y: auto;
        overflow-x: hidden;
        li {
            &:hover {
                background-color: gainsboro;
            }
            &:hover > ul {
                display: block;
            }
            width: 100%;
            display: block;
            font-size: 14px;
            font-weight: 700;
            padding: 0px 10px;
            font-style: normal;
            line-height: 40px;
            letter-spacing: normal;
        }
        ul {
            background-color: #fff;
            border-left: 1px solid gainsboro;
            display: none;
            width: 200px;
            position: absolute;
            top: 0;
            left: 200px;
        }
    }
    ${Dropdown}:hover & {
        display: block;
    }
    @media all and (max-width: 1060px) {
        width: 100vw;
        position: fixed;
        left: 0;
        top: 60px;
        ul {
            width: 100%;
            ul {
                left: 50%;
                width: 50%;
            }
        }
        /* .dropdown-content ul::-webkit-scrollbar {
            display: none;
        } */
    }
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    img {
        height: 17px;
    }
    @media all and (max-width: 1060px) {
        padding: 5px 0;
        width: 100%;
        //margin-bottom: 15px;
    }
`;
export default Header;
