/*! minified version file */

function data(){return userResumeData}const userId=data().userId,userStatus="true";let resumeObj=data();var newResumeObj=JSON.parse(JSON.stringify(data())),selectedTemplate=resumeObj.template?resumeObj.template:"template_1";const exp_total_count=10,edu_total_count=10,proj_total_count=10,planInfo=resumeObj.planDetails;var PdfHtml="",downloadPdfUrl="";let resumePreviewUrl=null;var waterMarkImagePath;const waterMarkCss={background:'url("'+(waterMarkImagePath="https://devresume.workruit.com"==window.location.origin?"https://devresume.workruit.com":"https://stageresume.workruit.com"==window.location.origin?"https://stageresume.workruit.com":"https://devresume.workruit.com")+'/assets/images/resume/watermarkworkruit.png")',"background-repeat":"no-repeat","background-color":"#fff","background-position":"center center","background-size":"45%"},pdfWaterMarkCss={background:'url("'+waterMarkImagePath+'/assets/images/resume/watermarkworkruit.png") #fff no-repeat',"background-position":"center","background-size":"40%"},waterMarkCss2={background:'url("'+waterMarkImagePath+'/assets/images/resume/watermarkworkruit.png") #fff no-repeat',"background-position":"center center","background-size":"40%"};var validateStyleCopy=function(){return!1};$("body").on("paste",'[contenteditable="true"]',function(e){e.preventDefault();var t=(e.originalEvent||e).clipboardData.getData("text/plain");document.execCommand("inserttext",!1,t)});