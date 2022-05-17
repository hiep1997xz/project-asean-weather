import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavoList } from '../../data/getFavoList';
import Heart from '../components/heartOrNoHeart';
import '../scss/leftBar.scss';
import { addFavoRequest } from "../redux/effects/addFavoEffect";
import { getUserRequest } from "../redux/effects/getUserEffect";
import { removeFavoRequest } from "../redux/effects/removeFavoEffect";
import { Modal } from 'react-bootstrap';


const LeftBar = ({ propsSearch, propUser, propMenu, addFavoRequest, getUserRequest, removeFavoRequest }) => {
    const [isFavoPage, setIsFavoPage] = useState(false);
    const [city, setCity] = useState('');
    const [searchEmail, setSearchEmail] = useState("");
    const [isLove, setIsLove] = useState(false);
    const [fbId, setFbId] = useState("");
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsFavoPage(false)
        const pathname = window.location.pathname;
        if (pathname == "/main/favorite_cities") {
            setIsFavoPage(true);
        }
        setIsLove(false);
        // const user = {
        //     id: 2,
        //     name: "Nguyễn Hoàng Giang",
        //     email: "nghoanggiang@gmail.com",
        //     facebookId: "1000000000000000",
        //     loginDate: "2021-05-10 00:00:00",
        //     favouriteCities: [
        //         {
        //             id: 1,
        //             name: "Bandar Seri Begawan"
        //         },
        //         {
        //             id: 2,
        //             name: "Kampung Kota Batu"
        //         },

        //         {
        //             id: 4,
        //             name: "Temburong"
        //         },
        //         {
        //             id: 5,
        //             name: "Melilas"
        //         },
        //         {
        //             id: 7,
        //             name: "Sihanoukville"
        //         },
        //         {
        //             id: 9,
        //             name: "Phnom Penh"
        //         },
        //         {
        //             id: 10,
        //             name: "Kratie"
        //         },
        //         {
        //             id: 11,
        //             name: "Bukittinggi"
        //         },
        //         {
        //             id: 12,
        //             name: "Yogyakarta"
        //         },
        //         {
        //             id: 47,
        //             name: "Ho Chi Minh City"
        //         }
        //     ]
        // }

        // localStorage.setItem('user', JSON.stringify(user));

        const user = JSON.parse(localStorage.getItem("user"));

        if (propsSearch.success == 1) {
            let cityName = propsSearch.data.search;
            setCity(cityName);
            handleConverCityToURL(cityName);
            if (!!user) {
                handleReceiveUser(user, cityName);
            }
        } else {
            let cityName = localStorage.getItem("cityName");
            setCity(cityName);
            if (cityName) {
                handleConverCityToURL(cityName);
            }
        }

        if (propUser.success == 1) {
            handleReceiveUser(propUser.data.user, city)
        }
        if (propUser.success != 1) {
            if (!!user) {
                handleReceiveUser(user, city);
            }
        }
    }, [searchEmail, propsSearch.data.search, isFavoPage, isLove, propUser, isShow, propMenu])

    const handleReceiveUser = (user, city) => {
        if (!!user) {
            setFbId(user.facebookId);
            const results = getFavoList(user.favouriteCities);
            for (let i = 0; i < results.length; i++) {
                if (results[i] == city) {
                    setIsLove(true);
                }
            }
        }
    }

    const handleConverCityToURL = (name) => {
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        setSearchEmail("/main/current?" + name + "|");
    }

    const emailSubject = "Let's see this interesting site!";
    const emailBody = `Check out the weather of ${city}: %0D%0A https://asean-weather.herokuapp.com${searchEmail}`;
    const hrefFB = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fasean-weather.herokuapp.com${searchEmail};src=sdkpreparse`;
    const hrefEmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=${emailSubject}&body=${emailBody}`;
    const handleFavorite = async () => {
        if (isLove == false) {
            setIsShow(true);
            await addFavoRequest(fbId, city);

        } else if (isLove == true) {
            setIsShow(true)
            await removeFavoRequest(fbId, city);
        }
        setTimeout(() => {
            getUserRequest(fbId);
            setTimeout(() => {
                setIsShow(false);
            }, 500);
        }, 2500);
    }

    return (
        <>
            {(!isFavoPage ? (
                <>
                    <div id="fb-root"></div>
                    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=521933395496343&autoLogAppEvents=1" nonce="e5CdrVam"></script>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <a target="_blank" href={hrefEmail} title="Share By Email Automatically"><i className="fa fa-envelope-square colorScssLB1 onHover" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <a target="_blank" href={hrefFB} title="Share the weather of this city on Facebook" className="fb-xfbml-parse-ignore"><i className="fa fa-facebook-square colorScssLB2 onHover" aria-hidden="true" data-layout="button"></i></a>
                            </div>
                        </div>
                        {(!!fbId && !isFavoPage ? (<div className="row">
                            <div className="col-12 mt-2">
                                <a onClick={handleFavorite} className="fb-xfbml-parse-ignore">{(!isFavoPage ? <Heart isLove={isLove} /> : null)}</a>
                            </div>
                        </div>) : null)}
                    </div>
                </>
            ) : null)}

            <Modal show={isShow}>
                <Modal.Body>
                    <h1>Loading ...</h1>
                </Modal.Body>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        propsSearch: state.searchV3Reducer,
        propUser: state.userReducer,
        propMenu: state.naviBarReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addFavoRequest,
    getUserRequest,
    removeFavoRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);