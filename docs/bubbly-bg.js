"use strict";window.bubbly=function(t){var i=t||{},o=function(){return Math.random()},e=document.createElement("canvas");document.body.appendChild(e),e.setAttribute("style","position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"),e.width=window.innerWidth,e.height=window.innerHeight;var r=e.getContext("2d"),h=r.createLinearGradient(0,0,e.width,e.height);h.addColorStop(0,i.colorStart||"#25A6E1"),h.addColorStop(1,i.colorStop||"#176EB5"),r.shadowColor=i.shadowColor||"#fff",r.shadowBlur=i.blur||4;for(var n=i.bubbles||Math.floor(.02*(e.width+e.height)),a=[],l=0;l<n;l++)a.push({f:(i.bubbleFunc||function(){return"hsla(0, 0%, 100%, "+.1*o()+")"}).call(),x:o()*e.width,y:o()*e.height,r:4+o()*e.width/25,a:o()*Math.PI*2,v:.1+.5*o()});!function t(){!1!==i.animate&&requestAnimationFrame(t),r.globalCompositeOperation="source-over",r.fillStyle=h,r.fillRect(0,0,e.width,e.height),r.globalCompositeOperation=i.compose||"lighter",a.forEach(function(t){r.beginPath(),r.arc(t.x,t.y,t.r,0,2*Math.PI),r.fillStyle=t.f,r.fill(),t.x+=Math.cos(t.a)*t.v,t.y+=Math.sin(t.a)*t.v,t.x-t.r>e.width&&(t.x=-t.r),t.x+t.r<0&&(t.x=e.width+t.r),t.y-t.r>e.height&&(t.y=-t.r),t.y+t.r<0&&(t.y=e.height+t.r)})}()};