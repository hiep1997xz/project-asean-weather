const Heart = ({isLove}) => {
    if (isLove == false) {
        return (
            <i title="Add City To Your Favorite List" className="fa fa-heart-o colorScssLB3 onHover" aria-hidden="true"></i>
        );
    } else if (isLove == true) {
        return (
            <i title="Remove City From Your Favorite List" className="fa fa-heart colorScssLB3 onHover" aria-hidden="true"></i>
        );
    }
}

export default Heart;