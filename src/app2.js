import "./app2.css"
import $ from "jquery"

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

//时间委托，不监听子元素，监听父元素，节省监听个数
$tabBar.on("click", 'li', (e) => {
  const $li = $(e.currentTarget)
  const index = $li.index()

  $li
    .addClass('selected')
    .siblings().removeClass('selected')
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})

//默认自动点击第一个
$tabBar.children().eq(0).trigger('click')