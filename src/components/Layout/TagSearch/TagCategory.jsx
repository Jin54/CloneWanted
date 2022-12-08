import React from 'react';
import styles from './TagSearch.module.css';
import { useState, useEffect } from 'react';

const TagCategory = props => {
    const tags = props.tags;
    const showColor = props.showColor;
    const onAddTag = props.onAddTag;

    return (
        <>
            {tags.map(A => (
                <li className={styles.tagCategory}>
                    <div className={styles.tagCategoryTittle}>{A.name}</div>

                    <div className={styles.tagCategoryButton}>
                        {A.tags.map(tagData => (
                            <button id={tagData.id} className={` ${styles.button} ${showColor[tagData.id] ? styles.color : ''}`} onClick={onAddTag}>
                                {tagData.tag}
                            </button>
                        ))}
                    </div>
                </li>
            ))}
        </>
    );
};

export default TagCategory;
