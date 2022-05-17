import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../layouts/headerSearch";
import NaviBar from "../layouts/navBar";
import LeftBar from "../layouts/leftBar";
import currentWeatherPage from "../pages/currentWeatherPage";
import DailyWeatherPage from "../pages/dailyWeatherPage";
import HourlyWeatherPage from "../pages/hourlyWeatherPage";
import Footer from "../layouts/footer";
import MainFrame from "../layouts/mainFrame";
import NotFound404 from "../components/NotFound404";
import FavoriteCities from "../pages/favoriteCitiesPage";
import Admin from "../components/Admin";

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/main/current" exact render={()=> <MainFrame Header={Header} NavBar={NaviBar} LeftBar={LeftBar} Body={currentWeatherPage} Footer={Footer}/>} />
                    <Route path="/main/hours" exact render={()=> <MainFrame Header={Header} NavBar={NaviBar} LeftBar={LeftBar} Body={HourlyWeatherPage} Footer={Footer}/>} />
                    <Route path="/main/days" exact render={()=> <MainFrame Header={Header} NavBar={NaviBar} LeftBar={LeftBar} Body={DailyWeatherPage} Footer={Footer}/>} />
                    <Route path="/main/favorite_cities" exact render={()=> <MainFrame Header={Header} NavBar={NaviBar} LeftBar={LeftBar} Body={FavoriteCities} Footer={Footer}/>} />
                    <Route path="/main/404" exact render={()=> <MainFrame Header={Header} NavBar={NaviBar} LeftBar={LeftBar} Body={NotFound404} Footer={Footer}/>} />
                    <Route path="/main/admin" exact component={Admin} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;