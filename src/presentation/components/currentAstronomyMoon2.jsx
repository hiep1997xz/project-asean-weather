import { moonPhaseToVi } from "../../data/configMoonphase";
import moonrise from "../../data/weatherImgs/moonrise.png";
import moonset from "../../data/weatherImgs/moonset.png";

// Thẻ show ra thông tin thiên văn của mặt trăng
const currentAstronomyMoon2 = ({ astronomy }) => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="row">
                        <div className="col colScssCD2 colScssCD3">
                            <div className="leftSide mt-2">
                                <div className="row mb-1">
                                    <div className="col-12 text-center">
                                        <big><b>MẶT TRĂNG</b></big>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-6 text-center">
                                        <div className="row">
                                            <div className="col-5 offset-1">
                                                <div className="row">
                                                    <img src={moonrise} width="100" alt="icon moonrise" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col showAstroMoonTime showAstroTimeTextRight">
                                                        Trăng lên
                                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col showAstroTimeTextRight">
                                                        {astronomy.moonrise}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="row">
                                            <div className="col-5 offset-1">
                                                <div className="row">
                                                    <img src={moonset} width="100" alt="icon moonset" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className=" col showAstroMoonTime showAstroTimeTextRight">
                                                        Trăng lặn
                                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col showAstroTimeTextRight">
                                                        {astronomy.moonset}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col colScssCD1">
                            <div className="leftSide mt-1">
                                <div className="row border-bottom mb-3">
                                    <div className="col-1 text-center"><i className="fa fa-wpexplorer showIconDetail" aria-hidden="true"></i></div>
                                    <div className="col-3">
                                        Chu kỳ
                                        </div>
                                    <div className="col-8 textRight mr-3">
                                        {moonPhaseToVi(astronomy.moon_phase)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col colScssCD2 colScssCD3">
                            <div className="leftSide mt-1">
                                <div className="row border-bottom mb-3">
                                    <div className="col-1 text-center"><i className="fa fa-adjust showIconDetail" aria-hidden="true"></i></div>
                                    <div className="col-6">
                                        Độ phản chiếu
                                        </div>
                                    <div className="col-5 textRight">
                                        {astronomy.moon_illumination} %
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

export default currentAstronomyMoon2;