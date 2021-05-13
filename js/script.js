$.datepicker.regional["ru"] = {
  monthNames: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],

  dateFormat: "dd MM",
  firstDay: 1,

};
$.datepicker.setDefaults($.datepicker.regional["ru"]);

$(function () {
  $("#date, #date2").datepicker({});
});

$(function (e) {
  let num = 1;
  $("#up1").click(function () {
    $("#number").val(--num);
  });
  $("#down1").click(function () {
    $("#number").val(++num);
  });
});

$(function () {
  let num = 1;
  $("#up2").click(function () {
    $("#adult").val(--num);
  });
  $("#down2").click(function () {
    $("#adult").val(++num);
  });
});
$(function () {
  let num = 0;
  $("#up3").click(function () {
    $("#child").val(--num);
  });
  $("#down3").click(function () {
    $("#child").val(++num);
  });
});




