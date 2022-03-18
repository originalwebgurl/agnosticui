import{_ as l,m as f,r as o,o as c,c as i,a as e,e as a,w as t,F as y,b as s,A as w,d as p}from"./app.2412929f.js";import"./index.56618267.js";import{_ as b,a as v,b as q,c as _}from"./Angular-icon.63775078.js";const A={name:"DiscloseExamples",components:{Disclose:f}},S=e("h3",null,"Disclose default",-1),D=s(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),x=s(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),G=s(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),W=s(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). "),N={class:"mbe48"},T=e("h3",null,"Disclose with background",-1),R=e("p",{class:"mbs16 mbe24"},[s("The earlier example favors using a \u201Cclean\u201D if minimalist style. However, there may be use cases that that require a stronger visual affordance for the disclose elements themeselves. If that's the case, you can utilize the "),e("code",null,"isBackground"),s(" prop which achieves the following:")],-1),M=s(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),O=s(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),C=s(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),E=s(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). ");function I(r,u,k,g,d,m){const n=o("Disclose");return c(),i(y,null,[e("section",null,[S,a(n,{"is-open":"",title:"Roger Federer"},{default:t(()=>[D]),_:1}),a(n,{title:"Serena Williams"},{default:t(()=>[x]),_:1}),a(n,{title:"Stefi Graf"},{default:t(()=>[G]),_:1}),a(n,{title:"Andre Agassi"},{default:t(()=>[W]),_:1})]),e("section",N,[T,R,a(n,{isBackground:"",title:"Roger Federer"},{default:t(()=>[M]),_:1}),a(n,{isBackground:"",title:"Serena Williams"},{default:t(()=>[O]),_:1}),a(n,{isBackground:"",title:"Stefi Graf"},{default:t(()=>[C]),_:1}),a(n,{isBackground:"",title:"Andre Agassi"},{default:t(()=>[E]),_:1})])],64)}var B=l(A,[["render",I]]);const F={components:{Alert:w,DiscloseExamples:B}},Y='{"title":"Disclose","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/disclose.md","lastUpdated":1647643818010}',j=p('<h1 id="disclose" tabindex="-1">Disclose <a class="header-anchor" href="#disclose" aria-hidden="true">#</a></h1><p>The <code>Disclose</code> component is often used as a supplemental button to Disclose things.</p><div class="mbs24"></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',5),H=p('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex"><h3 id="react" tabindex="-1"><img src="'+b+`" alt="react logo">React </h3></div><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Disclose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">is-open</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Roger Federer is a Swiss professional tennis player. 
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe48<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Roger Federer is a Swiss professional tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Serena Jameka Williams is an American professional tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Stefanie Maria Graf is a German former professional tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre></div><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Disclose.tsx" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Disclose.stories.tsx" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+v+`" alt="Vue 3 logo">Vue 3 </h3></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// Import AgnosticUI global common &amp; component CSS</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Disclose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;DiscloseExamples&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Disclose<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Disclose default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">is-open</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Roger Federer is a Swiss professional tennis player. 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe48<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Disclose with background<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>The earlier example favors using
      a <span class="token entity named-entity" title="\u201C">&amp;ldquo;</span>clean<span class="token entity named-entity" title="\u201D">&amp;rdquo;</span> if minimalist style. However, there
      may be use cases that that require a stronger visual affordance
      for the disclose elements themeselves. If that&#39;s the case, you
      can utilize the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>isBackground<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> prop which achieves
      the following:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Roger Federer is a Swiss professional tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Serena Jameka Williams is an American professional tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Stefanie Maria Graf is a German former professional tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Disclose.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Disclose.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe24"></div>`,10),U=s("Note: Vue 2 is not supported"),V=p('<div class="mbe32"></div><div class="flex"><h3 id="svelte" tabindex="-1"><img src="'+q+`" alt="Svelte logo">Svelte </h3></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;agnostic-svelte/css/common.min.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Disclose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Disclose default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
    <span class="token attr-name">is-open</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Disclose with background<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Disclose/Disclose.svelte" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Disclose/Disclose.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="flex"><h3 id="angular" tabindex="-1"><img src="`+_+`" alt="Angular logo">Angular (Experimental) </h3></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic-angular/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-angular&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.component&#39;</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>BrowserModule<span class="token punctuation">,</span> AgModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Now you can use in your components:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;div class=&quot;mbe48&quot;&gt;
    &lt;h3&gt;Multiple Disclose&lt;/h3&gt;
    &lt;p class=&quot;mbs16 mbe24&quot;&gt;Multiple disclose elements can be stacked to achieve a
      progressively disclosed pattern that resembles an Accordion pattern. Further,
      individual disclosed elements may be open by default if we supply the
      &lt;code&gt;isOpen&lt;/code&gt; prop as we do in the first disclose element below:
    &lt;/p&gt;
    &lt;ag-disclose isOpen
                  title=&quot;Roger Federer&quot;&gt;
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of
      Tennis
      Professionals. He has won 20 Grand Slam men&#39;s singles titles, an all-time record shared with Rafael Nadal and
      Novak
      Djokovic (Wikipedia).
    &lt;/ag-disclose&gt;
    &lt;ag-disclose title=&quot;Serena Williams&quot;&gt;
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the
      most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women&#39;s Tennis
      Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    &lt;/ag-disclose&gt;
    &lt;ag-disclose title=&quot;Stefi Graf&quot;&gt;
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377
      weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968
      and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    &lt;/ag-disclose&gt;
    &lt;ag-disclose title=&quot;Andre Agassi&quot;&gt;
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to
      win
      four Australian Open singles titles in the Open Era (Wikipedia).
    &lt;/ag-disclose&gt;
  &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.stories.ts" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:</p><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span>
<span class="token comment"># You can then run any of the top-level scripts:</span>
<span class="token function">yarn</span> start:react <span class="token comment"># or</span>
<span class="token function">yarn</span> start:vue <span class="token comment"># or</span>
<span class="token function">yarn</span> start:angular <span class="token comment"># or</span>
<span class="token function">yarn</span> start:svelte
</code></pre></div><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo" target="_blank" rel="noopener noreferrer">Running monorepo</a>.</p>`,19);function P(r,u,k,g,d,m){const n=o("DiscloseExamples"),h=o("Alert");return c(),i("div",null,[j,a(n),H,a(h,{type:"warning"},{default:t(()=>[U]),_:1}),V])}var z=l(F,[["render",P]]);export{Y as __pageData,z as default};
