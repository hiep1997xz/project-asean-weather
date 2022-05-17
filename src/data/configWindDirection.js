const windDirection = (dir) => {
    switch (dir) {
        case "N":
            return "Bắc";
        case "NNE":
            return "Bắc Đông Bắc";
        case "NE":
            return "Đông Bắc";
        case "ENE":
            return "Đông Đông Bắc";
        case "E":
            return "Đông";
        case "ESE":
            return "Đông Đông Nam";
        case "SE":
            return "Đông Nam";
        case "SSE":
            return "Nam Đông Nam";
        case "S":
            return "Nam";
        case "SSW":
            return "Nam Tây Nam";
        case "SW":
            return "Tây Nam";
        case "WSW":
            return "Tây Tây Nam";
        case "W":
            return "Tây";
        case "WNW":
            return "Tây Tây Bắc";
        case "NW":
            return "Tây Bắc";
        case "NNW":
            return "Bắc Tây Bắc";
        default:
            return null;
    }
}

export default windDirection;