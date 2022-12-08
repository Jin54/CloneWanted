import React from 'react';
import ListPrint from './ListPrint';

const ListCareer = props => {
    return (
        <>
            <div className="divider"></div>

            <div className="subsection">
                <div className="titleline">
                    <button></button>
                    <div className="title">
                        <h2>3분만에 읽는 Wanted+ 아티클</h2>
                        <a href="/#">
                            <p>아티클 전체보기 {'>'}</p>
                        </a>
                    </div>
                    <button>
                        <img src={require('../../../images/right-arrow.png')} alt="" />
                    </button>
                </div>
                <ListPrint data={props.data} />
            </div>
        </>
    );
};

export default ListCareer;

