/* Resume data */

var bio = {
    "name": "Jack Swiggett",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "(123) 456-7890",
        "email": "jackswiggett@gmail.com",
        "github": "jackswiggett",
        "twitter": "@idonthaveatwitter",
        "location": "Seattle"
    },
    "biopic": "images/remy.jpg",
    "welcomeMessage": "Welcome to my resume!",
    "skills": [
        "programming",
        "music",
        "rock climbing",
        "footbag"
    ]
}

var education = {
    "schools": [
        {
            "name": "Stanford University",
            "degree": "B.S.",
            "dates": "2014-present",
            "location": "Stanford, CA",
            "url": "https://www.stanford.edu/",
            "majors": ["Computer Science"]
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "September 2016",
            "url": "http://www.udacity.com/"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "September 2016",
            "url": "http://www.udacity.com/"
        }
    ]
}

var work = {
    jobs: [
        {
            "employer": "Ineval",
            "title": "Software intern",
            "location": "Paris",
            "dates": "Spring/Summer 2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                           "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                           "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                           "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                           "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "Synapse",
            "title": "Software intern",
            "location": "Seattle",
            "dates": "Summer 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                           "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                           "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                           "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                           "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
}

var projects = {
    projects: [
        {
            "title": "Project 1",
            "dates": "2013",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                           "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                           "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                           "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                           "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": [
                "http://placekitten.com/200/300",
                "http://placekitten.com/400/300"
            ]
        },
        {
            "title": "Project 2",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                           "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                           "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                           "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                           "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": [
                "http://placekitten.com/250/250",
                "http://placekitten.com/450/200",
                "http://placekitten.com/600/500",
            ]
        }
    ]
}

/* Format and append header. TODO: Sanitize input from bio object. */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedName + formattedRole);

$("#topContacts").append(formattedMobile +
                         formattedEmail +
                         formattedGithub +
                         formattedTwitter +
                         formattedLocation);

$("#header").append(formattedBioPic +
                    formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}

bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill); // TODO sanitize input
    $("#skills").append(formattedSkill);
});

/* Format and append work history. TODO: Sanitize input from work object. */
work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedEmployer +
                                 formattedTitle +
                                 formattedDates +
                                 formattedLocation +
                                 formattedDescription);
});
