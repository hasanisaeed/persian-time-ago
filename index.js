import Timeago from "./src/timeagoModule.js";
export default (datetime) => {
    var timeago = new Timeago(datetime)
    return timeago.getTimeago();
}
