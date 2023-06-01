/*
  * 参数 data
  * domId 禁止滚动的容器
*/

const disableScroll = (domId) => {
  var scrollTopVal = document.documentElement.scrollTop || document.body.scrollTop;
  // 禁止滑动
  const selectId = domId || 'app'
  const selectDom = document.getElementById(selectId)
  if (selectDom && selectDom.style.position !== 'fixed') {
    selectDom.style.position = 'fixed'
    selectDom.style.top = '-' + scrollTopVal + 'px'
    selectDom.style.width = '100%'
    selectDom.style.overflow = 'hidden'
  }
}

const enableScroll = (domId) => {
  /** *取消滑动限制***/
  const selectId = domId || 'app'
  const selectDom = document.getElementById(selectId)
  var scrollVal = Math.abs(parseFloat(selectDom.style.top))
  selectDom.style.position = ''
  selectDom.style.overflow = ''
  selectDom.style.top = ''
  if (document.body) {
    document.body.scrollTop = scrollVal
  }
  if (document.documentElement) {
    document.documentElement.scrollTop = scrollVal
  }
}

export {
  disableScroll,
  enableScroll
}
