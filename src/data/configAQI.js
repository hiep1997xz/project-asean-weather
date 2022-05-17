const convertAQItoString = (usEpaIndex) => {
    if (usEpaIndex) {
        switch (usEpaIndex) {
            case 1:
                return "Tốt";
            case 2:
                return "Trung bình";
            case 3:
                return "Kém";
            case 4:
                return "Xấu";
            case 5:
                return "Rất xấu";
            case 6:
                return "Nguy hại";
            default:
                return null;
        }
    }
}

const fixColorOfAqi = (usEpaIndex, element) => {

    if (document.querySelector(element)) {
        switch (usEpaIndex) {
            case 1:
                document.querySelector(element).style.color = "rgb(0,228,0)";
                break;
            case 2:
                document.querySelector(element).style.color = "rgb(250,237,39)";
                break;
            case 3:
                document.querySelector(element).style.color = "rgb(237,126,0)";
                break;
            case 4:
                document.querySelector(element).style.color = "rgb(255,0,0)";
                break;
            case 5:
                document.querySelector(element).style.color = "rgb(143,63,151)";
                break;
            case 6:
                document.querySelector(element).style.color = "rgb(126,0,35)";
                break;
            default:
                document.querySelector(element).style.color = "rgb(0,0,0)";
        }
    } else {
        return null;
    }
}

const reviewAqi = (usEpaIndex) => {
    if (usEpaIndex) {
        switch (usEpaIndex) {
            case 1:
                return "Chất lượng không khí tốt, không ảnh hưởng tới sức khỏe";
            case 2:
                return "Chất lượng không khí ở mức chấp nhận được. Tuy nhiên, đối với những người nhạy cảm (người già, trẻ em, người mắc các bệnh hô hấp, tim mạch…) có thể chịu những tác động nhất định tới sức khỏe.";
            case 3:
                return "Những người nhạy cảm gặp phải các vấn đề về sức khỏe, những người bình thường ít ảnh hưởng.";
            case 4:
                return "Những người bình thường bắt đầu có các ảnh hưởng tới sức khỏe, nhóm người nhạy cảm có thể gặp những vấn đề sức khỏe nghiêm trọng hơn.";
            case 5:
                return "Cảnh báo hưởng tới sức khỏe: mọi người bị ảnh hưởng tới sức khỏe nghiêm trọng hơn.";
            case 6:
                return "Cảnh báo hưởng tới sức khỏe: mọi người bị ảnh hưởng tới sức khỏe nghiêm trọng hơn.";
            default:
                return null;
        }
    }
}

export default { convertAQItoString, fixColorOfAqi, reviewAqi};