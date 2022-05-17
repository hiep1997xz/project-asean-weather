import { Collapse, Card } from 'reactstrap';
import React, { useState } from 'react';
import getFormatDate from '../../data/configDate';
import "../scss/hourlyPage.scss";
import HourlyDetail from './hourlyDetail';

const HourlyMain = ({ hour }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <> <div className="row mt-3 mb-1" >
            <div className="col-12 colScss1">
                <div className="row mgMain">
                    <div className="col-1">
                            <div className="mgHour">
                                {getFormatDate(hour.time).time}
                            </div>
                    </div>
                    <div className="col-1">
                        <div className="mgTemp" >
                            <big><b>{hour.temp_c}<span>&#176;</span></b></big>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="row">
                            <div className="col center" >
                                <img src={hour.condition.icon} alt="Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-2" >
                            <div className="mgCondition">
                                {hour.condition.text}</div>
                    </div>
                    <div className="col-3 center" >
                        <div className="row" >
                            <div className="col center mgRain" >
                                Khả năng mưa
                                </div>
                        </div>
                        <div className="row" >
                            <div className="col center" >
                                <b>{hour.chance_of_rain}%</b>
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
                               <b>{hour.humidity}%</b>
                                </div>
                        </div>
                    </div>
                    <div className="col-1 dropdown-hover">
                        <i className="fa fa-sort-desc mgIcon"  aria-hidden="true" onClick={toggle}></i>
                    </div>
                </div>
                <div>
                    <Collapse isOpen={isOpen}>
                        <Card className="mgCard">
                            <HourlyDetail hour={hour}/>
                        </Card>
                    </Collapse>
                </div>
            </div>
            <div>
            </div>
        </div>
        </>
    )
}
export default HourlyMain;