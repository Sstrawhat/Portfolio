
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
                    active('home-nav');
                    showtime('division-white-home',300);
                    showtime('home-content',500);
                    showtime('sub-content-home',700);
                    showtime('panel-indicator-home',800);
                    

                    break;
                case "ABOUT":
                    active('about-nav');
                    showtime('division-white-about',300);
                    showtime('about-content',500);
                    showtime('sub-content-about',700);
                    showtime('panel-indicator-about',800);
                    break;
                case "SKILL":
                    active('skill-nav');
                    showtime('division-white-skill',300);
                    showtime('skill-tree-line',1000);
                    showtime('panel-indicator-skill',800);
                    showtime('circle-csharp',500);
                    showtime('circle-netcore',600);
                    showtime('circle-sql',700);
                    showtime('circle-js',800);
                    showtime('circle-html',900);
                    showtime('circle-css',1000);
                  
                    break;
                case "PROJECT":
                    active('project-nav');
                    showtime('division-white-project',300);
                    showtime('panel-indicator-project',800);
                    break;
                case "CONTACT":
                    active('contact-nav');
                    break;
            }
        }
    });
}

function showtime(element,time){
    setTimeout(() => {
        document.getElementById(element).classList.add('show')
      }, time);
}

function active(element){
    document.getElementById('home-nav').classList.remove('active')
    document.getElementById('about-nav').classList.remove('active')
    document.getElementById('skill-nav').classList.remove('active')
    document.getElementById('project-nav').classList.remove('active')
    document.getElementById('contact-nav').classList.remove('active')
    document.getElementById(element).classList.add('active')
}

//   entries.forEach(element => {
//   
//   });

observer.observe(homesection);
observer.observe(aboutsection);
observer.observe(skillsection);
observer.observe(projectsection);
observer.observe(contactsection);