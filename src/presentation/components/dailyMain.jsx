import { Collapse, Card } from 'reactstrap';
import React, { useState } from 'react';
import "../scss/hourlyPage.scss";
import DailyCurrentMain from './dailyCurrentMain';
import DailyCurrentDetail from './dailyCurrentDetail';
import CurrentAstronomySun2 from './currentAstronomySun2';
import CurrentAstronomyMoon2 from './currentAstronomyMoon2';



const DailyMain = ({ forecastDay }) =>
{
    //các hàm và biến để toggle
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
   

    // xử lý date đầu vào và cho ra showDate = ngày/tháng
    const date = forecastDay.date;  
    const dateSplited = date.split('-');
    const showDate = `${dateSplited[2]}/${dateSplited[1]}`;

    return (
        <div className="row">
            <div className="col-12 mb-1 card-custom">
                <div className="row mt-3">
                    <div className="col-12 colScss1"  >
                        <div className="row" style={{ margin: 15 }}>
                            <div className="col-1" >
                                <div className="mgHour">
                                    {showDate}
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="mgTemp" >
                                    <big><b>{forecastDay.day.avgtemp_c}<span>&#176;</span></b></big>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className="row">
                                    <div className="col center" >
                                        <img src={forecastDay.day.condition.icon} alt="Icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2" >
                                <div className="mgCondition">
                                    {forecastDay.day.condition.text}
                                </div>
                            </div>
                            <div className="col-3 center" >
                                <div className="row" >
                                    <div className="col center mgRain" >
                                        Khả năng mưa
                                </div>
                                </div>
                                <div className="row" >
                                    <div className="col center" >
                                        <b>{forecastDay.day.daily_chance_of_rain}%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="row" >
                                    <div className="col center mgHumidity" >
                                        Độ ẩm
                                </div>
                                </div>
                                <div className="row" >
                                    <div className="col center">
                                        <b>{forecastDay.day.avghumidity}%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 dropdown-hover">
                                <i className="fa fa-sort-desc mgIcon" aria-hidden="true" onClick={toggle}></i>
                            </div>
                        </div>
                        <div>
                            <Collapse isOpen={isOpen}>
                                <Card style={{ marginBottom: 10 }}>
                                    <DailyCurrentMain current={forecastDay.day} />
                                    <DailyCurrentDetail current={forecastDay.day}/>
                                    <CurrentAstronomySun2 astronomy={forecastDay.astro} />
                                    <CurrentAstronomyMoon2 astronomy={forecastDay.astro} />
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default DailyMain;