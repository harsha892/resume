/*! minified version file */

function restartConversation(){$("#userInput").prop("disabled",!0),$(".collapsible").remove(),"undefined"!=typeof chatChart&&chatChart.destroy(),$(".chart-container").remove(),"undefined"!=typeof modalChart&&modalChart.destroy(),$(".chats").html(""),$(".usrInput").val(""),send("/restart")}function action_trigger(){$.ajax({url:`https://chatbot.workruit.com:8443/conversations/${user_id}/execute`,type:"POST",contentType:"application/json",data:JSON.stringify({name:action_name,policy:"MappingPolicy",confidence:"0.98"}),success:function(e,t){console.log("Response from Rasa: ",e,"\nStatus: ",t),e.hasOwnProperty("messages")&&setBotResponse(e.messages),$("#userInput").prop("disabled",!1)},error:function(e,t,a){setBotResponse(""),console.log("Error from bot end: ",t),$("#userInput").prop("disabled",!1)}})}function setUserResponse(e){$('<img class="userAvatar" alt="userAvatar" src=../../../assets/images/chat-boat/userAvatar.jpg><p class="userMsg">'+e+' </p><div class="clearfix"></div>').appendTo(".chats").show("slow"),$(".usrInput").val(""),scrollToBottomOfResults(),showBotTyping(),$(".suggestions").remove()}function scrollToBottomOfResults(){var e=document.getElementById("chats");e.scrollTop=e.scrollHeight}function send(e){$.ajax({url:"https://pdfgen.workruit.com:8443/webhooks/rest/webhook",type:"POST",contentType:"application/json",data:JSON.stringify({message:e,sender:user_id}),success:function(t,a){console.log("Response from Rasa: ",t,"\nStatus: ",a),"/restart"!=e.toLowerCase()?setBotResponse(t):$("#userInput").prop("disabled",!1)},error:function(t,a,o){e.toLowerCase(),setBotResponse(""),console.log("Error from bot end: ",a)}})}function setBotResponse(e){setTimeout(function(){if(hideBotTyping(),e.length<1){var t='<img class="botAvatar" alt="sara_avatar" src="../../../assets/images/chat-boat/sara_avatar.png"/><p class="botMsg">I am facing some issues, please try again later!!!</p><div class="clearfix"></div>';$(t).appendTo(".chats").hide().fadeIn(1e3),scrollToBottomOfResults()}else{for(i=0;i<e.length;i++){if(e[i].hasOwnProperty("text")){t='<img class="botAvatar" src="../../../assets/images/chat-boat/sara_avatar.png"/><p class="botMsg">'+e[i].text+'</p><div class="clearfix"></div>';$(t).appendTo(".chats").hide().fadeIn(1e3)}if(e[i].hasOwnProperty("image")){t='<div class="singleCard"><img class="imgcard"  alt="imgcard" src="'+e[i].image+'"></div><div class="clearfix">';$(t).appendTo(".chats").hide().fadeIn(1e3)}if(e[i].hasOwnProperty("buttons")&&addSuggestion(e[i].buttons),e[i].hasOwnProperty("attachment")&&"video"==e[i].attachment.type){video_url=e[i].attachment.payload.src;t='<div class="video-container"> <iframe src="'+video_url+'" frameborder="0" allowfullscreen></iframe> </div>';$(t).appendTo(".chats").hide().fadeIn(1e3)}if(e[i].hasOwnProperty("custom")){if("quickReplies"==e[i].custom.payload)return quickRepliesData=e[i].custom.data,void showQuickReplies(quickRepliesData);if("pdf_attachment"==e[i].custom.payload)return void renderPdfAttachment(e[i]);if("dropDown"==e[i].custom.payload)return dropDownData=e[i].custom.data,void renderDropDwon(dropDownData);if("location"==e[i].custom.payload)return $("#userInput").prop("disabled",!0),getLocation(),void scrollToBottomOfResults();if(isItCard=!!e[i].custom&&e[i].custom,"generic"==isItCard.attachment.payload.template_type)return restaurantsData=isItCard.attachment.payload.elements,showCardsCarousel(restaurantsData),void setBotResponse([e[e.length-1]]);if("chart"==e[i].custom.payload)return chartData=e[i].custom.data,title=chartData.title,labels=chartData.labels,backgroundColor=chartData.backgroundColor,chartsData=chartData.chartsData,chartType=chartData.chartType,displayLegend=chartData.displayLegend,void createChart(title,labels,backgroundColor,chartsData,chartType,displayLegend);"collapsible"==e[i].custom.payload&&(data=e[i].custom.data,createCollapsible(data))}}scrollToBottomOfResults()}},500)}function renderPdfAttachment(e){pdf_url=e.custom.url,pdf_title=e.custom.title,pdf_attachment='<div class="pdf_attachment"><div class="row"><div class="col s3 pdf_icon"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></div><div class="col s9 pdf_link"><a href="'+pdf_url+'" target="_blank">'+pdf_title+" </a></div></div></div>",$(".chats").append(pdf_attachment),scrollToBottomOfResults()}function renderDropDwon(e){var t="";for(i=0;i<e.length;i++)t+='<option value="'+e[i].value+'">'+e[i].label+"</option>";var a='<div class="dropDownMsg"><select class="browser-default dropDownSelect"> <option value="" disabled selected>Choose your option</option>'+t+"</select></div>";$(".chats").append(a),scrollToBottomOfResults(),$("select").change(function(){var e="",t="";$("select option:selected").each(function(){t+=$(this).text(),e+=$(this).val()}),setUserResponse(t),send(e),$(".dropDownMsg").remove()})}function addSuggestion(e){setTimeout(function(){var t=e,a=e.length;for($(' <div class="singleCard"> <div class="suggestions"><div class="menu"></div></div></diV>').appendTo(".chats").hide().fadeIn(1e3),i=0;i<a;i++)$('<div class="menuChips" data-payload=\''+t[i].payload+"'>"+t[i].title+"</div>").appendTo(".menu");scrollToBottomOfResults()},1e3)}function showCardsCarousel(e){var t=createCardsCarousel(e);if($(t).appendTo(".chats").show(),e.length<=2)$(".cards_scroller>div.carousel_cards:nth-of-type("+a+")").fadeIn(3e3);else{for(var a=0;a<e.length;a++)$(".cards_scroller>div.carousel_cards:nth-of-type("+a+")").fadeIn(3e3);$(".cards .arrow.prev").fadeIn("3000"),$(".cards .arrow.next").fadeIn("3000")}scrollToBottomOfResults();const o=document.querySelector("#paginated_cards"),s=o.querySelector(".cards_scroller");var i=225;o.querySelector(".arrow.next").addEventListener("click",function(){s.scrollBy(i,0)}),o.querySelector(".arrow.prev").addEventListener("click",function(){s.scrollBy(-i,0)})}function createCardsCarousel(e){console.log("::::: cardsData :::",e);var t="";for(i=0;i<e.length;i++)title=e[i].title,description=e[i].subtitle,redirectLink=e[i].default_action.url,data=e[i],item='<div class="carousel_cards in-left"><img class="cardBackgroundImage" alt="cardBackgroundImage" src="'+e[i].image_url+'"><div class="cardFooter"><span class="cardTitle" title="'+title+'">'+title+'</span> <div class="cardTitle cardDescription">'+description+"</div><a href="+redirectLink+" target='_blank' class='btn btn-sm btn-primary'>View Job</a></div></div>",t+=item;return'<div id="paginated_cards" class="cards"> <div class="cards_scroller">'+t+'  <span class="arrow prev fa fa-chevron-circle-left "></span> <span class="arrow next fa fa-chevron-circle-right" ></span> </div> </div>'}function showQuickReplies(e){var t="";for(i=0;i<e.length;i++){t+='<div class="chip" data-payload=\''+e[i].payload+"'>"+e[i].title+"</div>"}$('<div class="quickReplies">'+t+'</div><div class="clearfix"></div>').appendTo(".chats").fadeIn(1e3),scrollToBottomOfResults();const a=document.querySelector(".quickReplies");let o,s,r=!1;a.addEventListener("mousedown",e=>{r=!0,a.classList.add("active"),o=e.pageX-a.offsetLeft,s=a.scrollLeft}),a.addEventListener("mouseleave",()=>{r=!1,a.classList.remove("active")}),a.addEventListener("mouseup",()=>{r=!1,a.classList.remove("active")}),a.addEventListener("mousemove",e=>{if(!r)return;e.preventDefault();const t=3*(e.pageX-a.offsetLeft-o);a.scrollLeft=s-t})}function getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(getUserPosition,handleLocationAccessError):response="Geolocation is not supported by this browser."}function getUserPosition(e){response="Latitude: "+e.coords.latitude+" Longitude: "+e.coords.longitude,console.log("location: ",response),response='/inform{"latitude":'+e.coords.latitude+',"longitude":'+e.coords.longitude+"}",$("#userInput").prop("disabled",!1),send(response),showBotTyping()}function handleLocationAccessError(e){switch(e.code){case e.PERMISSION_DENIED:console.log("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:console.log("Location information is unavailable.");break;case e.TIMEOUT:console.log("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:console.log("An unknown error occurred.")}response='/inform{"user_location":"deny"}',send(response),showBotTyping(),$(".usrInput").val(""),$("#userInput").prop("disabled",!1)}function showBotTyping(){$('<img class="botAvatar" id="botAvatar" alt="botAvatar" src="../../../assets/images/chat-boat/sara_avatar.png"/><div class="botTyping"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>').appendTo(".chats"),$(".botTyping").show(),scrollToBottomOfResults()}function hideBotTyping(){$("#botAvatar").remove(),$(".botTyping").remove()}function createCollapsible(e){for(list="",i=0;i<e.length;i++)item='<li><div class="collapsible-header">'+e[i].title+'</div><div class="collapsible-body"><span>'+e[i].description+"</span></div></li>",list+=item;var t='<ul class="collapsible">'+list+"</uL>";$(t).appendTo(".chats"),$(".collapsible").collapsible(),scrollToBottomOfResults()}function createChart(e,t,a,o,s,i){$('<div class="chart-container"> <span class="modal-trigger" id="expand" title="expand" href="#modal1"><i class="fa fa-external-link" aria-hidden="true"></i></span> <canvas id="chat-chart" ></canvas> </div> <div class="clearfix"></div>').appendTo(".chats");var r=$("#chat-chart");chatChart=new Chart(r,{type:s,data:{labels:t,datasets:[{label:e,backgroundColor:a,data:o,fill:!1}]},options:{title:{display:!0,text:e},layout:{padding:{left:5,right:0,top:0,bottom:0}},legend:{display:i,position:"right",labels:{boxWidth:5,fontSize:10}}}}),scrollToBottomOfResults()}function createChartinModal(e,t,a,o,s,i){var r=$("#modal-chart");modalChart=new Chart(r,{type:s,data:{labels:t,datasets:[{label:e,backgroundColor:a,data:o,fill:!1}]},options:{title:{display:!0,text:e},layout:{padding:{left:5,right:0,top:0,bottom:0}},legend:{display:i,position:"right"}}})}$(document).ready(function(){$("div").removeClass("tap-target-origin"),$(".dropdown-trigger").dropdown(),$(".modal").modal(),action_name="action_greet",user_id=getUserId()}),$(".usrInput").on("keyup keypress",function(e){var t=e.keyCode||e.which,a=$(".usrInput").val();if(13===t)return""==a||""==$.trim(a)?(e.preventDefault(),!1):($(".collapsible").remove(),"undefined"!=typeof chatChart&&chatChart.destroy(),$(".chart-container").remove(),"undefined"!=typeof modalChart&&modalChart.destroy(),$("#paginated_cards").remove(),$(".suggestions").remove(),$(".quickReplies").remove(),$(".usrInput").blur(),setUserResponse(a),send(a),e.preventDefault(),!1)}),$("#sendButton").on("click",function(e){var t=$(".usrInput").val();return""==t||""==$.trim(t)?(e.preventDefault(),!1):($(".chart-container").remove(),"undefined"!=typeof modalChart&&modalChart.destroy(),$(".suggestions").remove(),$("#paginated_cards").remove(),$(".quickReplies").remove(),$(".usrInput").blur(),setUserResponse(t),send(t),e.preventDefault(),!1)}),$("#profile_div").click(function(){$(".profile_div").toggle(),console.log("$(this).parents().find('#wir_chat_boat')",$("#wir_chat_boat",window.parent.document),$(this).parents().find("#wir_chat_boat")),$("#wir_chat_boat",window.parent.document).css({"min-width":"550px","min-height":"700px",right:"0",bottom:"0%"}),$(".widget").toggle()}),$(document).on("click",".menu .menuChips",function(){var e=this.innerText,t=this.getAttribute("data-payload");console.log("payload: ",this.getAttribute("data-payload")),setUserResponse(e),send(t),$(".suggestions").remove()}),$("#restart").click(function(){restartConversation()}),$("#clear").click(function(){$(".chats").fadeOut("normal",function(){$(".chats").html(""),$(".chats").fadeIn()})}),$("#close").click(function(){$(".profile_div").toggle(),$(".widget").toggle(),$("#wir_chat_boat",window.parent.document).css({"min-width":"100px","min-height":"100px",right:"-10%",bottom:"5%"}),scrollToBottomOfResults()}),$(document).on("click",".quickReplies .chip",function(){var e=this.innerText,t=this.getAttribute("data-payload");console.log("chip payload: ",this.getAttribute("data-payload")),setUserResponse(e),send(t),$(".quickReplies").remove()}),$(document).on("click","#expand",function(){createChartinModal(title,labels,backgroundColor,chartsData,chartType,displayLegend)});