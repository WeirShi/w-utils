/**
 * 倒计时
 * @param diff 倒计时时间/s
 * @param loadTime 运行时的当前时间
 * @param item 倒计时对象
 * @param callback 回调
 */
export default function countDown(diff, loadTime, item, callback) {
    // let t = true;

    function round($diff) {
        let dd = parseInt($diff / 1000 / 60 / 60 / 24, 10);// 计算剩余的天数
        let hh = parseInt($diff / 1000 / 60 / 60 % 24, 10);// 计算剩余的小时数
        let mm = parseInt($diff / 1000 / 60 % 60, 10);// 计算剩余的分钟数
        let ss = parseInt($diff / 1000 % 60, 10);// 计算剩余的秒数

        function checkTime(_a) {
            let a = _a;
            if (a < 10) {
                a = '0' + a;
            }
            return a.toString();
        }

        item.conttainer = {
            ddhh: checkTime(dd * 24 + hh),
            dd: checkTime(dd),
            hh: checkTime(hh),
            mm: checkTime(mm),
            ss: checkTime(ss)
        };

        if (item.conttainer.dd > 0 || item.conttainer.hh > 0 || item.conttainer.mm > 0 || item.conttainer.ss > 0) {
            item.t = setTimeout(function () {
                let $diff = diff + 2000 - (new Date() - loadTime);
                round($diff);
            }, 1000);
        } else {
            if (callback) { callback() }
        }
    }

    round((diff + 2000 - (new Date() - loadTime)));
}