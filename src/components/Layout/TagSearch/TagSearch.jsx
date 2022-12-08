import React from 'react';
import styles from './TagSearch.module.css';

import { useState, useEffect } from 'react';
import TagCategory from './TagCategory';
import TagCompany from './TagCompany';
import dum from './tagdata.json';
import { useLocation } from 'react-router';

const TagSearch = () => {
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const [show, setShow] = useState(false);
    function onTag() {
        setShow(!show);
    }

    const [data, setData] = useState(dum.list);
    const [showColor] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [keyWord, seteyWord] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (location.state != null) {
            if (location.state[1] === -1) {
                //2setTagList([{ id: -1, content: location.state[0] }]);
                seteyWord(location.state[0]);

                setData(dum.list.filter(list => list.name.includes(location.state[0])));
                window.history.replaceState({}, document.title);
            } else {
                const temp = { id: location.state[1], content: location.state[0] };
                onAddTag(temp);
                window.history.replaceState({}, document.title);
            }
        }
    }, [location.key]);

    useEffect(() => {
        tagList.length == 0
            ? setData(dum.list)
            : setData(
                  dum.list.filter(function (list) {
                      var res = false;
                      list.tags.filter(function (tag) {
                          tagList.map(T => {
                              if (tag === T.content) {
                                  res = true;
                                  return res;
                              }
                              if (res) return res;
                          });
                      });
                      return res;
                  })
              );
        // console.log(data);
    }, [tagList]);

    function onAddTag(e) {
        var innerText;
        var id;
        if (e.type === 'click') {
            innerText = e.target.innerText;
            id = e.target.id;
        } else {
            innerText = e.content;
            id = e.id;
        }

        let res = false;
        tagList.map(element => {
            if (element.id === -1) {
                setTagList([]);
                res = true;
            } else if (element.id === id) {
                showColor[e.target.id] = false;
                setTagList(tagList.filter(tagList => tagList.id !== id));
                res = true;
                return 0;
            }
        });

        if (res) return;
        else if (tagList.length > 3) {
            alert('최대갯수초과');
            return;
        }

        const temp = { id: id, content: innerText };
        showColor[id] = true;
        setTagList(tagList => [...tagList, temp]);
    }
    function onDeleteTag() {
        seteyWord('');
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerClass}>
                    {tagList.map(element => (
                        <h2 key={element.id}>
                            {element.content}
                            <img
                                className={styles.closeButton}
                                id={element.id}
                                alt={element.content}
                                onClick={onAddTag}
                                src={require('../../../images/close.png')}
                            />
                        </h2>
                    ))}

                    {keyWord === '' ? (
                        ' '
                    ) : (
                        <h2 key={keyWord}>
                            {keyWord}
                            <img
                                className={styles.closeButton}
                                id={keyWord}
                                alt={keyWord}
                                onClick={onDeleteTag}
                                src={require('../../../images/close.png')}
                            />
                        </h2>
                    )}

                    <p className={`${styles.tagShow} ${show ? styles.turn : ''} `} onClick={onTag}>
                        {show ? '닫기' : '전체보기'}
                        <img src={require('../../../images/bluedownarrow.png')} alt="" />
                    </p>
                </div>
                <div className={styles.tagClass}>
                    <h1>추천</h1>
                    <button className={` ${styles.button} ${showColor[2] ? styles.color : ''}`} id="5" onClick={onAddTag}>
                        #연봉상위1%
                    </button>
                    <button className={` ${styles.button} ${showColor[11] ? styles.color : ''}`} id="9" onClick={onAddTag}>
                        #퇴사율5%이하
                    </button>
                    <button className={` ${styles.button} ${showColor[5] ? styles.color : ''}`} id="5" onClick={onAddTag}>
                        #연봉상위11~20%
                    </button>
                    <button className={` ${styles.button} ${showColor[12] ? styles.color : ''}`} id="16" onClick={onAddTag}>
                        #주35시간
                    </button>
                </div>
            </div>
            {show && (
                <div className={styles.tagWrapperContainer}>
                    <ul className={styles.tagWrapper}>
                        <TagCategory tags={dum.tags} showColor={showColor} onAddTag={onAddTag} />
                    </ul>
                </div>
            )}

            <TagCompany company={data} loading={loading} />
        </>
    );
};

export default TagSearch;

// const findByTags = T => {
//     var res = false;
//     tagList.map(tag => {
//         for (let e of T) {
//             if (e == tag.content) {
//                 res = true;
//                 return;
//             }
//         }
//     });
//     return res;
// };
// const findByList = L => {
//     var array = [];

//     for (let e of L) {
//         if (findByTags(e.tags)) {
//             array = [...array, e];
//         }
//     }
//     return array;
// };
