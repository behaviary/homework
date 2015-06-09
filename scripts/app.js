function ProgramsModel() {
	self = this
	self.programs = ko.observableArray([]);
	self.pricingOptions = ko.observableArray([]);
	self.matchID = function (optionProgramID, programID) {
		if (optionProgramID === programID) {
			return Name
		}
	}
}

function viewsOrVisits(Name) {
	return !!Name.match(/\bvideo/i) ? "views" : "visits"
}

function moreOrLess(event) {
	var self = event.target
	if ($(self).text() == 'more') {
		$(self).text('less')
	} else {
		$(self).text('more');
	}
}

function formatCurrency(money) {
	return '$' + parseFloat(money, 10)
	.toFixed(0)
	.replace(/(\d)(?=(\d{3})+$)/g, "$1,")
	.toString()
}

// Q: How can I use a Data Store with KO?
// var data = (function(){
// 		var _programs,
// 				_options;
//
//     $.getJSON("https://api.myjson.com/bins/5bdb3", function(data) {
//     	_programs = data;
//     });
//
//     $.getJSON("https://api.myjson.com/bins/17oy7", function(data) {
//     	_options = data;
//     });
//
//     return {
//     	getPrograms: function() {
//         if (_programs) {
//         	return _programs
//         } else {
//         	throw "NoDataError!"
//         }
//       },
//      	getOptions: function() {
//         if (_options) {
//         	return _options
//         } else {
//         	throw "NoDataError!"
//         }
//       }
//     };
// })();

$(function() {
	var programsModel = new ProgramsModel

	$.getJSON("https://api.myjson.com/bins/5bdb3", function(data) {
		programsModel.programs(data);
	});

	$.getJSON("https://api.myjson.com/bins/17oy7", function(data) {
		programsModel.pricingOptions(data);
	});

	ko.applyBindings(programsModel);

});