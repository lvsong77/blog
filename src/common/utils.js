export let judgeCurrentDivice = function() {
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