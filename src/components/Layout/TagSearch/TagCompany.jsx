import React from 'react';
import styles from './TagSearch.module.css';
import { useState, useEffect } from 'react';

const TagCompany = props => {
    const company = props.company;
    const loading = props.loading;

    function tagReturn(e) {
        let str = '';

        for (let t of e) {
            str = str + '  ' + t;
        }
        return str;
    }

    return (
        <div className={styles.listContainer}>
            {loading ? (
                <div className={styles.loading}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />
                </div>
            ) : (
                <div className={styles.list}>
                    {company.map((A, index) => (
                        <div className={styles.company} key={index + 500}>
                            <div className={styles.title}>
                                <img className={styles.logo} src={A.url} alt="" />
                                <h3>{A.name}</h3>
                                <button> 팔로우 </button>
                            </div>
                            <div className={styles.tags} key={index + 600}>
                                {tagReturn(A.tags)}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TagCompany;
