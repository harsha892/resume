/*! minified version file */

$(document).ready(function(){var{subscribedUser:e,planId:a}=resumeObj.planDetails,t=(resumeObj.themeOptions,'<page size="a4" class="wrapper d-flex resume-body" data-page="0" data-template="template_1" style="font-family: Lato;">\n    <div class="resume-container theme-blue w-100" data-oldcolor="#3EBB64" style="font-family: Lato;">\n        <div class="row user_profile_info remove-marin-row">\n        </div>\n        <div class="row remove-marin-row">\n            <div class="col-12 text-break left-section font-10pt">               \n            </div>\n        </div>\n    </div>\n</page>'),i=1024;function s(){$("page").each(function(){0==$(this).find(".col-12.left-section").children().length&&$(this).remove()})}function n(){$("page").each(function(){var e=$(this);$("#app-work-experience, #app-projects, #app-certification").each(function(){$(this).find(".border-dashed").not("h4, .border-dashed:eq(0)").insertAfter(this).addClass("targetDiv ml-2")}),$("#app-education .border-dashed").length>1&&($("#app-education").after("<div class='table-div targetDiv  ml-2'>                <table class='w-100 table-bordered table_dark_border table-row-edu'/></div>"),$("#app-education .border-dashed:eq(0)").nextAll(".border-dashed").appendTo($("#app-education").next(".table-div").find(".table-row-edu"))),$(".table-div:not(#app-skills .table-div)").each(function(){$(this).find(".border-dashed").length>1&&($(this).after("<div class='table-div targetDiv ml-2'>                    <table class='w-100 table-bordered table_dark_border table-row-edu'/></div>"),$(this).find(".border-dashed:eq(0)").nextAll(".border-dashed").appendTo($(this).next(".table-div").find(".table-row-edu"))),$(".table-div").removeClass("mb_10"),$(".table-div:last").addClass("mb_10")}),$("#app-skills .skills-item").length>4&&($("#app-skills").after('<div class="row ml-2 targetDiv skills-row m-0 mb_10" />'),$("#app-skills .skills-item:eq(3)").nextAll(".skills-item").appendTo($("#app-skills").next(".skills-row"))),$(".skills-row:not(#app-skills .skills-row)").each(function(){$(this).find(".skills-item").length>4&&($(this).after('<div class="row ml-2 targetDiv skills-row m-0 mb_10" />'),$(this).find(".skills-item:eq(3)").nextAll(".skills-item").appendTo($(this).next(".skills-row")))}),$(".skills-row").removeClass("mb_10").addClass("mb_5"),$(".skills-row:last").addClass("mb_10").removeClass("mb_5"),$("#app-languages .lang_details").length>4&&($("#app-languages").after('<div class="row m-0 ml-3 targetDiv lang-row" />'),$("#app-languages .lang_details:eq(3)").nextAll(".lang_details").appendTo($("#app-languages").next(".lang-row"))),$(".lang-row:not(#app-languages .lang-row)").each(function(){$(this).find(".lang_details").length>4&&($(this).after('<div class="row m-0 ml-3 targetDiv lang-row" />'),$(this).find(".lang_details:eq(3)").nextAll(".lang_details").appendTo($(this).next(".lang-row"))),$(".lang-row").removeClass("mb_10").addClass("mb_5"),$(".lang-row:last").addClass("mb_10").removeClass("mb_5")}),$(e.find(".col-12.left-section .targetDiv").get().reverse()).each(function(){var a;$(this).position().top+$(this).outerHeight(!0)>i&&($("page:last").each(function(){$(this).find(".col-12.left-section").outerHeight(!0)>i&&($(this).after(t),console.log(":: $('page:last') ::",$("page:last")),$("page").css({"font-family":$(".page-font .selected-font").attr("data-font")}),$(".sub-header").css({"font-family":$(".title-headers .selected-font").attr("data-font")}),$("page:last .resume-container").addClass($(".selected-color").attr("data-color")).attr("data-oldcolor",$("page:first .resume-container").attr("data-oldcolor")),addWaterMarkToPage())}),$(this).prependTo(e.next().find(".col-12.left-section")),1==$(this).find(".data-active").length&&(a=$(".data-active"),setTimeout(function(){a.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()},0)))})}),$(".resume-container").css("font-family",$("page").css("font-family"))}function o(){$("page").each(function(){var e=$(this);0==$("#app-work-experience").find(".professional-experience").length&&$(".professional-experience").eq(0).appendTo("#app-work-experience").removeClass("targetDiv"),0==$("#app-education").find(".table-row-edu .table-div").length&&($(".table-row-edu .table-div").eq(0).appendTo("#app-education .table-row-edu").removeClass("targetDiv"),0==$(".table-div .table-row-edu").children()&&$(".table-div .table-row-edu").remove()),0==$("#app-projects").find(".academic-project").length&&$(".academic-project").eq(0).appendTo("#app-projects").removeClass("targetDiv"),0==$("#app-certification").find(".certification-project").length&&$(".certification-project").eq(0).appendTo("#app-certification").removeClass("targetDiv"),$("#app-skills .skills-item").length<4&&$("#app-skills").next(".skills-row").find(".skills-item:first").appendTo("#app-skills .skills-row .row"),$(".skills-row:not(#app-skills .skills-row)").each(function(){0==$(this).find(".skills-item").length&&$(this).remove(),$(this).find(".skills-item").length<4&&$(this).next(".skills-row").find(".skills-item:first").appendTo(this)}),e.find(".skills-row:last").find(".skills-item").length<4&&e.next().find(".skills-item:first").appendTo(e.find(".skills-row:last")),$("#app-languages .lang_details").length<4&&$("#app-languages").next(".lang-row").find(".lang_details:first").appendTo("#app-languages .lang-row .row"),$(".lang-row:not(#app-languages .lang-row)").each(function(){0==$(this).find(".lang_details").length&&$(this).remove(),$(this).find(".lang_details").length<4&&$(this).next(".lang-row").find(".lang_details:first").appendTo(this)}),e.find(".lang-row:last").find(".lang_details").length<4&&e.next().find(".lang_details:first").appendTo(e.find(".lang-row:last")),e.find(".col-12.left-section .targetDiv").each(function(){var a=e.prev().find(".col-12.left-section .targetDiv:last").index()+1,t=$(this).index()+1;$(this).outerHeight(!0)+e.prev().find(".col-12.left-section").outerHeight(!0)<=i&&a+t==a+1&&$(this).appendTo(e.prev().find(".col-12.left-section"))})})}$("body").on("click focus",function(){$("[data-content]").removeClass("data-active")}),$("body").on("click focus","[data-content]",function(e){$("[data-content]").removeClass("data-active"),$(this).addClass("data-active"),e.stopPropagation()}),1==$("page").length&&$(document).on("change",function(){n(),o(),s()}),$(document).on("click",function(){0==$(".data-active").text().length&&(o(),s())}),$(document).on("click",".add_icon",function(){n()}),$(document).on("mouseover",function(){}),$(document).on("click",".remove_icon",function(){o(),s()}),$(document).on("input paste",function(){n()}),$("body").on("click",".page-font-items",function(){n(),o(),s()}),$("body").on("click",".title-font-items",function(){n(),o(),s()}),$(document).on("keyup",function(e){if(8==e.keyCode){!function(e){for(var a=0;a<e;a++)o(),s()}(2)}}),$(document).on("keydown",function(e){90===e.which&&e.ctrlKey&&!e.shiftKey&&setTimeout(function(){o(),s()},500),90===e.which&&e.ctrlKey&&e.shiftKey}),$("body").on("click",".action-item",function(e){e.preventDefault(),$("#app-work-experience").hasClass("d-none")?($(".professional-experience").addClass("d-none"),o(),s()):$(".professional-experience").removeClass("d-none"),$("#app-education").hasClass("d-none")?($(".table-div").addClass("d-none"),o(),s()):$(".table-div").removeClass("d-none"),$("#app-projects").hasClass("d-none")?($(".academic-project").addClass("d-none"),o(),s()):$(".academic-project").removeClass("d-none"),$("#app-skills").hasClass("d-none")?($(".skills-row").addClass("d-none"),o(),s()):$(".skills-row").removeClass("d-none"),$("#app-certification").hasClass("d-none")?($(".certification-project").addClass("d-none"),o(),s()):$(".certification-project").removeClass("d-none"),$("#app-achievements, #app-hobbies").hasClass("d-none")&&(o(),s()),$("#app-languages").hasClass("d-none")?($(".lang-row").addClass("d-none"),o(),s()):$(".lang-row").removeClass("d-none"),$(".social-item.linkedin").hasClass("d-none")&&$(".social-item.github").hasClass("d-none")&&$(".social-item.twitter").hasClass("d-none")&&$(".social-item.website").hasClass("d-none")?($(".social_info").addClass("d-none"),$(".socail-second-row").addClass("d-none")):($(".social_info").insertAfter("#app-languages"),$(".social_info").removeClass("d-none"),$(".socail-second-row").removeClass("d-none")),$(".social-item.website").hasClass("d-none")?($(".socail-second-row  .right-social").addClass("d-none"),o(),s()):$(".socail-second-row  .right-social").removeClass("d-none"),$(".social-item.twitter").hasClass("d-none")?($(".socail-second-row  .left-social").addClass("d-none"),o(),s()):$(".socail-second-row  .left-social").removeClass("d-none"),$(".social-item.github").hasClass("d-none")?($(".social_info .row .left-social").addClass("d-none"),o(),s()):$(".social_info .row .left-social").removeClass("d-none"),$(".social-item.linkedin").hasClass("d-none")?($(".social_info .row .left-social").addClass("d-none"),o(),s()):$(".social_info .row .left-social").removeClass("d-none"),$("#app-skills").insertAfter("#resume-memo"),$(".skills-row").length>1&&$(".skills-row").not("#app-skills .skills-row").insertAfter("#app-skills"),$("#app-education").insertAfter("#app-skills"),$(".skills-row").length>1&&$("#app-education").insertAfter(".skills-row:last"),$(".table-div").length>1&&$(".table-div").not("#app-education .table-div").insertAfter("#app-education"),$("#app-projects").insertAfter("#app-education"),$(".table-div").length>1&&$("#app-projects").insertAfter(".table-div:last"),$(".academic-project").length>1&&$(".academic-project").not("#app-projects .academic-project").insertAfter("#app-projects"),$("#app-work-experience").insertAfter("#app-projects"),$(".academic-project").length>1&&$("#app-work-experience").insertAfter(".academic-project:last"),$(".professional-experience").length>1&&$(".professional-experience").not("#app-work-experience .professional-experience").insertAfter("#app-work-experience"),$("#app-certification").insertAfter("#app-work-experience"),$(".professional-experience").length>1&&$("#app-certification").insertAfter(".professional-experience:last"),$(".certification-project").length>1&&$(".certification-project").not("#app-certification .certification-project").insertAfter("#app-certification"),$("#app-achievements").insertAfter("#app-certification"),$(".certification-project").length>1&&$("#app-achievements").insertAfter(".certification-project:last"),$("#app-languages").insertAfter("#app-achievements"),$(".lang-row").length>1&&$(".lang-row").not("#app-languages .lang-row").insertAfter("#app-languages"),$("#app-hobbies").insertAfter("#app-languages"),$(".lang-row").length>1&&$("#app-hobbies").insertAfter(".lang-row:last"),$(".social_info").insertAfter("#app-hobbies"),$(".social-item.linkedin").appendTo($(".social-info .left-social")),$(".social-item.github").appendTo($(".social-info .right-social")),$(".socail-second-row").insertAfter($(".social-info")),$(".social-item.twitter").appendTo($(".socail-second-row .left-social")),$(".social-item.website").appendTo($(".socail-second-row .right-social")),n(),e.stopPropagation()})});