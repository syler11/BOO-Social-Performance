var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChartTwitter", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  },
});


function graphChannels() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (FB.style.display === "none") {
      FB.style.display = "block";
      Twitter.style.display = "block";
    } else {
      FB.style.display = "none";
    }
  }

  function Facebook() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (FB.style.display === "none") {
      FB.style.display = "block";
    } else {
      Twitter.style.display = "none";
      Instagram.style.display = "none";
      Mailchimp.style.display = "none";
    }
  }

  function Twitter() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (Twitter.style.display === "none") {
      Twitter.style.display = "block";
    } else {
      FB.style.display = "none";
      Instagram.style.display = "none";
      Mailchimp.style.display = "none";
    }
  }

  function Instagram() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (Instagram.style.display === "none") {
      Instagram.style.display = "block";
    } else {
      FB.style.display = "none";
      Twitter.style.display = "none";
      Mailchimp.style.display = "none";
    }
  }

  function Mailchimp() {
    const FB = document.getElementById("FB");
    const Twitter = document.getElementById("Twitter");
    const Instagram = document.getElementById("Instagram");
    const Mailchimp = document.getElementById("Mailchimp");
    if (Mailchimp.style.display === "none") {
      Mailchimp.style.display = "block";
    } else {
      FB.style.display = "none";
      Twitter.style.display = "none";
      Instagram.style.display = "none";
    }
  }