import DailyMain from "./dailyMain";

const DailyMainList = ({ forecastDays}) =>
{
    return (
        <>
            {forecastDays.map(item =>
            {
                return (
                    <DailyMain key={item.date} forecastDay={item}/>
                );
            })}
        </>
    );
}
export default DailyMainList;