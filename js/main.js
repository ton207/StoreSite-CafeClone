// 「ページ内リンクを指定している全てのタグ」をquerySelectorAllで取得。

window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        // ①ブラウザのデフォルトの挙動を止める
        e.preventDefault();
        // ②各aタグのターゲットの要素を取得
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        // ③ターゲットの要素のページ上端からの位置座標を取得。
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        // ④ターゲットの要素の位置までスムーススクロールさせる。
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });