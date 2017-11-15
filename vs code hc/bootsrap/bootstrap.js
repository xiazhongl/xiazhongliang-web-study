$(document).off('.data-api') // 关闭 data 属性 API 的方法，
$(document).off('.alert.data-api') // 针对某个特定的插件，只需在 data-api 前面添加那个插件的名称作为命名空间
$('body').scrollspy({ target: '#navbar-example' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
$(function () {
  $('[data-toggle="popover"]').popover()
})
$('#myButton').on('click', function () {
  var $btn = $(this).button('loading')
  $btn.button('reset')
})
