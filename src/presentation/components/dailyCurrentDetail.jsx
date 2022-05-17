import '../scss/currentPage.scss';

// Thẻ show ra thông tin chi tiết của thời tiết hiện tại
const DailyCurrentDetail = ({ current }) => {
    return (
        <>
            <div>
                <div className="row mt-5 mb-1">
                    <div className="col colScssCD1">
                        <div className="leftSide mt-1">
                            <div className="row border-bottom mb-3">
                                <div className="col-1 text-center"><i className="fa fa-superpowers showIconDetail" aria-hidden="true"></i></div>
                                <div className="col-6">
                                    Vận tốc gió
                                        </div>
                                <div className="col-5 textRight mr-3">
                                    {current.maxwind_kph} m/s
                                        </div>
                            </div>
                            <div className="row border-bottom mb-3">
                                <div className="col-1 text-center"><i className="fa fa-location-arrow showIconDetail" aria-hidden="true"></i></div>
                                <div className="col-7">
                                    Lượng mưa dự báo
                                        </div>
                                <div className="col-4 textRight mr-3">
                                    {current.totalprecip_mm} mm
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
                                    {current.avgvis_km} km
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

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DailyCurrentDetail;