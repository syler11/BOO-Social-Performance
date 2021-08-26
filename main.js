function graphChannels() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if ( FB.style.display === "none",
        Twitter.style.display === "none",
        Instagram.style.display ==="none",
        Mailchimp.style.display === "none") {
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