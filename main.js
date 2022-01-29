/* window.onload = function () {
	document.querySelector('#msg').textContent = '此為未使用jQuery的畫面。';
} */

var flg = false;

$(function() {
	$('#btn1').click(function(){
		var str = $('#text1').val();
		var val = $('input[name=radio1]:checked').val();
		var msg = 'favorite OS: ';
		$("#sel1 option:selected").each(function(){
			msg += $(this).val() + " ";
		});
		$('#msg').text('you typed: ' + str + '. you are: ' + val + '. ' + msg);
		$('#msg1').load('data.txt');
		$('#msg2').empty().append("puppy wang");
		$.getJSON('data.php', {'id':str}, function(response, status, xhr){
			var ol = $('<ul></ul>');
			ol.append('<li>姓名：' + response.name + '</li>');
			ol.append('<li>電郵信箱：' + response.mail + '</li>');
			ol.append('<li>電話號碼：' + response.tel + '</li>');
			$('#msg2').empty().append(ol);
		});
	});
	$('#btn2').click(function(){
		if (flg){
			$("li[name=a]").addClass('A').removeClass('B');
			$("li[name=b]").addClass('B').removeClass('A');

		} else {
			$("li[name=a]").addClass('B').removeClass('A');
			$("li[name=b]").addClass('A').removeClass('B');
		}
		flg = !flg;
	});
	$('#btn3').click(function(){
		$('p[name=msg]').wrap('<div></div>');
	});
});

