import{_ as r,T as m,r as c,o as i,c as k,e as l,A as y,w as b,d as u,b as q}from"./app.2412929f.js";import"./index.56618267.js";import{_ as h,a as w,b as f,c as v}from"./Angular-icon.63775078.js";const n=(s,p,a,t)=>({name:s,weapon:p,slams:a,birthdate:t}),_={name:"TagExamples",components:{Table:m},data(){return{rows:[n("Roger Federer","Forehand and serve",20,"August 8, 1981"),n("Andre Agassi","Return of serve. Groundstrokes",8,"April 29, 1970"),n("Steffi Graf","Forehand",22,"June 14, 1969"),n("Martina Navratilova","Serve and volley",18,"October 18, 1956"),n("Rafael Nadal","Backhand and speed",20,"June 3, 1986"),n("Althea Gibson","Speed, strength, and fluidity ",11,"August 25, 1927"),n("Novak Djokovic","Backhand and speed",20,"May 22, 1987"),n("Arthur Ashe","Serve and volley",3,"July 10, 1943")],headers:[{label:"Name",key:"name",width:"20%",sortable:!0},{label:"Weapon",key:"weapon",width:"32%"},{label:"Grand Slams",key:"slams",width:"24%",sortable:!0,renderFn:s=>`<div class="text-center">${s}<span class="mis6">\u{1F3C6}</span></div>`},{label:"Birthdate",key:"birthdate",sortable:!0,sortFn:(s,p)=>{const a=new Date(s).getTime()||-1/0,t=new Date(p).getTime()||-1/0;return a>t?1:a<t?-1:0}}]}}},A={class:"mbs24 mbe16"};function T(s,p,a,t,o,g){const e=c("Table");return i(),k("section",A,[l(e,{rows:o.rows,headers:o.headers,isHoverable:!0,caption:"My caption test"},null,8,["rows","headers"])])}var x=r(_,[["render",T]]);const R={components:{Alert:y,TableExamples:x}},M='{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/table.md","lastUpdated":1647642677618}',S=u('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-hidden="true">#</a></h1><p>The <code>Table</code> component is used to display tabular formatted data appropriately.</p><div class="mbs24"></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',5),I=u('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex"><h3 id="react" tabindex="-1"><img src="'+h+`" alt="react logo">React </h3></div><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Table  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> headersWithWidths <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;25%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Weapon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;weapon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;45%&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Grand Slams&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;slams&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;13%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">renderFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mis6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u{1F3C6}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Birthdate&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;birthdate&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;17%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">sortFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>d1 <span class="token operator">&gt;</span> d2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>d1 <span class="token operator">&lt;</span> d2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> weapon<span class="token punctuation">,</span> slams<span class="token punctuation">,</span> birthdate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> weapon<span class="token punctuation">,</span> slams<span class="token punctuation">,</span> birthdate <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">createRow</span><span class="token punctuation">(</span>
    <span class="token string">&#39;Serena Williams&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Biggest serve in women&#39;s tennis all-time&quot;</span><span class="token punctuation">,</span>
    <span class="token number">23</span><span class="token punctuation">,</span>
    <span class="token string">&#39;September 26, 1981&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&#39;Roger Federer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Forehand and serve&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;August 8, 1981&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&#39;Andre Agassi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Return of serve. Groundstrokes&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;April 29, 1970&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&#39;Steffi Graf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Forehand&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&#39;June 14, 1969&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>
      <span class="token attr-name">headers</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>headersWithWidths<span class="token punctuation">}</span></span>
      <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>rows<span class="token punctuation">}</span></span>
      <span class="token attr-name">isStriped</span>
      <span class="token attr-name">caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tennis Superstars<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Table.tsx" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Table.stories.tsx" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+w+`" alt="Vue 3 logo">Vue 3 </h3></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// Import the required AgnosticUI global common and component CSS</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> weapon<span class="token punctuation">,</span> slams<span class="token punctuation">,</span> birthdate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  weapon<span class="token punctuation">,</span>
  slams<span class="token punctuation">,</span>
  birthdate<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;TagExamples&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Table<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rows</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Roger Federer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Forehand and serve&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;August 8, 1981&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span>
          <span class="token string">&quot;Andre Agassi&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;Return of serve. Groundstrokes&quot;</span><span class="token punctuation">,</span>
          <span class="token number">8</span><span class="token punctuation">,</span>
          <span class="token string">&quot;April 29, 1970&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Steffi Graf&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Forehand&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;June 14, 1969&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span>
          <span class="token string">&quot;Martina Navratilova&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;Serve and volley&quot;</span><span class="token punctuation">,</span>
          <span class="token number">18</span><span class="token punctuation">,</span>
          <span class="token string">&quot;October 18, 1956&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Rafael Nadal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Backhand and speed&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;June 3, 1986&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span>
          <span class="token string">&quot;Althea Gibson&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;Speed, strength, and fluidity &quot;</span><span class="token punctuation">,</span>
          <span class="token number">11</span><span class="token punctuation">,</span>
          <span class="token string">&quot;August 25, 1927&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Novak Djokovic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Backhand and speed&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;May 22, 1987&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Arthur Ashe&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Serve and volley&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;July 10, 1943&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;25%&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Weapon&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;weapon&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;35%&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Grand Slams&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;slams&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;13%&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// Only use this approach for trusted input that you control</span>
          <span class="token function-variable function">renderFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&quot;text-center&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;span class=&quot;mis6&quot;&gt;\u{1F3C6}&lt;/span&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Birthdate&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;birthdate&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">sortFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// Naive date comparisons; but we&#39;re controlling data so ;-)</span>
            <span class="token keyword">const</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>d1 <span class="token operator">&gt;</span> d2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>d1 <span class="token operator">&lt;</span> d2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs24 mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>
      <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>headers<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:isHoverable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My caption test<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Table.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Table.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe24"></div>`,10),N=q("Note: Vue 2 is not supported"),C=u('<div class="mbe32"></div><div class="flex mbe16"><h3 id="svelte" tabindex="-1"><img src="'+f+`" alt="Svelte logo">Svelte </h3></div><div class="mbe12"></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;agnostic-svelte/css/common.min.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> CustomCellRenderer <span class="token keyword">from</span> <span class="token string">&quot;path/to/CustomCellRenderer.svelte&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">createRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> weapon<span class="token punctuation">,</span> slams<span class="token punctuation">,</span> birthdate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token punctuation">,</span>
    weapon<span class="token punctuation">,</span>
    slams<span class="token punctuation">,</span>
    birthdate<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> tableArgs <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rows</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Roger Federer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Forehand and serve&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;August 8, 1981&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span>
        <span class="token string">&quot;Andre Agassi&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Return of serve. Groundstrokes&quot;</span><span class="token punctuation">,</span>
        <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token string">&quot;April 29, 1970&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Steffi Graf&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Forehand&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;June 14, 1969&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span>
        <span class="token string">&quot;Martina Navratilova&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Serve and volley&quot;</span><span class="token punctuation">,</span>
        <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token string">&quot;October 18, 1956&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Rafael Nadal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Backhand and speed&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;June 3, 1986&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span>
        <span class="token string">&quot;Althea Gibson&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Speed, strength, and fluidity &quot;</span><span class="token punctuation">,</span>
        <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token string">&quot;August 25, 1927&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Novak Djokovic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Backhand and speed&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;May 22, 1987&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">createRow</span><span class="token punctuation">(</span><span class="token string">&quot;Arthur Ashe&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Serve and volley&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;July 10, 1943&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Name&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;25%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Weapon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;weapon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;45%&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Grand Slams&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;slams&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">renderComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> CustomCellRenderer
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Birthdate&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;birthdate&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">sortFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>d1 <span class="token operator">&gt;</span> d2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>d1 <span class="token operator">&lt;</span> d2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">caption</span><span class="token operator">:</span> <span class="token string">&quot;Tennis Superstars&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">{...tableArgs}</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Table/Table.svelte" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Table/Table.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="flex"><h3 id="angular" tabindex="-1"><img src="`+v+`" alt="Angular logo">Angular (Experimental) </h3></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic-angular/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
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
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;section&gt;
    &lt;ag-table [headers]=&quot;[ { label: &#39;Name&#39;, key: &#39;name&#39;, width: &#39;85%&#39;, sortable: true }, { label: &#39;Grand Slams&#39;, key: &#39;slams&#39;, width: &#39;15%&#39;, sortable: true }]&quot;
              [rows]=&quot;[{ name: &#39;Serena Williams&#39;, slams: 23}, { name: &#39;Roger Federer&#39;, slams: 20}, { name: &#39;Althea Gibson&#39;, slams: 11}, { name: &#39;Andre Agassi&#39;, slams: 8}]&quot;
              [rowRenderTemplate]=&quot;rowRenderTemplate&quot;
              [isHoverable]=&quot;true&quot;
              caption=&quot;Tennis Superstars&quot;&gt;
      &lt;ng-template #rowRenderTemplate
                   let-row
                   let-idx=&quot;index&quot;&gt;
        &lt;div *ngIf=&quot;idx === 1; else simple&quot;&gt;{{row}}&lt;span class=&quot;mis6&quot;&gt;\u{1F3C6}&lt;/span&gt;&lt;/div&gt;
        &lt;ng-template #simple&gt;
          {{row}}
        &lt;/ng-template&gt;
      &lt;/ng-template&gt;
    &lt;/ag-table&gt;
  &lt;/section&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.stories.ts" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:</p><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span>
<span class="token comment"># You can then run any of the top-level scripts:</span>
<span class="token function">yarn</span> start:react <span class="token comment"># or</span>
<span class="token function">yarn</span> start:vue <span class="token comment"># or</span>
<span class="token function">yarn</span> start:angular <span class="token comment"># or</span>
<span class="token function">yarn</span> start:svelte
</code></pre></div><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo" target="_blank" rel="noopener noreferrer">Running monorepo</a>.</p>`,20);function F(s,p,a,t,o,g){const e=c("TableExamples"),d=c("Alert");return i(),k("div",null,[S,l(e),I,l(d,{type:"warning"},{default:b(()=>[N]),_:1}),C])}var j=r(R,[["render",F]]);export{M as __pageData,j as default};
