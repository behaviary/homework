$(document).ready(function() {

	// Mock functionality of tabs
	$('.tab-title').click(function(e) {
		var $dash = $('#dashboard');
		var id = this.id
		if (id == 'dashboard') {
			$('.main').removeClass('hidden');
		} else {
			$('.main').addClass('hidden');
		}
	});

	$('.add').click(function() {
		$('.new-program-form').removeClass('hidden')
	});

	// This toggles the more/less link on the bottom of each program mod.
	// yay for JQuery handling closures for us!
	$('.program').each(function(i) {
		$('#moreProgram' + i).click(function(){
			if ($('#moreProgram' + i).text() == 'more') {
				$('#moreProgram' + i).text('less')
			} else {
				$('#moreProgram' + i).text('more');
			}
		});
	});

	// A little UI sugar for when users enable online scheduling.
	$('.switch').click(function(e) {
    if ($('.switch input:checked').length > 0){
      $('#onlineSchedulingStatus').text('On').css({'color':'grey', 'font-weight':'500'});
    } else {
      $('#onlineSchedulingStatus').text('Off').css({'color':'#bebeb5', 'font-weight':'300'});
    }
	});

	// more UI sugar; Shows name of program as title as it's being typed.
	$('#newProgramName').keyup(function(e){
		$('#formTitle').text($('#newProgramName').val());
		if ($('#newProgramName').val() == 0) {
			$('#formTitle').text("New program")
		}
	})

	$("#submitProgram").click(function(e) {
		e.preventDefault()
		console.log($('#newProgramForm').serializeArray());
		// This is the raw JQuery ajax POST request
		// $.ajax({
		// 	type:'POST',
		// 	url: 'https://api.myjson.com/bins/3j5pw',
		// 	data: JSON.stringify($('#newProgramForm').serializeArray()),
		// 	success: function(response) {
	 //    	alert("You have created a new program!");
		// 	},
		// 	error: function(response) {
		// 		alert(response);
		// 	}
		// });
	});

	$(document).foundation();

});