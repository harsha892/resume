/*! minified version file */

$(document).ready(function(){var{subscribedUser:t,planId:e}=resumeObj.planDetails,n=(resumeObj.themeOptions,'<page size="a4" class="wrapper d-flex resume-body" data-page="0" data-template="template_1" style="font-family: Lato;">\n    <div class="resume-container theme-blue w-100" data-oldcolor="#3EBB64" style="font-family: Lato;">\n        <div class="row user_profile_info remove-marin-row">\n        </div>\n        <div class="row remove-marin-row">\n            <div class="col-12 text-break left-section font-10pt">               \n            </div>\n        </div>\n    </div>\n</page>'),o=1024;function a(){$("page").each(function(){0==$(this).find(".col-12.left-section").children().length&&$(this).remove()})}function i(){$("page").each(function(){var t=$(this);$(t.find(".col-12.left-section .targetDiv").get().reverse()).each(function(){console.log({"$(this)":$(this),"$(this).position().top":$(this).position().top,"$(this).outerHeight(true)":$(this).outerHeight(!0),$defaultHeight:o});var e;$(".basic-profile-info").length&&$(".basic-profile-info").outerHeight(!0);$(this).position().top+$(this).outerHeight(!0)>o&&($("page:last").each(function(){$(this).find(".col-12.left-section").outerHeight()>o&&($(this).after(n),console.log(":: $('page:last') ::",$("page:last")),$("page").css({"font-family":$(".page-font .selected-font").attr("data-font")}),$(".sub-header").css({"font-family":$(".title-headers .selected-font").attr("data-font")}),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage())}),$(this).prependTo(t.next().find(".col-12.left-section")),1==$(this).find(".data-active").length&&(e=$(".data-active"),setTimeout(function(){e.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()},0)))})}),$(".resume-container").css("font-family",$("page").css("font-family"))}function s(){$("page").each(function(){var t=$(this);t.find(".col-12.left-section .targetDiv").each(function(){var e=t.prev().find(".col-12.left-section .targetDiv:last").index()+1,n=$(this).index()+1;$(".basic-profile-info").length&&$(".basic-profile-info").outerHeight(!0);$(this).outerHeight(!0)+t.prev().find(".col-12.left-section").outerHeight(!0)<=o&&e+n==e+1&&$(this).appendTo(t.prev().find(".col-12.left-section"))}),i()})}$("body").on("click focus",function(){$("[data-content]").removeClass("data-active")}),$("body").on("click focus","[data-content]",function(t){$("[data-content]").removeClass("data-active"),$(this).addClass("data-active"),t.stopPropagation()}),1==$("page").length&&$(document).on("change",function(){i(),s(),a()}),$(document).on("click",function(){0==$(".data-active").text().length&&(s(),a())}),$("body").on("click",".page-font-items",function(){i(),s()}),$("body").on("click",".title-font-items",function(){i(),s()}),$(document).on("mouseover",function(){}),$(document).on("input paste",function(){i()}),$(document).on("keyup",function(t){if(8==t.keyCode){!function(t){for(var e=0;e<t;e++)s(),a()}(2)}}),$(document).on("keydown",function(t){90===t.which&&t.ctrlKey&&!t.shiftKey&&setTimeout(function(){s(),a()},500),90===t.which&&t.ctrlKey&&t.shiftKey}),$("body").on("click",".action-item",function(t){t.preventDefault(),$("#to-location").hasClass("d-none")&&(s(),a()),$("#app-location").hasClass("d-none")&&(s(),a()),$("#to-company").hasClass("d-none")&&(s(),a()),$("#to-title").hasClass("d-none")&&(s(),a()),$("#app-date").hasClass("d-none")&&(s(),a()),$("#app-name").hasClass("d-none")&&(s(),a()),$("#email").hasClass("d-none")&&(s(),a()),$("#phonenNumber").hasClass("d-none")&&(s(),a()),$("#app-linkedin").hasClass("d-none")&&(s(),a()),$("#app-location").hasClass("d-none")&&(s(),a()),$("#app-job-function").hasClass("d-none")&&(s(),a()),$("#app-job-function").insertAfter(".user_title"),$("#email").appendTo($(".first_row")),$("#app-location").insertAfter("#email"),$("#phonenNumber").appendTo($(".second_row")),$("#app-linkedin").insertAfter("#phonenNumber"),$("#date").insertAfter(".cover_letter_title"),$("#app-name").insertAfter(".cover_letter_to"),$("#app-designation").insertAfter("#app-name"),$("#to-company").insertAfter("#app-designation"),$("#to-location").insertAfter("#to-company"),$("#to-title").insertAfter("#to-location"),$("#to-description").insertAfter("#to-title"),i(),t.stopPropagation()})});