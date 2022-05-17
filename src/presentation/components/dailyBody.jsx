import DailyMainList from "./dailyMainList";
import '../scss/currentPage.scss';
import '../scss/hourlyPage.scss';
import '../scss/dailyPage.scss';
import getFormatDate from "../../data/configDate";

const DailyBody = ({ location, forecastDays,current }) => {
    return (
        <div className="row mt-3">
            <div className="col-12 card-custom">
                <div className="row rowScssDP1">
                    <div className="col-12 colScss1">
                        <div style={{ marginTop: 20 }}> <b style={{ fontSize: "25px" }}>Thời tiết ba ngày</b></div>
                        <div style={{ color: "GrayText" }}>{location.name}, {location.country}</div>
                        <div style={{ color: "GrayText" }}>Cập nhật lần cuối {getFormatDate(current.last_updated).time} {getFormatDate(current.last_updated).date}</div>
                        
                    </div>
                </div>
                <DailyMainList forecastDays={forecastDays} />
            </div>
        </div>
    );
};
export default DailyBody;
