/*! minified version file */

$(document).ready(function(){var{subscribedUser:e,planId:t}=resumeObj.planDetails,n=(resumeObj.themeOptions,'<page size="a4" class="wrapper resume-body" data-page="0" data-template="template_1">            \n    <section class="page-inside">\n    <div class="resume-container theme-blue w-100" data-oldcolor="#3EBB64" style="font-family: Lato;">\n        <div class="row user_profile_info remove-marin-row">\n        </div>\n        <div class="row remove-marin-row">\n            <div class="col-12 text-break left-section font-10pt">\n            </div>\n        </div>\n    </div>\n    </section>\n</page>'),i=1024;function a(){$("page:last").each(function(){$(this).find(".page-inside").outerHeight()>i&&($(this).after(n),console.log(":: $('page:last') ::",$("page:last")),$("page").css({"font-family":$(".page-font .selected-font").attr("data-font")}),$(".sub-header").css({"font-family":$(".title-headers .selected-font").attr("data-font")}),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage())})}function o(){$("page").each(function(){0==$(this).find(".col-12.left-section").children().length&&$(this).remove()})}function s(e){setTimeout(function(){e.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()},0)}function l(){$("page").each(function(){var e=$(this);$("#app-work-experience, #app-education, #app-projects, #app-certification").each(function(){$(this).find(".border-dashed").not("h4, .border-dashed:eq(0)").insertAfter(this).addClass("targetDiv px_1")});var t='<div class="row targetDiv skills-row px-1">\n                <div class="col-3 user_info"></div>\n                <div class="col-9">\n                    <div class="row m-0"></div>\n                </div>\n            </div>';$("#app-skills .skills_item").length>3&&($("#app-skills").after(t),$("#app-skills .skills_item:eq(2)").nextAll(".skills_item").appendTo($("#app-skills").next(".skills-row").find(".col-9 .row"))),$(".skills-row:not(#app-skills .skills-row)").each(function(){$(this).find(".skills_item").length>3&&($(this).after(t),$(this).find(".skills_item:eq(2)").nextAll(".skills_item").appendTo($(this).next(".skills-row").find(".col-9 .row")))});var n='<div class="row targetDiv lang-row px-1">\n                <div class="col-3 user_info left-item mb_7"></div>\n                <div class="col-9">\n                    <div class="row m-0"></div>\n                </div>\n            </div>';$("#app-languages .lang_details").length>3&&($("#app-languages").after(n),$("#app-languages .lang_details:eq(2)").nextAll(".lang_details").appendTo($("#app-languages").next(".lang-row").find(".col-9 .row"))),$(".lang-row:not(#app-languages .lang-row)").each(function(){$(this).find(".lang_details").length>3&&($(this).after(n),$(this).find(".lang_details:eq(2)").nextAll(".lang_details").appendTo($(this).next(".lang-row").find(".col-9 .row")))}),$(e.find(".col-12.left-section .targetDiv").get().reverse()).each(function(){e.find(".personal_info").length&&$(this).position().top+$(this).outerHeight()+$(".personal_info ").outerHeight()>i&&(a(),$(this).prependTo(e.next().find(".col-12.left-section")),1==$(this).find(".data-active").length&&s($(".data-active"))),0==e.find(".personal_info").length&&$(this).position().top+$(this).outerHeight()>i&&(a(),$(this).prependTo(e.next().find(".col-12.left-section")),1==$(this).find(".data-active").length&&s($(".data-active")))})}),$(".resume-container").css("font-family",$("page").css("font-family"))}function c(){$("page").each(function(){var e=$(this);0==$("#app-work-experience").find(".professional-experience").length&&$(".professional-experience").eq(0).appendTo("#app-work-experience").removeClass("targetDiv"),0==$("#app-education").find(".education-details").length&&$(".education-details").eq(0).appendTo("#app-education").removeClass("targetDiv"),0==$("#app-projects").find(".academic-project").length&&$(".academic-project").eq(0).appendTo("#app-projects").removeClass("targetDiv"),0==$("#app-certification").find(".certification-project").length&&$(".certification-project").eq(0).appendTo("#app-certification").removeClass("targetDiv"),$("#app-skills .skills_item").length<3&&$("#app-skills").next(".skills-row").find(".skills_item:first").appendTo("#app-skills .col-9 .row"),$(".skills-row:not(#app-skills .skills-row)").each(function(){0==$(this).find(".skills_item").length&&$(this).remove(),$(this).find(".skills_item").length<3&&$(this).next(".skills-row").find(".skills_item:first").appendTo($(this).find(".col-9 .row"))}),e.find(".skills-row:last").find(".skills_item").length<3&&e.next().find(".skills_item:first").appendTo(e.find(".skills-row:last .col-9 .row")),$("#app-languages .lang_details").length<3&&$("#app-languages").next(".lang-row").find(".lang_details:first").appendTo("#app-languages .col-9 .row"),$(".lang-row:not(#app-languages .lang-row)").each(function(){0==$(this).find(".lang_details").length&&$(this).remove(),$(this).find(".lang_details").length<3&&$(this).next(".lang-row").find(".lang_details:first").appendTo($(this).find(".col-9 .row"))}),e.find(".lang-row:last").find(".lang_details").length<3&&e.next().find(".lang_details:first").appendTo(e.find(".lang-row:last .col-9 .row")),e.find(".col-12.left-section .targetDiv").each(function(){var t=e.prev().find(".col-12.left-section .targetDiv:last").index()+1,n=$(this).index()+1;e.prev().find(".personal_info").length&&$(this).outerHeight()+e.prev().find(".col-12.left-section").outerHeight()+$(".personal_info ").outerHeight()<=i&&t+n==t+1&&$(this).appendTo(e.prev().find(".col-12.left-section")),0==e.prev().find(".personal_info").length&&$(this).outerHeight()+e.prev().find(".col-12.left-section").outerHeight()<=i&&t+n==t+1&&$(this).appendTo(e.prev().find(".col-12.left-section"))})})}$("body").on("click focus",function(){$("[data-content]").removeClass("data-active")}),$("body").on("click focus","[data-content]",function(e){$("[data-content]").removeClass("data-active"),$(this).addClass("data-active"),e.stopPropagation()}),1==$("page").length&&$(document).on("change",function(){l(),c(),o()}),$("body").on("click","[data-content]",function(){$("[data-content]").removeClass("active"),$(this).addClass("active")}),$("body").on("click",".add_icon, .remove_icon",function(){$("[data-content]").removeClass("active")}),$("body").on("click",function(){var e=$(this).find("[data-content].active");1==e.length&&0==e.text().length&&(c(),o())}),$(document).on("click",".add_icon",function(){l()}),$("body").on("click",".page-font-items",function(){l(),c(),o()}),$("body").on("click",".title-font-items",function(){l(),c(),o()}),$(document).on("mouseover",function(){}),$(document).on("click",".remove_icon",function(){c(),o()}),$(document).on("input paste",function(){l()}),$(document).on("keyup",function(e){if(8==e.keyCode){!function(e){for(var t=0;t<e;t++)c(),o()}(2)}}),$(document).on("keydown",function(e){90===e.which&&e.ctrlKey&&!e.shiftKey&&setTimeout(function(){c(),o()},500),90===e.which&&e.ctrlKey&&e.shiftKey}),$("body").on("click",".action-item",function(e){e.preventDefault(),$("#app-work-experience").hasClass("d-none")?($(".professional-experience").addClass("d-none"),c(),o()):$(".professional-experience").removeClass("d-none"),$("#app-education").hasClass("d-none")?($(".education-details").addClass("d-none"),c(),o()):$(".education-details").removeClass("d-none"),$("#app-projects").hasClass("d-none")?($(".academic-project").addClass("d-none"),c(),o()):$(".academic-project").removeClass("d-none"),$("#app-skills").hasClass("d-none")?($(".skills-row").addClass("d-none"),c(),o()):$(".skills-row").removeClass("d-none"),$("#app-certification").hasClass("d-none")?($(".certification-project").addClass("d-none"),c(),o()):$(".certification-project").removeClass("d-none"),$("#app-achievements, #app-hobbies").hasClass("d-none")&&(c(),o()),$("#app-languages").hasClass("d-none")?($(".lang-row").addClass("d-none"),c(),o()):$(".lang-row").removeClass("d-none"),$(".social-item.linkedin").insertAfter(".social-item.location"),$(".social-item.github").insertAfter(".social-item.linkedin"),$(".social-item.twitter").insertAfter(".social-item.github"),$(".social-item.website").insertAfter(".social-item.twitter"),$("#app-skills").insertAfter("#resume-memo"),$(".skills-row").length>1&&$(".skills-row").not("#app-skills .skills-row").insertAfter("#app-skills"),$("#app-work-experience").insertAfter("#app-skills"),$(".skills-row").length>1&&$("#app-work-experience").insertAfter(".skills-row:last"),$(".professional-experience").length>1&&$(".professional-experience").not("#app-work-experience .professional-experience").insertAfter("#app-work-experience"),$("#app-education").insertAfter("#app-work-experience"),$(".professional-experience").length>1&&$("#app-education").insertAfter(".professional-experience:last"),$(".education-details").length>1&&$(".education-details").not("#app-education .education-details").insertAfter("#app-education"),$("#app-projects").insertAfter("#app-education"),$(".education-details").length>1&&$("#app-projects").insertAfter(".education-details:last"),$(".academic-project").length>1&&$(".academic-project").not("#app-projects .academic-project").insertAfter("#app-projects"),$("#app-certification").insertAfter("#app-projects"),$(".academic-project").length>1&&$("#app-certification").insertAfter(".academic-project:last"),$(".certification-project").length>1&&$(".certification-project").not("#app-certification .certification-project").insertAfter("#app-certification"),$("#app-achievements").insertAfter("#app-certification"),$(".certification-project").length>1&&$("#app-achievements").insertAfter(".certification-project:last"),$("#app-hobbies").insertAfter("#app-achievements"),$("#app-languages").insertAfter("#app-hobbies"),$(".lang-row").length>1&&$(".lang-row").not("#app-languages .lang-row").insertAfter("#app-languages"),l(),e.stopPropagation()})});