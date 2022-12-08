import React from 'react';

const ScrollButton = props => {
    return (
        <div className="scroll_button">
            <div className="left">
                <div className="select">
                    <div className="slide">
                        {props.data.map(data => (
                            <li key={data}> {data}</li>
                        ))}
                    </div>
                </div>
                <span className="toggleButton select_prev">
                    <img src={require('../../../images/prev.png')} alt="" />
                </span>
                <span className="toggleButton select_next">
                    <img src={require('../../../images/next.png')} alt="" />
                </span>
            </div>

            <div className="right">
                <button>
                    <img src={require('../../../images/option.png')} alt="" />
                </button>
            </div>
        </div>
    );
};

export default ScrollButton;
