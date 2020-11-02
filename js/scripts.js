$(document).ready(function(){

  let cards = document.querySelector('.candidate-container')
  let btnContainer = document.querySelector('.candidate-container__btn')
  let bkBtn = document.querySelector('.back-icon')
  let acceptedCandidates = []
  let rejectedCandidates = []

  const candidates = [
    {
      name: 'Eli Jo',
      currentTitle: 'Developer',
      currentEmployer: 'Google',
      location: 'San Francisco',
      yearsExperience: '10+',
      school: 'UCSF',
      degree: 'PHD',
      subject: 'Computer Science',
      workedFor: ['Facebook', 'Linkedin'],
      employmentHistory: [{
        title: 'Developer',
        employer: 'Google',
        dates: 'Jun 2013 to Present',
        keywords: ["C++", "CSS", "Java"]
      },
      {
        title: 'Software Engineer',
        employer: 'Facebook',
        dates: 'Jun 2010 to Jun 2013',
        keywords: ["HTML", "CSS", "UX"]
      },
      {
        title: 'Jr Deveopler',
        employer: 'Linkedin',
        dates: 'Jun 2007 to Jun 2010',
        keywords: ["Javascript", "CSS", "Jquery"]
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
      workedFor: ['Facebook', 'Linkedin'],
      employmentHistory: [{
        title: 'Developer',
        employer: 'Google',
        dates: 'Jun 2013 to Present',
        keywords: ["Java", "Docker", "React"]
      },
      {
        title: 'Software Engineer',
        employer: 'Facebook',
        dates: 'Jun 2010 to Jun 2013',
        keywords: ["Javascript", "CSS", "Jquery"]
      },
      {
        title: 'Jr Deveopler',
        employer: 'Linkedin',
        dates: 'Jun 2007 to Jun 2010',
        keywords: ["Javascript", "CSS", "Jquery"]
      }]
    }, 
    {
      name: 'Will Smith',
      currentTitle: 'Developer',
      currentEmployer: 'Google',
      location: 'San Francisco',
      yearsExperience: '10+',
      school: 'UCSF',
      subject: 'Computer Science',
      degree: 'Bachelors',
      workedFor: ['Microsoft', 'Linkedin'],
      employmentHistory: [{
        title: 'Developer',
        employer: 'Microsoft',
        dates: 'Jun 2013 to Present',
        keywords: ["Javascript", "CSS", "Jquery"]
      },
      {
        title: 'Software Engineer',
        employer: 'Facebook',
        dates: 'Jun 2010 to Jun 2013',
        keywords: ["Javascript", "CSS", "Jquery"]
      },
      {
        title: 'Intern',
        employer: 'Twitter',
        dates: 'Jun 2007 to Jun 2010',
        keywords: ["Docker", "Java", "Jquery"]
      }]
    }
  ];
  
  insertBtn()
  appendCard(0)

  function insertBtn(){
    $('.candidate-container__btn').append(`
      <div class="btn-yes" role="button"> <img class="btn-img-yes " src="assets/check.png"></div>
      <div class="btn-skip" role="button"> <img class="btn-img-skip" src="assets/skip.png"> </div>
      <div class="btn-no" role="button"> <img class="btn-img-no" src="assets/cross.png"> </div>
    `)
  }

  function appendCard(i){
    if(i === candidates.length) {
      // When no candidates available
      $('.candidate-container__btn').addClass('back-icon-fade')
      $('.candidate-container').append(`<div class="candidate-container__card"></div>`)
      $('.candidate-container__card').append(`
        <section class="complete-container">
          <img src="assets/confetti.png">
          <p class="complete-container-text">You've completed all candidate review for this campaign. </p>
          <p class="complete-container-text">TopFunnel will take it from here</p>
          <button role="button" class="bk-btn">Back to Campaigns</button>
        </section>
      `)
    } else {
      $('.candidate-container').append(`<div class="candidate-container__card a${i}"></div>`)
      $('.candidate-container__card').append(`
      <header id="${i}" class="candidate-container__header ">
          <p class="candidate-header-text candidate-header-name"> ${candidates[i].name} </p>
          <p class="candidate-header-text candidate-header-position"> ${candidates[i].currentTitle} at ${candidates[i].currentEmployer}</p>
          <p class="candidate-header-text candidate-header-summary"> <img class="-header-img-locationmarker" src="assets/locationmarker.png"> ${candidates[i].location}</p>
          <p class="candidate-header-text candidate-header-summary">Years of Experience <span class="candidate-header-summary-hilight">${candidates[i].yearsExperience} </span></p> 
          <p class="candidate-header-text candidate-header-summary">Attended <span class="candidate-header-summary-hilight">${candidates[i].school} </span></p> 
          <p class="candidate-header-text candidate-header-summary">${candidates[i].degree} in <span class="candidate-header-summary-hilight">${candidates[i].subject} </span></p> 
          <p class="candidate-header-text candidate-header-summary">Worked at <span class="candidate-header-summary-hilight">${candidates[i].employmentHistory[0].employer}</span>&nbsp;and <span class="candidate-header-summary-hilight">${candidates[i].employmentHistory[0+1].employer}  </span></p> 
          <div class="candidate-header-socialmedia">
            <a href="https://github.com/ktso11"><img class="candidate-header-socialmedia-gitHub" alt="github thumbnail" src="assets/git.png"></a>
            <a href="https://www.linkedin.com/in/katie-so/"><img class="candidate-header-socialmedia-linkedin"  alt="linkedin thumbnail" src="assets/linkedin.png"></a>
          </div>
        </header>
      `)
      appendDetails(i)
      $('.candidate-container__card').append(`
        <footer class="candidate-container__footer ">
          <form class="feedback-form" role="form">
            <p class="feedback-form-title">Feedback</p>
            <textarea class="feedback-form-textarea" placeholder="${candidates[i].name} will be a great fit for this role because..."></textarea>
          </form>
          <section class="candidate-container__contact">
           <img class="contact-img" alt="recruiter thumbnail" src="assets/sourcer.png">
           <span> &nbsp;Sourced by Jessica </span>
          </section>
        </footer>
      `)
    }
  }

  function appendDetails(j){
    for(i=0; i<candidates[j].employmentHistory.length;i++){
      $('.candidate-container__card' ).append(`
      <main class="candidate-container__employment">
        <section class="candidate-employment">
          <div class="candidate-employment__img">
            <img alt="thumbnail of briefcase" src="assets/briefcase.png">
          </div>
          <div class="candidate-employment__content">
            <p class="candidate-employment-position"> ${candidates[j].employmentHistory[i].title}</p>
            <p class="candidate-employment-summary"> ${candidates[j].employmentHistory[i].employer}</p>
            <p class="candidate-employment-summary"> ${candidates[j].employmentHistory[i].dates}</p>
            <div class="candidate-employment__keywords-container"> 
              <span class="candidate-employment-keywords">${candidates[j].employmentHistory[i].keywords[0]}</span>
              <span class="candidate-employment-keywords">${candidates[j].employmentHistory[i].keywords[1]}</span>
              <span class="candidate-employment-keywords">${candidates[j].employmentHistory[i].keywords[2]}</span>
              <img class="candidate-employment-line" src="assets/line2.png">  
            </div>          
          </div>
        </section>
      </main> 
    `)
    }
  }

//Animations/Interactions
  $('.screen').on('scroll', function(){
    if($('.screen').scrollTop()>=15){
      $('.back-icon').addClass('back-icon-fade')
    } else {
      $('.back-icon').removeClass('back-icon-fade')
    }
  })

  function intEffect(move, currentIndex){
    click = click +1
    $('.a'+currentIndex).css('z-index',"5")
    appendCard(click)
    $('.a'+currentIndex).addClass('candidate-card__slide'+move)
    setTimeout(function() {
      $('.a'+currentIndex).remove()
      setTimeout(function() {
     }, 100);
    }, 800);
  }


  //Decison Logic (based on user decision to Accept, Reject or Skip)

  let click = 0 //count to ensure all candidates are reviewed, and prevent repeats

  btnContainer.addEventListener('click', function(event) {
    let getIndex = document.getElementsByClassName('candidate-container__header')
    let index = getIndex[0].id
    if(click === candidates.length) {
      //When out of candidates 
      $('.candidate-container__btn').remove()
    }
    if(click < candidates.length && event.target.className === "btn-yes"){
      acceptedCandidates.push(candidates[index].name)
      intEffect("right", index)
    }  
    if(click < candidates.length && event.target.className === "btn-no"){
      rejectedCandidates.push(candidates[index])
      intEffect("left",index)
    } 
    if(click < candidates.length && event.target.className === "btn-skip"){
      // candidates.push(candidates.splice(index, 1)[0]); //remove and move to end of arr
      candidates.push(candidates[index]);
      intEffect("left",index)
      $('.candidate-container__btn').removeClass('back-icon-fade') //to avoid buttons hide when counter reached
    } 
  });

  cards.addEventListener('click', function(event){
    if (event.target.className === "campaign-btn"){
      closeHome()
    } if (event.target.className === "bk-btn") {
      openHome()
      $('.candidate-container__card').append(`
      <section class="home-container">
        <img class="tf-logo" src="assets/tf.svg">
        <img class="notification-svg" src="assets/noti-done.svg">
        <img role="button" class="campaign-btn__unactive" src="assets/reviewed.svg">
      </section> 
    `)
    }
  })

  let navToggle = false
  bkBtn.addEventListener('click', function(event){
    if(navToggle === true ){
      closeHome()
    } else {
      openHome()
      $('.candidate-container__card').append(`
      <section class="home-container">
        <img class="tf-logo" src="assets/tf.svg">
        <img class="notification-svg" src="assets/noti.svg">
        <img class="campaign-btn" src="assets/campaign.svg">
      </section> 
      `)
    }
  })

  function closeHome(){
    document.getElementById('nav-btn').src="assets/backicon.png"
    navToggle = 0
    $('.candidate-container__card').remove()
    $('.candidate-container__btn').removeClass('back-icon-fade')
    appendCard(0)
    click = 0 
  }

  function openHome(){
    document.getElementById('nav-btn').src="assets/hamburger.png"
    navToggle = true
    $('.candidate-container__btn').addClass('back-icon-fade')
    $('.candidate-container__card').remove()
    $('.candidate-container').append(`<div class="candidate-container__card"></div>`)
  }

  // Show User's clicks throughout session via console

  cards.addEventListener('click', function(event){
    console.log(event.target.className)
  })

});
  