import{_ as k,T as b,r as u,o as r,c as d,e as i,A as h,w,a as n,b as s}from"./app.43064512.js";import"./index.56618267.js";import{_ as f,a as y,b as v,c as _}from"./Svelte-icon.d67041f2.js";const a=(t,c,o,e)=>({name:t,weapon:c,slams:o,birthdate:e}),A={name:"TagExamples",components:{Table:b},data(){return{rows:[a("Roger Federer","Forehand and serve",20,"August 8, 1981"),a("Andre Agassi","Return of serve. Groundstrokes",8,"April 29, 1970"),a("Steffi Graf","Forehand",22,"June 14, 1969"),a("Martina Navratilova","Serve and volley",18,"October 18, 1956"),a("Rafael Nadal","Backhand and speed",20,"June 3, 1986"),a("Althea Gibson","Speed, strength, and fluidity ",11,"August 25, 1927"),a("Novak Djokovic","Backhand and speed",20,"May 22, 1987"),a("Arthur Ashe","Serve and volley",3,"July 10, 1943")],headers:[{label:"Name",key:"name",width:"20%",sortable:!0},{label:"Weapon",key:"weapon",width:"32%"},{label:"Grand Slams",key:"slams",width:"24%",sortable:!0,renderFn:t=>`<div class="text-center">${t}<span class="mis6">\u{1F3C6}</span></div>`},{label:"Birthdate",key:"birthdate",sortable:!0,sortFn:(t,c)=>{const o=new Date(t).getTime()||-1/0,e=new Date(c).getTime()||-1/0;return o>e?1:o<e?-1:0}}]}}},x={class:"mbs24 mbe16"};function R(t,c,o,e,p,g){const l=u("Table");return r(),d("section",x,[i(l,{rows:p.rows,headers:p.headers,isHoverable:!0,caption:"My caption test"},null,8,["rows","headers"])])}var T=k(A,[["render",R]]);const S={components:{Alert:h,TableExamples:T}},mn='{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/table.md","lastUpdated":1640289142282}',I=n("h1",{id:"table",tabindex:"-1"},[s("Table "),n("a",{class:"header-anchor",href:"#table","aria-hidden":"true"},"#")],-1),N=n("p",null,[s("The "),n("code",null,"Table"),s(" component is used to display tabular formatted data appropriately.")],-1),F=n("div",{class:"mbs24"},null,-1),j=n("h2",{id:"examples",tabindex:"-1"},[s("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),C=n("div",{class:"mbe24"},null,-1),G=n("div",{class:"mbe32"},null,-1),B=n("h2",{id:"usage",tabindex:"-1"},[s("Usage "),n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),U=n("div",{class:"flex"},[n("h3",{id:"react",tabindex:"-1"},[n("img",{src:f,alt:"react logo"}),s("React ")])],-1),M=n("div",{class:"language-jsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/esm/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Table  "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-react"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" headersWithWidths "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'25%'"),n("span",{class:"token punctuation"},","),s(`
    sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Weapon'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weapon'"),n("span",{class:"token punctuation"},","),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'45%'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Grand Slams'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'slams'"),n("span",{class:"token punctuation"},","),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'13%'"),n("span",{class:"token punctuation"},","),s(`
    sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"renderFn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("key"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" textAlign"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mis6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u{1F3C6}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Birthdate'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'birthdate'"),n("span",{class:"token punctuation"},","),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'17%'"),n("span",{class:"token punctuation"},","),s(`
    sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"sortFn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" d1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" d2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("d1 "),n("span",{class:"token operator"},">"),s(" d2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("d1 "),n("span",{class:"token operator"},"<"),s(" d2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createRow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("name"),n("span",{class:"token punctuation"},","),s(" weapon"),n("span",{class:"token punctuation"},","),s(" slams"),n("span",{class:"token punctuation"},","),s(" birthdate")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token punctuation"},","),s(" weapon"),n("span",{class:"token punctuation"},","),s(" slams"),n("span",{class:"token punctuation"},","),s(" birthdate "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" rows "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},"'Serena Williams'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},`"Biggest serve in women's tennis all-time"`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token number"},"23"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'September 26, 1981'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Roger Federer'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Forehand and serve'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'August 8, 1981'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Andre Agassi'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Return of serve. Groundstrokes'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'April 29, 1970'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Steffi Graf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Forehand'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'June 14, 1969'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"YourComponent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Table")]),s(`
      `),n("span",{class:"token attr-name"},"headers"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("headersWithWidths"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token attr-name"},"rows"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("rows"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token attr-name"},"isStriped"),s(`
      `),n("span",{class:"token attr-name"},"caption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Tennis Superstars"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),D=n("p",null,[s("React: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Table.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Table.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),$=n("div",{class:"mbe32"},null,-1),J=n("div",{class:"flex"},[n("h3",{id:"vue-3",tabindex:"-1"},[n("img",{src:y,alt:"Vue 3 logo"}),s("Vue 3 ")])],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// Import the required AgnosticUI global common and component CSS"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Table "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createRow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("name"),n("span",{class:"token punctuation"},","),s(" weapon"),n("span",{class:"token punctuation"},","),s(" slams"),n("span",{class:"token punctuation"},","),s(" birthdate")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token punctuation"},","),s(`
  weapon`),n("span",{class:"token punctuation"},","),s(`
  slams`),n("span",{class:"token punctuation"},","),s(`
  birthdate`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"TagExamples"'),n("span",{class:"token punctuation"},","),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Table`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      rows`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Roger Federer"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Forehand and serve"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"August 8, 1981"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token string"},'"Andre Agassi"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"Return of serve. Groundstrokes"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"April 29, 1970"'),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Steffi Graf"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Forehand"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June 14, 1969"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token string"},'"Martina Navratilova"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"Serve and volley"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"October 18, 1956"'),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Rafael Nadal"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Backhand and speed"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June 3, 1986"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token string"},'"Althea Gibson"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"Speed, strength, and fluidity "'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"August 25, 1927"'),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Novak Djokovic"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Backhand and speed"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"May 22, 1987"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Arthur Ashe"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Serve and volley"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"July 10, 1943"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Name"'),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(`
          width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"25%"'),n("span",{class:"token punctuation"},","),s(`
          sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Weapon"'),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"weapon"'),n("span",{class:"token punctuation"},","),s(`
          width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"35%"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Grand Slams"'),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"slams"'),n("span",{class:"token punctuation"},","),s(`
          width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"13%"'),n("span",{class:"token punctuation"},","),s(`
          sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// Only use this approach for trusted input that you control"),s(`
          `),n("span",{class:"token function-variable function"},"renderFn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
            `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<div class="text-center">'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'<span class="mis6">\u{1F3C6}</span></div>'),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Birthdate"'),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"birthdate"'),n("span",{class:"token punctuation"},","),s(`
          sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"sortFn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// Naive date comparisons; but we're controlling data so ;-)"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" d1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" d2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("d1 "),n("span",{class:"token operator"},">"),s(" d2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("d1 "),n("span",{class:"token operator"},"<"),s(" d2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs24 mbe16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Table")]),s(`
      `),n("span",{class:"token attr-name"},":rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rows"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":isHoverable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"caption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("My caption test"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),q=n("p",null,[s("Vue 3: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Table.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Table.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),E=n("div",{class:"mbe24"},null,-1),V=s("Note: Vue 2 is not supported"),O=n("div",{class:"mbe32"},null,-1),Y=n("div",{class:"flex"},[n("h3",{id:"angular",tabindex:"-1"},[n("img",{src:v,alt:"Angular logo"}),s("Angular ")])],-1),H=n("p",null,[s("In your Angular configuration (likely "),n("code",null,"angular.json"),s(") ensure you're including the common AgnosticUI styles:")],-1),P=n("div",{class:"mbe16"},null,-1),z=n("p",null,[n("code",null,' "styles": ["agnostic/dist/common.min.css"],')],-1),K=n("div",{class:"mbe24"},null,-1),L=n("p",null,[s("Add AgnosticUI's "),n("code",null,"AgModule"),s(" module:")],-1),Q=n("div",{class:"language-js"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" NgModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BrowserModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/platform-browser'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" AgModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'agnostic-angular'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" AppComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./app.component'"),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"NgModule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  declarations`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("AppComponent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  imports`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("BrowserModule"),n("span",{class:"token punctuation"},","),s(" AgModule"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  providers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  bootstrap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s("AppComponent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AppModule"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),X=n("p",null,"Now you can use in your components:",-1),Z=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Component "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"Component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  selector`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'your-component'"),n("span",{class:"token punctuation"},","),s(`
  template`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`<section>
    <ag-table [headers]="[ { label: 'Name', key: 'name', width: '85%', sortable: true }, { label: 'Grand Slams', key: 'slams', width: '15%', sortable: true }]"
              [rows]="[{ name: 'Serena Williams', slams: 23}, { name: 'Roger Federer', slams: 20}, { name: 'Althea Gibson', slams: 11}, { name: 'Andre Agassi', slams: 8}]"
              [rowRenderTemplate]="rowRenderTemplate"
              [isHoverable]="true"
              caption="Tennis Superstars">
      <ng-template #rowRenderTemplate
                   let-row
                   let-idx="index">
        <div *ngIf="idx === 1; else simple">{{row}}<span class="mis6">\u{1F3C6}</span></div>
        <ng-template #simple>
          {{row}}
        </ng-template>
      </ng-template>
    </ag-table>
  </section>`),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"YourComponent"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),nn=n("p",null,[s("Angular: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),sn=n("div",{class:"mbe32"},null,-1),an=n("div",{class:"flex mbe16"},[n("h3",{id:"svelte",tabindex:"-1"},[n("img",{src:_,alt:"Svelte logo"}),s("Svelte ")])],-1),tn=n("div",{class:"mbe12"},null,-1),on=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'agnostic-svelte/dist/common.min.css'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Table "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-svelte"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(" CustomCellRenderer "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"path/to/CustomCellRenderer.svelte"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createRow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("name"),n("span",{class:"token punctuation"},","),s(" weapon"),n("span",{class:"token punctuation"},","),s(" slams"),n("span",{class:"token punctuation"},","),s(" birthdate")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    name`),n("span",{class:"token punctuation"},","),s(`
    weapon`),n("span",{class:"token punctuation"},","),s(`
    slams`),n("span",{class:"token punctuation"},","),s(`
    birthdate`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" tableArgs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    rows`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Roger Federer"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Forehand and serve"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"August 8, 1981"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token string"},'"Andre Agassi"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"Return of serve. Groundstrokes"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"April 29, 1970"'),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Steffi Graf"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Forehand"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June 14, 1969"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token string"},'"Martina Navratilova"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"Serve and volley"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"October 18, 1956"'),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Rafael Nadal"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Backhand and speed"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June 3, 1986"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token string"},'"Althea Gibson"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"Speed, strength, and fluidity "'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"August 25, 1927"'),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Novak Djokovic"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Backhand and speed"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"May 22, 1987"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"createRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Arthur Ashe"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Serve and volley"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"July 10, 1943"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'25%'"),n("span",{class:"token punctuation"},","),s(`
        sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Weapon'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weapon'"),n("span",{class:"token punctuation"},","),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'45%'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Grand Slams'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'slams'"),n("span",{class:"token punctuation"},","),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'10%'"),n("span",{class:"token punctuation"},","),s(`
        sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"renderComponent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(` CustomCellRenderer
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Birthdate"'),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"birthdate"'),n("span",{class:"token punctuation"},","),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20%'"),n("span",{class:"token punctuation"},","),s(`
        sortable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"sortFn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" d1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" d2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("d1 "),n("span",{class:"token operator"},">"),s(" d2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("d1 "),n("span",{class:"token operator"},"<"),s(" d2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    caption`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tennis Superstars"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Table")]),s(),n("span",{class:"token attr-name"},"{...tableArgs}"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])])],-1),en=n("p",null,[s("Svelte: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Table.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Table.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),cn=n("h2",{id:"storybook",tabindex:"-1"},[s("Storybook "),n("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),pn=n("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),ln=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"git"),s(` clone git@github.com:AgnosticUI/agnosticui.git
`),n("span",{class:"token builtin class-name"},"cd"),s(" agnosticui "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"yarn"),s(`
`),n("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:react "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:vue "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:angular "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(` start:svelte
`)])])],-1),un=n("p",null,[s("See "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),s(".")],-1);function kn(t,c,o,e,p,g){const l=u("TableExamples"),m=u("Alert");return r(),d("div",null,[I,N,F,j,C,i(l),G,B,U,M,D,$,J,W,q,E,i(m,{type:"warning"},{default:w(()=>[V]),_:1}),O,Y,H,P,z,K,L,Q,X,Z,nn,sn,an,tn,on,en,cn,pn,ln,un])}var bn=k(S,[["render",kn]]);export{mn as __pageData,bn as default};
