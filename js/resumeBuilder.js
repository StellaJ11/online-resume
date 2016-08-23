
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "Scholastic",
			"title": "Online Merchandising Coordinator",
			"location": "New York, NY",
			"dates": "May 2016 - Present",
			"descriptiona": " • Support site planning, conduct daily maintenance and manage product updates for around <b>200</b> teacher and parent webpages of Scholastic Reading Club using <b>Demandware Business Manager</b>",
			"descriptionb": " • Partner with Marketing, Creative and Development teams to develop and execute merchandising calendar and generate more than <b>120</b> promotional online assets and around <b>20</b> customized landing pages to provide seamless online experience.",
			"descriptionc": " • Ensure accuracy and timelines of all product launches, assist the Development team to troubleshoot, fix and prevent layout and content issues and continually optimize content layout and product interaction paths to improve customer experience."
		},
		{
			"employer": "Wirelesslink Group Inc",
			"title": "Digital Marketing Consultant",
			"location": "New York, NY",
			"dates": "December 2015 - April 2016",
			"descriptiona": "• Implemented site changes and product updates for more than <b>2,000</b> products in over <b>60</b> product categories based on directions from Ecommerce Manager in <b>Demandware Business Manager</b>",
			"descriptionb": "• Utilized <b>Google Analytics</b> and <b>Tableau</b> to develope weekly & monthly web analytics reports to measure merchandise effectiveness and provide action plans to enhance website performance and customer journey.",
			"descriptionc": "• Oversaw product inventory, forecasted website operations and module development and uploaded seller content and product information to Ecommerce websites such as <b>Amazon.com</b>, <b>Ebay.com</b>, etc."
		},
		{
			"employer": "Smartling",
			"title": "Digital Marketing Intern",
			"location": "New York, NY",
			"dates": "June 2015 - December 2015",
			"descriptiona": "• Initiated email marketing campaigns in <b>HubSpot</b> for <b>content syndication</b> and <b>lead generation</b> initiatives, including designing HTML email templates, tracking campaign performance and reporting",
			"descriptionb": "• Monitored data patterns of key trends in <b>Google Analytics</b> to provide insights to increase KPI performance and utilized <b>WordPress</b> to maintain company websites and fix more than <b>1,500</b> dead links with 404 error.",
			"descriptionc": "• Managed various social media accounts; in 5 months, engagement rate was increased by <b>480.2%</b> and conversion rate from social media was increased by <b>521.3%</b>"
		},
		{
			"employer": "justclickforkids.com",
			"title": "Digital Marketing Intern",
			"location": "Hicksville, NY",
			"dates": "September 2014 - January 2015",
			"descriptiona": "• Utilized <b>Google Analytics</b> and <b>Google Webmaster Tools</b> to analyze traffic patterns, implement keyword  and conduct SEO strategies to increase website traffic and improve keyword ranking",
			"descriptionb": "• Worked with developers, designers and marketing managers to build user-friendly landing pages to improve user experience; conversion rates were increased by <b>125.7%</b> in average in 4 months",
			"descriptionc": "• Tracked and monitored site assets based on various campaigns and offers using <b>Basecamp</b> for project management to ensure consistent site functionality"
		}

	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["descriptiona"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["descriptionb"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["descriptionc"]));
								
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "Arcade Game",
			"date worked": "April, 2016",
			"description": "A classic arcade game project for Udacity Front-End Web Development Nanodegree with several personmodification",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/StellaJ11/frontend-nanodegree-arcade-game",
			"demo": "https://stellaj11.github.io/frontend-nanodegree-arcade-game/",
			"progress": 100
		},
		{
			"title": "Website Optimization Project",
			"date worked": "July, 2016",
			"description": "A project aimed at reaching a PageSpeed score of at least 90 for both mobile and desktop and a consistent frame-rate at 60fps when scrolling",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/StellaJ11/frontend-nanodegree-mobile-portfolio",
			"progress": 100
		},
		{
			"title": "Neighborhood Map",
			"date worked": "August, 2016 - Present",
			"description": "A neighborhood map project for Udacity Front-End Web Development Nanodegree featuring cool food places in Downtown Manhattan via Google Maps API",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/StellaJ11/fend-neighborhood-map-project",
			"progress": 70
		}
		
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Stella",
	"last name": "",
	"role": "Ecommerce, Web Analytics & Digital Marketing Ninja",
	"welcome message": "Hi there! I'm Stella Jiang, a self-motivated marketer who is passionate about Ecommerce, web analytics and digital marketing! Feel free to check out my skills, work experience and projects below. You can also find me on Linkedin and Twitter.",
	"bio pic": "https://lh3.googleusercontent.com/-SBN15tcmbC8/UkCdJGCGHOI/AAAAAAAAAVE/Gjs_4zrqmfY/w140-h140-p/LeiZ.JPG",
	"contacts": 
		{
			"email": "stella0101kong@gmail.com",
			"github username": "StellaJ11",
			"twitter handle": "@sjiang_",
			"location": "Brooklyn, NY"
		},
	"skills": ["Microsoft Office", "Google Analytics", "Google Adwords", "WordPress", "HTML", "CSS", "JavaScript"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "Hofstra University",
			"location": "Hempstead, NY, USA",
			"majors": ["Master of Science in Marketing, GPA: 3.85"],
			"dates": "May 2015",
			"url": "http://www.hofstra.edu"
		},
		{
			"name": "Hong Kong Baptist University",
			"location": "Kowloon, Hong Kong, China",
			"majors": ["Bachelor of Business Administration in Accounting"],
			"dates": "July 2013",
			"url": "http://www.hkbu.edu.hk"
		},
		
	],
	"onlineCourses": [
		{
			"title": "December 2015 - Present",
			"school": "Front-End Web Development Nanodegree",
			"dates": "Udacity",
			//"url": "https://www.udacity.com/nanodegrees"
		},
		{
			"title": "January 2016",
			"school": "Ecommerce Analytics: From Data to Decisions",
			"dates": "Google Analytics Academy",
			//"url": "https://analyticsacademy.withgoogle.com/course/3"
		},
		{
			"title": "December 2015",
			"school": "Digital Analytics Fundamentals",
			"dates": "Google Analytics Academy",
			//"url": "https://analyticsacademy.withgoogle.com/course/1"
		},
		{
			"title": "December 2015",
			"school": "JavaScript Fundamentals",
			"dates": "SoloLearn",
			//"url": "http://www.sololearn.com/Profile/415113/"
		},
		{
			"title": "December 2015",
			"school": "HTML Fundamentals",
			"dates": "SoloLearn",
			//"url": "http://www.sololearn.com/Profile/415113/"
		},
		{
			"title": "December 2015",
			"school": "CSS Fundamentals",
			"dates": "SoloLearn",
			//"url": "http://www.sololearn.com/Profile/415113/"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									//.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Microsoft Office",
    labelcolor: "red"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#FF5A5E",
    label: "Google Analytics",
    labelcolor: "green"
  },
  {
    value: 8,
    color: "#FDB45C",
    highlight: "#5AD3D1",
    label: "Google AdWords",
    labelcolor: "yellow"
  },
  {
    value: 6,
    color:"#F06613",
    highlight: "#FFC870",
    label: "WordPress",
    labelcolor: "orange"
  },
  {
    value: 6,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "HTML",
    labelcolor: "gray"
  },
  {
    value: 6,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "CSS",
    labelcolor: "darker-green"
  },
  {
    value: 5,
    color: "#4D5360",
    highlight: "#616774",
    label: "JavaScript",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






