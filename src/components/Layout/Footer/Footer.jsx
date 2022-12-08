import Socialink from './Socialink';

const Footer = () => {
    return (
        <footer>
            <div className="footertop">
                <div className="muenulink">
                    <ul>
                        <li>
                            <img className="logo" src={require('../../../images/logo2.webp')} alt="logo" />
                        </li>
                        <li>
                            <a href="/">기업소개</a>
                        </li>
                        <li>
                            <a href="/">이용약관</a>
                        </li>
                        <li>
                            <a href="/">개인정보</a>
                        </li>
                        <li>
                            <a href="/">개인정보 처리방침</a>
                        </li>
                        <li>
                            <a href="/">고객센터</a>
                        </li>
                    </ul>
                </div>
                <div className="sociallink">{Socialink()}</div>
            </div>
            <div className="footerbottom">
                <div className="adress">
                    <p>
                        (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br />
                        유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
                        02-539-7118 <br /> © Wantedlab, Inc.s
                    </p>
                </div>

                <div className="language">
                    <img src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt="country flag KR" />
                    <select>
                        <option value="KR">한국 (한국어)</option>
                        <option value="JP">日本 (日本語)</option>
                        <option value="WW">Worldwide (English)</option>
                        <option value="SG">Singapore (English)</option>
                    </select>
                    <i className="arrow">
                        <img src={require('../../../images/arrow.png')} className="arrow" alt="arrow" />
                    </i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
