$(document).ready(function(){
	// thêm dropdown cho mục giới thiệu
	$('#about h2').addClass('dropdown');
	$('#about p').addClass('dropdown-content');

	// thêm dropdown cho mục học vấn
	$('#education h2').addClass('dropdown');
	$('#education ul').addClass('dropdown-content');

	// thêm dropdown cho mục kinh nghiệm làm việc
	$('#experience h2').addClass('dropdown');
	$('#experience ul').addClass('dropdown-content');

	// thêm dropdown cho mục kỹ năng
	$('#skills h2').addClass('dropdown');
	$('#skills ul').addClass('dropdown-content');

	// thêm dropdown cho mục liên hệ
	$('#contact h2').addClass('dropdown');
	$('#contact p').addClass('dropdown-content');
});
