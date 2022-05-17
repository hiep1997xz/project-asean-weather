export const moonPhaseToVi = moonphase => {
    if (moonphase) {
        moonphase = moonphase.trim();
        switch (moonphase) {
            case "New Moon":
                return "Trăng mới";
            case "Waxing Crescent":
                return "Lưỡi liềm đầu tháng";
            case "First Quarter":
                return "Bán nguyệt đầu tháng";
            case "Waxing Gibbous":
                return "Trăng khuyết đầu tháng";
            case "Full":
                return "Trăng tròn";
            case "Waning Gibbous":
                return "Trăng khuyết cuối tháng";
            case "Third Quarter":
                return "Bán nguyệt cuối tháng";
            case "Waning Crescent":
                return "Lưỡi liềm cuối tháng";
            default:
                return null;
        }
    }
}