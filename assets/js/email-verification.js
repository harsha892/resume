/*! minified version file */

var parameters=window.location.search.split("/"),emailVerificationId=parameters[0].substring(1),companyName="workruit",userId=parameters[2];console.log(emailVerificationId,companyName,userId),doGetWithAuthKey(baseUrl+"/"+serviceUrls.get.emailVerificationForResumeUser+emailVerificationId+"/"+companyName+"/123").then(e=>{console.log({response:e}),"success"==e.status?($(".success-email").removeClass("d-none"),sessionId?loadPage("#/home",!0):loadPage("#/login",!0)):($(".failed-email,.back_button").removeClass("d-none"),$(".failed-email h1").text(e.msg.description),"oops action already taken"!=e.msg.title&&$(".failed-email .resendEmail").removeClass("d-none"))}),$(".resendEmail").click(function(){doGetWithOutAuth(baseResumeApiUrl+"user/"+userId+resumeServiceUrls.get.resendEmail).then(e=>{console.log(e,"response"),$(".failed-email").removeClass("d-none"),$(".failed-email h1").text(e.msg.description),$(".resendEmail").addClass("d-none")})});