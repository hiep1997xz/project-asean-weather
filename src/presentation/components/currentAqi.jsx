import { useEffect } from "react";
import { Card } from "react-bootstrap";
import aqi from "../../data/configAQI";

// Thẻ show ra thông tin của chất lượng không khí (AQI)
const CurrentAqi = ({ current }) => {
    
    const airQuality = current.air_quality;
    const co = Math.round(airQuality.co * 1000) / 1000;
    const no2 = Math.round(airQuality.no2 * 1000) / 1000;
    const o3 = Math.round(airQuality.o3 * 1000) / 1000;
    const so2 = Math.round(airQuality.so2 * 1000) / 1000;
    const pm2_5 = Math.round(airQuality.pm2_5 * 1000) / 1000;
    const pm10 = Math.round(airQuality.pm10 * 1000) / 1000;
    
    // Lấy ra chỉ số us-epa-index trong kết quả trả về
    const values = Object.values(airQuality);
    const usEpaIndex = values[6];

    useEffect(() => {
        // Đổi màu hiển thị đánh giá AQI tùy vào mức độ ô nhiễm
        aqi.fixColorOfAqi(usEpaIndex, "div.aqi");
    }, [current.air_quality]);

    return (
        <>
            <div className="row mt-3 mb-1">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row mb-2">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-2">
                                    <div className="row mb-2">
                                        <div className="col-12 text-center">
                                            <big><b>CHẤT LƯỢNG KHÔNG KHÍ (*)</b></big>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="showAqi aqi">
                                            {aqi.convertAQItoString(usEpaIndex)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-1">
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            Ảnh hưởng tới sức khỏe
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col text-muted reviewAqi">
                                                <i><small>{aqi.reviewAqi(usEpaIndex)}</small></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-2">
                                    <div className="row border-bottom mb-3">
                                        <div className="col-6">
                                            Khí CO
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {co} (μg/m<sup><small>3</small></sup>)
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-6">
                                            Khí O<sub><small>3</small></sub>
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {o3} (μg/m<sup><small>3</small></sup>)
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-6">
                                            Bụi 2.5 μm
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {pm2_5} (μg/m<sup><small>3</small></sup>)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-2">
                                    <div className="row border-bottom mb-3">
                                        <div className="col-6">
                                            Khí NO<sub><small>2</small></sub>
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {no2} (μg/m<sup><small>3</small></sup>)
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-6">
                                            Khí SO<sub><small>2</small></sub>
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {so2} (μg/m<sup><small>3</small></sup>)
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="col-6">
                                            Bụi 10 μm
                                        </div>
                                        <div className="col-6 textRight mr-3">
                                            {pm10} (μg/m<sup><small>3</small></sup>)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row rowScssCP1 mt-3">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col text-center">
                                            <i><small>(*) - Đánh giá theo tiêu chuẩn của Cơ quan Bảo vệ Môi trường Hoa kỳ (US EPA), gồm các mức sau:</small></i>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-center">
                                            <i><span className="green">Tốt </span>
                                            -<span className="yellow"> Trung bình </span>
                                            -<span className="orange"> Kém </span>
                                            -<span className="red"> Xấu </span>
                                            -<span className="violet"> Rất xấu </span>
                                            -<span className="brown"> Nguy hại</span>
                                            </i>
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

export default CurrentAqi;