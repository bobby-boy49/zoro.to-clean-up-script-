// ==UserScript==
// @name         zoro.to clean up!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removing dumb shit.
// @author       bobby_boy49
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
