const candidates = [
  {
    name: 'Ellie Jo',
    currentTitle: 'Lead Developer',
    currentEmployer: 'Google',
    location: 'San Francisco',
    yearsExperience: '10+',
    school: 'UCSF',
    degree: 'PHD',
    subject: 'Computer Science',
    workedFor: ['Google', 'Facebook'],
    employmentHistory: [{
      title: 'Lead Developer',
      employer: 'Google',
      dates: 'Jun 2013 to Present',
      skills: ["C++", "CSS", "Java", "react", "Design System", "UI", "Prototype"]
    },
    {
      title: 'Software Architect',
      employer: 'Facebook',
      dates: 'Jun 2010 to Jun 2013',
      skills: ["HTML", "CSS", "UX"]
    },
    {
      title: 'Jr Deveopler',
      employer: 'Linkedin',
      dates: 'Jun 2007 to Jun 2010',
      skills: ["Javascript", "CSS", "Jquery"]
    }]
  }, 
  {
    name: 'Ray Johnson',
    currentTitle: 'Web Developer',
    currentEmployer: 'Adobe',
    location: 'San Francisco',
    yearsExperience: '8',
    school: 'Stanford University',
    degree: 'Master',
    subject: 'Computer Engineering',
    workedFor: ['Adobe', 'Facebook'],
    employmentHistory: [{
      title: 'Web Developer',
      employer: 'Adobe',
      dates: 'Jun 2013 to Present',
      skills: ["Java", "Docker", "React"]
    },
    {
      title: 'UX Engineer',
      employer: 'Facebook',
      dates: 'Jun 2010 to Jun 2013',
      skills: ["Javascript", "CSS", "Jquery"]
    },
    {
      title: 'Jr Deveopler',
      employer: 'Linkedin',
      dates: 'Jun 2007 to Jun 2010',
      skills: ["Javascript", "CSS", "Jquery"]
    }]
  }, 
  {
    name: 'Bill Smith',
    currentTitle: 'Content Creator',
    currentEmployer: 'Youtube',
    location: 'Los Angeles',
    yearsExperience: '10+',
    school: 'University of California - LA',
    subject: 'Threatre',
    degree: 'Bachelors',
    workedFor: [ 'Youtube', 'Apple'],
    employmentHistory: [{
      title: 'Content Creator',
      employer: 'Youtube',
      dates: 'Jun 2020 to Present',
      skills: []
    },
    {
      title: 'Receptionist',
      employer: 'Apple',
      dates: 'Jun 1994 to Feb 1995',
      skills: []
    }]
  }, 
  {
    name: 'Scarlet Jo',
    currentTitle: 'Frontend Engineer',
    currentEmployer: 'Cypress',
    location: 'San Francisco',
    yearsExperience: '8',
    school: 'Waterloo University',
    degree: 'Bachelor',
    subject: 'Computer Engineering',
    workedFor: ['Cypress', 'Apple'],
    employmentHistory: [{
      title: 'Frontend Engineer',
      employer: 'Cypress',
      dates: 'Jun 2013 to Present',
      skills: ["Java", "Docker", "React"]
    },
    {
      title: 'UX Engineer',
      employer: 'Apple',
      dates: 'Jun 2010 to Jun 2013',
      skills: ["Javascript", "CSS", "Jquery"]
    },
    {
      title: 'Product Designer',
      employer: 'Linkedin',
      dates: 'Jun 2007 to Jun 2010',
      skills: ["Javascript", "CSS", "Jquery"]
    }]
  }, 
];
  
const appendCard = (index = 0) => {
  $('#nav-btn').attr({'src':"assets/backicon.png", "name":"backIcon"})
    if(candidates.length === index) {
      $('.candidate-container__btn').addClass('back-icon-fade')
      $('.candidate-container').append(`<div class="candidate-container__card"></div>`)
      $('.candidate-container__card').append(`
        <section class="complete-container">
          <img src="assets/confetti.png">
          <p class="complete-container-text">You've completed all candidate reviews for this campaign. </p>
          <p class="complete-container-text">TopFunnel will take it from here!</p>
          <button role="button" class="bk-btn">Back to Campaigns</button>
        </section>
      `)
    } else {
      const candidate = candidates[index];
      const getHistory = appendDetails(candidate.employmentHistory)
      $(`.candidate-container`).append(`
        <div class="candidate-container__card" id="${index}">
          <header class="candidate-container__header">
            <p class="candidate-header-text candidate-header-name"> ${candidate.name} </p>
            <p class="candidate-header-text candidate-header-position"> ${candidate.currentTitle} at ${candidate.currentEmployer}</p>
            <p class="candidate-header-text candidate-header-summary"> <img class="-header-img-locationmarker" src="assets/locationmarker.png"> ${candidate.location}</p>
            <p class="candidate-header-text candidate-header-summary">Years of Experience <span class="candidate-header-summary-hilight">${candidate.yearsExperience} </span></p> 
            <p class="candidate-header-text candidate-header-summary">Attended <span class="candidate-header-summary-hilight">${candidate.school} </span></p> 
            <p class="candidate-header-text candidate-header-summary">${candidate.degree} in <span class="candidate-header-summary-hilight">${candidate.subject} </span></p> 
            <p class="candidate-header-text candidate-header-summary">Worked at <span class="candidate-header-summary-hilight">${candidate.workedFor[0]}</span>&nbsp;and
            <span class="candidate-header-summary-hilight">${candidate.workedFor[1]} </span></p> 
            <div class="candidate-header-socialmedia">
              <a href="https://github.com/ktso11"><img class="candidate-header-socialmedia-gitHub" alt="github thumbnail" src="assets/git.png"></a>
              <a href="https://www.linkedin.com/in/katie-so/"><img class="candidate-header-socialmedia-linkedin"  alt="linkedin thumbnail" src="assets/linkedin.png"></a>
            </div>
          </header>
          ${getHistory}
          <footer class="candidate-container__footer ">
            <form class="feedback-form" role="form">
              <p class="feedback-form-title">Feedback</p>
              <textarea class="feedback-form-textarea" placeholder="${candidate.name} will be a great fit for this role because..."></textarea>
            </form>
            <section class="candidate-container__contact">
            <img class="contact-img" alt="recruiter thumbnail" src="assets/sourcer.png">
            <span> &nbsp;Sourced by Jessica </span>
            </section>
          </footer>
        </div>
      `)
    }
  }

  const appendSkills = (skills) => {
    return skills.map((el) => (`<span class="candidate-employment-skills">${el}</span>`)).join('');
  }
  
  const appendDetails = (employment) => {
    return  employment.map((el) => {
      const skills = appendSkills(el.skills)
      return (
        `<main class="candidate-container__employment">
            <section class="candidate-employment">
              <div class="candidate-employment__img">
                <img alt="thumbnail of briefcase" src="assets/briefcase.png">
              </div>
              <div class="candidate-employment__content">
                <p class="candidate-employment-position"> ${el.title}</p>
                <p class="candidate-employment-summary"> ${el.employer}</p>
                <p class="candidate-employment-summary"> ${el.dates}</p>
                <div class="candidate-employment__skills-container">
                  ${skills}
                  <img class="candidate-employment-line" src="assets/line2.png">
                </div>          
              </div>
            </section>
          </main>`
        )
    })
  }

$(document).ready(function(){

  let cards = $('.candidate-container');
  let resultButton = $('.candidate-container__btn')
  let acceptedCandidates = []
  let rejectedCandidates = [] 
  appendCard()

//Animations/Interactions
  $('.screen').on('scroll', function(){
    if($('.screen').scrollTop()>=15){
      $('.back-icon').addClass('back-icon-fade')
    } else {
      $('.back-icon').removeClass('back-icon-fade')
    }
  })

  //Decison Logic (based on user decision to Accept, Reject or Skip)  ***
  resultButton.on('click', function(event) {
    let getIndex = $('.candidate-container__card')
    let index = getIndex[getIndex.length-1].id
    if(click === candidates.length) {
      $('.candidate-container__btn').hide()
    }
    if(click < candidates.length && event.target.id === "click-yes"){
      console.log("clicked")
      acceptedCandidates.push(candidates[index].name)
      animateSwipe("right", index)
    }  
    if(click < candidates.length && event.target.id === "click-no"){
      rejectedCandidates.push(candidates[index].name)
      animateSwipe("left",index)
    } 
    if(click < candidates.length && event.target.id === "click-skip"){
      candidates.push(candidates[index]);
      animateSwipe("left",index)
    } 
  });

  let click = 0 
  // const animateSwipe = (...args) => {
  //   click = click +1
  //   $('#'+args[1]).css('z-index',"5")
  //   appendCard(click)
  //   $('#'+args[1]).addClass('candidate-card__slide'+args[0])
  //   setTimeout(() => {
  //     $('#'+args[1]).remove()
  //     $('.screen').scrollTop(0)
  //   }, 580);
  // }

  const animateSwipe = (direction, index) => {
    click = click +1
    $('#'+index).css('z-index',"5")
    appendCard(click)
    $('#'+index).addClass('candidate-card__slide'+direction)
    setTimeout(() => {
      $('#'+index).remove()
      $('.screen').scrollTop(0)
    }, 580);
  }

  cards.on('click', function(event){
    //Click on Campaign
    if (event.target.className === "campagin-list-name-active"){
      appendCard(click)
      $('.candidate-container__btn').removeClass('back-icon-fade')
    } 
    //Back to Campaign
    if (event.target.className === "bk-btn") {
      backtoDash()
      $('.candidate-container').append(`
        <section class="candidate-container__card">
          <div class="home-container">
            <img class="tf-logo" src="assets/tf.svg">
            <div class="notification-block">
              <img class="notification-hand" src="assets/confetti.png">
              <div class="notification-text-container">
                <span class="notification-greeting">You are all caught up!</span>
                <p class="notification-msg">Your candidates status will be available soon</p>
              </div>
            </div>
            <section class="campaign-list">
              <div class="campagin-list-name">Frontend Engineer <p class="campagin-list-reviewdate">Last reviewed Sept 30</p></div>
              <div class="campaign-list-count">`+click+` <br>Reviewed</div> 
            </section>           
          </div> 
        </section>
      `)
    }
  })

  $('.back-icon').on('click', function(event){
    let icon = event.target.name
    if(icon === "userIcon" ){
      $('#nav-btn').attr({'src':"assets/backicon.png", "name":"backIcon"})
      $('.black-screen').css('height','812')
      $('.black-screen').toggleClass('black-screen-active')
      $('.user-menu').addClass('menu__slideright')
      $('.back-icon').hide()
      $('.candidate-container__btn').addClass('back-icon-fade')
    } if(icon === "backIcon" ) {
      backtoDash()
      let reviewCount = candidates.length - click
      $('.candidate-container').append(`
        <section class="candidate-container__card">
          <div class="home-container">
            <img class="tf-logo" src="assets/tf.svg">
            <div class="notification-block">
              <img class="notification-hand" src="assets/hand.png">
              <div class="notification-text-container">
                <span class="notification-greeting">Hello Joe!</span>
                <p class="notification-msg">You have <b>`+ reviewCount + ` candidates</b> to review</p>
              </div>
            </div>
            <section class="campaign-list">
              <div class="campagin-list-name-active">Frontend Engineer </div>
              <div class="campaign-list-count-active">
                `+ reviewCount +`
                <img class="countIcon"src="assets/counticon.png">
              </div> 
            </section>   
           
          </div>
        </section> 
      `)
    } 
  })

  $('.black-screen').on('click', function(event){
    $('#nav-btn').attr({'src':"assets/avatar.svg", "name":"userIcon"})
    $('.user-menu').removeClass('menu__slideright')
    $('.black-screen').toggleClass('black-screen-active')
    setTimeout(() => {
      $('.back-icon').show()
      $('.black-screen').css('height','0')
    }, 500)
  })

  const backtoDash = () => {
    $('.candidate-container__btn').addClass('back-icon-fade')
    $('.candidate-container__card').remove()
    $('#nav-btn').attr({'src':"assets/avatar.svg", "name":"userIcon"})
  }

  cards.on('click', function(event){
    $('.results').append(`User clicked on "${event.target.className}". <br>`)
    console.log("accepted: "+acceptedCandidates)
    console.log("Rejected: "+rejectedCandidates)
  })


});
  