import{_ as r,h as b,D as h,I as y,r as c,o as g,c as d,e as s,w as t,a as n,b as a,A as f,d as u}from"./app.ca4f23be.js";import"./index.56618267.js";import{_ as w,a as _,b as x,c as B}from"./Svelte-icon.d67041f2.js";const D={name:"DialogExamples",components:{Button:b,Dialog:h,Input:y},setup(){let p=null;return{openDialog:()=>{p&&p.show()},assignDialogRef:o=>{p=o}}}},A=n("h3",null,"Dialog",-1),I=n("p",{class:"mbe24"},[a(" The following button opens the dialog because we've obtained a dialog "),n("code",null,"instance"),a(" handle via the "),n("code",null,'@instance="assignDialogRef"'),a(" event hook. This is Vue syntax but the other framework implementations emit the "),n("code",null,"instance"),a(" event similarly: ")],-1),R=a(" Open dialog via dialogRef "),T=n("p",{class:"mbs24 mbe16"},[a(" The following also opens because a11y-dialog will bind to element with "),n("code",null,"data-a11y-dialog-show"),a(" attribute: ")],-1),C=n("button",null,null,-1),S=a(" Open the dialog via data attribute "),U=a(" My Dialog "),N=n("p",{class:"mbs16 mbe16"}," Fill in the form below to receive our newsletter! ",-1),E={class:"dialog-form-demo"},M=n("div",{class:"mbe16"},null,-1),L=a(" Sign Up ");function P(p,i,k,o,m,q){const e=c("Button"),l=c("Input"),v=c("Dialog");return g(),d("section",null,[A,I,s(e,{mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0,type:"button",onClick:o.openDialog},{default:t(()=>[R]),_:1},8,["onClick"]),T,C,s(e,{type:"button","data-a11y-dialog-show":"a11y-dialog",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:t(()=>[S]),_:1}),s(v,{id:"a11y-dialog","dialog-root":"body","is-animation-fade-in":!0,"is-animation-slide-up":!0,role:"dialog","class-names":{title:"h4 mbe18 flex justify-center"},onInstance:o.assignDialogRef},{title:t(()=>[U]),default:t(()=>[N,n("form",E,[s(l,{"is-rounded":!0,label:"Email (required)",type:"email",name:"EMAIL",id:"email",placeholder:"email@example.com",required:""}),M,s(e,{type:"submit",mode:"primary","is-rounded":!0,"is-block":!0},{default:t(()=>[L]),_:1})])]),_:1},8,["onInstance"])])}var V=r(D,[["render",P]]);const j={components:{Alert:f,DialogExamples:V}},J='{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/dialog.md","lastUpdated":1645791387645}',O=u('<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h1><p>AgnosticUI&#39;s <a href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal" target="_blank" rel="noopener noreferrer">Dialog</a> component wraps Kitty Giraudel&#39;s <a href="https://github.com/KittyGiraudel/a11y-dialog" target="_blank" rel="noopener noreferrer">a11y-dialog</a> \u2014 an accessible and inclusive dialog component that has been battle tested over several versions to date.</p><div class="mbs24"></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',5),F=u('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex"><h3 id="react" tabindex="-1"><img src="'+w+`" alt="react logo">React </h3></div><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dialog <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dialog2 <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dialogPropsDefault <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;ag-dialog-test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Dialog Test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">classNames</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Note we don&#39;t have to pass in ALL classNames props and those</span>
      <span class="token comment">// not included will fallback to react-a11y-dialog&#39;s defaults</span>
      <span class="token comment">// See https://github.com/KittyGiraudel/react-a11y-dialog#api</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;h3 mbe18 h4 mbe18 flex justify-center&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> dialog<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isBordered</span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Open the dialog</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
          <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>dialogPropsDefault<span class="token punctuation">}</span></span>
          <span class="token attr-name">dialogRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">dialogInstance</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>current <span class="token operator">=</span> dialogInstance<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">isAnimationSlideUp</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            Fill in the form below to receive our newsletter!
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Sign Up</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> dialog2<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isBordered</span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Open dialog 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
          <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>dialogPropsDefault<span class="token punctuation">}</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-2<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dialog \u2014 Custom Close Button<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">dialogRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">instance</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>dialog2<span class="token punctuation">.</span>current <span class="token operator">=</span> instance<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">classNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;h4 mbe18&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">closeButton</span><span class="token operator">:</span> <span class="token string">&#39;close-button-demo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">isAnimationFadeIn</span>
          <span class="token attr-name">isAnimationSlideUp</span>
          <span class="token attr-name">closeButtonPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>last<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">closeButtonContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>faux<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBordered</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Cancel</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            The </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">close-button-demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> class is in App.css (for the Cancel button at bottom).  Otherwise, we use an AgnosticUI button of </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">type=&quot;faux</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> which generates a div that looks like a button. As </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">react-a11y-dialog</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> generates its own button
            around </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">closeButtonContent</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">, this prevents an unwanted nested buttons situation.
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You&#39;ll also notice that this dialog did not &amp;ldquo;slide up&amp;rdquo; as we have not passed in true to </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">isAnimationSlideUp</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> and this animation defaults to false. The other animation is </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">isAnimationFadeIn</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> which defaults to true. You can set it </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">false</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> if you wish to remove it.
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Sign Up</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Dialog.tsx" target="_blank" rel="noopener noreferrer">component source</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+_+`" alt="Vue 3 logo">Vue 3 </h3></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dialog<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;DialogExamples&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Button<span class="token punctuation">,</span>
    Dialog<span class="token punctuation">,</span>
    Input<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dialog <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">openDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dialog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">assignDialogRef</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      dialog <span class="token operator">=</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      openDialog<span class="token punctuation">,</span>
      assignDialogRef<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      The following opens because we&#39;ve registered a dialog <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>instance<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> ref via <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>@instance=&quot;assignDialogRef&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>. This is Vue syntax but the other framework implementations offer similar means:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-bordered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openDialog<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Open dialog via dialogRef
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs24 mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      The following also opens because a11y-dialog will bind to element with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>data-a11y-dialog-show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> attribute:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">data-a11y-dialog-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a11y-dialog<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-bordered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Open the dialog via data attribute
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a11y-dialog<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">dialog-root</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-animation-fade-in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-animation-slide-up</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        title: <span class="token punctuation">&#39;</span>h4 mbe18 flex justify-center<span class="token punctuation">&#39;</span>,
      }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@instance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assignDialogRef<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
        My Dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Fill in the form below to receive our newsletter!
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
          <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">required</span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          Sign Up
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Dialog.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/examples/src/App.vue#L225" target="_blank" rel="noopener noreferrer">examples</a></p><div class="mbe24"></div>`,10),$=a("Note: Vue 2 is not supported"),Y=u('<div class="mbe32"></div><div class="flex"><h3 id="angular" tabindex="-1"><img src="'+x+`" alt="Angular logo">Angular </h3></div><p><strong>Please consider Angular Dialog experimental and not yet ready for production</strong></p><div class="mbe16"></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic-angular/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
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
  &lt;section&gt;
    &lt;h2&gt;Dialog&lt;/h2&gt;
    &lt;ag-button mode=&quot;primary&quot;
               [isBordered]=&quot;true&quot;
               [isBlock]=&quot;true&quot;
               [isRounded]=&quot;true&quot;
               type=&quot;button&quot;
               data-test-id=&quot;dataA11yBtn&quot;
               data-a11y-dialog-show=&quot;a11y-dialog&quot;&gt;
      Open the dialog via data attribute
    &lt;/ag-button&gt;
    &lt;div class=&quot;mbe16&quot;&gt;&lt;/div&gt;
    &lt;ag-button mode=&quot;primary&quot;
               [isBordered]=&quot;true&quot;
               [isBlock]=&quot;true&quot;
               [isRounded]=&quot;true&quot;
               (click)=&quot;openDialog()&quot;
               type=&quot;button&quot;&gt;
      Open dialog via instance
    &lt;/ag-button&gt;
    &lt;ng-template #main&gt;
      &lt;p class=&quot;mbs16 mbe16&quot;
         id=&quot;dialog-example-description&quot;&gt;
        Fill in the form below to receive our newsletter!
      &lt;/p&gt;
      &lt;form class=&quot;dialog-form-demo&quot;&gt;
        &lt;ag-input [isRounded]=&quot;true&quot;
                  label=&quot;Email (required)&quot;
                  type=&quot;email&quot;
                  name=&quot;EMAIL&quot;
                  id=&quot;email&quot;
                  placeholder=&quot;email@example.com&quot;
                  required&gt;&lt;/ag-input&gt;
        &lt;div class=&quot;mbe16&quot;&gt;&lt;/div&gt;
        &lt;ag-button type=&quot;submit&quot;
                   mode=&quot;primary&quot;
                   [isRounded]=&quot;true&quot;
                   [isBlock]=&quot;true&quot;&gt;Sign Up&lt;/ag-button&gt;
      &lt;/form&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #title&gt;
      &lt;span data-test-id=&quot;dialogTitle&quot;&gt;A11yDialog Test&lt;/span&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #closeButtonFirst&gt;
      &lt;span&gt;Close (only appears if closeButtonPosition=&quot;first&quot; but that&#39;s the default)&lt;/span&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #closeButtonLast&gt;
      &lt;ag-close [isFaux]=&quot;true&quot;
                size=&quot;xlarge&quot;&gt;&lt;/ag-close&gt;
    &lt;/ng-template&gt;
    &lt;ag-dialog id=&quot;a11y-dialog&quot;
               appRoot=&quot;#main&quot;
               dialogRoot=&quot;#dialog-root&quot;
               [isAnimationFadeIn]=&quot;true&quot;
               [isAnimationSlideUp]=&quot;true&quot;
               closeButtonPosition=&quot;last&quot;
               (instance)=&quot;assignDialogInstance($event)&quot;
               [closeButtonFirstTemplate]=&quot;closeButtonFirst&quot;
               [closeButtonLastTemplate]=&quot;closeButtonLast&quot;
               [mainTemplate]=&quot;main&quot;
               [titleTemplate]=&quot;title&quot;&gt;
    &lt;/ag-dialog&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;Dialog 2&lt;/h2&gt;
    &lt;ag-button mode=&quot;primary&quot;
               [isBordered]=&quot;true&quot;
               [isBlock]=&quot;true&quot;
               [isRounded]=&quot;true&quot;
               type=&quot;button&quot;
               data-a11y-dialog-show=&quot;a11y-dialog2&quot;&gt;
      Open dialog 2
    &lt;/ag-button&gt;
    &lt;ng-template #main2&gt;
      &lt;p class=&quot;mbs16 mbe16&quot;
         id=&quot;dialog-example-description&quot;&gt;
        The &lt;code&gt;close-button-demo&lt;/code&gt; class is in App.css (for the Cancel button at bottom).
        Otherwise, we use an AgnosticUI button of &lt;code&gt;type=&quot;faux&lt;/code&gt; which generates a div that
        looks like a button. As &lt;code&gt;angular-a11y-dialog&lt;/code&gt; generates its own button
        around &lt;code&gt;closeButtonContent&lt;/code&gt;, this prevents an unwanted nested buttons situation.
      &lt;/p&gt;
      &lt;p class=&quot;mbe16&quot;&gt;
        You&#39;ll also notice that this dialog did not &amp;ldquo;slide up&amp;rdquo; or &amp;ldquo;fade in&amp;rdquo;
        as we did NOT pass in either &lt;code&gt;isAnimationFadeIn&lt;/code&gt; or &lt;code&gt;isAnimationSlideUp&lt;/code&gt;.
        Both of these default to &lt;code&gt;false&lt;/code&gt;.
      &lt;/p&gt;
      &lt;form class=&quot;dialog-form-demo&quot;&gt;
        &lt;ag-input [isRounded]=&quot;true&quot;
                  label=&quot;Email (required)&quot;
                  type=&quot;email&quot;
                  name=&quot;EMAIL&quot;
                  id=&quot;email&quot;
                  placeholder=&quot;email@example.com&quot;
                  required&gt;&lt;/ag-input&gt;
        &lt;div class=&quot;mbe16&quot;&gt;&lt;/div&gt;
        &lt;ag-button type=&quot;submit&quot;
                   mode=&quot;primary&quot;
                   [isRounded]=&quot;true&quot;
                   [isBlock]=&quot;true&quot;&gt;Sign Up&lt;/ag-button&gt;
      &lt;/form&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #title2&gt;Dialog \u2014 Custom Close Button&lt;/ng-template&gt;
    &lt;ng-template #closeButtonLast2&gt;
      &lt;ag-button type=&quot;faux&quot;
                 [isRounded]=&quot;true&quot;
                 [isBordered]=&quot;true&quot;
                 [isBlock]=&quot;true&quot;&gt;Cancel&lt;/ag-button&gt;
    &lt;/ng-template&gt;
    &lt;ag-dialog id=&quot;a11y-dialog2&quot;
               appRoot=&quot;#main&quot;
               dialogRoot=&quot;#dialog-root&quot;
               closeButtonPosition=&quot;last&quot;
               [classNames]=&quot;{
                container: &#39;my-dialog-container&#39;,
                overlay: &#39;my-dialog-overlay&#39;,
                document: &#39;my-dialog-content&#39;,
                title: &#39;h4 mbe18&#39;,
                closeButton: &#39;close-button-demo&#39;
               }&quot;
               [closeButtonLastTemplate]=&quot;closeButtonLast2&quot;
               [mainTemplate]=&quot;main2&quot;
               [titleTemplate]=&quot;title2&quot;&gt;
    &lt;/ag-dialog&gt;
  &lt;/section&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span>
  dialogInstance<span class="token operator">!</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dialogInstance<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">assignDialogInstance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">instance</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dialogInstance <span class="token operator">=</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/dialog.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/app/app.component.html#L838" target="_blank" rel="noopener noreferrer">example use</a></p><div class="mbe32"></div><div class="flex"><h3 id="svelte" tabindex="-1"><img src="`+B+`" alt="Svelte logo">Svelte </h3></div><div class="mbe32"></div><p><strong>Please consider Svelte Dialog experimental and not yet ready for production until we can add <a href="https://github.com/AgnosticUI/svelte-a11y-dialog/issues/1" target="_blank" rel="noopener noreferrer">missing tests</a></strong> \u2014 tl;dr is we&#39;d like to write tests utilizing Cypress&#39;s component testing framework but we need to await an upcoming Vite + Cypress plugins to do so.</p><p>In your main <code>app.html</code>, add a container where your dialog will be rendered into \u2014 <code>dialog-root</code> in this example:</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svelte<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>%svelte.body%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="mbe16"></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;agnostic-svelte/css/common.min.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> dialogInstance<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">assignDialogInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    dialogInstance <span class="token operator">=</span> ev<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">openDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dialogInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dialogInstance<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container flex flex-column items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    The following opens because we&#39;ve assigned a dialog <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>ref<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>:
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">isBlock</span>
    <span class="token attr-name">isBordered</span>
    <span class="token attr-name">isRounded</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{openDialog}</span>
  <span class="token punctuation">&gt;</span></span>
    Open dialog via dialogRef
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a11y-dialog<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">dialogRoot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#dialog-root<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">closeButtonLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My close button label<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">closeButtonPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>last<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">titleId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uniqueTitleId<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{{</span>
      <span class="token attr-name"><span class="token namespace">title:</span></span> <span class="token attr-name">&#39;h4</span> <span class="token attr-name">mbe18</span> <span class="token attr-name">flex</span> <span class="token attr-name">justify-center&#39;</span>
    <span class="token attr-name">}}</span>
    <span class="token attr-name">isAnimationFadeIn</span>
    <span class="token attr-name">isAnimationSlideUp</span>
    <span class="token attr-name"><span class="token namespace">on:</span>instance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{assignDialogInstance}</span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      My Dialog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Fill in the form below to receive our newsletter!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
        <span class="token attr-name">isRounded</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">required</span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">isRounded</span>
        <span class="token attr-name">isBlock</span>
      <span class="token punctuation">&gt;</span></span>
        Sign Up
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Dialog/Dialog.svelte" target="_blank" rel="noopener noreferrer">component source</a></p><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:</p><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span>
<span class="token comment"># You can then run any of the top-level scripts:</span>
<span class="token function">yarn</span> start:react <span class="token comment"># or</span>
<span class="token function">yarn</span> start:vue <span class="token comment"># or</span>
<span class="token function">yarn</span> start:angular <span class="token comment"># or</span>
<span class="token function">yarn</span> start:svelte
</code></pre></div><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo" target="_blank" rel="noopener noreferrer">Running monorepo</a>.</p>`,26);function G(p,i,k,o,m,q){const e=c("DialogExamples"),l=c("Alert");return g(),d("div",null,[O,s(e),F,s(l,{type:"warning"},{default:t(()=>[$]),_:1}),Y])}var Q=r(j,[["render",G]]);export{J as __pageData,Q as default};
