import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Search = ({ setSearch }) => {
    const color = ['#eff5ff', '#afc0ff', '#FfBFff', '#FF72ff', '#6475ff', '#acc7ff', '#5e5fff', '#c370ff', '#eae160', 'bf7aa3', 'd7d967'];

    const navi = useNavigate();

    function onkeypress(e) {
        if (e.key == 'Enter') {
            let str = e.target.value;

            const list = [str, -1];

            navi('/TagSearch', { state: list });
            setSearch(false);
        }
    }
    function gotoPage(e) {
        const list = [e.target.innerText, e.target.id];
        navi('/TagSearch', { state: list });
        setSearch(false);
    }
    return (
        <div className={styles.background}>
            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <div className={styles.searchbar}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18.033 16.618l4.28 4.281-1.414 1.415-4.28-4.281A8.963 8.963 0 0 1 11 20a8.998 8.998 0 0 1-8.065-5H9l-1.304 2.173A6.972 6.972 0 0 0 11 18a6.977 6.977 0 0 0 4.875-1.975l.15-.15A6.977 6.977 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.963 8.963 0 0 1-1.967 5.618zM19.065 7H13l1.304-2.173A6.972 6.972 0 0 0 11 4c-3.868 0-7 3.132-7 7 0 .695.101 1.366.29 2H2.223A9.038 9.038 0 0 1 2 11c0-4.973 4.027-9 9-9a8.998 8.998 0 0 1 8.065 5z" />
                            </g>
                        </svg>

                        <input type="text" placeholder="#태그, 회사, 포지션 검색" id="serach" onKeyPress={onkeypress} />
                    </div>

                    <div className={styles.movebar}>
                        <div className={styles.left}>추천태그를 검색해보세요</div>
                        <div className={styles.right}>기업태그 홈 이동하기 > </div>
                    </div>

                    <div className={styles.tagcontainer}>
                        <li onClick={gotoPage} id="23" style={{ backgroundColor: color[0] }}>
                            #과일
                        </li>
                        <li onClick={gotoPage} id="24" style={{ backgroundColor: color[1] }}>
                            #음료
                        </li>
                        <li onClick={gotoPage} id="9" style={{ backgroundColor: color[3] }}>
                            #퇴사율5%이하
                        </li>
                        <li onClick={gotoPage} id="3" style={{ backgroundColor: color[4] }}>
                            #연봉상위2~5%
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
