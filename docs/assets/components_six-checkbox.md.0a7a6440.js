import{_ as h,K as s,o as D,c as F,O as e,k as t,a as y,X as o}from"./chunks/framework.2094cf97.js";const R=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"components/six-checkbox.md","filePath":"components/six-checkbox.md"}'),b={name:"components/six-checkbox.md"},u=t("h1",{id:"checkbox",tabindex:"-1"},[y("Checkbox "),t("a",{class:"header-anchor",href:"#checkbox","aria-label":'Permalink to "Checkbox"'},"​")],-1),x=t("p",null,"Checkboxes allow the user to toggle an option on or off.",-1),m=o('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Checkbox</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="checked" tabindex="-1">Checked <a class="header-anchor" href="#checked" aria-label="Permalink to &quot;Checked&quot;">​</a></h3><p>Use the <code>checked</code> attribute to activate the checkbox.</p>',4),_=o('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Checked</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="indeterminate" tabindex="-1">Indeterminate <a class="header-anchor" href="#indeterminate" aria-label="Permalink to &quot;Indeterminate&quot;">​</a></h3><p>Use the <code>indeterminate</code> attribute to make the checkbox indeterminate.</p>',3),C=o('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">indeterminate</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Indeterminate</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-label="Permalink to &quot;Disabled&quot;">​</a></h3><p>Use the <code>disabled</code> attribute to disable the checkbox.</p>',3),g=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Disabled</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">indeterminate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Disabled</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Disabled</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="labels" tabindex="-1">Labels <a class="header-anchor" href="#labels" aria-label="Permalink to &quot;Labels&quot;">​</a></h3><p>Use the <code>label</code> attribute to give the checkbox an accessible label. For labels that contain HTML, use the <code>label</code>slot instead.</p>`,3),k=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">I totally agree</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Terms </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color: red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">and</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> conditions</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  I totally agree</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="error-text" tabindex="-1">Error Text <a class="header-anchor" href="#error-text" aria-label="Permalink to &quot;Error Text&quot;">​</a></h2><p>Add a descriptive error message using either the <code>error-text</code> prop, or the equally named slot.</p><p>warning There are two caveats when using the <code>error-text</code> prop/slot:</p><ol><li>Remember to set the <code>invalid</code> prop as well! If you only provide some content to the <code>error-text</code> prop/slot, it won&#39;t be shown unless the <code>invalid</code> prop is set to true</li><li>When using the prop, and you need to show more than one message, remember to also set the <code>error-text-count</code> prop to a value that is the same or bigger than the length of the list of messages you are using. Otherwise only one message will be shown at a time</li></ol><p>The <code>error-text</code> prop accepts either a simple string message, or a list of messages.</p>`,6),A=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Simple string message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">error-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a simple string message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">invalid</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1),T=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">multiple-error-text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">List of string message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">invalid</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sixCheckbox </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multiple-error-text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  sixCheckbox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">errorText </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Message 1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Message 2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  sixCheckbox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">errorTextCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>When using the <code>error-text</code> slot, it is recommended to use the <code>six-error</code> component to wrap the error message(s). This will provide the correct styling out of the box</p>`,2),f=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">invalid</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error-text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-error</span><span style="color:#89DDFF;">               &gt;</span><span style="color:#A6ACCD;">An error message</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/six-group/six-webcomponents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">with a link</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-error</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>checked</code></td><td><code>checked</code></td><td>Set to true to draw the checkbox in a checked state.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td><code>disabled</code></td><td>Set to true to disable the checkbox.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>errorText</code></td><td><code>error-text</code></td><td>The error message shown, if <code>invalid</code> is set to true.</td><td><code>string | string[]</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><code>errorTextCount</code></td><td><code>error-text-count</code></td><td>The number of error texts to be shown (if the error-text slot isn&#39;t used). Defaults to 1</td><td><code>number | undefined</code></td><td><code>undefined</code></td></tr><tr><td><code>indeterminate</code></td><td><code>indeterminate</code></td><td>Set to true to draw the checkbox in an indeterminate state.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>invalid</code></td><td><code>invalid</code></td><td>If this property is set to true and an error message is provided by <code>errorText</code>, the error message is displayed.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>label</code></td><td><code>label</code></td><td>The label text.</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><code>name</code></td><td><code>name</code></td><td>The checkbox&#39;s name attribute.</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><code>required</code></td><td><code>required</code></td><td>Set to true to show an asterisk beneath the label.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td><code>value</code></td><td>The value of the checkbox does not mean if it&#39;s checked or not, use the <code>checked</code> property for that. The value of a checkbox is analogous to the value of an <code>&lt;input type=&quot;checkbox&quot;&gt;</code>, it&#39;s only used when the checkbox participates in a native <code>&lt;form&gt;</code>.</td><td><code>string</code></td><td><code>&#39;on&#39;</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>six-checkbox-blur</code></td><td>Emitted when the control loses focus.</td><td><code>CustomEvent&lt;undefined&gt;</code></td></tr><tr><td><code>six-checkbox-change</code></td><td>Emitted when the control&#39;s checked state changes.</td><td><code>CustomEvent&lt;undefined&gt;</code></td></tr><tr><td><code>six-checkbox-focus</code></td><td>Emitted when the control gains focus.</td><td><code>CustomEvent&lt;undefined&gt;</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="removefocus-promise-void" tabindex="-1"><code>removeFocus() =&gt; Promise&lt;void&gt;</code> <a class="header-anchor" href="#removefocus-promise-void" aria-label="Permalink to &quot;\`removeFocus() =&gt; Promise&lt;void&gt;\`&quot;">​</a></h3><p>Removes focus from the checkbox.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>Type: <code>Promise&lt;void&gt;</code></p><h3 id="setfocus-options-focusoptions-promise-void" tabindex="-1"><code>setFocus(options?: FocusOptions) =&gt; Promise&lt;void&gt;</code> <a class="header-anchor" href="#setfocus-options-focusoptions-promise-void" aria-label="Permalink to &quot;\`setFocus(options?: FocusOptions) =&gt; Promise&lt;void&gt;\`&quot;">​</a></h3><p>Sets focus on the checkbox.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>Type: <code>Promise&lt;void&gt;</code></p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;error-text&quot;</code></td><td>Error text that is shown for validation errors. Alternatively, you can use the error-text prop.</td></tr><tr><td><code>&quot;label&quot;</code></td><td>The checkbox label.</td></tr></tbody></table><h2 id="shadow-parts" tabindex="-1">Shadow Parts <a class="header-anchor" href="#shadow-parts" aria-label="Permalink to &quot;Shadow Parts&quot;">​</a></h2><table><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;base&quot;</code></td><td>The component&#39;s base wrapper.</td></tr><tr><td><code>&quot;checked-icon&quot;</code></td><td>The container the wraps the checked icon.</td></tr><tr><td><code>&quot;control&quot;</code></td><td>The checkbox control.</td></tr><tr><td><code>&quot;indeterminate-icon&quot;</code></td><td>The container that wraps the indeterminate icon.</td></tr><tr><td><code>&quot;text&quot;</code></td><td>The checkbox text rendered to the right.</td></tr></tbody></table><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><h3 id="depends-on" tabindex="-1">Depends on <a class="header-anchor" href="#depends-on" aria-label="Permalink to &quot;Depends on&quot;">​</a></h3><ul><li><a href="./six-error.html">six-error</a></li></ul><h3 id="graph" tabindex="-1">Graph <a class="header-anchor" href="#graph" aria-label="Permalink to &quot;Graph&quot;">​</a></h3><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  six-checkbox </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> six-error</span></span>
<span class="line"><span style="color:#A6ACCD;">  style six-checkbox fill:#f9f,stroke:#333,stroke-width:4px</span></span></code></pre></div><hr><p>Copyright © 2021-present SIX-Group</p>`,25);function q(v,E,P,S,w,I){const a=s("docs-demo-six-checkbox-0"),n=s("docs-demo-six-checkbox-1"),l=s("docs-demo-six-checkbox-2"),c=s("docs-demo-six-checkbox-3"),p=s("docs-demo-six-checkbox-4"),r=s("docs-demo-six-checkbox-5"),d=s("docs-demo-six-checkbox-6"),i=s("docs-demo-six-checkbox-7");return D(),F("div",null,[u,x,e(a),m,e(n),_,e(l),C,e(c),g,e(p),k,e(r),A,e(d),T,e(i),f])}const N=h(b,[["render",q]]);export{R as __pageData,N as default};
