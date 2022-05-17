import { useEffect } from "react";
import getImage128URL from "../../data/configImage";
import { fixColorByTemp } from "../../data/configTempColor";

// Thẻ show ra thông tin thời tiết chung của địa phương
const DailyCurrentMain = ({ current }) => {

    // Gọi một số hàm xử lý kết quả khi khởi tạo trang
    useEffect(() => {
        // Đổi màu hiển thị của nhiệt độ tùy vào nhiệt độ nóng hay lạnh
        fixColorByTemp(current.temp_c, "div.temperature");

        // Đổi màu hiển thị real feel tùy vào nhiệt độ nóng hay lạnh
        fixColorByTemp(current.feelslike_c, "div.realFeel");
    }, [])

    return (
        <>
                    <div className="row mt-2">
                        <div className="col text-center">
                            <div className="leftSide mt-1">
                                <div className="temperature temperatureHP">
                                    {current.avgtemp_c}<span>&#176;</span>
                                </div>
                                <div className="condition-text">
                                    <b>{current.condition.text}</b>
                                </div>
                                <div className="condition-text">
                                    <small>Độ ẩm {current.avghumidity} %</small>
                                </div>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col conditionimgDP1">
                                            <img src={getImage128URL(current.condition.icon)} alt="Icon Weather" />
                                            <div className="real-feel">
                                                <div className="row">
                                                    <div className="col">
                                                        <small>Biên độ nhiệt</small>
                                                    </div>
                                                </div>
                                                <div className="row under-icon realFeel">
                                                    <small>{current.maxtemp_c}<span>&#176;</span>C / {current.mintemp_c}<span>&#176;</span>C</small>
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

export default DailyCurrentMain;