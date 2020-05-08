// 判断手机号是否正确
export function checkPhone(phone) {
  let isMobilePhone = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[1-9])[0-9]{8}$/;
  let isFixMob = /^0?1[3|4|5|8][0-9]\d{8}$/;

  if (isFixMob.test(phone) || isMobilePhone.test(phone)) {
    return true;
  } else {
    return false;
  }
}

// 获取当前设备型号
export function judgeCurrentDivice() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var isPc = function IsPC() {//是否是PC
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    var isPC = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        isPC = false;
        break;
      }
    }
    return isPC;
  };

  if (isAndroid) {
    return 'android'
  }
  if (isiOS) {
    return 'iphone'
  }
  if (isPC) {
    return 'pc'
  }
}

// 防抖
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}