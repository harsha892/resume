/*! minified version file */

if("https://devresume.workruit.com"==window.location.origin)var shareSourceUrl="https://dev.workruit.com/#";else if("https://stageresume.workruit.com"==window.location.origin)shareSourceUrl="https://stage.workruit.com/#";else if("https://resume.workruit.com"==window.location.origin)shareSourceUrl="https://www.workruit.com/#";else shareSourceUrl="https://dev.workruit.com/#";$("#load-header").load("../includes/user-header.html");var localUserShareData,origin=window.location.origin,sourceUrl=shareSourceUrl;function userShareActionInfo(e){localUserShareData=e,e.edit_name&&($(".edit_name").addClass("d-none"),$("#shareDomain2").val(sourceUrl+e.share_name),$(".edit_name_link").removeClass("d-none")),$("#resume_piblic").attr("checked",!e.hideResume),e.planDetails.subscribedUser&&e.planDetails.validUser?($("#shareName").removeAttr("disabled"),$("#shareNameBtn").removeAttr("disabled")):!e.planDetails.validUser&&e.planDetails.subscribedUser&&($("#shareName").attr("disabled","true"),$("#shareNameBtn").attr("disabled","true")),$("#shareDomain2").val(sourceUrl+e.share_name)}$(function(){$(".account-page").paraCount(),$("#shareDomain").attr("value",sourceUrl)}),$(".loading-container").delay(1e3).fadeOut(),$("#resume_piblic").change(function(){var e={firstname:localUserShareData.firstname,lastname:localUserShareData.lastname,email:localUserShareData.email,hideResume:!this.checked};analytics.logEvent("wirw_toggleview"),doPostWithOutEncrypt(baseApiUrl+"/user/"+userId+"/"+serviceUrls.post.updateProfileResume,e).then(e=>{if("success"==e.status){var a=1==e.data.hideResume?"Now your resume is in private mode":"Now your resume is in public mode";$("#newSuccessMessageID .message-text").html(a),$("#newSuccessMessageID").html(a).fadeIn().delay(5e3).fadeOut()}})}),$("#shareNameBtn").on("click",function(){let e=$('input[name="shareName"]').val();e!==localUserShareData.share_name&&(console.log(e,e.length,"shareName"),alphanumeric(e)?e.length>=6&&e.length<=20?swal({title:"Are you sure?",text:messages.shareUrlEditInfo,icon:"warning",buttons:!0,dangerMode:!0}).then(a=>{if(a){var s={username:localUserShareData.email,sharename:e};analytics.logEvent("wirw_saveurl"),doPostWithEncrypt(baseApiUrl+serviceUrls.post.updateShareName,s).then(a=>{"Success"==a.msg.title?(localStorage.setItem(btoa("shareName_"+location.origin),encrypt(JSON.stringify(s.sharename),atob(localStorage.getItem(btoa("sessionId_"+window.location.origin))))),$("#shareDomain2").val(sourceUrl+e),$("#copyText").val(shareSourceUrl2+e),$("#copyText2").val(shareSourceUrl2+e),$(".edit_name").addClass("d-none"),$(".edit_name_link").removeClass("d-none"),$("#newSuccessMessageID .message-text").html(a.msg.description),$("#newSuccessMessageID").html(a.msg.description).fadeIn().delay(5e3).fadeOut()):($("#newErrorMessageID .message-text").html(a.msg.description),$("#newErrorMessageID").html(a.msg.description).fadeIn().delay(5e3).fadeOut()),$('input[name="shareName"]').val(JSON.parse(decrypt(localStorage.getItem(btoa("shareName_"+location.origin)),atob(localStorage.getItem(btoa("sessionId_"+window.location.origin))))))})}}):($("#newErrorMessageID .message-text").html(messages.shareUrlLengthError),$("#newErrorMessageID").html(messages.shareUrlLengthError).fadeIn().delay(5e3).fadeOut()):($("#newErrorMessageID .message-text").html(messages.shareUrlFormatError),$("#newErrorMessageID").html(messages.shareUrlFormatError).fadeIn().delay(5e3).fadeOut()))}),$("#copyLinkBtn").on("click",function(){var e=JSON.parse(decrypt(localStorage.getItem(btoa("shareName_"+location.origin)),atob(localStorage.getItem(btoa("sessionId_"+window.location.origin)))));if($("#shareName").val()){if(localUserData.edit_name)$("#copyText2").attr("value",shareSourceUrl+e),document.getElementById("copyText2").select(),document.execCommand("copy");else console.log($("#shareDomain").val()+e),$("#copyText").val($("#shareDomain").val()+e),document.getElementById("copyText").select(),document.execCommand("copy");var a="Your link is copied successfully";$("#newSuccessMessageID .message-text").html(a),$("#newSuccessMessageID").html(a).fadeIn().delay(5e3).fadeOut()}else if(!$("#shareName").val()&&localUserData.edit_name){if(localUserData.edit_name)$("#copyText2").val(shareSourceUrl+e),document.getElementById("copyText2").select(),document.execCommand("copy");a="Your link is copied successfully";$("#newSuccessMessageID .message-text").html(a),$("#newSuccessMessageID").html(a).fadeIn().delay(5e3).fadeOut()}else{var s="Please enter valid share url and save";$("#newErrorMessageID .message-text").html(s),$("#newErrorMessageID").html(s).fadeIn().delay(5e3).fadeOut()}}),$(".copy_link").on("click",function(){analytics.logEvent("wirw_copyurl");$("#newSuccessMessageID .message-text").html("Your link is copied successfully"),$("#newSuccessMessageID").html("Your link is copied successfully").fadeIn().delay(5e3).fadeOut()});