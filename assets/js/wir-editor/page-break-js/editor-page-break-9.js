/*! minified version file */

$(document).ready(function(){var{subscribedUser:e,planId:t}=resumeObj.planDetails,a=(resumeObj.themeOptions,'<page size="a4" class="wrapper resume-body" data-page="0" data-template="template_1" style="font-family: Lato;">            \n    <section class="page-inside">\n    <div class="resume-container theme-blue w-100" data-oldcolor="#3EBB64" style="font-family: Lato;">\n        <div class="row remove-marin-row">\n            <div class="col-12 text-break left-section font-10pt">\n            </div>\n        </div>\n    </div>\n    </section>\n</page>'),n=1024;function i(){$("page").each(function(){0==$(this).find(".col-12.left-section").children().length&&$(this).remove()})}function s(){$("page").each(function(){var e=$(this);$("#app-work-experience, #app-education, #app-projects, #app-certification").each(function(){$(this).find(".border-dashed").not("h4, .border-dashed:eq(0)").insertAfter(this).addClass("targetDiv px_1")});var t='<div class="row targetDiv skills-row px-1">\n                <div class="col-3 user_info"></div>\n                <div class="col-9">\n                    <div class="row"></div>\n                </div>\n            </div>';$("#app-skills .skills_item").length>2&&($("#app-skills").after(t),$("#app-skills .skills_item:eq(1)").nextAll(".skills_item").appendTo($("#app-skills").next(".skills-row").find(".col-9 .row"))),$(".skills-row:not(#app-skills .skills-row)").each(function(){$(this).find(".skills_item").length>2&&($(this).after(t),$(this).find(".skills_item:eq(1)").nextAll(".skills_item").appendTo($(this).next(".skills-row").find(".col-9 .row")))}),$(".skills-row").addClass("mb_10"),$(".skills-row").length>1&&($(".skills-row").removeClass("mb_10"),$(".skills-row:last").addClass("mb_10"));var i='<div class="row targetDiv lang-row px-1">\n                <div class="col-3 user_info left-item"></div>\n                <div class="col-9">\n                    <div class="row"></div>\n                </div>\n            </div>';$("#app-languages .lang_details").length>2&&($("#app-languages").after(i),$("#app-languages .lang_details:eq(1)").nextAll(".lang_details").appendTo($("#app-languages").next(".lang-row").find(".col-9 .row"))),$(".lang-row:not(#app-languages .lang-row)").each(function(){$(this).find(".lang_details").length>2&&($(this).after(i),$(this).find(".lang_details:eq(1)").nextAll(".lang_details").appendTo($(this).next(".lang-row").find(".col-9 .row")))}),$(".lang-row").addClass("mb_10"),$(".lang-row").length>1&&($(".lang-row").removeClass("mb_10"),$(".lang-row:last").addClass("mb_10")),$(e.find(".col-12.left-section .targetDiv").get().reverse()).each(function(){var t;$(this).position().top+$(this).outerHeight()>n&&($("page:last").each(function(){$(this).find(".col-12.left-section").outerHeight()>n&&($(this).after(a),console.log(":: $('page:last') ::",$("page:last")),$("page").css({"font-family":$(".page-font .selected-font").attr("data-font")}),$(".sub-header").css({"font-family":$(".title-headers .selected-font").attr("data-font")}),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage())}),$(this).prependTo(e.next().find(".col-12.left-section")),1==$(this).find(".data-active").length&&(t=$(".data-active"),setTimeout(function(){t.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()},0)))})}),$(".resume-container").css("font-family",$("page").css("font-family"))}function o(){$("page").each(function(){var e=$(this);0==$("#app-work-experience").find(".professional-experience").length&&$(".professional-experience").eq(0).appendTo("#app-work-experience").removeClass("targetDiv px-1"),0==$("#app-education").find(".education-details").length&&$(".education-details").eq(0).appendTo("#app-education").removeClass("targetDiv px-1"),0==$("#app-projects").find(".academic-project").length&&$(".academic-project").eq(0).appendTo("#app-projects").removeClass("targetDiv px-1"),0==$("#app-certification").find(".certification-project").length&&$(".certification-project").eq(0).appendTo("#app-certification").removeClass("targetDiv px-1"),$("#app-skills .skills_item").length<2&&$("#app-skills").next(".skills-row").find(".skills_item:first").appendTo("#app-skills .col-9 .row"),$(".skills-row:not(#app-skills .skills-row)").each(function(){0==$(this).find(".skills_item").length&&$(this).remove(),$(this).find(".skills_item").length<2&&$(this).next(".skills-row").find(".skills_item:first").appendTo($(this).find(".col-9 .row"))}),e.find(".skills-row:last").find(".skills_item").length<2&&e.next().find(".skills_item:first").appendTo(e.find(".skills-row:last .col-9 .row")),$(".skills-row").addClass("mb_10"),$(".skills-row").length>1&&($(".skills-row").removeClass("mb_10"),$(".skills-row:last").addClass("mb_10")),$("#app-languages .lang_details").length<2&&$("#app-languages").next(".lang-row").find(".lang_details:first").appendTo("#app-languages .col-9 .row"),$(".lang-row:not(#app-languages .lang-row)").each(function(){0==$(this).find(".lang_details").length&&$(this).remove(),$(this).find(".lang_details").length<2&&$(this).next(".lang-row").find(".lang_details:first").appendTo($(this).find(".col-9 .row"))}),e.find(".lang-row:last").find(".lang_details").length<2&&e.next().find(".lang_details:first").appendTo(e.find(".lang-row:last .col-9 .row")),$(".lang-row").addClass("mb_10"),$(".lang-row").length>1&&($(".lang-row").removeClass("mb_10"),$(".lang-row:last").addClass("mb_10")),e.find(".col-12.left-section .targetDiv").each(function(){var t=e.prev().find(".col-12.left-section .targetDiv:last").index()+1,a=$(this).index()+1;$(this).outerHeight()+e.prev().find(".col-12.left-section").outerHeight()<=n&&t+a==t+1&&$(this).appendTo(e.prev().find(".col-12.left-section"))})})}$("body").on("click focus",function(){$("[data-content]").removeClass("data-active")}),$("body").on("click focus","[data-content]",function(e){$("[data-content]").removeClass("data-active"),$(this).addClass("data-active"),e.stopPropagation()}),1==$("page").length&&$(document).on("change",function(){s(),i()}),$("body").on("click","[data-content]",function(){$("[data-content]").removeClass("active"),$(this).addClass("active")}),$("body").on("click",".add_icon, .remove_icon",function(){$("[data-content]").removeClass("active")}),$("body").on("click",function(){var e=$(this).find("[data-content].active");1==e.length&&0==e.text().length&&(o(),i())}),$(document).on("click",".add_icon",function(){s()}),$("body").on("click",".page-font-items",function(){s(),o(),i()}),$("body").on("click",".title-font-items",function(){s(),o(),i()}),$(document).on("mouseover",function(){}),$(document).on("click",".remove_icon",function(){o(),i()}),$(document).on("input paste",function(){s()}),$(document).on("keyup",function(e){if(8==e.keyCode){!function(e){for(var t=0;t<e;t++)o(),i()}(2)}}),$(document).on("keydown",function(e){90===e.which&&e.ctrlKey&&!e.shiftKey&&setTimeout(function(){o(),i()},500),90===e.which&&e.ctrlKey&&e.shiftKey}),$("body").on("click",".action-item",function(e){e.preventDefault(),$("#app-work-experience").hasClass("d-none")?($(".professional-experience").addClass("d-none"),o(),i()):$(".professional-experience").removeClass("d-none"),$("#app-education").hasClass("d-none")?($(".education-details").addClass("d-none"),o(),i()):$(".education-details").removeClass("d-none"),$("#app-projects").hasClass("d-none")?($(".academic-project").addClass("d-none"),o(),i()):$(".academic-project").removeClass("d-none"),$("#app-skills").hasClass("d-none")?($(".skills-row").addClass("d-none"),o(),i()):$(".skills-row").removeClass("d-none"),$("#app-certification").hasClass("d-none")?($(".certification-project").addClass("d-none"),o(),i()):$(".certification-project").removeClass("d-none"),$("#app-achievements, #app-hobbies").hasClass("d-none")&&(o(),i()),$("#app-languages").hasClass("d-none")?($(".lang-row").addClass("d-none"),o(),i()):$(".lang-row").removeClass("d-none"),$(".social-item.linkedin").insertAfter(".social-item.phone"),$(".social-item.github").insertAfter(".social-item.location"),$(".social-item.twitter").insertAfter(".social-item.linkedin"),$(".social-item.website").insertAfter(".social-item.github"),$("#app-work-experience").insertAfter("#resume-memo"),$(".professional-experience").length>1&&$(".professional-experience").not("#app-work-experience .professional-experience").insertAfter("#app-work-experience"),$("#app-education").insertAfter("#app-work-experience"),$(".professional-experience").length>1&&$("#app-education").insertAfter(".professional-experience:last"),$(".education-details").length>1&&$(".education-details").not("#app-education .education-details").insertAfter("#app-education"),$("#app-projects").insertAfter("#app-education"),$(".education-details").length>1&&$("#app-projects").insertAfter(".education-details:last"),$(".academic-project").length>1&&$(".academic-project").not("#app-projects .academic-project").insertAfter("#app-projects"),$(".academic-project").length>1?$("#app-skills").insertAfter(".academic-project:last"):$("#app-skills").insertAfter("#app-projects"),$(".skills-row").length>1&&($(".skills-row").not("#app-skills .skills-row").insertAfter("#app-skills"),$("#app-languages").insertAfter(".skills-rows:last")),$(".skills-row").length>1?$("#app-language").insertAfter(".skills-row:last"):$("#app-languages").insertAfter("#app-skills"),$(".lang-row").length>1&&$(".lang-row").not("#app-languages .lang-row").insertAfter("#app-languages"),$("#app-certification").insertAfter("#app-languages"),$(".lang-row").length>1&&$("#app-certification").insertAfter(".lang-row:last"),$(".certification-project").length>1&&$(".certification-project").not("#app-certification .certification-project").insertAfter("#app-certification"),$("#app-achievements").insertAfter("#app-certification"),$(".certification-project").length>1&&$("#app-achievements").insertAfter(".certification-project:last"),$("#app-hobbies").insertAfter("#app-achievements"),s(),e.stopPropagation()})});