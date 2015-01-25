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
    "biopic": "./images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Wickens",
            "title": "delivery",
            "location": "on jobsite",
            "dates": "Summer 2014",
            "description": "Too much work for too little rest."
        },
        {
            "employer": "Mlube",
            "title": "scum",
            "location": "Garage site",
            "dates": "Jan - present",
            "description": "Too much work for too little cost."
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
            "name": "udacity",
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

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedPic = HTMLbioPic.replace('%data%', './images/fry.jpg');
$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedPic);

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