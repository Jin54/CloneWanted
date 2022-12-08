import React from 'react';
import { useState, useEffect } from 'react';

const SlideShow = props => {
    const slideLength = 9; // 전체 슬라이드 개수
    const slideWidth = 1080;
    const [slideIndex, setSlideIndex] = useState(2);
    const [slidePx, setSlidePx] = useState(-1800);
    const [slidesWidth, setslidesWidthx] = useState(slideWidth * slideLength);
    const [opacity, setOpacity] = useState(1);
    const [balance, setbalance] = useState((window.innerWidth - slideWidth) / 2);
    const [transition] = useState(0.5);

    useEffect(() => {
        //처음실행될때 한번

        setslidesWidthx(slideWidth * slideLength);
        const timer = setInterval(() => {
            moveSlide(prev => (prev >= 7 ? 2 : prev + 1));
        }, 5000);
        clearInterval(timer);
    }, []);

    useEffect(() => {
        setbalance((window.innerWidth - slideWidth) / 2);

        setTimeout(() => {
            changeOpacity();
            setSlidePx(-slideIndex * slideWidth);
        }, 500);
    }, [slideIndex]);

    function changeOpacity() {
        var opacityValue = 0;
        setOpacity(opacityValue);
        function doChange() {
            if (++opacityValue >= 100) {
                return;
            }
            setOpacity(opacityValue / 100);
        }
        setInterval(doChange, 5);
    }

    function moveSlide(idx) {
        idx <= 1 ? setSlideIndex(6) : idx >= 7 ? setSlideIndex(2) : setSlideIndex(idx);
    }
    function prevClick() {
        moveSlide(slideIndex - 1);
    }
    function nextClick() {
        moveSlide(slideIndex + 1);
    }

    return (
        <div id="slideShow">
            <ul className="slides" style={{ left: slidePx + balance + 'px', width: slidesWidth + 'px', transition: transition + 's ease-out ' }}>
                <li>
                    <img src={require('../../../images/banner4.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner5.png')} alt="" />
                </li>

                <li>
                    <img src={require('../../../images/banner1.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner2.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner3.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner4.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner5.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner1.png')} alt="" />
                </li>
                <li>
                    <img src={require('../../../images/banner2.png')} alt="" />
                </li>
            </ul>
            <p className="controller">
                <span className="prev" onClick={prevClick}>
                    <img src={require('../../../images/left-arrow.png')} alt="" />
                </span>
                <span className="next" onClick={nextClick}>
                    <img src={require('../../../images/right-arrow.png')} alt="" />
                </span>
            </p>
            <div className="banner_info" style={{ opacity: opacity, left: balance + 100 + 'px' }}>
                <h2>[FREE] GDSC Job Fair Live</h2>
                <h3>국내 최고 스타트업 채용소식을 볼 수 있는 기회!</h3>
                <hr className="banner_divider" />
                <a href="!#">
                    바로가기
                    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default SlideShow;
