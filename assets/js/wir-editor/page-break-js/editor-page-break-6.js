/*! minified version file */

$(document).ready(function(){var{subscribedUser:e,planId:t}=resumeObj.planDetails,i=(resumeObj.themeOptions,'<page size="a4" class="wrapper d-flex resume-body" data-page="0">\n    <div class="resume-container w-100" data-oldcolor="#3EBB64">\n        <div class="row user_profile_info remove-marin-row">\n        </div>\n        <div class="row remove-marin-row">\n            <div class="col-4 text-break left-section font-10pt"></div>\n            <div class="col-8 section-right" id="resume-body-content"></div>\n        </div>\n    </div>\n</page>'),n=1024;function a(){$("page:last").each(function(){$(this).find(".section-right").outerHeight(!0)>n&&($(this).after(i),console.log(":: $('page:last') ::",$("page:last")),$("page").css({"font-family":$(".page-font .selected-font").attr("data-font")}),$(".sub-header").css({"font-family":$(".title-headers .selected-font").attr("data-font")}),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage()),$(this).find(".col-4.left-section").outerHeight(!0)>n&&($(this).after(i),console.log(":: $('page:last') ::",$("page:last")),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage())})}function o(){$("page").each(function(){var e=$(this).find(".col-4.left-section").children(),t=$(this).find(".section-right").children();0==e.length&&0==t.length&&$(this).remove()})}function s(e){setTimeout(function(){e.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()},0)}function c(){$("page").each(function(){var e=$(this),t=0==$(".section_line").length?0:$(".section_line").outerHeight(!0);e.find("#app-skills, #app-languages, #app-work-experience, #app-education, #app-projects, #app-certification").each(function(){$(this).find(".border-dashed").not("h4, .border-dashed:eq(0)").insertAfter(this),$(this).nextAll(".border-dashed").addClass("targetDiv")}),$(e.find(".col-4.left-section .targetDiv").get().reverse()).each(function(){$(this).position().top+$(this).outerHeight(!0)+t>n&&(a(),$(this).prependTo(e.next().find(".col-4.left-section")),1==$(this).find(".data-active").length&&s($(".data-active")))}),$(e.find(".section-right .targetDiv").get().reverse()).each(function(){$(this).position().top+$(this).outerHeight(!0)+t>n&&(a(),$(this).prependTo(e.next().find(".section-right")),1==$(this).find(".data-active").length&&s($(".data-active")))})})}function r(){$("page").each(function(){var e=$(this),t=0==$(".section_line").length?0:$(".section_line").outerHeight(!0);0==$("#app-work-experience").find(".professional-experience").length&&$(".professional-experience").eq(0).appendTo("#app-work-experience").removeClass("targetDiv"),0==$("#app-education").find(".education-details").length&&$(".education-details").eq(0).appendTo("#app-education").removeClass("targetDiv"),0==$("#app-projects").find(".academic-project").length&&$(".academic-project").eq(0).appendTo("#app-projects").removeClass("targetDiv"),0==$("#app-certification").find(".certification-project").length&&$(".certification-project").eq(0).appendTo("#app-certification").removeClass("targetDiv"),0==$("#app-skills").find(".skills_item").length&&$(".skills_item").eq(0).appendTo("#app-skills").removeClass("targetDiv"),0==$("#app-languages").find(".lang_details").length&&$(".lang_details").eq(0).appendTo("#app-languages").removeClass("targetDiv"),e.find(".col-4.left-section .targetDiv").each(function(){var i=e.prev().find(".col-4.left-section .targetDiv:last").index()+1,a=$(this).index()+1;$(this).outerHeight(!0)+e.prev().find(".col-4.left-section").outerHeight(!0)+t<=n&&i+a==i+1&&$(this).appendTo(e.prev().find(".col-4.left-section"))}),e.find(".section-right .targetDiv").each(function(){var i=e.prev().find(".section-right .targetDiv:last").index()+1,a=$(this).index()+1;$(this).outerHeight(!0)+e.prev().find(".section-right").outerHeight(!0)+t<=n&&i+a==i+1&&$(this).appendTo(e.prev().find(".section-right"))})})}$("body").on("click focus",function(){$("[data-content]").removeClass("data-active")}),$("body").on("click focus","[data-content]",function(e){$("[data-content]").removeClass("data-active"),$(this).addClass("data-active"),e.stopPropagation()}),1==$("page").length&&$(document).on("change",function(){c(),r(),o()}),$(document).on("click",function(){0==$(".data-active").text().length&&(r(),o())}),$(document).on("click",".add_icon",function(){c()}),$("body").on("click",".page-font-items",function(){c(),r()}),$("body").on("click",".title-font-items",function(){c(),r()}),$(document).on("mouseover",function(){}),$(document).on("click",".remove_icon",function(){r(),o()}),$(document).on("input paste",function(){c()}),$(document).on("keyup",function(e){if(8==e.keyCode){!function(e){for(var t=0;t<e;t++)r(),o()}(2)}}),$(document).on("keydown",function(e){90===e.which&&e.ctrlKey&&!e.shiftKey&&setTimeout(function(){r(),o()},500),90===e.which&&e.ctrlKey&&e.shiftKey}),$("body").on("click",".action-item",function(e){e.preventDefault(),$(".personal-info").insertAfter(".app-user-image"),$("#app-designation").insertAfter(".personal-info"),$("#app-years-of-experience").insertAfter("#app-designation"),$("#app-location").insertAfter("#app-years-of-experience"),$("#app-gender").insertAfter("#app-birthday"),$(".social-item.phone").insertAfter(".social_info"),$(".social-item.location").insertAfter(".social-item.phone"),$(".social-item.linkedin").insertAfter(".social-item.location"),$(".social-item.github").insertAfter(".social-item.linkedin"),$(".social-item.twitter").insertAfter(".social-item.github"),$(".social-item.website").insertAfter(".social-item.twitter"),$("#app-skills").insertAfter(".social-item.website"),$(".skills-item").length>1&&$(".skills-item").not("#app-skills .skills-item").insertAfter("#app-skills"),$("#app-languages").insertAfter("#app-skills"),$(".skills-item").length>1&&$("#app-languages").insertAfter(".skills-item:last"),$(".professional-experience").length>1&&$(".professional-experience").not("#app-work-experience .professional-experience").insertAfter("#app-work-experience"),$("#app-education").insertAfter("#app-work-experience"),$(".professional-experience").length>1&&$("#app-education").insertAfter(".professional-experience:last"),$(".education-details").length>1&&$(".education-details").not("#app-education .education-details").insertAfter("#app-education"),$("#app-projects").insertAfter("#app-education"),$(".education-details").length>1&&$("#app-projects").insertAfter(".education-details:last"),$(".academic-project").length>1&&$(".academic-project").not("#app-projects .academic-project").insertAfter("#app-projects"),$("#app-certification").insertAfter("#app-projects"),$(".academic-project").length>1&&$("#app-certification").insertAfter(".academic-project:last"),$(".certification-project").length>1&&$(".certification-project").not("#app-certification .certification-project").insertAfter("#app-certification"),$("#app-achievements").insertAfter("#app-certification"),$(".certification-project").length>1&&$("#app-achievements").insertAfter(".certification-project:last"),$("#app-hobbies").insertAfter("#app-achievements"),$("#app-work-experience").hasClass("d-none")?($(".professional-experience").addClass("d-none"),r(),o()):($(".professional-experience").removeClass("d-none"),c()),$("#app-education").hasClass("d-none")?($(".education-details").addClass("d-none"),r(),o()):($(".education-details").removeClass("d-none"),c()),$("#app-projects").hasClass("d-none")?($(".academic-project").addClass("d-none"),r(),o()):($(".academic-project").removeClass("d-none"),c()),$("#app-skills").hasClass("d-none")?($(".skills-item").addClass("d-none"),r(),o()):($(".skills-item").removeClass("d-none"),c()),$("#app-certification").hasClass("d-none")?($(".certification-project").addClass("d-none"),r(),o()):($(".certification-project").removeClass("d-none"),c()),$("#app-achievements, #app-hobbies").hasClass("d-none")?(r(),o()):c(),$("#resume-memo").hasClass("d-none")||$(".app-user-image").hasClass("d-none")||$("#app-job-function").hasClass("d-none")||$("#app-linkedin").hasClass("d-none")||$("#app-github").hasClass("d-none")||$("#app-twitter").hasClass("d-none")||$("#app-website").hasClass("d-none")?c():(r(),o()),$("#app-languages").hasClass("d-none")?($(".lang_details").addClass("d-none"),r(),o()):($(".lang_details").removeClass("d-none"),c()),e.stopPropagation()})});