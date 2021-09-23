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
        keywords: ["C++", "CSS", "Java", "react", "Design System", "UI", "Prototype"]
      },
      {
        title: 'Cook',
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
        title: 'Volunteer',
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
        title: 'Janitor',
        employer: 'Microsoft',
        dates: 'Jun 2013 to Present',
        keywords: ["Javascript", "CSS", "Jquery", "React", "Sass", "Angular"]
      },
      {
        title: 'Software Engineer',
        employer: 'Facebook',
        dates: 'Jun 2010 to Jun 2013',
        keywords: ["Javascript", "CSS", "Jquery"]
      },
      {
        title: 'Developer',
        employer: 'Microsoft',
        dates: 'Jun 2010 to Feb 2010',
        keywords: ["Javascript", "CSS", "Jquery"]
      },
      {
        title: 'Intern',
        employer: 'Twitter',
        dates: 'Jun 2007 to Feb 2010',
        keywords: ["Docker", "Java", "Jquery"]
      }]
    }
  ];
  
  appendCard()

  function appendCard(index = 0){
    console.log("candidate length is: "+ candidates.length + " and index is: "+index)
    if(candidates.length === index) {
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
      const candidate = candidates[index];
      const getHistory = appendDetails(candidate.employmentHistory)
      $('.candidate-container').append(`<div class="candidate-container__card card-${index}"></div>`)
      $('.candidate-container__card').append(`
      <header id="${index}" class="candidate-container__header ">
          <p class="candidate-header-text candidate-header-name"> ${candidate.name} </p>
          <p class="candidate-header-text candidate-header-position"> ${candidate.currentTitle} at ${candidate.currentEmployer}</p>
          <p class="candidate-header-text candidate-header-summary"> <img class="-header-img-locationmarker" src="assets/locationmarker.png"> ${candidate.location}</p>
          <p class="candidate-header-text candidate-header-summary">Years of Experience <span class="candidate-header-summary-hilight">${candidate.yearsExperience} </span></p> 
          <p class="candidate-header-text candidate-header-summary">Attended <span class="candidate-header-summary-hilight">${candidate.school} </span></p> 
          <p class="candidate-header-text candidate-header-summary">${candidate.degree} in <span class="candidate-header-summary-hilight">${candidate.subject} </span></p> 
          <p class="candidate-header-text candidate-header-summary">Worked at <span class="candidate-header-summary-hilight">${candidate.employmentHistory[0].employer}</span>&nbsp;and
          <span class="candidate-header-summary-hilight">${candidate.employmentHistory[1].employer} </span></p> 
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
      `)
    }
  }

  function appendDetails(employment){
    return  employment.map((el) => {
      const keywords = appendKeywords(el.keywords)
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
                <div class="candidate-employment__keywords-container">
                  ${keywords}
                  <img class="candidate-employment-line" src="assets/line2.png">
                </div>          
              </div>
            </section>
          </main>`
        )
    })
  }

  function appendKeywords(keywords) {
    return keywords.map((el) => (`<span class="candidate-employment-keywords">${el}</span>`)).join('');
  }

  // function appendDetails(currentCandidate){
  //   for(i=0; i<currentCandidate.employmentHistory.length;i++){
  //     const history = currentCandidate.employmentHistory[i]; //access the ram one time only 
  //     const keywords = appendKeywords(history.keywords)
  //     $('.candidate-container__card' ).append(`
  //     <main class="candidate-container__employment">
  //       <section class="candidate-employment">
  //         <div class="candidate-employment__img">
  //           <img alt="thumbnail of briefcase" src="assets/briefcase.png">
  //         </div>
  //         <div class="candidate-employment__content">
  //           <p class="candidate-employment-position"> ${history.title}</p>
  //           <p class="candidate-employment-summary"> ${history.employer}</p>
  //           <p class="candidate-employment-summary"> ${history.dates}</p>
  //           <div class="candidate-employment__keywords-container">
  //             ${keywords}
  //             <img class="candidate-employment-line" src="assets/line2.png">
  //           </div>          
  //         </div>
  //       </section>
  //     </main> 
  //     `)
  //   }
  // }



//Animations/Interactions
  $('.screen').on('scroll', function(){
    if($('.screen').scrollTop()>=15){
      $('.back-icon').addClass('back-icon-fade')
    } else {
      $('.back-icon').removeClass('back-icon-fade')
    }
  })

  let click = 0 //count to ensure all candidates are reviewed, and prevent repeats
  // when check/cross/pass buttons are clicked, click count incredments
  // assign zindex to current card to ensure new card appended is at the button
  // apply css to slide card to review new card
  // remove old card completely from UI 

  function intEffect(move, currentIndex){
    click = click +1
    $('.card-'+currentIndex).css('z-index',"5")
    appendCard(click)
    $('.card-'+currentIndex).addClass('candidate-card__slide'+move)
    setTimeout(function() {
      $('.card-'+currentIndex).remove()
    //   setTimeout(function() {
    //  }, 100);
    }, 500);
  }

  //Decison Logic (based on user decision to Accept, Reject or Skip)  
  btnContainer.addEventListener('click', function(event) {
    //find the index of the card in display
    let getIndex = document.getElementsByClassName('candidate-container__header')
    let index = getIndex[0].id
    if(click === candidates.length) {
      //When out of candidates, remove buttons 
      $('.candidate-container__btn').hide()
    }
    if(click < candidates.length && event.target.id === "click-yes"){
      acceptedCandidates.push(candidates[index].name)
      intEffect("right", index)
    }  
    if(click < candidates.length && event.target.id === "click-no"){
      rejectedCandidates.push(candidates[index].name)
      intEffect("left",index)
    } 
    if(click < candidates.length && event.target.id === "click-skip"){
      //move to end of arr 
      candidates.push(candidates[index]);
      intEffect("left",index)
      // $('.candidate-container__btn').removeClass('back-icon-fade') //to avoid buttons hide when counter reached
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
    console.log(acceptedCandidates)
    console.log(rejectedCandidates)
  })


});
  