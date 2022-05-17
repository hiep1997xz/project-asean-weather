// Em đang làm gì ở đây
export const getHourNow = () => {
    const current = new Date();
    const hourNow = current.getHours();
    return hourNow;
}

// Em đang làm gì ở đây
export const getHourlyList = data => {
    let resultList = [];
    if (data) {
        resultList = data.filter(item => {
            // Em đang làm gì ở đây
            const itemDateTime = item.time;

            // Em đang làm gì ở đây
            const itemDateTimeList = itemDateTime.split(" ");

            // Em đang làm gì ở đây
            const itemTimeList = itemDateTimeList[1].split(":");

            // Em đang làm gì ở đây
            const itemHour = itemTimeList[0];

            // Em đang làm gì ở đây
            const hour = parseInt(itemHour);
            return hour >= getHourNow();
        })
    }
    return resultList;
}
