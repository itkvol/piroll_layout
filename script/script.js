// skills section

// UI/UX Design
const design = (a) => {

    let skillsDesignNum = document.querySelector('#skills-design-num');
    skillsDesignNum.innerHTML = a;
    
    let skillsDesign = document.querySelector('#skills-design');
    skillsDesign.style.width = a+"%";
};

design(75);

// Web Development
const development = (b) => {
    let skillsDevelopmentNum = document.querySelector('#skills-development-num');
    skillsDevelopmentNum.innerHTML = b;
    
    let skillsDevelopment = document.querySelector('#skills-development');
    skillsDevelopment.style.width = b+"%";
};

development(90);

// Marketing
const marketing = (c) => {
    let skillsMarketingNum = document.querySelector('#skills-marketing-num');
    skillsMarketingNum.innerHTML = c;
    
    let skillsMarketing = document.querySelector('#skills-marketing');
    skillsMarketing.style.width = c+"%";
};

marketing(65);

// numbers section

// Projects completed
const numbersProjects = (pr) => {
    let projects = document.querySelector("#numbers-projects");
    projects.innerHTML = pr;
};

numbersProjects(548);

// Working hours
const numbersHours = (hr) => {
    let hours = document.querySelector("#numbers-hours");
    hours.innerHTML = hr;
};

numbersHours(1465);

// Positive feedback
const numbersFeedbacks = (fb) => {
    let feedbacks = document.querySelector("#numbers-feedbacks");
    feedbacks.innerHTML = fb;
};

numbersFeedbacks(614);

// Happy clients
const numbersClients = (cl) => {
    let clients = document.querySelector("#numbers-clients");
    clients.innerHTML = cl;
};

numbersClients(735);

// work section

let arrayOfImages = [
   "./img/airpods.jpg",
   "./img/bottle.jpg",
   "./img/cork.jpg",
   "./img/ipad.jpg",
   "./img/iphone.jpg",
   "./img/mac.jpg",
   "./img/perfume.jpg",
   "./img/pillow.jpg",
   "./img/airpods.jpg",
   "./img/bottle.jpg",
   "./img/cork.jpg",
   "./img/ipad.jpg",
   "./img/iphone.jpg",
   "./img/mac.jpg",
   "./img/perfume.jpg",
   "./img/pillow.jpg"
];

let numberImages = 8;

function loadImages(amount){
    for( let i=0; i<amount; i++){
        let mainDiv = document.createElement('div');
        mainDiv.classList.add("col-xl-3");
        mainDiv.classList.add("col-md-6");
        mainDiv.classList.add("col-lg-4");
        mainDiv.classList.add("work-image");
        let imageFilter = document.createElement('div');
        imageFilter.classList.add('work-image-filter');
        let filterImage = document.createElement('img');
        filterImage.src = "./img/pe-7s-look.png";
        imageFilter.appendChild(filterImage);
        mainDiv.appendChild(imageFilter);
        let mainRow = document.querySelector('#work .row');
        mainRow.appendChild(mainDiv);

        let image = arrayOfImages[i];
        mainDiv.style.background = `url(${image}) no-repeat center / cover`;

    
    }
    let filtersList = document.querySelectorAll(".work-image-filter");

    for(i=0; i<filtersList.length; i++){
        filtersList[i].onclick = showImage;
    }
}

loadImages(numberImages);


let showOnlyImage = document.querySelector('#image');

function showImage(){ 
    document.querySelector("#dark").style.display = "block";
    document.querySelector("#image").style.display = "block";
    let clickedImage = this.closest(".work-image").style.background;
    showOnlyImage.style.background = `${clickedImage}`;
}

document.querySelector('#dark').onclick = hideImage;

function hideImage(){
    document.querySelector("#dark").style.display = "none";
    document.querySelector("#image").style.display = "none";
    
}
let moreDiv = document.querySelector('#load-more');
moreDiv.onclick = loadMore;

function loadMore(){
    loadImages(16);
    moreDiv.style.display = "none";
}

// Work process section

document.querySelector(".video-cover>img").onclick = hideVideoCover;
let videoCover = document.querySelector('.video-cover');

function hideVideoCover(){
    videoCover.style.display = "none";
}

// Testimonials section (Slider)

$('.carousel').carousel({
    interval: 12000
  });