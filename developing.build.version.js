// ==UserScript==
// @name         zoro.to clean up! + Show Comments removed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  testing version
// @author       You
// @match        *://zoro.to/*
// @icon         https://zoro.to/images/touch-icon-192x192.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

//-- DON'T INSTALL FOR REGULAR USE!

//-- This is my repository --> https://github.com/bobby-boy49/zoro.to-clean-up-script-

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


//-- removed the "read the manga version" icon under the art / beside.
jQuery('a').removeClass('add-manga mb-0 get-mangas')

jQuery('div').removeClass('d-flex align-items-center')

jQuery('div').removeClass('add-manga-icon')

jQuery('div').removeClass('manga-icon')

jQuery('div').removeClass('add-manga-inner')

jQuery('span').removeClass('ami-click')


//-- removed number of comments
jQuery('a').removeClass('dt-comment')

jQuery('i').removeClass('fa-comment')

//-- I tried!
jQuery('.text').detach('wombo')

jQuery('.number').empty()

jQuery('.number').removeClass()


//-- removed social
jQuery('a').removeClass('zr-social-button dc-btn')

jQuery('i').removeClass('fab fa-discord')

jQuery('i').removeClass('fa-telegram-plane')

jQuery('i').removeClass('fa-reddit-alien')

jQuery('i').removeClass('fa-twitter')

jQuery('div').removeClass('zrg-list')

jQuery('div').removeClass('footer-joingroup')
