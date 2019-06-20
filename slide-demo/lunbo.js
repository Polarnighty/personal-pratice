//修复了切换页面时的定时器bug
document.addEventListener('visibilitychange', function (e) {
  console.log(document.hidden)

})
var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index()
    n = index
    var p = index * -400
    $('#image').css({
      transform: 'translate(' + p + 'px)'
    })
    activeButton(allButtons.eq(n))
  })
}

var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')

var timerId = setTimer()

function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 1000)
}

function activeButton($button) {
  $button
    .removeClass('default').addClass('active')
    .siblings('.active').removeClass('active').addClass('default')
}

$('.window').on('mouseenter', function () {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {
  timerId = setTimer()
})
