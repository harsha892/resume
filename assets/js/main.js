/*! minified version file */

function togNav(){var e=document.getElementById("sidenav");"100vw"==e.style.width?(e.style.width="0",e.style.opacity=0,$("#header").removeClass("-opened")):(e.style.width="100vw",e.style.opacity=1,$("#header").addClass("-opened"))}includeHTML(),AOS.init({offset:100,duration:800,disable:"mobile"});var topBlock=$("#topBlock").offset().top;$(window).scroll(function(){$(window).scrollTop()>topBlock?($(".header").addClass("on-scroll"),$("header.on-scroll .resume-logo").attr("src","assets/images/workruit-resume-logo-color.svg")):($(".header").removeClass("on-scroll"),"/pricing.html"==location.pathname?$("header .resume-logo").attr("src","assets/images/workruit-resume-logo-color.svg"):$("header .resume-logo").attr("src","assets/images/workruit-resume-logo-white.svg"))}),$(function(){setTimeout(function(){var e=["about.html","contact.html","careers.html","https://blog.workruit.com/","faq.html","privacy.html","terms.html"],t="https://devresume.workruit.com"===location.origin?"https://dev.workruit.com/":"https://www.workruit.com/";for(let o=1;o<=e.length;o++)"https://blog.workruit.com/"==e[o-1]?$(".main-nav li:nth-child("+o+") a").attr("href",e[o-1]):$(".main-nav li:nth-child("+o+") a").attr("href",t+e[o-1])},1e3),$('.main-nav li a[href^="/'+window.location.pathname.split("/")[1]+'"]').addClass("footer__active")});var video=document.getElementById("video"),botOfTheF1=$(".feature-1").offset().top+$(".feature-1").outerHeight(!0),botOfTheF2=$(".feature-2").offset().top+$(".feature-2").outerHeight(!0),botOfTheF3=$(".feature-3").offset().top+$(".feature-3").outerHeight(!0),botOfTheF4=$(".feature-4").offset().top+$(".feature-4").outerHeight(!0),topOfTheF1=$(".feature-1").offset().top,topOfTheF2=$(".feature-2").offset().top,topOfTheF3=$(".feature-3").offset().top,topOfTheF4=$(".feature-4").offset().top;$(window).width()>1024?$(window).scroll(function(){$(window).scrollTop()>topOfTheF4-35?$(".device__phone , .device__browser").addClass("stucked"):$(".device__phone, .device__browser").removeClass("stucked")}):$(window).width()>768?$(window).scroll(function(){$(window).scrollTop()>topOfTheF4?$(".device__phone, .device__browser").addClass("stucked"):$(".device__phone").removeClass("stucked")}):$(window).scroll(function(){$(window).scrollTop()>topOfTheF4+40?$(".device__phone, .device__browser").addClass("stucked"):$(".device__phone, .device__browser").removeClass("stucked")}),$(window).height()<650&&$(window).scroll(function(){$(window).scrollTop()>topOfTheF4+1?$(".device__phon, .device__browsere").addClass("stucked"):$(".device__phone, .device__browser").removeClass("stucked")}),$(window).scroll(function(){$(window).scrollTop()>botOfTheF1-275&&$(window).scrollTop()<topOfTheF3-275?($("#phone-in-2, #browser-in-2").addClass("active"),$("#phone-in-2, #browser-in-2").removeClass("past"),$("#phone-in-1, #browser-in-1").removeClass("active"),$("#phone-in-1, #browser-in-1").addClass("past"),$("#phone-in-3, #browser-in-3").removeClass("active"),$("#phone-in-3, #browser-in-3").removeClass("past"),$("#phone-in-4, #browser-in-4").removeClass("active"),$("#phone-in-4, #browser-in-4").removeClass("past")):$(window).scrollTop()>botOfTheF2-275&&$(window).scrollTop()<topOfTheF4-275?($("#phone-in-3, #browser-in-3").addClass("active"),$("#phone-in-3, #browser-in-3").removeClass("past"),$("#phone-in-1, #browser-in-1").removeClass("active"),$("#phone-in-1, #browser-in-1").removeClass("past"),$("#phone-in-2, #browser-in-2").removeClass("active"),$("#phone-in-2, #browser-in-2").addClass("past"),$("#phone-in-4, #browser-in-4").removeClass("active"),$("#phone-in-4, #browser-in-4").removeClass("past")):$(window).scrollTop()>botOfTheF3-275?($("#phone-in-4, #browser-in-4").addClass("active"),$("#phone-in-4, #browser-in-4").removeClass("past"),$("#phone-in-1, #browser-in-1").removeClass("active"),$("#phone-in-1, #browser-in-1").removeClass("past"),$("#phone-in-2, #browser-in-2").removeClass("active"),$("#phone-in-3, #browser-in-3").removeClass("active"),$("#phone-in-3, #browser-in-3").addClass("past")):($("#phone-in-1, #browser-in-1").addClass("active"),$("#phone-in-1, #browser-in-1").removeClass("past"),$("#phone-in-2, #browser-in-2").removeClass("active"),$("#phone-in-2, #browser-in-2").removeClass("past"),$("#phone-in-3, #browser-in-3").removeClass("active"),$("#phone-in-3, #browser-in-3").removeClass("past"),$("#phone-in-4, #browser-in-4").removeClass("active"),$("#phone-in-4, #browser-in-4").removeClass("past"))}),$(window).ready(function(){$("#load-footer").load("app/includes/footer.html")}),$(window).ready(function(){var e,t,o,r,n,a=window.location.href.split("#/")[1]?"#/"+window.location.href.split("#/")[1]:window.location.href.split(location.origin+"/#")[1];window.origin;if("index.html"==a)$("#load-views").attr("src","").addClass("d-none"),$(".loading-container").delay(1e3).fadeOut();else if(a){if("#/login"==a||"#/signup"==a||"#/forgotpassword"==a||"#/home"==a||"#/share"==a||"#/account"==a||"#/orders"==a){$(".mainPage").remove(),$("#load-views").empty().removeClass("d-none"),t=window,o=document,t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:1782822,hjsv:6},r=o.getElementsByTagName("head")[0],(n=o.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,r.appendChild(n),console.log("document",{document:document}),window.matchMedia("only screen and (max-width: 780px)").matches||detectMob()?(document.title="Workruit - Instant Resume | Log into your profile",$("meta[name=description]").remove(),$("head").append('<meta name="description" content="Login to your Workruit - Instant Resume profile and create an affordable and advanced CV instantly.">'),$("#load-views").attr("src",location.origin+"/app/includes/mobile-view.html")):"#/login"==a||"#/signup"==a||"#/forgotpassword"==a&&!localStorage.getItem(btoa("userId"))?("#/login"==a?(document.title="Workruit - Instant Resume | Log into your profile",$('meta[name="description"],meta[property="og:description"], meta[property="og:title"]').remove(),$("head").append('<meta name="description" content="Login to your Workruit - Instant Resume profile and create an affordable and advanced CV instantly.">'),$("head").append('<meta property="og:description" content="Login to your Workruit - Instant Resume profile and create an affordable and advanced CV instantly.">'),$("head").append('<meta property="og:title" content="Workruit - Instant Resume | Log into your profile">')):"#/signup"==a?($('meta[name="description"],meta[property="og:description"], meta[property="og:title"]').remove(),$("head").append('<meta name="description" content="Sign up for free and create your perfect resume instantly. Create a resume that stands out and can be edited easily on the go.">'),$("head").append('<meta property="og:description" content="Sign up for free and create your perfect resume instantly. Create a resume that stands out and can be edited easily on the go.">'),$("head").append('<meta property="og:title" content="Workruit - Instant Resume | Create your profile">'),document.title="Workruit - Instant Resume | Create your profile"):"#/forgotpassword"==a&&($('meta[name="description"],meta[property="og:description"], meta[property="og:title"]').remove(),$("head").append('<meta name="description" content="Just few steps to update or reset your password. Workruit Instant Resume is here to help you create your new password.">'),$("head").append('<meta property="og:description" content="Just few steps to update or reset your password. Workruit Instant Resume is here to help you create your new password.">'),$("head").append('<meta property="og:title" content="Workruit - Instant Resume | Reset your password">'),document.title="Workruit - Instant Resume | Reset your password"),$("#load-views").attr("src",location.origin+"/app/auth/"+a.split("#/")[1]+".html")):"#/login"==a||"#/signup"==a||"#/forgotpassword"==a&&localStorage.getItem(btoa("userId"))?(window.location.hash="#/home",document.title="Workruit - Instant Resume | Create your resume",$("meta[name=description]").remove(),$("head").append('<meta name="description" content="Welcome to your Workruit Instant Resume dashboard. Just select your template, add your details and share your resume instantly.">'),$("#load-views").attr("src",location.origin+"/app/auth/"+a.split("#/")[1]+".html")):"#/home"==a?(document.title="Workruit - Instant Resume | Create your resume",$("meta[name=description]").remove(),$("head").append('<meta name="description" content="Welcome to your Workruit Instant Resume dashboard. Just select your template, add your details and share your resume instantly.">'),$("#load-views").attr("src",location.origin+"/app/dashboard/"+a.split("#/")[1]+".html")):"#/share"==a?(document.title="Workruit - Instant Resume | Share your resume",$("meta[name=description]").remove(),$("head").append('<meta name="description" content="Workruit Instant Resume has brought you the ability to share your resume instantly with the recruiter by sharing your personalized URL.">'),$("#load-views").attr("src",location.origin+"/app/dashboard/"+a.split("#/")[1]+".html")):"#/orders"==a?(document.title="Workruit - Instant Resume | Orders history",$("meta[name=description]").remove(),$("head").append('<meta name="description" content="Checkout your Workruit\'s premium plan order history here. ">'),$("#load-views").attr("src",location.origin+"/app/dashboard/o-history.html")):"#/account"==a&&(document.title="Workruit - Instant Resume | My account",window.location.hash="#/account",$("meta[name=description]").remove(),$("head").append('<meta name="description" content="Welcome to your Workruit Instant Resume\'s  account section. Its your account, make changes as you like.">'),$("#load-views").attr("src",location.origin+"/app/dashboard/"+a.split("#/")[1]+".html"));var i=document.getElementById("load-views"),s=i.contentWindow?i.contentWindow.document||i.contentDocument:"";!s&&window.frames["load-views"]&&(s=window.frames["load-views"].window.document),s&&s.title&&(document.title=s.title),console.log("doc2",s),$(".loading-container").delay(1e3).fadeOut()}else if(console.log("main shareParameter",a,a.indexOf("#")),a&&a.length>4){$(".mainPage").remove(),$(".resume-pdf-view").removeClass("d-none");var d=baseApiUrl+"user/getShareFile?name="+a;a||(window.location=location.origin+"/404.html"),$.get(d,function(t){if("failed"===t.status)"Page not found"==t.msg.title||"Alert Message"==t.msg.title?($("#resume-un-available-error-view").load(location.origin+"/app/includes/na-pdf-error.html"),setTimeout(function(){$(".create-resume-text .title").text(t.msg.title),$(".create-resume-text .description").text(t.msg.description),$(".back_button").removeClass("d-none"),$("#resume-un-available-error-view").removeClass("d-none"),$("#load-views").attr("src","").addClass("d-none"),$(".loading-container").delay(1e3).fadeOut()},1e3)):($("#resume-error-view p").text(t.msg.description),$("#resume-error-view").removeClass("d-none"),$(".loading-container").delay(1e3).fadeOut());else{!window.matchMedia("only screen and (max-width: 780px)").matches||detectMob()?fetch(t.data).then(e=>e.blob()).then(e=>{var o=new FileReader;o.readAsDataURL(e),o.onloadend=function(){document.getElementById("pdfViewer").src=t.data,$("#pdfViewer").removeClass("d-none"),$(".loading-container").delay(1e3).fadeOut()}}):setTimeout(function(){e=t.data,renderPDF(e,document.getElementById("pdfPreview")),$("#pdfPreview").removeClass("d-none"),$("#load-views").remove(),$(".loading-container").delay(1e3).fadeOut()},2e3)}})}else!function(e,t,o,r,n,a){e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1782822,hjsv:6},n=t.getElementsByTagName("head")[0],(a=t.createElement("script")).async=1,a.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,n.appendChild(a)}(window,document),$(".resume-pdf-view").remove(),$(".loading-container").delay(1e3).fadeOut();$(".zoom_in_canvas").on("click",function(){$("#pdfPreview").empty(),renderPDF(e,document.getElementById("pdfPreview"),{scale:5})}),$(".zoom_out_canvas").on("click",function(){}),$(".fit_screen").on("click",function(){})}else!function(e,t,o,r,n,a){e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1782822,hjsv:6},n=t.getElementsByTagName("head")[0],(a=t.createElement("script")).async=1,a.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,n.appendChild(a)}(window,document),$("#load-views").attr("src","").addClass("d-none"),$(".loading-container").delay(1e3).fadeOut()}),$(document).ready(function(){$(this).scrollTop(0)}),setTimeout(function(){"https://devresume.workruit.com"===location.origin?location_live="https://devresume.workruit.com":"https://stageresume.workruit.com"===location.origin?location_live="https://stageresume.workruit.com":location_live="https://resume.workruit.com",$(".resume_path").attr("href",location_live)},1e3),setTimeout(function(){"https://devresume.workruit.com"===location.origin?location_workruit="https://dev.workruit.com":(location.origin,location_workruit="https://workruit.com"),$(".workruit_path").attr("href",location_workruit),$(".workruit_download").attr("href",location_workruit+"/download.html")},1500),setTimeout(()=>{var e=(new Date).getFullYear();$("#year").text(e);var t="https://devresume.workruit.com"===location.origin?"https://devapp.workruit.com/":"https://app.workruit.com/#/",o="https://devresume.workruit.com"===location.origin?"https://devapp.workruit.com/#/signup":"https://app.workruit.com/#/signup",r="https://devresume.workruit.com"===location.origin?"https://dev.workruit.com/applicant.html":"https://workruit.com/applicant.html",n="https://devresume.workruit.com"===location.origin?"https://dev.workruit.com/government.html":"https://www.workruit.com/government.html";$("#emp_login a").attr("href",t),$("#emp_singup a").attr("href",o),$("#applicant a").attr("href",r),$("#gov a").attr("href",n)},1e3);