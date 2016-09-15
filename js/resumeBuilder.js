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
};

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
};

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
};

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
                "http://placekitten.com/250/300",
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
                "http://placekitten.com/450/250",
                "http://placekitten.com/200/250",
            ]
        }
    ]
};

/* Helper function to replace "%data%" in the template HTML provided by helper.js
 * with a specific string. TODO: Sanitize the input in new_data. */
function formatData(template_html, new_data) {
    return template_html.replace("%data%", new_data);
}

/* Format and append header. */
bio.display = function() {
    $("#header").prepend(formatData(HTMLheaderName, bio.name) +
                         formatData(HTMLheaderRole, bio.role));

    $("#topContacts").append(formatData(HTMLmobile, bio.contacts.mobile) +
                             formatData(HTMLemail, bio.contacts.email) +
                             formatData(HTMLgithub, bio.contacts.github) +
                             formatData(HTMLtwitter, bio.contacts.twitter) +
                             formatData(HTMLlocation, bio.contacts.location));

    $("#header").append(formatData(HTMLbioPic, bio.biopic) +
                        formatData(HTMLwelcomeMsg, bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            $("#skills").append(formatData(HTMLskills, skill));
        });
    }
};

/* Format and append education history. */
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formatData(HTMLschoolName, school.name) +
                                          formatData(HTMLschoolDegree, school.degree) +
                                          formatData(HTMLschoolDates, school.dates) +
                                          formatData(HTMLschoolLocation, school.location));

        school.majors.forEach(function(major) {
            $(".education-entry:last").append(formatData(HTMLschoolMajor, major));
        });
    });
};

/* Format and append work history. */
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formatData(HTMLworkEmployer, job.employer) +
                                     formatData(HTMLworkTitle, job.title) +
                                     formatData(HTMLworkDates, job.dates) +
                                     formatData(HTMLworkLocation, job.location) +
                                     formatData(HTMLworkDescription, job.description));
    });
};

/* Format and append project history. */
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formatData(HTMLprojectTitle, project.title) +
                                        formatData(HTMLprojectDates, project.dates) +
                                        formatData(HTMLprojectDescription, project.description));

        project.images.forEach(function(image) {
            $(".project-entry:last").append(formatData(HTMLprojectImage, image));
        });
    });
};

/* Call functions to display resume content. */
bio.display();
education.display();
work.display();
projects.display();

/* Log document clicks */
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

/* Add internationalize button */
function inName(name) {
    firstAndLast = name.trim().split(" ");
    first = firstAndLast[0];
    last = firstAndLast[1];

    first = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
    last = last.toUpperCase();

    return first + " " + last;
}

$("#main").append(internationalizeButton)

/* Add Google map */
$("#mapDiv").append(googleMap);
