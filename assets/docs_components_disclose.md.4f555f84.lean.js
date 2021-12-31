import{_ as c,D as h,r as o,o as l,c as i,a as n,e as t,w as e,F as f,b as s,A as w}from"./app.cbbcd177.js";import"./index.56618267.js";import{_,a as b,b as y,c as v}from"./Svelte-icon.d67041f2.js";const A={name:"DiscloseExamples",components:{Disclose:h}},S=n("h3",null,"Disclose default",-1),D=s(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),x=s(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),G=s(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),W=s(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). "),N={class:"mbe48"},q=n("h3",null,"Disclose with background",-1),M=n("p",{class:"mbs16 mbe24"},[s("The earlier example favors using a \u201Cclean\u201D if minimalist style. However, there may be use cases that that require a stronger visual affordance for the disclose elements themeselves. If that's the case, you can utilize the "),n("code",null,"isBackground"),s(" prop which achieves the following:")],-1),O=s(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),R=s(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),B=s(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),E=s(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). ");function T(p,r,u,k,d,g){const a=o("Disclose");return l(),i(f,null,[n("section",null,[S,t(a,{"is-open":"",title:"Roger Federer"},{default:e(()=>[D]),_:1}),t(a,{title:"Serena Williams"},{default:e(()=>[x]),_:1}),t(a,{title:"Stefi Graf"},{default:e(()=>[G]),_:1}),t(a,{title:"Andre Agassi"},{default:e(()=>[W]),_:1})]),n("section",N,[q,M,t(a,{isBackground:"",title:"Roger Federer"},{default:e(()=>[O]),_:1}),t(a,{isBackground:"",title:"Serena Williams"},{default:e(()=>[R]),_:1}),t(a,{isBackground:"",title:"Stefi Graf"},{default:e(()=>[B]),_:1}),t(a,{isBackground:"",title:"Andre Agassi"},{default:e(()=>[E]),_:1})])],64)}var $=c(A,[["render",T]]);const j={components:{Alert:w,DiscloseExamples:$}},Dn='{"title":"Disclose","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/disclose.md","lastUpdated":1639357677327}',C=n("h1",{id:"disclose",tabindex:"-1"},[s("Disclose "),n("a",{class:"header-anchor",href:"#disclose","aria-hidden":"true"},"#")],-1),F=n("p",null,[s("The "),n("code",null,"Disclose"),s(" component is often used as a supplemental button to Disclose things.")],-1),I=n("div",{class:"mbs24"},null,-1),H=n("h2",{id:"examples",tabindex:"-1"},[s("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#")],-1),U=n("div",{class:"mbe24"},null,-1),J=n("div",{class:"mbe32"},null,-1),K=n("h2",{id:"usage",tabindex:"-1"},[s("Usage "),n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),V=n("div",{class:"flex"},[n("h3",{id:"react",tabindex:"-1"},[n("img",{src:_,alt:"react logo"}),s("React ")])],-1),P=n("div",{class:"language-jsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-react/dist/esm/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Disclose "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"YourComponent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"is-open"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Roger Federer"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Roger Federer is a Swiss professional tennis player. 
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Serena Williams"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Stefi Graf"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Andre Agassi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe48"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Roger Federer"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Roger Federer is a Swiss professional tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Serena Williams"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Serena Jameka Williams is an American professional tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Stefi Graf"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Stefanie Maria Graf is a German former professional tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Andre Agassi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Disclose")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),Y=n("p",null,[s("React: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Disclose.tsx",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Disclose.stories.tsx",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),z=n("div",{class:"mbe32"},null,-1),L=n("div",{class:"flex"},[n("h3",{id:"vue-3",tabindex:"-1"},[n("img",{src:b,alt:"Vue 3 logo"}),s("Vue 3 ")])],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// Import AgnosticUI global common & component CSS"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/common.min.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"agnostic-vue/dist/index.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Disclose "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"DiscloseExamples"'),n("span",{class:"token punctuation"},","),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Disclose`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Disclose default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"is-open"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Roger Federer"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      Roger Federer is a Swiss professional tennis player. 
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Serena Williams"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Stefi Graf"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Andre Agassi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe48"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Disclose with background"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs16 mbe24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`The earlier example favors using
      a `),n("span",{class:"token entity named-entity",title:"\u201C"},"&ldquo;"),s("clean"),n("span",{class:"token entity named-entity",title:"\u201D"},"&rdquo;"),s(` if minimalist style. However, there
      may be use cases that that require a stronger visual affordance
      for the disclose elements themeselves. If that's the case, you
      can utilize the `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("code")]),n("span",{class:"token punctuation"},">")]),s("isBackground"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("code")]),n("span",{class:"token punctuation"},">")]),s(` prop which achieves
      the following:
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Roger Federer"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      Roger Federer is a Swiss professional tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Serena Williams"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      Serena Jameka Williams is an American professional tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Stefi Graf"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      Stefanie Maria Graf is a German former professional tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(`
      `),n("span",{class:"token attr-name"},"isBackground"),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Andre Agassi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),X=n("p",null,[s("Vue 3: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Disclose.vue",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Disclose.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),Z=n("div",{class:"mbe24"},null,-1),nn=s("Note: Vue 2 is not supported"),sn=n("div",{class:"mbe32"},null,-1),an=n("div",{class:"flex"},[n("h3",{id:"angular",tabindex:"-1"},[n("img",{src:y,alt:"Angular logo"}),s("Angular ")])],-1),tn=n("p",null,[s("In your Angular configuration (likely "),n("code",null,"angular.json"),s(") ensure you're including the common AgnosticUI styles:")],-1),en=n("div",{class:"mbe16"},null,-1),on=n("p",null,[n("code",null,' "styles": ["agnostic/dist/common.min.css"],')],-1),cn=n("div",{class:"mbe24"},null,-1),ln=n("p",null,[s("Add AgnosticUI's "),n("code",null,"AgModule"),s(" module:")],-1),pn=n("div",{class:"language-js"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" NgModule "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`
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
`)])])],-1),rn=n("p",null,"Now you can use in your components:",-1),un=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Component "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@angular/core'"),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"Component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  selector`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'your-component'"),n("span",{class:"token punctuation"},","),s(`
  template`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
  <div class="mbe48">
    <h3>Multiple Disclose</h3>
    <p class="mbs16 mbe24">Multiple disclose elements can be stacked to achieve a
      progressively disclosed pattern that resembles an Accordion pattern. Further,
      individual disclosed elements may be open by default if we supply the
      <code>isOpen</code> prop as we do in the first disclose element below:
    </p>
    <ag-disclose isOpen
                  title="Roger Federer">
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of
      Tennis
      Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and
      Novak
      Djokovic (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the
      most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis
      Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    </ag-disclose>
    <ag-disclose title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377
      weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968
      and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to
      win
      four Australian Open singles titles in the Open Era (Wikipedia).
    </ag-disclose>
  </div>
`),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"YourComponent"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),kn=n("p",null,[s("Angular: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.ts",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.stories.ts",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),dn=n("div",{class:"mbe32"},null,-1),gn=n("div",{class:"flex"},[n("h3",{id:"svelte",tabindex:"-1"},[n("img",{src:v,alt:"Svelte logo"}),s("Svelte ")])],-1),mn=n("div",{class:"language-html"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'agnostic-svelte/dist/common.min.css'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Disclose "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"agnostic-svelte"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs16 mbe24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Disclose default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(` 
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(`
    `),n("span",{class:"token attr-name"},"is-open"),s(`
    `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Roger Federer"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men`),n("span",{class:"token entity named-entity",title:"'"},"&apos;"),s(`s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Serena Williams"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women`),n("span",{class:"token entity named-entity",title:"'"},"&apos;"),s(`s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Stefi Graf"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Andre Agassi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbs24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mbe24"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Disclose with background"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(` 
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"isBackground"),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Roger Federer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men`),n("span",{class:"token entity named-entity",title:"'"},"&apos;"),s(`s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"isBackground"),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Serena Williams"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women`),n("span",{class:"token entity named-entity",title:"'"},"&apos;"),s(`s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"isBackground"),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Stefi Graf"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Disclose")]),s(),n("span",{class:"token attr-name"},"isBackground"),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Andre Agassi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Disclose")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),hn=n("p",null,[s("Svelte: "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Disclose.svelte",target:"_blank",rel:"noopener noreferrer"},"component source"),s(", "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Disclose.stories.js",target:"_blank",rel:"noopener noreferrer"},"storybook tests")],-1),fn=n("h2",{id:"storybook",tabindex:"-1"},[s("Storybook "),n("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#")],-1),wn=n("p",null,"You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:",-1),_n=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"git"),s(` clone git@github.com:AgnosticUI/agnosticui.git
`),n("span",{class:"token builtin class-name"},"cd"),s(" agnosticui "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"yarn"),s(`
`),n("span",{class:"token comment"},"# You can then run any of the top-level scripts:"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:react "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:vue "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(" start:angular "),n("span",{class:"token comment"},"# or"),s(`
`),n("span",{class:"token function"},"yarn"),s(` start:svelte
`)])])],-1),bn=n("p",null,[s("See "),n("a",{href:"https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo",target:"_blank",rel:"noopener noreferrer"},"Running monorepo"),s(".")],-1);function yn(p,r,u,k,d,g){const a=o("DiscloseExamples"),m=o("Alert");return l(),i("div",null,[C,F,I,H,U,t(a),J,K,V,P,Y,z,L,Q,X,Z,t(m,{type:"warning"},{default:e(()=>[nn]),_:1}),sn,an,tn,en,on,cn,ln,pn,rn,un,kn,dn,gn,mn,hn,fn,wn,_n,bn])}var xn=c(j,[["render",yn]]);export{Dn as __pageData,xn as default};
