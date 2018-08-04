//Json Object
var data2 = [
	{
		time: '2015-06-30',
		body: [{
			tag: 'h4',
			content: "<b>STEP 1 <br><br> VISIT OUR QUERY LINK</b>"
		},
		{
			tag: 'p',
			content: '<br>The best way is to send us enquiry via our enquiry link. You can expect a quick response from us within 12 hours.<br> <br><a href="#" class="c-button bg-green hv-green-o delay-2" data-toggle="modal" data-target="#modalLoginForm">ENQUIRE HERE</a><br>'
		}],
	},
	{
		time: '2015-06-15',
		body: [{
			tag: 'h4',
			content: "<b>STEP 2<br><br> FREE REGISTRATION</b>"
		},
		{
			tag: 'p',
			content: '<br>Register as a patient <br><br> <a href="#" class="btn btn-primary">REGISTER HERE</a>'
		}],
	},
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 3<br><br> ONLINE QUERY</b>'
		},
		{
			tag: 'p',
			content: 'We shall have an online discussion on your priorities, budget and taste. Based on that we shall guide you for the best package suitable for your complete pleasure.'
		}]
	},
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 4<br><br> DECISION MAKING</b>'
		},
		{
			tag: 'p',
			content: '<br>When you are comfortable with all your queries, discussed your options for trip packages, completely understood the benefits, then you decide and deposit your registration amount.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 5 <br><br> TRIP itinerary</b>'
		},
		{
			tag: 'p',
			content: '<br>We will confirm your procedure(s), consulting doctors, hospitals and accommodation and submit an itinerary for your review and finalization.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 6 <br><br> PRE-TRAVEL INFORMATION</b>'
		},
		{
			tag: 'p',
			content: '<br>Before traveling, we will provide you with a host of information about the destination you will be traveling to. You will also receive emails about how to properly plan and execute your trip.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 7<br><br> ARRIVE IN INDIA </b>'
		},
		{
			tag: 'p',
			content: '<br>We will personally welcome you at the airport and take you to your place of accommodation. We will provide you a local mobile sim, Wi-Fi internet facilities etc.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 8<br><br> YOUR COMFORTABLE STAY </b>'
		},
		{
			tag: 'p',
			content: '<br>We will provide comfortable apartment for you and your family members with hygienic food of your taste choice.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 9<br><br> BEGINNING OF TOUR WITH GUIDE </b>'
		},
		{
			tag: 'p',
			content: '<br>Our online support or a guide will help to take you for the exploration package which you selected in a comfortable & safe transportation.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 10<br><br> EXTENSION OF TOUR </b>'
		},
		{
			tag: 'p',
			content: '<br>Before finishing of your package you can communicate to us via our guide or operator for further extension of you tour package. If you make the plan for extension after you finishes, we may require 24 hours for the planning and arrangement for the next package (Your comfortable stay is our responsibility until then)'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 11<br><br> RETURN HOME </b>'
		},
		{
			tag: 'p',
			content: '<br>We will be in need of your feedback and comments for further improvement of our services.'
		}]
	}

];

$(document).ready(function () {

	$("#myTimeline2").albeTimeline(data2);

});
