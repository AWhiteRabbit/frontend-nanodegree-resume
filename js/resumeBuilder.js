var bio = {
    "name": "Donovan Cameron",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "### ### ####",
        "email": "doncameron09@gmail.com",
        "github": "/AWhiteRabbit",
        "twitter": "@WhiteRabbitsaur",
        "location": "Toronto, ON"
    },
    "welcomeMessage": "This is my bio. There are many like it but this one is mine.",
    "skills": [
        "reddit browsing",
        "online research",
        "sales",
        "staying up late"
    ],
    "biopic": "./images/fry.jpg",
    'display': function () {
    	var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedemail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedgithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedlocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedPic = HTMLbioPic.replace('%data%', './images/fry.jpg');
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedPic);
var contactinfo = formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedlocation;
$('#topContacts').append(contactinfo);
$('#footerContacts').append(contactinfo);

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace('%data%' , bio.skills[0]);
	$('#header').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%' , bio.skills[1]);
	$('#header').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%' , bio.skills[2]);
	$('#header').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%' , bio.skills[3]);
	$('#header').append(formattedSkill);
};
    }
};

var work = {
    "jobs": [
        {
            "employer": "Wickens",
            "title": "delivery",
            "location": "on jobsite",
            "dates": "Summer 2014",
            "description": "Are you suggesting that coconuts migrate? The nose? The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land. The nose? Be quiet! We found them."
        },
        {
            "employer": "Mlube",
            "title": "scum",
            "location": "Garage site",
            "dates": "Jan - present",
            "description": "Daddy Bender, we're hungry. Bender, hurry! This fuel's expensive! Also, we're dying! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "1st project",
            "dates": "Jan 2015",
            "description": "pdf to mockup",
            "images": [
                "http://placehold.it/250x150",
                "http://placekitten.com/250/150"
            ]
        },
        {
            "title": "2ndish project",
            "dates": "Jan 2015",
            "description": "pdf to mockup # 2",
            "images": [
                "http://placekitten.com/150/250",
                "http://placekitten.com/250/150"
            ]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Udacity",
            "location": "online",
            "degree": "Nanodegree",
            "majors": [
                "Front End",
                "Web Developer"
            ],
            "date": "Jan 2015",
            "url": "udacity.com"
        },
        {
            "name": "udacity",
            "location": "online",
            "degree": "Nanodegree",
            "majors": [
                "Front End",
                "Web Developer"
            ],
            "date": "Feb 2015",
            "url": "udacity.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "html and css",
            "school": "udacity",
            "date": "Jan 2015",
            "url": "udacity.com"
        },
        {
            "title": "Javascript Basics",
            "school": "udacity",
            "date": "Jan 2015",
            "url": "udacity.com"
        },
        {
            "title": "intro to JQuery",
            "school": "udacity",
            "date": "Jan 2015",
            "url": "udacity.com"
        }
    ]
};

bio.display();

function displayWork(){
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedworkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedworkDates = HTMLworkDates.replace('%data%' , work.jobs[job].dates);
		var formattedworkDescription = HTMLworkDescription.replace('%data%' , work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedworkLocation);
		$('.work-entry:last').append(formattedworkDates);
		$('.work-entry:last').append(formattedworkDescription);
	};
};

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}

	}
};

projects.display();