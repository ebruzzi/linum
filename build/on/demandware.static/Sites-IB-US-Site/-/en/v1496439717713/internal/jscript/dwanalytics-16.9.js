if(typeof dw=="undefined"){var dw={};}if(typeof dw.__dwAnalyticsLoaded=="undefined"){dw.__dwAnalyticsLoaded=true;dw.__dwAnalytics=function(){var H=2000;var A,D={},C=document,B=navigator,E=screen,I=window,F=I.location.hostname;function J(K){return typeof K!=="undefined";}function G(R,e){var L=R+"?"||"?",a,U=C.title,g="0",h,P={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},X=false,Y=I.encodeURIComponent||escape,M=I.decodeURIComponent||unescape,b={};function Z(o,l,j,n,k,m){var i;if(j){i=new Date();i.setTime(i.getTime()+j*86400000);}C.cookie=o+"="+Y(l)+(j?";expires="+i.toGMTString():"")+";path="+(n?n:"/")+(k?";domain="+k:"")+(m?";secure":"");}function f(k){var i=new RegExp("(^|;)[ ]*"+k+"=([^;]*)"),j=i.exec(C.cookie);return j?M(j[2]):0;}function K(i){dw.__timeoutCallback=function(){for(var j=0;j<i.length;j++){var k=new Image(1,1);k.onLoad=function(){};k.src=i[j];}};setTimeout("dw.__timeoutCallback()",100);}function V(){var j,k;if(typeof B.javaEnabled!=="undefined"&&B.javaEnabled()){P.java[2]="1";}if(typeof I.GearsFactory==="function"){P.gears[2]="1";}if(B.mimeTypes&&B.mimeTypes.length){for(j in P){k=B.mimeTypes[P[j][1]];if(k&&k.enabledPlugin){P[j][2]="1";}}}}function O(){var i="";try{i=top.document.referrer;}catch(k){if(parent){try{i=parent.document.referrer;}catch(j){i="";}}}if(i===""){i=C.referrer;}return i;}function T(){var i="_pk_testcookie";if(!J(B.cookieEnabled)){Z(i,"1");return f(i)=="1"?"1":"0";}return B.cookieEnabled?"1":"0";}function W(j,p,n){var q=Math.random();var l=d(j,p,n,q);if(p!=null&&p.debugEnabled){var o="";for(var k=0;k<l.length;k++){o+=l[k][0]+'"='+l[k][1]+'"\n';}alert(o);}var m=N(j,L,l,q);K(m);}h=O();g=T();V();return{trackPageView:function(i){W(null,null,i);},trackPageViewWithProducts:function(i,k,j){W(i,k,j);}};function Q(i,k){var j=k.charAt(k.length-1)=="?"?"":"&";return k+j+i[0]+"="+i[1];}function c(i){return i[0].length+i[1].length+2;}function d(i,m,l,n){var k=[["url",Y(J(a)?a:C.location.href)],["res",E.width+"x"+E.height],["cookie",g],["ref",Y(h)],["title",Y(J(l)&&l!=null?l:U)]];for(var j in P){k.push([P[j][0],P[j][2]]);}if(i!=null&&i.dwEnabled){k.push(["dwac",n]);k.push(["cmpn",i.sourceCode]);k.push(["tz",i.timeZone]);i.category=dw.ac._category;S(i,m,k);}return k;}function S(t,l,s){s.push(["pcc",t.siteCurrency]);s.push(["pct",t.customer]);s.push(["pcat",t.category]);var r=l.productImpressions.getEntries();var p=l.productRecommendations.getEntries();var m=l.productViews.getEntries();var u=0;for(var q=0;q<r.length;q++){s.push([("pid-"+u),r[q].value.id]);s.push([("pev-"+u),"event3"]);u++;}for(var o=0;o<p.length;o++){s.push([("pid-"+u),p[o].value.id]);s.push([("pev-"+u),"event3"]);s.push([("evr4-"+u),"Yes"]);u++;}for(var n=0;n<m.length;n++){s.push([("pid-"+u),m[n].value.id]);s.push([("pev-"+u),"event4"]);u++;}}function N(o,n,m,j){var q=[];var k=n;for(var l=0;l<m.length;l++){var p=(m[l][0].slice(0,"pid-".length)=="pid-")&&(c(m[l])+((l+1)<m.length?c(m[l+1]):0)+((l+2)<m.length?c(m[l+2]):0)+k.length>H);var r=(m[l][0].slice(0,"pid-".length)!="pid-")&&(c(m[l])+k.length>H);if(p||r){q.push(k);k=Q(["dwac",j],n);if(o!=null&&o.dwEnabled){k=Q(["cmpn",o.sourceCode],k);k=Q(["tz",o.timeZone],k);k=Q(["pcc",o.siteCurrency],k);k=Q(["pct",o.customer],k);k=Q(["pcat",o.category],k);}}k=Q(m[l],k);}q.push(k);return q;}}return{getTracker:function(K){return new G(K);}};}();}