import{_ as e,o as i,c as n,e as s}from"./app.fd5cf31d.js";var r="/assets/git-author.9520c31f.png",l="/assets/reset.a5ddbce5.png",t="/assets/revert.3fd95937.png";const d={},a=s(`<h1 id="git\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> git\u5E38\u7528\u547D\u4EE4</h1><ul><li>\u67E5\u770B\u67D0\u4E2A\u4EBA\u7684\u63D0\u4EA4\u8BB0\u5F55log</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git log --author=\u201Cauthor\u201D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+r+`" alt="\u7279\u6B8A\u683C\u5F0F\u663E\u793Alog"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git log --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset&#39; --abbrev-commit --date=relative
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>gitignore\u4FEE\u6539\u4E0D\u751F\u6548\u89E3\u51B3\u65B9\u6CD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rm -r --cached .
 
git add .
 
git commit -m &#39;\u5907\u6CE8&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u56DE\u6EDA\u7684\u5E38\u89C1\u64CD\u4F5C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6682\u5B58\u533A\u7684\u76EE\u5F55\u6811\u4F1A\u88AB\u91CD\u5199\uFF0C\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u7684\u5185\u5BB9\u4F1A\u88AB\u4E22\u5F03\uFF0C\u4F46\u662F\u5DE5\u4F5C\u533A\u4E0D\u53D7\u5F71\u54CD
git reset HEAD~1

// \u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u76EE\u5F55\u90FD\u540C\u6B65\u5230\u4F60\u6307\u5B9A\u7684\u63D0\u4EA4
git reset --hard HEAD~1

// \u56DE\u9000\u5230\u67D0\u6B21\u63D0\u4EA4
git reset commit
// \u7136\u540E\u5F3A\u5236\u63A8\u9001
git push -f

// revert\u65B9\u5F0F\uFF0Cgit revert\u662F\u7528\u4E8E\u201C\u53CD\u505A\u201D\u67D0\u4E00\u4E2A\u7248\u672C\uFF0C\u4EE5\u8FBE\u5230\u64A4\u9500\u8BE5\u7248\u672C\u7684\u4FEE\u6539\u7684\u76EE\u7684\u3002\u6BD4\u5982\uFF0C\u6211\u4EECcommit\u4E86\u4E09\u4E2A\u7248\u672C\uFF08\u7248\u672C\u4E00\u3001\u7248\u672C\u4E8C\u3001 \u7248\u672C\u4E09\uFF09\uFF0C\u7A81\u7136\u53D1\u73B0\u7248\u672C\u4E8C\u4E0D\u884C\uFF08\u5982\uFF1A\u6709bug\uFF09\uFF0C\u60F3\u8981\u64A4\u9500\u7248\u672C\u4E8C\uFF0C\u4F46\u53C8\u4E0D\u60F3\u5F71\u54CD\u64A4\u9500\u7248\u672C\u4E09\u7684\u63D0\u4EA4\uFF0C\u5C31\u53EF\u4EE5\u7528 git revert \u547D\u4EE4\u6765\u53CD\u505A\u7248\u672C\u4E8C\uFF0C\u751F\u6210\u65B0\u7684\u7248\u672C\u56DB\uFF0C\u8FD9\u4E2A\u7248\u672C\u56DB\u91CC\u4F1A\u4FDD\u7559\u7248\u672C\u4E09\u7684\u4E1C\u897F\uFF0C\u4F46\u64A4\u9500\u4E86\u7248\u672C\u4E8C\u7684\u4E1C\u897F
git revert commit 
//\u7136\u540E\u4FEE\u6539\u540E\u63D0\u4EA4
git commit -m &#39;\u5907\u6CE8&#39;
// \u63A8\u9001\u5230\u8FDC\u7AEF
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>reset\u548Crevert\u533A\u522B <img src="`+l+'" alt="reset"><img src="'+t+'" alt="revert"></li></ul>',10),v=[a];function c(m,u){return i(),n("div",null,v)}var o=e(d,[["render",c],["__file","command.html.vue"]]);export{o as default};
