/**
 * @author Saeed Hassani Borzadaran
 * @Email HassaniSaeed19[at]gmail[dot]com
 * @date 2021 Jun 07 
 */

class Timeago {
    constructor(datetime) {
        this.tsDateTime = this.convertToTimeStamp(datetime);
    }

    /**
     * @param datetime
     * - Example: '2021-06-07 08:04:30'
     */
    convertToTimeStamp(datetime) {
        // ref: https://stackoverflow.com/a/18849896/9422637
        var dateTime = datetime.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/),
            date = new Date(dateTime[1],
                parseInt(dateTime[2], 10) - 1,
                dateTime[3],
                dateTime[4],
                dateTime[5],
                dateTime[6]);

        return date.getTime() // 1623036870000
    }

    getTimeNow() {
        var timeNow = Date.now();
        timeNow = new Date(timeNow);
        timeNow = timeNow.getFullYear() + '-'
            + (timeNow.getMonth() + 1) + '-'
            + timeNow.getDate() + ' '
            + timeNow.getHours() + ':'
            + timeNow.getMinutes() + ':'
            + timeNow.getSeconds()
        return timeNow
    }

    getTimeago() {
        var tsTimeNow = this.convertToTimeStamp(this.getTimeNow()),
            minute = 60 * 1000,
            hour = minute * 60,
            day = hour * 24,
            month = day * 30,
            year = day * 365,
            elapsed = tsTimeNow - this.tsDateTime,
            prevOrNext = elapsed > 0 ? 'قبل' : 'بعد'
        elapsed = elapsed < 0 ? Math.abs(elapsed) : elapsed
        if (elapsed < minute) {
            return Math.round(elapsed / 1000) + ' ثانیه ' + prevOrNext;
        } else if (elapsed < hour) {
            return Math.round(elapsed / minute) + ' دقیقه ' + prevOrNext;
        } else if (elapsed < day) {
            return Math.round(elapsed / hour) + ' ساعت ' + prevOrNext;
        } else if (elapsed < month) {
            return 'حدود ' + Math.round(elapsed / day) + ' روز ' + prevOrNext;
        } else if (elapsed < year) {
            return 'حدود ' + Math.round(elapsed / month) + ' ماه ' + prevOrNext;
        } else {
            return 'حدود ' + Math.round(elapsed / year) + ' سال ' + prevOrNext;
        }
    }
}

export {Timeago as default};