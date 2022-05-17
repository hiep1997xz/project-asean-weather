import FavoriteMain from "./favoriteMain";

const FavoriteMainList = ({dataWeather, handleDelete, handlePush}) => {

    return (
        <>
            {dataWeather.map(item => {
                const {city, location, current} = item;
                return (
                    <FavoriteMain key={location.name} location={location} current={current} handleDelete={handleDelete} handlePush={handlePush}  city={city}/>
                );
            })}
        </>
    );
}

export default FavoriteMainList;