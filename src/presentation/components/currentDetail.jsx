import { Card } from "react-bootstrap";
import windDirection from "../../data/configWindDirection";
import '../scss/currentPage.scss';

// Thẻ show ra thông tin chi tiết của thời tiết hiện tại
const CurrentDetail = ({ current }) => {
    return (
        <>
            <div className="row mt-3 mb-2">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row mt-2 mb-3">
                            <div className="col-12 text-center">
                                <big><b>THÔNG TIN CHI TIẾT</b></big>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-1">
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-superpowers showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Vận tốc gió
                                        </div>
                                        <div className="col-5 textRight mr-3">
                                            {current.wind_kph} m/s
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-location-arrow showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-5">
                                            Hướng gió
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {windDirection(current.wind_dir)}
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-thermometer-empty showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-7">
                                            Áp suất khí quyển
                                        </div>
                                        <div className="col-4 textRight mr-3">
                                            {current.pressure_mb} mb
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-1">
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-low-vision showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Tầm nhìn
                                        </div>
                                        <div className="col-5 textRight">
                                            {current.vis_km} km
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-shield showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Chỉ số UV
                                        </div>
                                        <div className="col-5 textRight">
                                            {current.uv}
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-cloud showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Mây che phủ
                                        </div>
                                        <div className="col-5 textRight">
                                            {current.cloud} %
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </>
    );
}

export default CurrentDetail;