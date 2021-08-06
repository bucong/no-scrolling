/*
 * @Author: Cong.Bu 
 * @Date: 2021-08-06 10:32:57 
 * @Last Modified by: Cong.Bu
 * @Last Modified time: 2021-08-06 14:04:41
 */

/*
  * 参数 data
  * domId 禁止滚动的容器
*/

const disableScroll = (domId) => {
  var scrollTopVal = document.documentElement.scrollTop || document.body.scrollTop;
  // 禁止滑动
  const selectdom = domId || 'app';
  document.getElementById(selectdom).style.position = "fixed";
  document.getElementById(selectdom).style.top = "-" + scrollTopVal + 'px';
  document.getElementById(selectdom).style.width = '100%';
  document.getElementById(selectdom).style.overflow = "hidden";
}

const enableScroll = (domId) => {
  /** *取消滑动限制***/
  const selectdom = domId || 'app';
  var scrollVal = Math.abs(parseFloat(document.getElementById(selectdom).style.top));
  document.getElementById(selectdom).style.position = "";
  document.getElementById(selectdom).style.overflow = "";
  document.getElementById(selectdom).style.top = "";
  if (document.body) {
    document.body.scrollTop = scrollVal;
  }
  if (document.documentElement) {
    document.documentElement.scrollTop = scrollVal;
  }
}

export {
  disableScroll,
  enableScroll
}
