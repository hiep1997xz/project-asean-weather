import sunrise from "../../data/weatherImgs/sunrise.png";
import sunset from "../../data/weatherImgs/sunset.png";

// Thẻ show ra thông tin thiên văn của mặt trời
const CurrentAstronomySun = ({ astronomy }) => {
    return (
        <>
            <div className="row mt-3 mb-2">
                <div className="col-12 card-custom">
                    <div className="row mt-3 mb-2">
                        <div className="col colScssCD2 colScssCD3">
                            <div className="leftSide mt-2">
                                <div className="row mb-1 ">
                                    <div className="col-12 text-center">
                                        <big><b>MẶT TRỜI</b></big>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-6 text-center">
                                        <div className="row">
                                            <div className="col-4 offset-1">
                                                <div className="row">
                                                    <img src={sunrise} alt="icon sunrise" />
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="row">
                                                    <div className="col showAstroSunTime showAstroTimeTextRight">
                                                        Mặt trời mọc
                                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col showAstroTimeTextRight">
                                                        {astronomy.sunrise}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="row">
                                            <div className="col-4 offset-1">
                                                <div className="row">
                                                    <img src={sunset} alt="icon sunset" />
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="row">
                                                    <div className="col showAstroSunTime showAstroTimeTextRight">
                                                        Mặt trời lặn
                                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col showAstroTimeTextRight">
                                                        {astronomy.sunset}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentAstronomySun;