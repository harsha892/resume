/*! minified version file */

var web_version=5;if("https://devresume.workruit.com"==window.location.origin){var baseUrl="https://devapi.workruit.com",appUrl="",devDomainUrl="https://resume.workruit.com",prodDomainUrl="https://resume.workruit.com",baseApiUrl="https://devapi.workruit.com/api/",apiAdminUrl="https://devapi.workruit.com/admin",apiUrl="https://devapi.workruit.com/api",baseResumeApiUrl="https://devapi.workruit.com/resume/";document.addEventListener("contextmenu",e=>e.preventDefault()),console.log=function(){}}else if("https://stageresume.workruit.com"==window.location.origin){baseUrl="https://stageapi.workruit.com",appUrl="",devDomainUrl="https://stageresume.workruit.com",prodDomainUrl="https://stageresume.workruit.com",baseApiUrl="https://stageapi.workruit.com/api/",apiAdminUrl="https://stageapi.workruit.com/admin",apiUrl="https://stageapi.workruit.com/api",baseResumeApiUrl="https://stageapi.workruit.com/resume/";document.addEventListener("contextmenu",e=>e.preventDefault()),console.log=function(){}}else if("https://resume.workruit.com"==window.location.origin){baseUrl="https://apiv2.workruit.com",appUrl="",devDomainUrl="https://resume.workruit.com",prodDomainUrl="https://resume.workruit.com",baseApiUrl="https://apiv2.workruit.com/api/",apiAdminUrl="https://apiv2.workruit.com/admin",apiUrl="https://apiv2.workruit.com/api",baseResumeApiUrl="https://apiv2.workruit.com/resume/";document.addEventListener("contextmenu",e=>e.preventDefault()),console.log=function(){}}else baseUrl="https://devapi.workruit.com",appUrl="",devDomainUrl="https://resume.workruit.com",prodDomainUrl="https://resume.workruit.com",baseApiUrl="https://devapi.workruit.com/api/",apiAdminUrl="https://devapi.workruit.com/admin",apiUrl="https://devapi.workruit.com/api",baseResumeApiUrl="https://devapi.workruit.com/resume/";var appDate2=new Date,authToken="94b51cc4-0c99-11e7-93ae-92361f002671",sessionId=getSessionId();function getSessionId(){return atob(localStorage.getItem(btoa("sessionId_"+window.location.origin)))}function getWebVersion(){return localStorage.getItem("appVersion")}function setAppVersion(){localStorage.setItem("appVersion",web_version)}var locationPaths={homePage:"/app/dashboard/home.html"},serviceUrls={post:{loginResumeUser:"loginResumeUser",signupResume:"signupResume",resetPasswordLinkToEmailResume:"resetPasswordLinkToEmailResume",updateShareName:"updateShareName",updateResumeUserPassword:"updateResumeUserPassword",resetPasswordResumeUser:"resetPasswordResumeUser",uploadFile:"uploadFile",updateProfileResume:"updateProfileResume",resume_html_to_pdf:"http://jobsext.workruit.com/resume_html_to_pdf"},get:{resUserLogout:"resUserLogout",emailVerificationForResumeUser:"employeer/emailVerificationForResumeUser/"}},resumeServiceUrls={post:{priceCalculation:"/priceCalculation"},get:{getResumePlans:"getResumePlans",getCollegesInfo:"getCollegesInfo",getPaytmChecksum:"/getPaytmChecksum",checkUserStatus:"/checkUserStatus",getTxnHistory:"/getTxnHistory",getOrderInfo:"/getOrderInfo",resendEmail:"/resendEmail",getInvoice:"getInvoice",templateInfo:"templateInfo"}},messages={emailVerified:"Please verify your email",emailVerifiedAtCart:"Please verify your email, to continue this service.",emailVerifiedMessageSent:"Mail sent successfully, please check you mail",shareUrlLengthError:"Username should be between 6 to 20 characters.",shareUrlFormatError:"Username contains only alphabets and numerics.",shareUrlEditInfo:"Username can be edited only once. Please click on “OK” if you would like to make the changes.",editorBack:"You have made few changes to your resume which are not saved yet. Do you want to save these changes?"};function getUserId(){return JSON.parse(localStorage.getItem("userId"))}var editorColors=[{title:"green",color:"#3ebb64",color_font:"#ffffff"},{title:"old_blue",color:"#337ab7",color_font:"#ffffff"},{title:"blue",color:"#FF647C",color_font:"#ffffff"},{title:"pink",color:"#005C86",color_font:"#ffffff"},{title:"red",color:"#809BFF",color_font:"#ffffff"},{title:"black",color:"#2f2f2f",color_font:"#ffffff"}],fonts=[{fontFamily:"Lato",fontInfo:"lato",normal:400,bold:700},{fontFamily:"Source Sans Pro",fontInfo:"Source_Sans_Pro",normal:400,bold:600},{fontFamily:"Merriweather",fontInfo:"merriweather",normal:400,bold:700},{fontFamily:"Roboto",fontInfo:"roboto",normal:400,bold:500},{fontFamily:"Saira Semi Condensed",fontInfo:"Saira_Semi_Condensed",normal:400,bold:600},{fontFamily:"Nunito",fontInfo:"nunito",normal:400,bold:600},{fontFamily:"Open Sans",fontInfo:"open_sans",normal:400,bold:600}];function loadPage(e,t,o){o&&analytics.logEvent(o),t?window.top.location.href=window.location.origin+"/"+e:"/app/order/cart.html"==window.location.pathname||"/app/payment/success.html"==window.location.pathname||"/app/payment/failed.html"==window.location.pathname||"/app/payment/pending.html"==window.location.pathname||"/app/dashboard/templates.html"==window.location.pathname||"/app/dashboard/coverletters.html"==window.location.pathname?(window.location.hash=e,window.location.href=window.location.origin+"/"+e):"/app/dashboard/home.html"!==window.location.pathname||"/app/dashboard/account.html"!==window.location.pathname||"/app/dashboard/o-history.html"!==window.location.pathname?(window.top.location.hash=e,window.top.location.href=window.location.origin+"/"+e,window.top.location.reload(!0)):(window.location.hash=e,window.location.href=window.location.origin+"/"+e)}function getUserId(){return localStorage.getItem(btoa("userId"))?JSON.parse(atob(localStorage.getItem(btoa("userId")))):null}function getAllDegrees(){return localStorage.getItem(btoa("allDegrees"))?atob(localStorage.getItem(btoa("allDegrees"))):null}function getJobFunctionsArray(){return localStorage.getItem(btoa("allJobFunctions"))?atob(localStorage.getItem(btoa("allJobFunctions"))):null}function getSelectedTemplate(){return localStorage.getItem(btoa("userTemplate"))?atob(localStorage.getItem(btoa("userTemplate"))):null}function getUserPlanInfo(){return localStorage.getItem(btoa("userPlanInfo"))?atob(localStorage.getItem(btoa("userPlanInfo"))):null}function reloadPage(){var e={user_id:getUserId(),version:web_version};console.log("payload",e),doPostWithEncrypt(baseApiUrl+"updateVersion",e).then(e=>{console.log(e),"Updated successfully!"==e.status&&(hideNotification(),setAppVersion(),window.location.reload(!0))})}function hideNotification(){$("#refreshPopUp").addClass("d-none").removeClass("d-flex")}function b64toBlob(e,t,o){t=t||"",o=o||512;for(var a=atob(e),i=[],s=0;s<a.length;s+=o){for(var r=a.slice(s,s+o),n=new Array(r.length),l=0;l<r.length;l++)n[l]=r.charCodeAt(l);var c=new Uint8Array(n);i.push(c)}return new Blob(i,{type:t})}var urlParams=new URLSearchParams(window.location.search);function getParameterByName(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}function detectMob(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(e=>navigator.userAgent.match(e))}async function isIncognito(){var e;if("storage"in navigator&&"estimate"in navigator.storage){const{usage:t,quota:o}=await navigator.storage.estimate();console.log(`Using ${t} out of ${o} bytes.`),e=o<1655701505}else e=null;return console.log("is_private",e),e}var defaultUserResumeObj={firstname:"",pic:"",user_website:"",userJobTitle:"",user_twitter:"",coverLetter:"",email:"",deviceType:"NA",user_blog:"",user_linkdin:"",telephone:"",current_salary:0,user_github:"",lastname:"111",user_behance:"",expDisplay:"",location:"",gender:"",date_of_birth:"",interests:"",certifications:"",refferences:"",jobfunctions:[],jobFunctionsArray:[""],academic:[{endDate:"",startDate:"",institution:"",isPresent:0,role:"",location:"",projectTitle:"",description:""}],experience:[{endDate:"",startDate:"",jobTitle:"",isPresent:0,location:"",company:"",description:""}],education:[{endDate:"",startDate:"",fieldOfStudy:"",institution:"",isPresent:0,location:"",degree:-1,degreeTitle:"",description:""}],certifications_data:[{endDate:"",startDate:"",courseName:"",organization:""}],languages:[{lng_percentage:"50",lngName:""}],skill:[{skillId:-1,skillName:"",skill_percentage:75},{skillId:-1,skillName:"",skill_percentage:75}],themeOptions:{template_1:{color:"#3EBB64",font:"Lato",fontTitle:"Lato",settings:[{dataText:"s-aboutme",text:"About Me",isexist:1,status:"false"},{dataText:"s-achievements",text:"Achievements",isexist:1,status:"false"},{dataText:"s-birthday",text:"Birthday",isexist:1,status:"false"},{dataText:"s-blog",text:"Blog",isexist:0,status:"false"},{dataText:"s-certifications",text:"Certifications",isexist:1,status:"false"},{dataText:"s-designation",text:"Designation",isexist:1,status:"false"},{dataText:"s-education",text:"Education",isexist:1,status:"false"},{dataText:"s-gender",text:"Gender",isexist:1,status:"false"},{dataText:"s-github",text:"Github",isexist:1,status:"false"},{dataText:"s-hobbies",text:"Hobbies",isexist:1,status:"false"},{dataText:"s-job-function",text:"Job Function",isexist:1,status:"false"},{dataText:"s-languages",text:"Languages",isexist:1,status:"false"},{dataText:"s-linkedin",text:"LinkedIn",isexist:1,status:"false"},{dataText:"s-projects",text:"Projects",isexist:1,status:"false"},{dataText:"s-skills",text:"Skills",isexist:1,status:"false"},{dataText:"s-twitter",text:"Twitter",isexist:1,status:"false"},{dataText:"s-website",text:"Website",isexist:1,status:"false"},{dataText:"s-work-experience",text:"Work Experience",isexist:1,status:"false"},{dataText:"s-years-of-experience",text:"Years of experience",isexist:1,status:"false"}]}},template:"template_1"};window.onhashchange=function(){var e=window.location.href.split("#/")[1]?"#/"+window.location.href.split("#/")[1]:window.location.href.split(location.origin+"/#")[1];console.log("onhashchange shareParameter",e),void 0==e?window.location.href=window.location.origin:loadPage(e,!e)},window.onload=function(){-1!=window.location.href.search(".html")&&-1!=window.location.href.search("#/")&&(window.location.href=window.location.href.split("#/")[0])};