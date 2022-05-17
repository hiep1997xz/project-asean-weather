import HourlyMainList from "./hourlyMainList";
import '../scss/currentPage.scss';
import '../scss/hourlyPage.scss';
import getFormatDate from "../../data/configDate";
const HourlyBody = ({ location, hourlyList,current }) => {
    return (
        <div className="row mt-3">
            <div className="col-12 card-custom">
                <div className="leftSizeHour">
                    <div className="colScss4"> <b>Thời tiết hàng giờ</b></div>
                    <div style={{ color: "GrayText" }}>{location.name}, {location.country}</div>
                    <div className="colorLocaltime">Cập nhật lần cuối {getFormatDate(current.last_updated).time} {getFormatDate(current.last_updated).date}</div>
                </div>
                <HourlyMainList hourlyList={hourlyList} />
            </div>
        </div>
    );
};
export default HourlyBody;
