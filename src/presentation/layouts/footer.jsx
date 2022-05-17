import '../scss/footer.scss';
import logo from "../../data/weatherImgs/logo.png";
import logoWA from "../../data/weatherImgs/weatherapi_logo.png";

const Footer = () => {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row rowScssF1">
                    <div className="col-1 offset-3">
                    <img src={logo} width="55" alt="Logo Image"/>
                    </div>
                    <div className="col-4">
                        <div className="row rowScssF1">
                            <div className="col text-center">
                                <i><small>Chúng tôi công nhận trách nhiệm sử dụng dữ liệu và công nghệ của mình vĩnh viễn</small></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src={logoWA} width="90" alt="Logo Image"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;