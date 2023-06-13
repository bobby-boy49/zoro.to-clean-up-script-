// ==UserScript==
// @name         zoro.to clean up! + Show Comments removed
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  removing dumb shit.
// @author       bobby_boy49
// @require      https://zoro.to/js/watch.min.js
// @match        *://zoro.to/*
// @icon         https://zoro.to/images/touch-icon-192x192.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

/*globals $*/

//-- for the users!
$(document).prop('title', 'Zoro Free Anime Streaming + script!')


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
