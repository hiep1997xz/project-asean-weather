import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "../scss/header.scss";
import logo from "../../data/weatherImgs/logo.png";
import linkHome from "../../data/api/linkHome";
import '../css/HomeHeader.css';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getSearchV2Request } from '../redux/effects/searchV2Effect';
import getSearchV3 from '../redux/actions/searchV3Action';
import Login from '../components/Login';
import { toastr } from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const filter = createFilterOptions();

const cityList = [
    'Bandar Seri Begawan',
    'Kampung Kota Batu',
    'Tutong',
    'Temburong',
    'Melilas',
    'Koh Rong',
    'Sihanoukville',
    'Kampot',
    'Phnom Penh',
    'Kratie',
    'Bukittinggi',
    'Yogyakarta',
    'Jakarta',
    'Bandung',
    'Manado',
    'Pakxe',
    'Vientiane',
    'Vang Vieng',
    'Champasak',
    'Luang Prabang',
    'Malacca',
    'Langkawi',
    'Kuantan',
    'Perhentian',
    'Kuala Lumpur',
    'Yangon',
    'Mandalay',
    'Bagan',
    'Mrauk-U',
    'Nyaung Shwe',
    'Manila',
    'Palawan',
    'Cebu',
    'Padre Burgos',
    'Bacolod',
    'Singapore',
    'Sembawang',
    'Jurong West',
    'Bukit Batok',
    'Lim Chu Kang',
    'Bangkok',
    'Phuket',
    'Ayutthaya',
    'Dok Mai',
    'Pattaya',
    'Ha Noi',
    'Ho Chi Minh City',
    'Hai Phong',
    'Da Nang',
    'Hoi An',
]

const convertList = (cityList) => {
    let results = [];
    for (let index = 0; index < cityList.length; index++) {
        const element = cityList[index];
        results.push({title: element})
    }

    return results;
}

const searchedList = (searchItem, list) => {
    list = list.filter(item=> {
        const match = item.title.toLowerCase().indexOf(searchItem.toLowerCase());
        return match == 0; 
    })
    return list;
}


const HeaderSearch = ({ getSearchV2Request, propsSearchV2, getSearchV3, propsSearchV3, propMenu }) => {
    const [searchItem, setSearchItem] = useState(null);
    const [isMatch, setIsMatch] = useState(false);
    const [isShowErr, setIsShowErr] = useState(false);
    const [isShowEmpty, setIsShowEmpty] = useState(false);
    const [isSumimited, setIsSumimited] = useState(false);
    const [options, setOptions] = useState(convertList(cityList))
    const [optionBEs, setOptionBEs] = useState([]);
    const history = useHistory();

    const successNotify = (message) => {
        const options = {
            timeOut: 2500,
            type: "success",
            showCloseButton: true,
            progressBar: false,
            position: "top-center",
        };
        toastr.success("AseanWeather", message, options)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsSumimited(true);

        // xử lý các trường hợp search
        if (searchItem) {
            // Nếu người dùng gõ một chuỗi bất kỳ mà không select từ gợi ý
            if (typeof searchItem === 'string') {
                const value = searchItem.trim();
                if (value) {
                    const results = options.filter(item => {
                        const match = item.title.toLowerCase().indexOf(value.toLowerCase());
                        return match !== -1;
                    })
                    if (results.length > 0) {
                        setIsMatch(true)
                        getSearchV3(results[0].title);
                        successNotify("Loading Success");
                    }
                }
            }

            // Nếu người dùng gõ một chuỗi và select từ gợi ý
            if (typeof searchItem === 'object') {
                const value = searchItem.title.trim();
                // nếu có searchItem thì mới gọi API
                if (value && options.length > 0) {
                    options.forEach(element => {
                        if (value.toLowerCase() == element.title.toLowerCase()) {
                            setIsMatch(true);
                            // Nếu từ khóa nhập vào trùng với một trong các dữ liệu trả về mới
                            // gọi action lưu kết quả lại vào trong redux
                            getSearchV3(value);
                            successNotify("Loading Success");
                        }
                    });
                }
            }
        }
    }

    useEffect(() => {
        // Nếu trong DB ko có city thì trả về not found
        if (isMatch) {
            resetForm();

        } else {
            setIsShowErr(true);
        }
    }, [isMatch, isSumimited])

    const resetForm = () => {
        setSearchItem('');
        setIsSumimited(false);
        setIsShowErr(false);
    }

    // Gọi API mỗi khi searchItem thay đổi
    // useEffect(async () => {
    //     await getSearchV2Request(searchItem);
    //     if (propsSearchV2.success == 1) {
    //         const searches = propsSearchV2.data.search;
    //         const results = []
    //         searches.forEach(element => {
    //             results.push({ title: element.name });
    //         });
    //         setOptionBEs(results);
    //     }
    // }, [searchItem]);

    // Binding input khi gõ vào ô input
    const handleChange = (e) => {
        setSearchItem(e.target.value);
        setOptions(searchedList(e.target.value, options));
    }

    useEffect(() => {
        // sau khi đã có data thì thực hiện lệnh chuyển trang 
        if (propsSearchV3.success == 1) {
            document.querySelector("button.btnJS1").click();
            history.push({
                pathname: "/main/current",
            })
        }
    }, [propsSearchV3]);




    // Khi có data search trả về, đẩy vào trong options 
    // if (propsSearchV2.success == 1) {
    //     const searches = propsSearchV2.data.search;
    //     searches.forEach(element => {
    //         options.push({ title: element.name });
    //     });
    // }

    return (
        <div className="container-fluid">
            <div className="row rowScssH1">
                <div className="col-1 offset-3">
                    <a href={linkHome} className="linkHomeHS">
                        <img src={logo} width="73" alt="Logo" />
                    </a>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-6 offset-4">
                            <div className="row">
                                <form id="searchFormHS" onSubmit={handleSearch}>
                                    <div className="groupScssH1" style={{ width: "80%", float: 'left' }}>
                                        <Autocomplete
                                            value={searchItem}
                                            onChange={(event, newValue) => {
                                                if (typeof newValue === 'string') {
                                                    setSearchItem({
                                                        title: newValue,
                                                    });
                                                } else if (newValue && newValue.inputValue) {
                                                    // Create a new value from the user input
                                                    setSearchItem({
                                                        title: newValue.inputValue,
                                                    });
                                                }
                                                else {
                                                    setSearchItem(newValue);
                                                }

                                            }}
                                            filterOptions={(options, params) => {
                                                const filtered = filter(options, params);
                                                // Suggest the creation of a new value
                                                if (params.inputValue !== '') {
                                                    filtered.push({
                                                        inputValue: params.inputValue,
                                                        title: `Add "${params.inputValue}"`,
                                                    });
                                                }
                                                return filtered;
                                            }}
                                            selectOnFocus
                                            clearOnBlur
                                            freeSolo
                                            handleHomeEndKeys
                                            id="inputSearch1"
                                            options={options}
                                            getOptionLabel={option => {
                                                if (typeof option === 'string') {
                                                    return option;
                                                }
                                                // Add "xxx" option created dynamically
                                                if (option.inputValue) {
                                                    return option.inputValue;
                                                }

                                                // Regular option
                                                return option.title;
                                            }}
                                            renderOption={(option) => {
                                                return (<>{option.title}</>);
                                            }}

                                            renderInput={(params) => (
                                                <>
                                                    <div className="input-group-prepend" ref={params.InputProps.ref} style={{ display: "flex" }}>
                                                        <button
                                                            className="input-group-text LborderR4"
                                                            type="submit"
                                                            onClick={handleSearch}
                                                        >
                                                            <i className="fa fa-search searchScssH1" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            {...params.inputProps}
                                                            id="inputSearchHS"
                                                            type="text"

                                                            placeholder="Tìm vị trí"
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                </>
                                            )}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    {!(isShowErr && isSumimited) ? null : (<i><small>Không tìm thấy kết quả nào, hãy nhập lại tên thành phố</small></i>)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    {!(isShowEmpty && isSumimited) ? null : (<i><small>Hãy nhập tên thành phố</small></i>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="groupScssH2">
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        propMenu: state.naviBarReducer,
        propsSearchV2: state.searchV2Reducer,
        propsSearchV3: state.searchV3Reducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchV2Request,
    getSearchV3,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);