/*! minified version file */

var firebaseConfig={apiKey:"AIzaSyAEDatljTHJ_93TRqyurWqmMpqVbvqIk9A",authDomain:"wir-dev-8de8b.firebaseapp.com",databaseURL:"https://wir-dev-8de8b.firebaseio.com",projectId:"wir-dev-8de8b",storageBucket:"wir-dev-8de8b.appspot.com",messagingSenderId:"359285942390",appId:"1:359285942390:web:689ec30907b2b64e2f5757",measurementId:"G-9BX9JJB1L8"};firebase.initializeApp(firebaseConfig),firebase.analytics();const analytics=firebase.analytics();$("body").on("click","[data-event]",function(){console.log($(this).attr("data-event"));var e=$(this).attr("data-event");analytics.logEvent(e)});