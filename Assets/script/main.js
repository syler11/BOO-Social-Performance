var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var date = new Date();
date.setDate(date.getDate() - 30);
document.getElementById("currentDate").innerHTML = (date);

const FB = document.getElementById("FB");
const Twitter = document.getElementById("Twitter");
const Instagram = document.getElementById("Instagram");
const Mailchimp = document.getElementById("Mailchimp");


function graphChannels() {
  if (FB.style.display === "none",
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

function Twit() {
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

function Insta() {
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

function Mailc() {
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

var convertedIntoArray = [];
   $("table#sourceData tr").each(function() {
      var rowDataArray = [];
      var actualData = $(this).find('td');
      if (actualData.length > 0) {
         actualData.each(function() {
            rowDataArray.push($(this).text());
         });
         convertedIntoArray.push(rowDataArray);
      }
   });
   console.log(convertedIntoArray);

   function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById('dark-mode').style.cssText =  'background-color: "white"';
 }

