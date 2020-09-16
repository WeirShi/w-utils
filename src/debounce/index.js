/**
 * 防抖 防止事件频繁触发，针对最后一次触发才执行函数 定时器
 * @param {function} fn
 * @param {Number} interval
 * @return {function}
 */
const debounce = function (fn, interval) {
    // eslint-disable-next-line no-unused-vars
    var timer; // 定时器实例
    var gapTime = interval || 300; // 间隔时间
    return function () {
        timer && clearTimeout(timer);
        var context = this;
        var args = arguments;
        timer = setInterval(function () {
            fn.call(context, args);
        }, gapTime);
    }
};

export default debounce;
