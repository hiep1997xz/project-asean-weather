import '../scss/currentPage.scss';
import '../scss/hourlyPage.scss';
import { useEffect, useState } from 'react';
import { getDailyRequest } from '../redux/effects/dailyEffect';
import { useHistory } from 'react-router';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Loading from "../components/loading";
import getFormatDate from "../../data/configDate";
import DailyBody from '../components/dailyBody';



const DailyWeatherPage = ({ getDailyRequest, propsSearch, propsDaily }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const history = useHistory();
    useEffect(() => {
        if (propsSearch.success == 1) {
            if (propsSearch.data.search) {
                // Gọi Api ở đây
                const q = propsSearch.data.search;
                getDailyRequest(q);
            }

        } else {
            const cityName = localStorage.getItem("cityName");
            if (cityName) {
                getDailyRequest(cityName);
            } else {
                history.push({
                    pathname: "/",
                })
            }
        }

    }, [])

    if (propsDaily.success == 0) {
        return (
            <Loading />
        );
    } else {
        const localtime = propsDaily.data.daily.location.localtime;
        const dateTime = getFormatDate(localtime);
        const forecastDays = propsDaily.data.daily.forecast.forecastday;
        const location = propsDaily.data.daily.location;
        const forecastDay = forecastDays[0];
        const current = propsDaily.data.daily.current;
        return (
            <>
                <DailyBody current={current} location={location} dateTime={dateTime} forecastDays={forecastDays} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        propsSearch: state.searchV3Reducer,
        propsDaily: state.dailyReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDailyRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(DailyWeatherPage);