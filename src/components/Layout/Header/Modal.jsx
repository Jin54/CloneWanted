import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Number from './Number.json';
const Modal = ({ setmodalOpen, modalOpen }) => {
    const [choice, setChoice] = useState([false, false, false]);
    const modal = useRef();

    useEffect(() => {
        console.log('아무거나');
    }, [choice]);

    function choiceChange(e) {
        const idArray = [];
        choice.forEach(el => idArray.push(el));

        const value = e.target.alt;
        console.log(e.target.value);
        if (value == 0) {
            let flag = !idArray[0];
            for (let i = 0; i < idArray.length; i++) {
                idArray[i] = flag;
            }
        } else {
            idArray[value] = !idArray[value];
            let count = 0;
            for (let i = 1; i < idArray.length; i++) {
                if (idArray[i]) count++;
            }

            if (count == 2) idArray[0] = true;
            else idArray[0] = false;
        }
        // idArray[1] = !idArray[1];
        setChoice(idArray);
    }
    const handleClickButton = () => {
        setmodalOpen(-1);
    };
    function toNext() {
        setmodalOpen(1);
    }

    const [name, setName] = useState('');
    const [nameerror, setNameError] = useState(false);
    const namecheck = e => {
        const value = e.target.value;

        if (value.length < 2 || value.length > 5) {
            setNameError(false);
        } else if (!nameerror) {
            setNameError(true);
        }

        setName(value);
    };

    const [email, setEmail] = useState('');
    const [emailerror, setEmailerror] = useState(false);
    const emailcheck = e => {
        const value = e.target.value;
        var reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

        if (!reg.test(value)) {
            setEmailerror(false);
        } else if (!emailerror) {
            setEmailerror(true);
        }

        setEmail(value);
    };

    const [phone, setPhone] = useState('');
    const [phoneerror, setphoneerror] = useState(false);
    const phonecheck = e => {
        const value = e.target.value;
        var reg = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
        if (!reg.test(value)) {
            setphoneerror(false);
        } else if (!phoneerror) {
            setphoneerror(true);
        }
        setPhone(value);
    };

    const [password, setPassword] = useState('');
    const [passworderror, setPassworderror] = useState(false);
    const passwordcheck = e => {
        const value = e.target.value;
        var reg = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
        if (!reg.test(value)) {
            setPassworderror(false);
        } else if (!passworderror) {
            setPassworderror(true);
        }
        setPassword(value);
    };

    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordcommiterror, setPasswordcommiterror] = useState(false);
    const passwordcommitcheck = e => {
        const value = e.target.value;

        if (value != password) {
            setPasswordcommiterror(false);
        } else if (!passwordcommiterror) {
            setPasswordcommiterror(true);
        }
        setPasswordConfirm(value);
    };

    const dispatch = useDispatch();
    function SignUp() {
        alert('회원가입완료\n이메일 : ' + email);
        dispatch({ type: 'LOGIN' });

        handleClickButton();
    }
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(59);
    const [timer, setTimer] = useState(false);
    function timerStart() {
        setTimer(true);
    }

    useEffect(() => {
        if (!timer) return;
        const t = setInterval(() => {
            setSeconds(prev => parseInt(prev) - 1);
        }, 1000);
        return () => clearTimeout(t);
    }, [timer, seconds]);

    function outsideClick(e) {
        if (!modal.current.contains(e.target)) handleClickButton();
    }
    return (
        <div id="modal" className="modal-overlay" onClick={outsideClick}>
            <div ref={modal} className="modal-window">
                <div className="modal-header">
                    <img src={require('../../../images/logo.png')} alt="" />
                    <h1> </h1>
                    <button className="close-area" onClick={handleClickButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                            <path
                                fill="currentColor"
                                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                            ></path>
                        </svg>
                    </button>
                </div>
                {modalOpen == 0 && (
                    <div className="modal-body">
                        <div className="title">
                            <h1>
                                직장인을 위한
                                <br />
                                커리어 플랫폼, 원티드!
                            </h1>
                            <h2>
                                커리어 성장과 행복을 위한 여정
                                <br /> 지금 원티드에서 시작하세요.
                            </h2>
                        </div>

                        <div className="login">
                            <div className="login_email">
                                <label htmlFor="email" className="email_label">
                                    이메일
                                </label>
                                <div className="email_inputobx">
                                    <input
                                        type="email"
                                        placeholder="이메일을 입력해 주세요."
                                        name="email"
                                        onChange={emailcheck}
                                        style={emailerror || email.length == 0 ? { border: '1px solid #999999' } : { border: '1px solid red' }}
                                    />
                                </div>
                                <div className="email_error" style={emailerror || email.length == 0 ? { display: 'none' } : { display: 'block' }}>
                                    올바른 이메일 형식을 입력해주세요.
                                </div>
                            </div>

                            <div className="login_panel">
                                <button
                                    type="button"
                                    className="login_email_button"
                                    onClick={toNext}
                                    style={emailerror ? { backgroundColor: 'blue' } : { backgroundColor: 'gray' }}
                                    disabled={!emailerror}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="2">
                                            <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                                            <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                                        </g>
                                    </svg>
                                    이메일로 계속하기
                                </button>
                                <div className="login_panel_divider"></div>
                                <div className="login_panel_social">다음 계정으로 계속하기</div>
                                <div className="login_panel_socialbox">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/kakao.png')} alt="" />
                                                <p>kakao</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/facebook.png')} alt="" />
                                                <p>facebook</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/google.png')} alt="" />
                                                <p>google</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src={require('../../../images/apple.png')} alt="" />
                                                <p>apple</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="modal_footer">
                                걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                                <br />
                                회원가입 시<a href="https://help.wanted.co.kr/hc/ko/articles/360035484292">개인정보 처리방침</a> 과
                                <a href="https://help.wanted.co.kr/hc/ko/articles/360035844551">이용약관</a> 을 확인하였으며, 동의합니다.
                            </p>
                        </div>
                    </div>
                )}

                {modalOpen == 1 && (
                    <div className="modal_input_body">
                        <div className="email_box">
                            <h1>이메일</h1>
                            <div className="inputobx">
                                <input readOnly={true} type="text" value={email} placeholder="이메일을 입력해 주세요." />
                            </div>
                        </div>

                        <div className="name">
                            <h1>이름</h1>
                            <div className="inputobx">
                                <input type="text" placeholder="이름을 입력해 주세요." id="name" onChange={namecheck} />
                            </div>
                        </div>
                        {nameerror || name.length == 0 ? '' : <div className="certificationError">올바른 이름을 입력해주세요.</div>}

                        <div className="phone">
                            <h1>휴대폰 번호</h1>
                            <div className="inputobx">
                                <select type="text" id="phone" placeholder="(예시)01012345678">
                                    {Number.list.map(e => (
                                        <option value={e.code}>
                                            {e.code} {e.country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="certification">
                                <div className="left">
                                    <input name="phonenumber" type="text" placeholder="(예시) 01034567890" onChange={phonecheck} value={phone} />
                                </div>
                                <div className="right" onClick={timerStart}>
                                    인증번호 받기
                                </div>
                            </div>
                            {phoneerror || phone.length == 0 ? '' : <div className="certificationError">올바른 전화번호를 입력해주세요.</div>}
                            <div className="certification_number">
                                <input type="text" placeholder="인증번호를 입력해 주세요." id="certification_number" />
                            </div>
                            {timer ? (
                                <div id="timer">
                                    {minutes}:{seconds}{' '}
                                </div   >
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="password">
                            <h1>비밀번호</h1>
                            <div className="inputobx">
                                <input type="password" placeholder="비밀번호를 입력해 주세요." id="password" onChange={passwordcheck} />
                            </div>

                            {passworderror || password.length == 0 ? '' : <div className="certificationError">올바른 비밀번호를 입력해주세요.</div>}

                            <h2>
                                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요. <br />
                            </h2>
                        </div>
                        <div className="password_commit ">
                            <h1>비밀번호 확인</h1>
                            <div className="inputobx">
                                <input
                                    type="password"
                                    placeholder="비밀번호를 다시 한번 입력해 주세요."
                                    id="password_commit"
                                    onChange={passwordcommitcheck}
                                />
                            </div>
                            {passwordcommiterror || passwordConfirm.length == 0 ? (
                                passwordConfirm.length == 0 ? (
                                    ''
                                ) : (
                                    <div className="certificationOk">사용할수 있는 비밀번호 입니다.</div>
                                )
                            ) : (
                                <div className="certificationError">비밀번호가 서로 일치하지 않습니다.</div>
                            )}
                        </div>

                        <div className="agreement ">
                            <div>
                                <div className="checkbox">
                                    <input type="checkbox" name="allAgreement1" alt="0" onChange={choiceChange} checked={choice[0]} />
                                    전체 동의
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="checkbox">
                                    <input type="checkbox" name="allAgreement2" alt="1" onChange={choiceChange} checked={choice[1]} />
                                    개인정보 수집 및 이용 동의
                                    <a
                                        href="https://help.wanted.co.kr/hc/ko/articles/360040127872"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="Agreement_link__qZ81b"
                                    >
                                        자세히
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox">
                                    <input type="checkbox" name="allAgreement3" alt="2" onChange={choiceChange} checked={choice[2]} />
                                    이벤트 소식 등 알림 정보 받기
                                    <a
                                        href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="Agreement_link__qZ81b"
                                    >
                                        자세히
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sign">
                            {nameerror && phoneerror && passworderror && passwordcommiterror && choice[0] ? (
                                <button id="on" onClick={SignUp}>
                                    회원가입
                                </button>
                            ) : (
                                <button id="on" onClick={SignUp}>
                                    회원가입
                                </button>
                                // <button id="off">회원가입</button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
