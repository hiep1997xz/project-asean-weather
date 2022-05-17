import HourlyMain from "../components/hourlyMain";
const HourlyMainList = ({hourlyList}) => {
    return(
    <>
        {
            hourlyList.map(item => {
              return (
                <HourlyMain key={item.time} hour={item} />
              );  
            })
        }
    </>
    );
}
export default HourlyMainList;