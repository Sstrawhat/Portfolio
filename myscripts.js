
var homesection = document.getElementById('HOME');

var aboutsection = document.getElementById('ABOUT');

var skillsection = document.getElementById('SKILL');

var projectsection = document.getElementById('PROJECT');

var contactsection = document.getElementById('CONTACT');

const options = {
    rootMargin:"120px",
    threshold : 0.5
}

const observer = new IntersectionObserver(callBack, options);



function callBack(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            switch (entry['target']['id']) {
                case "HOME":
                    document.getElementById('img-home-section').classList.add('show')
                    document.getElementById('home-content').classList.add('show')
                    break;
                case "ABOUT":
                    document.getElementById('img-about-section').classList.add('show')
                    document.getElementById('about-content').classList.add('show')
                    break;
                case "SKILL":
                    document.getElementById('img-skill-section').classList.add('show')
                    document.getElementById('img-skill-2-section').classList.add('show')
                    document.getElementById('skill-content').classList.add('show')
                    break;
                case "PROJECT":
                    document.getElementById('img-project-section').classList.add('show')
                    break;
                case "CONTACT":
                    document.getElementById('img-contact-section').classList.add('show')
                    document.getElementById('contact-content').classList.add('show')
                    break;
            }
        }
    });
}

//   entries.forEach(element => {
//   
//   });

observer.observe(homesection);
observer.observe(aboutsection);
observer.observe(skillsection);
observer.observe(projectsection);
observer.observe(contactsection);
