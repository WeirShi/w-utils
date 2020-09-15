import { year, month, day, dayOfWeek } from './now';

/** 时间格式化
 * @param {dateTime} date 标准时间格式 -> new Date()
 * @param {string} format 时间格式化的格式 'yyyy-MM-dd hh:mm:ss'
 * @returns {string} 格式化后的时间  '2017-01-01 01:00:00'
*/
const dateFmt = function (date, format  = 'yyyy-MM-dd hh:mm:ss') {
    var o = {
        'M+': date.getMonth() + 1, // month
        'd+': date.getDate(), // day
        'h+': date.getHours(), // hour
        'm+': date.getMinutes(), // minute
        's+': date.getSeconds(), // second
        'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
        'S': date.getMilliseconds() // millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
};

/**
 * 获得本周的开始日期 从周一开始
 * @returns {string} 2019-12-09 00:00:00
 */
const getWeekStartDate = function () {
    let weekStartDate = new Date(year, month, day - (dayOfWeek - 1));
    return dateFmt(weekStartDate);
};

/**
 * 获得本周的结束日期 到周日结束
 * @returns {string} 2019-12-15 23:59:59
 */
const getWeekEndDate = function () {
    let weekEndDate = new Date(year, month, day + (7 - dayOfWeek));
    weekEndDate = weekEndDate.getTime() + 24 * 60 * 60 * 1000 - 1;
    weekEndDate = new Date(weekEndDate);
    return dateFmt(weekEndDate);
};

/**
 * 获得本月的开始日期
 * @returns {string} 2019-12-01 00:00:00
 */
const getMonthStartDate = function () {
    var monthStartDate = new Date(year, month, 1);
    return dateFmt(monthStartDate);
};

/**
 * 获得本月的结束日期
 * @returns {string} 2019-12-31 23:59:59
 */
const getMonthEndDate = function () {
    let monthEndDate = new Date(year, month, getMonthDays(month));
    monthEndDate = monthEndDate.getTime() + 24 * 60 * 60 * 1000 - 1;
    monthEndDate = new Date(monthEndDate);
    return dateFmt(monthEndDate);
};

/**
 * 获得该月天数
 * @param {number} month new Date().getMonth()
 * @returns {number} days 28|29|30|31
 */
const getMonthDays = function (month = new Date().getMonth()) {
    var monthStartDate = new Date(year, month, 1);
    var monthEndDate = new Date(year, month + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
};

/**
 * 获取当天为周几
 * @param {number} day new Date().getDay()
 * @returns {string} eg: 周一
 */
const getDayOfWeek = function (day = new Date().getDay()) {
    const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return weeks[day];
};


const time = {
    dateFmt,
    getDayOfWeek,
    getWeekStartDate,
    getWeekEndDate,
    getMonthStartDate,
    getMonthEndDate,
    getMonthDays
};

export default time;
