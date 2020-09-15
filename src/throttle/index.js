/**
 * 节流 只在单位的时间内才触发该事件
 * @param {function} fn
 * @param {Number} interval
 * @return {function}
 */
const throttle = function (fn, interval) {
    var enterTime = 0; // 事件触发时间
    var gapTime = interval || 300; // 间隔时间
    return function () {
        var context = this; // 上下文
        var backTime = Date.now(); // 第一次函数return就触发的时间
        if (backTime - enterTime > gapTime) {
            fn.call(context, arguments);
            enterTime = backTime;
        }
    }
};

export default throttle;
