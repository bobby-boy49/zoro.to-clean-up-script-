// ==UserScript==
// @name         zoro.to clean up! + Show Comments removed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://zoro.to/*
// @icon         https://zoro.to/favicon-16x16.png
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
