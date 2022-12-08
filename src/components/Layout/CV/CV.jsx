import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from './FireBase';
import newDocument from '../../../images/new-document.png';
import upload from '../../../images/upload.png';
// const analytics = getAnalytics(app);

const CV = () => {
    const [files, setFileList] = useState([]); // 파일 리스트
    const [isUploading, setUploading] = useState(false); // 업로드 상태
    const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들
    const [progress, setProgress] = useState(0); // 업로드 진행상태

    const handleImageChange = (e) => {
        for (const image of e.target.files) {
            setFileList((prevState) => [...prevState, image]);
        }
    };

    // 업로드시 호출될 함수
    const handleImageUpload = async (e, fileList) => {
        console.log('try');
        try {
            setUploading(true);
            console.log('try');
            // 업로드의 순서는 상관없으니 Promise.all로 이미지 업로드후 저장된 url 받아오기
            const urls = await Promise.all(
                fileList?.map((file) => {
                    // 스토리지 어디에 저장되게 할껀지 참조 위치를 지정. 아래와 같이 지정해줄시 images 폴더에 파일이름으로 저장
                    const storageRef = ref(storage, `images/${file.name}`);

                    // File 또는 Blob 타입일 경우 uploadBytes 또는 uploadBytesResumable 메소드를 사용
                    // 만약 base64 또는 data_url 문자열로 업로드를 진행할 경우는 uploadString 사용
                    // 자세한 내용은 https://firebase.google.com/docs/storage/web/upload-files 공식문서 참고
                    const task = uploadBytesResumable(storageRef, file);

                    // 업로드 진행률을 모니터링, 업로드 진행률 퍼센트로 상태 지정
                    task.on('state_changed', (snapshot) => {
                        setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
                    });
                    return getDownloadURL(storageRef);
                })
            );
            // 업로드된 이미지 링크 상태로 지정 (보통은 해당 링크를 데이터베이스(파이어스토어)에 저장)
            setPhotosURL(urls);
            alert('성공적으로 업로드 되었습니다');
        } catch (err) {
            console.error(err);
        }
        // 초기화
        setProgress(0);
        setUploading(false);
    };

    return (
        <BackContainer>
            <Container>
                <h1>최근문서</h1>
                <button onClick={(e) => handleImageUpload(e, files)}>asdasd</button>
                {progress}%
                <List>
                    <Item>
                        <AddItem />
                        <h5>새 이력서 작성</h5>
                    </Item>
                    <Item>
                        <UploadItem multiple accept="/*" type="file" onChange={handleImageChange} />
                        <h5>파일 업로드</h5>
                    </Item>

                    <Item>
                        <ItemTitle>
                            <h3>제목</h3> <p>일자</p>
                        </ItemTitle>
                        <ItemAction>asd</ItemAction>
                    </Item>
                    {photoURL?.length >= 0 &&
                        photoURL.map((url, index) => (
                            <Item>
                                <img src={url} alt="사용자 첨부 이미지" />
                            </Item>
                        ))}
                </List>
                <div>{progress}</div>
            </Container>
        </BackContainer>
    );
};

const BackContainer = styled.div`
    background-color: #f8f8fa;
    width: 100vw;
    height: 100vh;
`;

const Container = styled.div`
    margin: auto;
    width: 1060px;
    padding-top: 50px;

    h1 {
        margin-top: 50px;
        font-size: 24px;
    }
`;
const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`;
const Item = styled.div`
    position: relative;
    width: 22%;
    height: 200px;
    background-color: #ffffff;
    border: 1px solid #d0d0d0;
    margin-right: 20px;
    margin-bottom: 20px;

    flex-direction: column;
    &:nth-child(1),
    &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 100%;
    }
    h5 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: center;
        color: #333;
        margin: 20px 0 0;
    }
`;

const AddItem = styled.input`
    cursor: pointer;
    width: 74px;
    height: 74px;
    margin: 0 auto;
    border-radius: 50%;
    border: none;
    background-color: #5757ff;
    background-image: url(${newDocument});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 50%;
`;

const UploadItem = styled(AddItem)`
    background-image: url(${upload});
    background-color: #8c8c8c;
    color: #8c8c8c;
    &::file-selector-button {
        display: none;
    }
`;

const ItemTitle = styled.div`
    padding: 6px 20px 20px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    text-align: left;
    h3 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.33;
        max-height: 46px;
        max-width: 100%;
        letter-spacing: normal;
        text-align: left;
        color: #333;
        overflow: hidden;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        border: none;
    }
    p {
        color: #999;
        margin-top: 5px;
    }
`;

const ItemAction = styled.div`
    position: absolute;
    bottom: 0;
    height: 41px;
    width: calc(100% - 20px);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 12px 0 20px;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid #e0e0e0;
`;

export default CV;
