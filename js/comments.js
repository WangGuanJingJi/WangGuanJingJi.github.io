/* global CONFIG */

window.addEventListener('tabs:register', () => {
  let { activeClass } = CONFIG.comments;
  if (CONFIG.comments.storage) {
    activeClass = localStorage.getItem('comments_active') || activeClass;
  }
  if (activeClass) {
    const activeTab = document.querySelector(`a[href="#comment-${activeClass}"]`);
    if (activeTab) {
      activeTab.click();
    }
  }
});
if (CONFIG.comments.storage) {
  window.addEventListener('tabs:click', event => {
    if (!event.target.matches('.tabs-comment .tab-content .tab-pane')) return;
    const commentClass = event.target.classList[1];
    localStorage.setItem('comments_active', commentClass);
  });
}


var script = document.createElement("script");
script.setAttribute("type","text/javascript");
script.setAttribute("id","myhk");
script.setAttribute("src","https://myhkw.cn/api/player/165613536537");
script.setAttribute("key","165613536537");
script.setAttribute("m","1");
document.documentElement.appendChild(script);