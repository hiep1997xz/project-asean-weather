import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import CurrentAqi from "../components/currentAqi";
import CurrentAstronomySun from "../components/currentAstronomySun";
import CurrentDetail from "../components/currentDetail";
import CurrentMain from "../components/currentMain";
import Loading from "../components/loading";
import { getCurrentRequest } from "../redux/effects/currentEffect";
import { getAstroRequest } from "../redux/effects/astroEffect";
import '../scss/currentPage.scss';
import CurrentAstronomyMoon from "../components/currentAstronomyMoon";
import { markMenuInComponent, menuType } from "../../data/configMenu";
import { useHistory } from 'react-router';
import { toastr } from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const CurrentWeatherPage = ({ propsCurrent, propsAstro, getCurrentRequest, getAstroRequest, propsSearch }) => {
    const history = useHistory();
    const warningNotify = (message) => {
        const options = {
            timeOut: 2500,
            type: "warning",
            showCloseButton: true,
            progressBar: false,
            position: "top-center",
        };
        toastr.warning("AseanWeather", message, options)
    }
    // Gọi api ở đây mỗi khi có kết quả từ propsSearch
    useEffect(() => {
        // Mark menu
        markMenuInComponent(menuType.CURRENT);

        if (history.location.search) {
            console.log("history.location.search", history.location.search);
            let search = history.location.search;
            search = search.replace("?", " ");
            search = search.trim();
            if (search.endsWith("%7C")) {
                search = search.replace("%7C", " ");
                search = search.trim();
            } else if (search.indexOf("%7C") != -1) {
                const searchSplited = search.split("%7C");
                search = searchSplited[0];
                search = search.replace("_", " ");
                search = search.replace("_", " ");
                search = search.replace("_", " ");
                search = search.replace("_", " ");
                search = search.replace("_", " ");
            } else {
                search = "Ha Noi";
            }

            getCurrentRequest(search);
            getAstroRequest(search);
            localStorage.setItem("cityName", search);
        } else {
            if (propsSearch.success == 1) {
                if (propsSearch.data.search) {
                    // Gọi Api ở đây
                    const q = propsSearch.data.search;
                    getCurrentRequest(q);
                    getAstroRequest(q);
                }
            } else {
                const cityName = localStorage.getItem("cityName");
                if (cityName) {
                    getCurrentRequest(cityName);
                    getAstroRequest(cityName);
                } else {
                    warningNotify("Tìm kiếm một thành phố trước đã bạn ơi!");
                    setTimeout(() => {
                        document.querySelector("a.linkHomeHS").click();
                    }, 2500);
                }
            }
        }
    }, [propsSearch.data.search])

    // Kiểm tra dữ liệu trả vể
    // console.log("Astro", propsAstro);
    // console.log("Current", propsCurrent);

    // Check xem trong store đã có dữ liệu trả về chưa, nếu chưa thì cho hiển thi màn hình loading ...
    if (propsCurrent.success == 1) {
        if (propsAstro.success == 0) {
            return (
                <Loading />
            );
        } else {
            const location = propsCurrent.data.current.location;
            const current = propsCurrent.data.current.current;
            const astronomy = propsAstro.data.astronomy.astronomy.astro;
            return (
                <>
                    <CurrentMain location={location} current={current} />
                    <CurrentDetail current={current} />
                    <CurrentAqi current={current} />
                    <CurrentAstronomySun astronomy={astronomy} />
                    <CurrentAstronomyMoon astronomy={astronomy} />
                </>
            );
        }
    } else {
        return (
            <Loading />
        );
    }
}


// Lấy state của currentReducer và astroReducer từ store ra
const mapStateToProps = (state) => {
    return {
        propsCurrent: state.currentReducer,
        propsAstro: state.astroReducer,
        propMenu: state.naviBarReducer,
        propsSearch: state.searchV3Reducer,
    }
}

// Đẩy hai action lấy api thời tiết hiện tại và thông tin thiên văn vào props của component
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentRequest,
    getAstroRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherPage);