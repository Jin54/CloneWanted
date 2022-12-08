import React from 'react';
import { useEffect, useState } from 'react';

import markericon from '../../../images/marker.png';
const { naver } = window;

const Map = () => {
    useEffect(() => {
        const container = document.getElementById('map');
        const position = new naver.maps.LatLng(37.3595704, 127.105399);
        const mapOptions = {
            center: position,
            zoom: 17,
        };
        const map = new naver.maps.Map(container, mapOptions);

        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.3595704, 127.105399),
            map: map,
            icon: {
                url: markericon,
                size: new naver.maps.Size(50, 50),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 25),
            },
        });
    }, []);

    return <div id="map" />;
};

export default Map;
