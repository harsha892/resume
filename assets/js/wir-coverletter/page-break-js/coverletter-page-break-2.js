/*! minified version file */

$(document).ready(function(){var{subscribedUser:e,planId:t}=resumeObj.planDetails,n=(resumeObj.themeOptions,'<page size="a4" class="wrapper resume-body" data-page="0" data-template="template_1">            \n    <section class="page-inside">\n    <div class="resume-container theme-blue w-100" data-oldcolor="#3EBB64" style="font-family: Lato;">\n        <div class="row user_profile_info remove-marin-row">\n        </div>\n        <div class="row remove-marin-row">\n            <div class="col-12 text-break left-section font-10pt">\n            </div>\n        </div>\n    </div>\n    </section>\n</page>'),o=1024;function a(){$("page").each(function(){0==$(this).find(".col-12.left-section").children().length&&$(this).remove()})}function i(){$("page").each(function(){var e=$(this);$(e.find(".col-12.left-section .targetDiv").get().reverse()).each(function(){var t,a=$(".personal_info").length?$(".personal_info").outerHeight(!0):0;$(this).position().top+$(this).outerHeight(!0)+a>o&&($("page:last").each(function(){$(this).find(".page-inside").outerHeight()>o&&($(this).after(n),console.log(":: $('page:last') ::",$("page:last")),$("page").css({"font-family":$(".page-font .selected-font").attr("data-font")}),$(".sub-header").css({"font-family":$(".title-headers .selected-font").attr("data-font")}),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage())}),$(this).prependTo(e.next().find(".col-12.left-section")),1==$(this).find(".data-active").length&&(t=$(".data-active"),setTimeout(function(){t.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()},0)))})}),$(".resume-container").css("font-family",$("page").css("font-family"))}function s(){$("page").each(function(){var e=$(this);e.find(".col-12.left-section .targetDiv").each(function(){var t=e.prev().find(".col-12.left-section .targetDiv:last").index()+1,n=$(this).index()+1,a=$(".personal_info").length?$(".personal_info").outerHeight(!0):0;$(this).outerHeight(!0)+e.prev().find(".col-12.left-section").outerHeight(!0)+a<=o&&t+n==t+1&&$(this).appendTo(e.prev().find(".col-12.left-section"))}),i()})}$("body").on("click focus",function(){$("[data-content]").removeClass("data-active")}),$("body").on("click focus","[data-content]",function(e){$("[data-content]").removeClass("data-active"),$(this).addClass("data-active"),e.stopPropagation()}),1==$("page").length&&$(document).on("change",function(){i(),s(),a()}),$(document).on("click",function(){0==$(".data-active").text().length&&(s(),a())}),$("body").on("click",".page-font-items",function(){i(),s()}),$("body").on("click",".title-font-items",function(){i(),s()}),$(document).on("mouseover",function(){}),$(document).on("input paste",function(){i()}),$(document).on("keyup",function(e){if(8==e.keyCode){!function(e){for(var t=0;t<e;t++)s(),a()}(2)}}),$(document).on("keydown",function(e){90===e.which&&e.ctrlKey&&!e.shiftKey&&setTimeout(function(){s(),a()},500),90===e.which&&e.ctrlKey&&e.shiftKey}),$("body").on("click",".action-item",function(e){e.preventDefault(),$("#to-location").hasClass("d-none")&&(s(),a()),$("#app-location").hasClass("d-none")&&(s(),a()),$("#to-company").hasClass("d-none")&&(s(),a()),$("#to-title").hasClass("d-none")&&(s(),a()),$("#app-date").hasClass("d-none")&&(s(),a()),$("#app-name").hasClass("d-none")&&(s(),a()),$("#email").hasClass("d-none")&&(s(),a()),$("#phonenNumber").hasClass("d-none")&&(s(),a()),$("#app-linkedin").hasClass("d-none")&&(s(),a()),$("#app-location").hasClass("d-none")&&(s(),a()),$("#app-job-function").hasClass("d-none")&&(s(),a()),$("#app-job-function").insertAfter(".user_title"),$("#email").appendTo(".social_media_row"),$("#phonenNumber").insertAfter("#email"),$("#app-location").insertAfter($("#phonenNumber")),$("#app-linkedin").insertAfter("#app-location"),$("#app-name").insertAfter(".cover_letter_title"),$("#app-designation").insertAfter("#cover_letter_to"),$("#to-company").insertAfter("#app-designation"),$("#to-location").insertAfter("#to-company"),$("#app-date").insertAfter("#to-location"),$("#to-title").insertAfter("#app-date"),$("#to-description").insertAfter("#to-title"),i(),e.stopPropagation()})});