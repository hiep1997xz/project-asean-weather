import React, { useState } from 'react';
import '../css/HomeBody.css';
import { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchApiE1Request, getSearchApiE2Request, getSearchApiE3Request } from '../redux/effects/searchApiEffect';
import Loading from '../components/loading';
import "../scss/homePage.scss";
import HomeCart from '../components/homeCard';
import { getFavoList } from '../../data/getFavoList';
import { fitlerArr } from '../../data/configArrays';

let citiesAll = [
    'Bandar Seri Begawan',
    'Kampung Kota Batu',
    'Tutong',
    'Temburong',
    'Melilas',
    'Koh Rong',
    'Sihanoukville',
    'Kampot',
    'Phnom Penh',
    'Kratie',
    'Bukittinggi',
    'Yogyakarta',
    'Jakarta',
    'Bandung',
    'Manado',
    'Pakxe',
    'Vientiane',
    'Vang Vieng',
    'Champasak',
    'Luang Prabang',
    'Malacca',
    'Langkawi',
    'Kuantan',
    'Perhentian',
    'Kuala Lumpur',
    'Yangon',
    'Mandalay',
    'Bagan',
    'Mrauk-U',
    'Nyaung Shwe',
    'Manila',
    'Palawan',
    'Cebu',
    'Padre Burgos',
    'Bacolod',
    'Singapore',
    'Sembawang',
    'Jurong West',
    'Bukit Batok',
    'Lim Chu Kang',
    'Bangkok',
    'Phuket',
    'Ayutthaya',
    'Dok Mai',
    'Pattaya',
    'Ha Noi',
    'Ho Chi Minh City',
    'Hai Phong',
    'Da Nang',
    'Hoi An',
]


const HomeBody = ({ propsSearchApi,
    getSearchApiE1Request,
    getSearchApiE2Request,
    getSearchApiE3Request
}) => {
    const [isLove1, setIsLove1] = useState(false);
    const [isLove2, setIsLove2] = useState(false);
    const [isLove3, setIsLove3] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!!user) {
            let results = getFavoList(user.favouriteCities);
            const filteredListCities = shuffle(fitlerArr(citiesAll,results));



            if (results.length == 0) {
                handleNoneFavo()
            } else if (results.length == 1) {
                setIsLove1(true);
                getSearchApiE1Request(results[0]);
                getSearchApiE2Request(filteredListCities[0]);
                getSearchApiE3Request(filteredListCities[1]);
            } else if (results.length == 2) {
                setIsLove1(true);
                getSearchApiE1Request(results[0]);
                setIsLove2(true);
                getSearchApiE2Request(results[1]);
                getSearchApiE3Request(filteredListCities[0])
            } else if (results.length == 3) {
                results = shuffle(results);
                setIsLove1(true);
                getSearchApiE1Request(results[0]);
                setIsLove2(true);
                getSearchApiE2Request(results[1]);
                setIsLove3(true);
                getSearchApiE3Request(results[2]);
            } else if (results.length > 3) {
                setIsLove1(true);
                setIsLove2(true);
                setIsLove3(true);

                results = shuffle(results);
                console.log("resultsAfter", results);
                getSearchApiE1Request(results[0]);
                getSearchApiE2Request(results[1]);
                getSearchApiE3Request(results[2]);
            }
        } else {
            handleNoneFavo();
        }
    }, [])

    const handleNoneFavo = () => {
        setIsLove1(false);
        setIsLove2(false);
        setIsLove3(false);
        citiesAll = shuffle(citiesAll);
        getSearchApiE1Request(citiesAll[0]);
        getSearchApiE2Request(citiesAll[1]);
        getSearchApiE3Request(citiesAll[2]);
    }

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue = 0;
        let randomIndex = 0;

        // While there remain elements to shuffle...
        while (0 != currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }



    // console.log(propsSearchApi);
    const success = propsSearchApi.success;

    if (success.E1 == 1 && success.E2 == 1 && success.E3 == 1) {
        const E1 = propsSearchApi.data.E1;
        const locationE1 = E1.location;
        const currentE1 = E1.current;

        const E2 = propsSearchApi.data.E2;
        const locationE2 = E2.location;
        const currentE2 = E2.current;

        const E3 = propsSearchApi.data.E3;
        const locationE3 = E3.location;
        const currentE3 = E3.current;

        return (

            <div className="row margin_bottom">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row">
                        <HomeCart location={locationE1} current={currentE1} isLove={isLove1} />
                        <div className="col-1"></div>
                        <HomeCart location={locationE2} current={currentE2} isLove={isLove2} />
                        <div className="col-1"></div>
                        <HomeCart location={locationE3} current={currentE3} isLove={isLove3} />
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    } else {
        return (
            <Loading />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        propsSearchApi: state.searchApiReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchApiE1Request,
    getSearchApiE2Request,
    getSearchApiE3Request,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);