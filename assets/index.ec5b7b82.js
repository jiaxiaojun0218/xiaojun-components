import{d as s,r as d,a as i,o as v,c as p,b as m,u as _}from"./index.d11294f3.js";const F=s({__name:"index",setup(C){const l=d([{title:"\u8D2D\u7269",start:"2022-06-11 10:00:00",end:"2022-06-19 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2022-11-15 08:00:00",end:"2022-11-15 16:00:00"}]),u=e=>{console.log(e.dateStr);const t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"\u5403\u996D"};l.value.push(t)};let a=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),c=n[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),o=n[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return t.innerHTML=`
        <img src="/vite.svg" style="width:20px;height:20px;">
         <div>\u5F00\u59CB\u65F6\u95F4: ${c}</div>
         <div>\u7ED3\u675F\u65F6\u95F4: ${o}</div>
         <div>\u6807\u9898: ${e.event._def.title}</div>
        `,{domNodes:[t]}};const r=e=>{};return(e,t)=>{const n=i("m-calendar");return v(),p("div",null,[m(n,{events:l.value,onDateClick:u,onEventClick:r,eventContent:_(a)},null,8,["events","eventContent"])])}}});export{F as default};
