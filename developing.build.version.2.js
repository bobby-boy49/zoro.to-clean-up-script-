// ==UserScript==
// @name         zoro.to clean up! + Show Comments removed
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Just don't even bother with this.
// @author       bobby_boy49
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      https://www.gstatic.com/recaptcha/releases/SglpK98hSCn2CroR0bKRSJl5/recaptcha__en.js
// @require      https://www.google.com/recaptcha/api.js
// @require      https://zoro.to/js/watch.min.js
// @match        *://zoro.to/*
// @icon         https://zoro.to/images/touch-icon-192x192.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

/*globals $*/

//-- for the users!
$(document).prop('title', 'Zoro Free Anime Streaming + script!')

//-- replace PP
var old_url = "https://img.zorores.com/_r/100x100/100/avatar/dragon_ball/av-db-01.jpeg";
var new_url = "https://ia802606.us.archive.org/18/items/cleaning-my-profile-picture/1.%20Original.jpg";
$(document).ready(function(){
        $("[src='"+old_url+"']").attr("src", new_url);
});

//-- removed share icon
$('.share-icon').remove()


//-- share text removed
$('.share-buttons-block').remove()


//-- manga reader banner removed
$('.mba-block').remove()


//-- Show Comments removed
$('.display-toggle').remove()


//-- removed share text at the bottom
$('.top').remove()


//-- removed social
$('a').removeClass('zr-social-button dc-btn')

$('i').removeClass('fab fa-discord')

$('i').removeClass('fa-telegram-plane')

$('i').removeClass('fa-reddit-alien')

$('i').removeClass('fa-twitter')

$('div').removeClass('zrg-list')

$('div').removeClass('footer-joingroup')
