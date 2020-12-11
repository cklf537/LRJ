const { makeStyles } = require("@material-ui/core");

const bannerStyle = makeStyles((theme) => ({
    root: {},
    homeBanner: {
        display: "table-row",
        transform: "skewY(4deg)",
    }
}));

export default bannerStyle;

