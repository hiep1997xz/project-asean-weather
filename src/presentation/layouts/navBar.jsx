import { useState, useEffect } from "react";
import "../scss/navBar.scss";
import { connect } from "react-redux";
import getMenuAction from "../redux/actions/navBarAction";
import { useHistory } from "react-router";
import { prepareToMarkMenu, unmarkMenu } from "../../data/configMenu";

const NaviBar = ({ getMenu }) => {
    const [is1Clicked, setIs1Clicked] = useState(true);
    const [is2Clicked, setIs2Clicked] = useState(false);
    const [is3Clicked, setIs3Clicked] = useState(false);
    const [is4Clicked, setIs4Clicked] = useState(false);
    const [payload, setPayload] = useState({
        menu1: true,
        menu2: false,
        menu3: false,
        menu4: false,
    })
    const history = useHistory();

    // Click vào menu nào thì nó sẽ đậm lên, chuyển nền trắng và chuyển sang path khác
    const markMenu = (element, path) => {
        prepareToMarkMenu(element);
        // document.querySelector(element).style.borderBottomColor =  rgba4(255, 0, 0, 1);
        history.push(path);
    }

    // click vào menu1 thì đổi nền menu1 và khóa hết các menu còn lại. Tương tự với các hàm bên dưới
    const handleClick1 = () => {
        setIs1Clicked(true);
        markMenu("button.btnJS1", "/main/current");
        setIs2Clicked(false);
        unmarkMenu("button.btnJS2");
        setIs3Clicked(false);
        unmarkMenu("button.btnJS3");
        setIs4Clicked(false);
        unmarkMenu("button.btnJS4");
    }

    const handleClick2 = () => {
        setIs1Clicked(false);
        unmarkMenu("button.btnJS1");
        setIs2Clicked(true);
        markMenu("button.btnJS2", "/main/hours");
        setIs3Clicked(false);
        unmarkMenu("button.btnJS3");
        setIs4Clicked(false);
        unmarkMenu("button.btnJS4");
    }

    const handleClick3 = () => {
        setIs1Clicked(false);
        unmarkMenu("button.btnJS1");
        setIs2Clicked(false);
        unmarkMenu("button.btnJS2");
        setIs3Clicked(true);
        markMenu("button.btnJS3", "/main/days");
        setIs4Clicked(false);
        unmarkMenu("button.btnJS4");
    }

    const handleClick4 = () => {
        setIs1Clicked(false);
        unmarkMenu("button.btnJS1");
        setIs2Clicked(false);
        unmarkMenu("button.btnJS2");
        setIs3Clicked(false);
        unmarkMenu("button.btnJS3");
        setIs4Clicked(true);
        markMenu("button.btnJS4", "/main/favorite_cities");
    }

    // Đưa action vào useEffect với đk thay đổi is*Clicked *=1,2,3,4 thì mới chạy
    useEffect(() => {
        // Ban đầu khi tải lại trang, mặc định sẽ chọn vào current(menu1)
        if (!is1Clicked
            && !is2Clicked
            && !is3Clicked
            && !is4Clicked) {
            setPayload({
                menu1: true,
                menu2: false,
                menu3: false,
                menu4: false,
            })
        } else {
            setPayload({
                menu1: is1Clicked,
                menu2: is2Clicked,
                menu3: is3Clicked,
                menu4: is4Clicked,
            })
        }

        
    }, [is1Clicked, is2Clicked, is3Clicked, is4Clicked]);

// gọi action đưa danh sách menu đã được chọn và store
getMenu(payload);

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="row">
                        <button className="col btnScssNB1 btnJS1" onClick={handleClick1}>
                            HIÊN TẠI
                        </button>
                        <button className="col btnScssNB1 btnJS2" onClick={handleClick2}>
                            THEO GIỜ
                        </button>
                        <button className="col btnScssNB1 btnJS3" onClick={handleClick3}>
                            HẰNG NGÀY
                        </button>
                        <button className="col btnScssNB1 btnJS4" onClick={handleClick4}>
                            YÊU THÍCH
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMenu: (payload) => dispatch(getMenuAction(payload))
    }
}

export default connect(null, mapDispatchToProps)(NaviBar);