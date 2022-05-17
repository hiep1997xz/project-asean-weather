import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getHourlyRequest } from "../redux/effects/hourlyEffect";
import Loading from "../components/loading";
import HourlyBody from "../components/hourlyBody";
import { useHistory } from 'react-router';

const HourlyWeatherPage = ({ getHourlyRequest, propsHourly, propsSearch }) => {

    const history = useHistory();

    useEffect(() => {
        if (propsSearch.success == 1) {
            if (propsSearch.data.search) {
                // Gọi Api ở đây
                const q = propsSearch.data.search;
                getHourlyRequest(q);
            }

        } else {
            const cityName = localStorage.getItem("cityName");
            if (cityName) {
                getHourlyRequest(cityName);
            } else {
                history.push({
                    pathname: "/",
                })
            }
        }
    }, [])

    // Kiểm tra data
    //console.log(propsHourly);

    // Kiểm tra xem data đã có chưa, nếu có thì ...
    if (propsHourly.success == 0) {
        return (
            <Loading />
        );
    } else {
        const location = propsHourly.data.hourly.location;
        const hourlyList = propsHourly.data.hourlyList;
        const current = propsHourly.data.hourly.current;

        return (
            <>
                <HourlyBody current={current} location={location} hourlyList={hourlyList} />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        propsHourly: state.hourlyReducer,
        propsSearch: state.searchV3Reducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getHourlyRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HourlyWeatherPage);