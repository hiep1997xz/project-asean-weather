import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import '../css/styles.css';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getSearchV2Request } from '../redux/effects/searchV2Effect';
import getSearchV3 from '../redux/actions/searchV3Action';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import "../scss/homePage.scss";

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
        results.push({ title: element })
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

const filter = createFilterOptions();

const SearchPage = ({ getSearchV2Request, propsSearchV2, getSearchV3, propsSearchV3 }) => {
    // khai báo state để hứng dữ liệu search
    const [searchItem, setSearchItem] = useState(null);
    const [isMatch, setIsMatch] = useState(false);
    const [isShowErr, setIsShowErr] = useState(false);
    const [isShowEmpty, setIsShowEmpty] = useState(false);
    const [isSumimited, setIsSumimited] = useState(false);
    const [optionBEs, setOptionBEs] = useState([]);
    const [options, setOptions] = useState(convertList(cityList))
    const history = useHistory();

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
                    }
                    if (!isMatch) {
                        setIsShowErr(true);
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
                        }
                    });
                    // Nếu trong DB ko có city thì trả về not found
                    if (!isMatch) {
                        setIsShowErr(true);
                    }
                }
            }
        } else {
            // xử lý khi searchItem rỗng
            setIsShowEmpty(true);
        }
    }

    // Gọi API mỗi khi searchItem thay đổi
    // useEffect( async () => {
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

    // binding searchItem vào ô input
    const handleChange = (e) => {
        setSearchItem(e.target.value)
        setOptions(searchedList(e.target.value, options));
    }

    // sau khi đã có data thì thực hiện lệnh chuyển trang 
    if (propsSearchV3.success == 1) {
        history.push({
            pathname: "/main/current",
        })
    }

    // Khi có data search trả về, đẩy vào trong options 
    // if (propsSearchV2.success == 1) {
    //     const searches = propsSearchV2.data.search;
    //     searches.forEach(element => {
    //         options.push({ title: element.name });
    //     });
    // }

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="row">
                    <div className="col">
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
                            id="inputSearch"
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
                                    <div className="text-center" ref={params.InputProps.ref}>
                                        <input
                                            {...params.inputProps}
                                            id="inputSearch"
                                            type="text"
                                            placeholder="Tìm kiếm vị trí"
                                            onChange={handleChange}
                                        />
                                        <button type="submit" style={{ width: "15%", height: "48px", position: "relative", bottom: "6px" }} className="btn btn-primary" onClick={handleSearch}>
                                            <SearchIcon className="searchIcon" />
                                        </button>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>

                {!(isShowErr && isSumimited) ? null : (
                    <div className="row">
                        <div className="col text-center notfound">
                            <i><big>Không tìm thấy thành phố, hãy nhập lại</big></i>
                        </div>
                    </div>
                )}
                {!(isShowEmpty && isSumimited) ? null : (
                    <div className="row">
                        <div className="col text-center notfound">
                            <i><big>Hãy nhập tên thành phố</big></i>
                        </div>
                    </div>
                )}
            </form>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);