function ProgramsModel(programs) {
	self = this
	self.programs = ko.observableArray(programs);

}

function PricingOptionsModel(options) {
	self = this
	self.pricingOptions = ko.observableArray(options);

}

function formatCurrency(money) {
	// regex inspired by Stack Overflow ;)
	return '$' + parseFloat(money, 10)
	.toFixed(0)
	.replace(/(\d)(?=(\d{3})+$)/g, "$1,")
	.toString()
}

// var programs = [
// 		{"ProgramID":100,
// 			"Name":"Yoga Classes",
// 			"TotalMonthlySales":28458,
// 			"MonthlyAttendance":88,
// 			"Sales":
// 				{"CurrentYear":[30001,28889,39000,29084,29084,19080,24854],
// 				"PreviousYear":[29015,26188,40100,27055,21055,24055,26055]}},

// 		 {"ProgramID":101,
// 			"Name":"Yoga Privates",
// 			"TotalMonthlySales":23483,
// 			"MonthlyAttendance":301,
// 			"Sales":
// 				{"CurrentYear":[19080,24854,29445,24453,15834,23898,32010],
// 				"PreviousYear":[24055,26055,28455,24000,12005,22511,28515]}},

// 		 {"ProgramID":102,
// 			"Name":"Yoga Duets",
// 			"TotalMonthlySales":28488,
// 			"MonthlyAttendance":156,
// 			"Sales":
// 				{"CurrentYear":[28889,39000,29445,24453,15834,23898,32010],
// 				"PreviousYear":[29015,26188,40100,24000,12005,22511,28515]}},

// 		 {"ProgramID":103,
// 			"Name":"Open Practice",
// 			"TotalMonthlySales":572,
// 			"MonthlyAttendance":276,
// 			"Sales":
// 				{"CurrentYear":[28889,39000,29445,24453,15834,23898,32010],
// 				"PreviousYear":[29015,26188,40100,24000,12005,22511,28515]}},

// 		 {"ProgramID":104,
// 			"Name":"Yoga Videos",
// 			"TotalMonthlySales":391.32,
// 			"MonthlyAttendance":82,
// 			"Sales":
// 				{"CurrentYear":[28889,39000,29445,24453,15834,23898,32010],
// 				"PreviousYear":[29015,26188,40100,24000,12005,22511,28515]}}
// 	]


$(function() {
	$.getJSON("https://api.myjson.com/bins/5bdb3", function(programsData) {
		ko.applyBindings(new ProgramsModel(programsData));
	});
	// $.getJSON("https://api.myjson.com/bins/5bdb3", function(options) {
	// 	ko.applyBindings(new PricingOptionsModel(options));
	// })
})