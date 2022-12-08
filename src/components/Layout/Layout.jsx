import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import TagSearch from './TagSearch/TagSearch';
import Jobdetail from './Jobdetail/Jobdetail';
import Header from './Header/Header';
import Mainpage from './Main/Main';
import Modal from './Header/Modal';
import Job from './Job/Job';
import CV from './CV/CV';
import BookMark from './BookMark/BookMark';

const Layout = (props) => {
    const [modalOpen, setmodalOpen] = useState(-1);

    return (
        <>
            <Header setmodalOpen={setmodalOpen} />
            {modalOpen != -1 && <Modal setmodalOpen={setmodalOpen} modalOpen={modalOpen} />}

            <Routes>
                <Route path="CV" element={<CV />} />
                <Route path="BookMark" element={<BookMark />} />
                <Route path="TagSearch" element={<TagSearch />} />
                <Route path="Job" element={<Job />} />
                <Route path="Jobdetail/:id" element={<Jobdetail />} />
                <Route path="/" element={<Mainpage />} />
            </Routes>
        </>
    );
};

export default Layout;
