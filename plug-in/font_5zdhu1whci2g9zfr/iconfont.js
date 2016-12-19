;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiantouyoujiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M723.696401 533.102744c0.486519-0.973037 1.337926-1.824445 1.702815-2.797482 8.514075-17.757928 5.716593-39.651265-9.365483-53.881934L372.30835 151.307281c-18.730966-17.757928-48.28697-16.906521-66.044898 1.824445-17.757928 18.730966-16.906521 48.28697 1.824445 66.044898l308.452785 291.789524L309.304193 807.012709c-18.609336 17.879558-19.095855 47.435562-1.216296 66.044898 9.122224 9.487112 21.406818 14.352298 33.569783 14.352298 11.676446 0 23.352892-4.378667 32.353486-13.136002l340.563012-328.278418c0.608148-0.608148 0.851408-1.581185 1.581185-2.189334 0.486519-0.486519 0.973037-0.851408 1.581185-1.337926C720.53403 539.670745 721.871956 536.265115 723.696401 533.102744L723.696401 533.102744zM723.696401 533.102744"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantouyoujiantou1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M300.304 490.897c-0.486 0.973-1.338 1.824-1.703 2.797-8.514 17.758-5.717 39.651 9.365 53.882l343.725 325.116c18.731 17.758 48.287 16.907 66.045-1.824s16.907-48.287-1.824-66.045l-308.453-291.79 307.236-296.047c18.609-17.881 19.096-47.436 1.216-66.045-9.122-9.487-21.407-14.351-33.57-14.352-11.676 0-23.353 4.378-32.353 13.137l-340.563 328.278c-0.608 0.608-0.851 1.581-1.581 2.189-0.487 0.487-0.973 0.851-1.581 1.338-2.797 2.797-4.135 6.203-5.959 9.365v0zM300.304 490.897z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M937.728 838.5536 723.5072 622.5357c-2.4934-2.4996-5.248-4.4083-7.8787-6.4881 36.1861-55.9862 57.3164-122.6742 57.3164-194.5078 0-197.3463-158.6268-357.3023-354.43-357.3023-195.6936 0-354.43 159.956-354.43 357.3023 0 197.374 158.7364 357.2951 354.43 357.2951 71.2274 0 137.4546-21.3576 193.0762-57.8458 2.0255 2.7136 3.884 5.4129 6.3365 7.893l214.2484 216.0445c14.6278 14.7036 33.6783 22.0324 52.7565 22.0324 19.0915 0 38.1553-7.3277 52.7698-21.9976C966.8055 915.5523 966.8055 867.9404 937.728 838.5536M418.5149 666.0076c-133.6812 0-242.4986-109.6847-242.4986-244.4677 0-134.7625 108.8184-244.4759 242.4986-244.4759s242.4986 109.7134 242.4986 244.4759C661.0135 556.3218 552.1951 666.0076 418.5149 666.0076" fill="#ffffff" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jinlingyingcaiwangtubiao07-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M818.8416 612.352l148.1216-338.816c2.5856-5.9392 2.0224-12.7744-1.536-18.2016s-9.6-8.6784-16.0768-8.6784l-636.16 0-24.0384-111.5136c-1.92-8.832-9.728-15.1552-18.7648-15.1552l-207.36 0c-10.5984 0-19.2 8.6016-19.2 19.2s8.6016 19.2 19.2 19.2l191.8464 0 119.7312 555.2384c-45.5424 9.8048-79.8208 50.304-79.8208 98.7392 0 55.7312 45.3376 101.0688 101.0688 101.0688s101.0432-45.3376 101.0432-101.0688c0-23.7056-8.5504-45.2608-22.272-62.5152l219.9808 0c-13.7216 17.2544-22.272 38.8096-22.272 62.5152 0 55.7312 45.3376 101.0688 101.0688 101.0688s101.0432-45.3376 101.0432-101.0688c0-55.7312-45.3376-101.0688-101.0432-101.0688-0.8448 0-1.6128 0.2304-2.4576 0.256l0-0.384L413.0816 711.168c-0.0768-0.5376 0.1024-1.0496-0.0256-1.5872l-18.4832-85.7088 406.6816 0C808.8832 623.872 815.7696 619.3664 818.8416 612.352zM395.8784 875.0336c-34.56 0-62.6688-28.1088-62.6688-62.6688 0-34.56 28.1344-62.6688 62.6688-62.6688s62.6432 28.1088 62.6432 62.6688C458.5216 846.9248 430.4128 875.0336 395.8784 875.0336zM836.0704 812.3648c0 34.56-28.1088 62.6688-62.6432 62.6688s-62.6688-28.1088-62.6688-62.6688c0-34.56 28.1344-62.6688 62.6688-62.6688S836.0704 777.8048 836.0704 812.3648zM391.2704 585.472l-69.3248-300.416 598.0672 0-131.328 300.416L391.2704 585.472z" fill="#d81e06" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
