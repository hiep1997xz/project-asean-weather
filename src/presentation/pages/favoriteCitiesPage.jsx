import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Loading from "../components/loading";
import { getFavoriteCurrentRequest } from "../redux/effects/favoriteCurrentEffect";
import '../scss/currentPage.scss';
import { markMenuInComponent, menuType } from "../../data/configMenu";
import "react-toastify/dist/ReactToastify.css";
import FavoriteMainList from "../components/favoriteMainList";
import { getFavoList } from "../../data/getFavoList";
import { removeFavoRequest } from "../redux/effects/removeFavoEffect";
import { getUserRequest } from "../redux/effects/getUserEffect";
import { Modal, Button } from "react-bootstrap";
import getSearchV3 from "../redux/actions/searchV3Action";
import { toastr } from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const FavoriteCities = ({ propsFavorite, propUser, getFavoriteCurrentRequest, removeFavoRequest, getUserRequest, getSearchV3}) => {
    const [fbId, setFbId] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [city, setCity] = useState("");

    const warningNotify = (message) => {
        const options = {
            timeOut: 3000,
            type: "warning",
            showCloseButton: true,
            progressBar: false,
            position: "top-center",
        };
        toastr.warning("AseanWeather", message, options)
    }

    const successNotify = (message) => {
        const options = {
            timeOut: 3000,
            type: "success",
            showCloseButton: true,
            progressBar: false,
            position: "top-center",
        };
        toastr.success("AseanWeather", message, options)
    }
    // Gọi api ở đây mỗi khi có kết quả từ propsSearch
    useEffect(() => {
        setIsShow(false);
        // Mark menu
        markMenuInComponent(menuType.FAVORITE);

        // const user = {
        //     id: 2,
        //     name: "Nguyễn Hoàng Giang",
        //     email: "nghoanggiang@gmail.com",
        //     facebookId: "1000000000000000",
        //     loginDate: "2021-05-10 00:00:00",
        //     favouriteCities: [
        //         {
        //             id: 1,
        //             name: "Bandar Seri Begawan"
        //         },
        //         {
        //             id: 2,
        //             name: "Kampung Kota Batu"
        //         },

        //         {
        //             id: 4,
        //             name: "Temburong"
        //         },
        //         {
        //             id: 5,
        //             name: "Melilas"
        //         },
        //         {
        //             id: 7,
        //             name: "Sihanoukville"
        //         },
        //         {
        //             id: 9,
        //             name: "Phnom Penh"
        //         },
        //         {
        //             id: 10,
        //             name: "Kratie"
        //         },
        //         {
        //             id: 11,
        //             name: "Bukittinggi"
        //         },
        //         {
        //             id: 12,
        //             name: "Yogyakarta"
        //         },
        //         {
        //             id: 47,
        //             name: "Ho Chi Minh City"
        //         }
        //     ]
        // }

        // localStorage.setItem('user', JSON.stringify(user));

        if (!!propUser.data.user) {
            handleProcessUser(propUser.data.user);
        } else {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);
            if (user) {
                handleProcessUser(user);
            } else {
                warningNotify("Hãy đăng nhập để trải nghiệm tính năng này!")
                setTimeout(() => {
                    document.querySelector("a.linkHomeHS").click();
                }, 2500);
            }
        }
    }, [propUser])

    const handleProcessUser = async (user) => {
        setFbId(user.facebookId);
        const results = getFavoList(user.favouriteCities);
        if (results.length > 0) {
            await getFavoriteCurrentRequest(results);
        } else {
            warningNotify("Bạn chưa có thành phố yêu thích nào!");
            document.querySelector("button.btnJS1").click();
        }
    }

    const handleDeleteFavo = (cityName) => {
        setCity(cityName);
        setIsAlert(true);
    }

    const confirmDeleteFavo = () => {
        setIsAlert(false);
        setIsShow(true)
        removeFavoRequest(fbId, city);

        setTimeout(() => {
            getUserRequest(fbId);
            setTimeout(() => {
                setIsShow(false);
                successNotify("Đã xóa thành công!")
            }, 500);
        }, 2500);
    }

    const handlePush = (cityName) => {
        getSearchV3(cityName);
        document.querySelector("button.btnJS1").click();
    }

    const handleClose = () => setIsAlert(false);

    if (propsFavorite.success != 1) {
        return (
            <Loading />
        );
    } else {
        return (
            <>
                <FavoriteMainList dataWeather={propsFavorite.data.favorite} handleDelete={handleDeleteFavo} handlePush={handlePush} />
                <Modal show={isShow}>
                    <Modal.Body>
                        <h1>Loading ...</h1>
                    </Modal.Body>
                </Modal>
                <Modal show={isAlert} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>Cảnh Báo từ AseanWeather</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn xóa <b>{city}</b> khỏi danh sách yêu thích?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={confirmDeleteFavo}>
                            Xóa
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

// Lấy state của currentReducer và astroReducer từ store ra
const mapStateToProps = (state) => {
    return {
        propsFavorite: state.favoriteReducer,
        propUser: state.userReducer,
    }
}

// Đẩy hai action lấy api thời tiết hiện tại và thông tin thiên văn vào props của component
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getFavoriteCurrentRequest,
    removeFavoRequest,
    getUserRequest,
    getSearchV3,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities);