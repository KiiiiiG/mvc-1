import './app3.css'
import $ from "jquery"

const $square = $('#app3 .square')


$square.on('click', () => {
  //有就删掉，没有就加上
  $square.toggleClass('active')
})