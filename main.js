var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('test').innerHTML=(today);


function graphChannels() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if ( FB.style.display === "none",
        Twitter.style.display = "block",
        Instagram.style.display = "block",
        Mailchimp.style.display = "block") {
      FB.style.display = "block";
      Twitter.style.display = "block";
      Instagram.style.display = "block";
      Mailchimp.style.display = "block";
        }
    };

  function Facebook() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (FB.style.display === "none") {
      FB.style.display = "block";
      Twitter.style.display = "none";
      Instagram.style.display = "none";
      Mailchimp.style.display = "none";
    } else {
      Twitter.style.display = "none";
      Instagram.style.display = "none";
      Mailchimp.style.display = "none";
    }
    };

  function Twitter() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (Twitter.style.display === "none") {
      Twitter.style.display = "block";
      FB.style.display = "none";
      Instagram.style.display = "none";
      Mailchimp.style.display = "none";
    } else {
      FB.style.display = "none";
      Instagram.style.display = "none";
      Mailchimp.style.display = "none";
    }
    };

  function Instagram() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (Instagram.style.display === "none") {
      Instagram.style.display = "block";
      FB.style.display = "none";
      Twitter.style.display = "none";
      Mailchimp.style.display = "none";
    } else {
      FB.style.display = "none";
      Twitter.style.display = "none";
      Mailchimp.style.display = "none";
    }
    };

  function Mailchimp() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (Mailchimp.style.display === "none") {
      Mailchimp.style.display = "block";
      FB.style.display = "none";
      Twitter.style.display = "none";
      Instagram.style.display = "none";
    } else {
      FB.style.display = "none";
      Twitter.style.display = "none";
      Instagram.style.display = "none";
    }
    };