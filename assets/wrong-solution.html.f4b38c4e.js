import{_ as t,r,o as i,c,a as n,d as a,e as o,b as e}from"./app.d4f56eb3.js";const l={},d=o(`<h1 id="git\u5E38\u89C1\u9519\u8BEF\u4EE5\u53CA\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u89C1\u9519\u8BEF\u4EE5\u53CA\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> git\u5E38\u89C1\u9519\u8BEF\u4EE5\u53CA\u89E3\u51B3\u65B9\u6CD5</h1><h2 id="git-push-\u62A5\u9519-libressl-ssl-connect-ssl-error-syscall-in-connection-to-github-com-443" tabindex="-1"><a class="header-anchor" href="#git-push-\u62A5\u9519-libressl-ssl-connect-ssl-error-syscall-in-connection-to-github-com-443" aria-hidden="true">#</a> git push \u62A5\u9519 LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443</h2><h4 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h4><p>\u65B0\u7684mac\uFF0C\u914D\u7F6E\u5B8Cgit\u540E\u53EF\u4EE5clone\uFF0C\u4F46\u662F\u4E0D\u80FDpush\uFF0C\u62A5\u9519 <strong>LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443</strong> mac\u7CFB\u7EDF <strong>macOS Catalina 10.15.7</strong></p><h4 id="\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u529E\u6CD5</h4><p>\u7EC8\u7AEF\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>networksetup -setv6off Wi-Fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),h=e("\u5B8C\u6210 "),u=e("\u5176\u4ED6\u89E3\u51B3\u529E\u6CD5\uFF1A"),p={href:"https://stackoverflow.com/questions/48987512/ssl-connect-ssl-error-syscall-in-connection-to-github-com443",target:"_blank",rel:"noopener noreferrer"},_=e("\u70B9\u51FB\u67E5\u770B"),g=e(" \u53C2\u8003\u6587\u7AE0\uFF1A"),b={href:"https://www.jianshu.com/p/42aa9ac04959",target:"_blank",rel:"noopener noreferrer"},m=e("https://www.jianshu.com/p/42aa9ac04959"),S=o(`<h2 id="git\u62A5openssl-ssl-read-connection-was-reset-errno-10054\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#git\u62A5openssl-ssl-read-connection-was-reset-errno-10054\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> git\u62A5OpenSSL SSL_read: Connection was reset, errno 10054\u89E3\u51B3\u65B9\u6CD5</h2><p>\u5F53git\u62A5\u9519</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>OpenSSL SSL_read: Connection was reset, errno <span class="token number">10054</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65F6\uFF0C\u4F30\u8BA1\u662Fssl\u9A8C\u8BC1\u9519\u8BEF\uFF1B\u8FD9\u65F6\u5019\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u89E3\u9664ssl\u9A8C\u8BC1\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global http.sslVerify <span class="token string">&quot;false&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function v(f,L){const s=r("ExternalLinkIcon");return i(),c("div",null,[d,n("p",null,[h,n("em",null,[u,n("a",p,[_,a(s)])]),g,n("a",b,[m,a(s)])]),S])}var x=t(l,[["render",v],["__file","wrong-solution.html.vue"]]);export{x as default};
