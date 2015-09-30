
// $('.assignment-caption:eq(1)').addClass('highlight-variant--1');
// $('.assignment-caption:eq(2)').addClass('highlight-variant--2');
// $('.assignment-caption:eq(3)').addClass('highlight-variant--3');

$('.assignment-caption').each(function(index, el) {
  console.log(index);
  var newClass = 'highlight-variant--' + index;
  console.log(newClass);
  $(this).addClass(newClass);
});