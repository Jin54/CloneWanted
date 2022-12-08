import React from 'react';
import { Link } from 'react-router-dom';
const ListPrint = props => {
    return (
        <div className="list">
            {props.data.map(data => (
                <li key={data.id}>
                    <Link to={'/'}>
                        <img src={data.src} alt="" />
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <div className="writer">
                            <p>
                                {data.logo !== '' && <img src={data.logo} alt="" />}

                                {data.writer}
                            </p>
                        </div>
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default ListPrint;
