/*! minified version file */

const userInfo=JSON.parse(decrypt(localStorage.getItem(encrypt("userData",localStorage.getItem(btoa("sessionId_"+window.location.origin)))),localStorage.getItem(btoa("sessionId_"+window.location.origin))));if(userInfo&&(userInfo.planDetails.subscribedUser?$("#shareNavItem a").attr("data-toggle","").attr("data-target","").attr("href",location.origin+"/app/dashboard/share.html"):$("#shareNavItem a").attr("data-toggle","modal").attr("data-target","#upgrade")),"/app/order/cart.html"==location.pathname){var priceCalculationObj={planInfo:JSON.parse(atob(window.location.search.split("?")[1])),promoId:"",user_planId:""};4===priceCalculationObj.planInfo.planId&&(console.log("i am here before plane id;"),console.log("i am here before frame;"),$(".upgrade-btn").css("display","none"),console.log("i am here after frame;"))}"/app/order/payment-status.html"===location.pathname&&$(".upgrade-btn").addClass("d-none");var userId=userData.userId;$("#userName").text(userInfo.firstname+" "+userInfo.lastname),$("#UserEmail").text(userInfo.email),userInfo.pic?$("#profileMenu img").attr("src",userInfo.pic):$("#profileMenu img").attr("src",location.origin+"/assets/images/avatar.png"),$("body").click("#signOut",function(){doGetWithEncrypt(baseApiUrl+"user/"+userInfo.userId+"/"+localStorage.getItem("sessionId")+"/"+serviceUrls.get.resUserLogout).then(a=>{localStorage.clear(),window.location.href=window.origin+"/app/auth/login.html"})});