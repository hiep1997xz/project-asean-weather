export const menuType = {
    CURRENT: "[WA] CURRENT",
    HOURLY: "[WA] HOURLY",
    DAILY: "[WA] DAILY",
    FAVORITE: "[WA] FAVORITE",
}

export const markMenuInComponent = (menuId) => {
    if (menuId) {
        switch (menuId) {
            case menuType.CURRENT:
                prepareToMarkMenu("button.btnJS1");
                break;
            case menuType.HOURLY:
                prepareToMarkMenu("button.btnJS2");
                break;
            case menuType.DAILY:
                prepareToMarkMenu("button.btnJS3");
                break;
            case menuType.FAVORITE:
                prepareToMarkMenu("button.btnJS4");
                break;
            default:
                break;
        }
    }
}

// đặt màu
const rgba = (index1, index2) => {
    return `rgba(${index1},${index1},${index1},${index2})`;
}

// đặt màu
const rgba4 = (index1, index2, index3, index4) => {
    return `rgba(${index1},${index2},${index3},${index4})`;
}


export const prepareToMarkMenu = element => {
    document.querySelector(element).style.backgroundColor = rgba(255, 1);
    document.querySelector(element).style.color = rgba4(255, 0, 0, 1);
}

// bỏ chọn element thì nó sẽ chuyển sang màu nền và nhạt đi
export const unmarkMenu = element => {
    document.querySelector(element).style.backgroundColor = rgba(235, 1);
    document.querySelector(element).style.color = rgba(0, 0.5);
}

