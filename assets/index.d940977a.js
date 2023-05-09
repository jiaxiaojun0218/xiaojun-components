import{d,r as i,a as s,o as p,c,b as e,w as a,e as n}from"./index.d11294f3.js";const m={style:{cursor:"pointer"}},x=d({__name:"index",setup(D){const o=[{prop:"name",label:"\u59D3\u540D",align:"left"},{prop:"sex",label:"\u6027\u522B",align:"left"},{prop:"date",label:"\u65E5\u671F",align:"left"},{prop:"address",label:"\u5730\u5740",align:"left"},{label:"\u64CD\u4F5C",action:!0,align:"center"}],t=i([]);setTimeout(()=>{t.value=[{name:"\u59DA\u660E",sex:"\u7537",date:"2016-05-03",address:"\u4E2D\u56FD-\u4E0A\u6D77"},{name:"\u6613\u5EFA\u8054",sex:"\u7537",date:"2016-05-03",address:"\u4E2D\u56FD-\u5E7F\u4E1C"},{name:"\u5B59\u60A6",sex:"\u5973",date:"2016-05-03",address:"\u4E2D\u56FD-\u4E0A\u6D77"},{name:"\u79D1\u6BD4",sex:"\u7537",date:"2016-05-03",address:"\u4E2D\u56FD-\u4E0A\u6D77"}]},1e3);const l=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;return(_,g)=>{const u=s("el-button"),r=s("m-table");return p(),c("div",m,[e(r,{options:o,data:t.value,border:"",stripe:"",elementLoadingText:"\u52A0\u8F7D\u4E2D...",elementLoadingBackground:"rgba(0,0,0,.8)","element-loading-svg":l,"element-loading-svg-view-box":"-10, -10, 50, 50"},{action:a(b=>[e(u,{size:"small",type:"primary"},{default:a(()=>[n("\u7F16\u8F91")]),_:1}),e(u,{size:"small",type:"danger"},{default:a(()=>[n("\u5220\u9664")]),_:1})]),_:1},8,["data"])])}}});export{x as default};
