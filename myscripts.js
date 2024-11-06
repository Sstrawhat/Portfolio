
var homesection = document.getElementById('HOME');

var aboutsection = document.getElementById('ABOUT');

var skillsection = document.getElementById('SKILL');

var projectsection = document.getElementById('PROJECT');

var contactsection = document.getElementById('CONTACT');

const options = {
    rootMargin: "120px",
    threshold: 0.5
}

const observer = new IntersectionObserver(callBack, options);



function callBack(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            switch (entry['target']['id']) {
                case "HOME":
                    active('home-nav');
                    showtime(document.getElementById('HOME').querySelector('.polygon'),300);  
                    showtime(document.getElementById('HOME').querySelector('.content'),300);  
                    showtime(document.getElementById('ABOUT').querySelector('.polygon-menu-indicator'),700); 
                    showtime(document.getElementById('HOME').querySelector('.img-section'),800); 
                    showtime(document.getElementById('HOME').querySelector('.content-text'),800); 
                    break;
                case "ABOUT":
                    active('about-nav');
                    showtime(document.getElementById('ABOUT').querySelector('.polygon'),300);
                    showtime(document.getElementById('ABOUT').querySelector('.polygon-menu-indicator'),700); 
                    showtime(document.getElementById('ABOUT').querySelector('.img-section'),800);  
                    showtime(document.getElementById('ABOUT').querySelector('.content-text'),800);  
                    break;
                case "SKILL":
                    active('skill-nav');
                    showtime(document.getElementById('SKILL').querySelector('.polygon'),300);
                    showtime(document.getElementById('SKILL').querySelector('.polygon-menu-indicator'),700);    
                    showtime(document.getElementById('SKILL').querySelector('.img-section'),800);  
                    showtime(document.getElementById('SKILL').querySelector('.img-section-2'),1000); 
                    showtime(document.getElementById('SKILL').querySelector('.skill-line-vertical'),1000);  
                    showtime(document.getElementById('SKILL').querySelector('.skill-netcore'),800); 
                    showtime(document.getElementById('SKILL').querySelector('.skill-csharp'),900); 
                    showtime(document.getElementById('SKILL').querySelector('.skill-sql'),1000); 
                    showtime(document.getElementById('SKILL').querySelector('.skill-js'),1100); 
                    showtime(document.getElementById('SKILL').querySelector('.skill-html'),1200); 
                    showtime(document.getElementById('SKILL').querySelector('.skill-css'),1300); 
                    

                    break;
                case "PROJECT":
                    active('project-nav');
                    showtime(document.getElementById('PROJECT').querySelector('.polygon'),300);
                    showtime(document.getElementById('PROJECT').querySelector('.polygon-menu-indicator'),700);   
                    break;
                case "CONTACT":
                    active('contact-nav');
                    showtime(document.getElementById('CONTACT').querySelector('.polygon'),300);
                    showtime(document.getElementById('CONTACT').querySelector('.polygon-menu-indicator'),700);    
                    break;
            }
        }
    });
}

function showtime(element, time) {
    setTimeout(() => {
        element.classList.add('show')
    }, time);
}

function active(element) {
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