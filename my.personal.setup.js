// ==UserScript==
// @name         zoro.to clean up! + Show Comments removed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removing dumb shit.
// @author       You
// @match        *://zoro.to/*
// @icon         https://zoro.to/images/touch-icon-192x192.png
// @run-at       document-end
// @grant        none
// ==/UserScript==


//-- for the users!
jQuery(document).prop('title', 'Zoro Free Anime Streaming + script!')


//-- removed share icon
jQuery('.share-icon').remove()


//-- share text removed
jQuery('.share-buttons-block').remove()


//-- manga reader banner removed
jQuery('.mba-block').remove()


//-- Show Comments removed
jQuery('.display-toggle').remove()


//-- removed share text at the bottom
jQuery('.top').remove()


//-- removed social
jQuery('a').removeClass('zr-social-button dc-btn')

jQuery('i').removeClass('fab fa-discord')

jQuery('i').removeClass('fa-telegram-plane')

jQuery('i').removeClass('fa-reddit-alien')

jQuery('i').removeClass('fa-twitter')

jQuery('div').removeClass('zrg-list')

jQuery('div').removeClass('footer-joingroup')
