/*! <TmodJS> <MD5:317552408a6dc2c6ae18c19958f00d8d>*/
template("./public/footer",function(i,e){var t=this,n=i.time,r=t.$escape,include=function(n,r){r=r||i;var u=t.$include(n,r,e);return void 0!==u?(l+=u,u):void 0},l="";return l+='<div id="footer"> ',n&&(l+=" <p class='time'>",l+=r(n),l+="</p> "),l+=" ",include("../copyright"),l+=" </div>",new String(l)});