import TimeAgo from "./src/timeagoModule.js";

export default (datetime) => {
    const timeago = new TimeAgo(datetime);
    return timeago.getTimeAgo();
};
