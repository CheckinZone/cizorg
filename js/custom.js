/*

Template Name: Myway
Template Demo: http://awerest.com/demo/myway
Purchase: http://themeforest.net/item/myway-onepage-bootstrap-parallax-retina-template/4058880?ref=awerest
Author: Awerest
Author website: http://awerest.com
Description: Parallax Retina Bootstrap Multipurpose Template
Tags: Responsive, Mobile First, Retina, Bootstrap 3, One Page, Multi Page, Multi-Purpose, Agency, Clean, Creative, Minimal

Version: 2.0

---------------

Table of Contents:

1) Fix for Internet Explorer 10 in Windows 8 and Windows Phone 8
2) Animated elements
3) Custom Scrollbar
4) Carousels
5) Intro section height
6) Contact form
7) SVG FTW!
8) Google map
9) Collapse menu on click
10) Responsive videos
11) Smooth Scroll on Anchors
12) Preloader
13) Href # Fix for Demo

---------------

*/

$(document).ready(function () {
    'use strict';

    /* ==== 1) Fix for Internet Explorer 10 in Windows 8 and Windows Phone 8 ==== */

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style")
        msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
    }

    /* ==== 2) Animated elements ==== */
    /* after all images are loaded and if it's no-touch device, run script */
    imagesLoaded(document.body, function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false) {
            skrollr.init({
                smoothScrolling: false,
                forceHeight: false
            });
        }
        if ($('.no-touch').length) {
            /* see docs - if logo over image is not visible due to light/dark color, change logo image on scroll */
            /* append css to logo image div, change width and height to match your logo size
                        $('.navbar-brand div').css({'width':'123px', 'height':'20px'});*/
        }
        /* if touch device detected, append image logo
                else $(".navbar-brand").append("<img src='~/img/logo.png' alt='logo' class='img-responsive'>")*/
    });

    /* ==== 3) Custom Scrollbar ==== */
    /* see docs and how to use custom scrollbar */
    /*
        $('html, .modal').niceScroll({
            scrollspeed: 60,
            mousescrollstep: 35,
            cursorwidth: 10,
            cursorborder: 0,
            cursorcolor: '#e3e4e5',
            cursorborderradius: '3px',
            autohidemode: false,
            horizrailenabled: false,
            smoothscroll: false,
        });
    */

    /* ==== 4) Carousels ==== */
    //intro text slider
    $('#carousel_fade_intro').carousel({
        interval: 3000,
        pause: "false"
    });
    $('#carousel-3').carousel({
        interval: 4000,
        pause: "false"
    });
    //works sliders
    $('#carousel-1, #carousel-2').carousel({
        interval: false
    });

    /* ==== 5) Make intro section height of viewport / Min height is set to 445px in style.css ==== */

    $(function () {
        $('#intro .item').css({ 'height': ($(window).height()) + 'px' });
        $(window).resize(function () {
            $('#intro .item').css({ 'height': ($(window).height()) + 'px' });
        });
    });

    /* ==== 7) SVG FTW! ==== */

    var url = 'css/streamline-icons.svg';
    var c = new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
    document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

    var url = 'css/simpleline-icons.svg';
    var c = new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
    document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

    var url = 'css/social-icons.svg';
    var c = new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
    document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

    var url = 'css/icons.svg';
    var c = new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
    document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

    /* ==== 7) Gallery lightbox ==== */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

});

$(window).on("load", function() {
    'use strict';

    /* ==== 9) Collapse menu on click on mobile and tablet devices ==== */

    if ($('.navbar-toggle:visible').length) {
        $('.navbar a').click(function () { $(".navbar-collapse").collapse("hide") });
    }

    /* ==== 11) Smooth Scroll on Anchors ==== */

    $.localScroll.hash();
    $('.nav').localScroll({
        target: 'body',
        queue: true,
        duration: 500,
        hash: true,
        offset: -60,
        easing: 'easeInOutExpo'
    });

    /* ==== 12) Preloader ==== */

    $('.spinner').fadeOut('slow');
    $('.preloader').delay(350).fadeOut('slow');

    /* ==== 13) Href # Fix for Demo ==== */

    $('a[href="#"]').click(function () {
        return false;
    });
});