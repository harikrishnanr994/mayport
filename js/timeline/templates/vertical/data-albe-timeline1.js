//Json Object
var data1 = [
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
			content: '<b>STEP 3<br><br> MEDICAL DATA & REPORTS</b>'
		},
		{
			tag: 'p',
			content: 'You need to submit medical data and reports. We will let you know our requirement after initial consultation with our doctor.'
		}]
	},
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 4<br><br> INTERPRETATION OF YOUR DATA</b>'
		},
		{
			tag: 'p',
			content: '<br>We will get in touch with a panel of doctors who will view and interpret your medical data. You will receive our expert’s opinion.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 5 <br><br> CASE DISCUSSION WITH OUR AFFILIATED HOSPITALS</b>'
		},
		{
			tag: 'p',
			content: '<br>We will also discuss the matter with our affiliated hospitals or treatment centers including any hospital of your preference.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 6 <br><br> ONLINE CONSULTATION WITH OUR DOCTOR</b>'
		},
		{
			tag: 'p',
			content: '<br>You finalize from the list of hospitals / physicians. You may finalize more than 1 hospital. <br> We will schedule video conferencing with physicians (if necessary) who will provide comprehensive interpretation of your problem and how it can be solved; this is similar when you are with your doctor personally and doctor explains you about procedures etc.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 7<br><br> DECISION MAKING </b>'
		},
		{
			tag: 'p',
			content: '<br>When you are comfortable with all your queries, discussed your options for alternative treatment(s) with your doctor, completely understood the risks, benefits and the process involved, then you decide and deposit your registration amount.<br> <br>With Mayport, you will be provided with the actual hospital invoices if you are paying through us. We are very transparent.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 8<br><br> TRIP ITINERARY </b>'
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
			content: '<b>STEP 9<br><br> PRE-TRAVEL INFORMATION </b>'
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
			content: '<b>STEP 10<br><br> ARRIVE IN INDIA </b>'
		},
		{
			tag: 'p',
			content: '<br>We will personally welcome you at the airport and take you to your place of accommodation, followed by hospital / doctor visit. We will provide you a local mobile sim, Wi-Fi internet facilities etc.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 11<br><br> YOUR COMFORTABLE STAY </b>'
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
			content: '<b>STEP 12<br><br> CONSULTATION WITH MEDICAL TEAM </b>'
		},
		{
			tag: 'p',
			content: '<br>The next day after your arrival, you’ll be transported by one of our representatives to your pre-operative appointment with your surgeon. This will be the first time you get to meet your doctor and team. The doctor may ask for further diagnosis and review of your results.<br> <br>Note: If for medical reasons your surgeon feels the surgery should not proceed as scheduled, or you decide not to go ahead with it, your scheduled surgery will stand cancelled.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 13<br><br> TREATMENT </b>'
		},
		{
			tag: 'p',
			content: '<br>We will update your family and friends through a medical bulletin.'
		}]
	}
	,
	{
		time: '2015-01-20',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 14<br><br> REJUVENATION/TRAVEL </b>'
		},
		{
			tag: 'p',
			content: '<br>Upon your preference and with due permission from your doctor we shall provide options for rejuvenation and travel.'
		}]
	}
	,
	{
		time: '2015-01-19',
		body: [
		{
			tag: 'h4',
			content: '<b>STEP 15<br><br> RETURN HOME </b>'
		},
		{
			tag: 'p',
			content: '<br>We will follow up for your treatment and recovery after your return.'
		}]
	}

];

$(document).ready(function () {

	$("#myTimeline1").albeTimeline(data1);

});
