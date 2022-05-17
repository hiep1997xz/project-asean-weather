const getFormatDate = dateTime => {
    dateTime = dateTime.trim();
    const splitedDateTimes = dateTime.split(" ");
    let date = splitedDateTimes[0];
    const time = splitedDateTimes[1];
    const splitedDates = date.split("-");
    date = `${splitedDates[2]}/${splitedDates[1]}/${splitedDates[0]}`;
    return {
        date,
        time,
    } 
}

export default getFormatDate;