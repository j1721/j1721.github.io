document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.mv').addEventListener('click', function (e) {

        // bodyにフェードアウトのクラスを追加
        document.body.classList.add('fade-out');

        // CSSのトランジションに合わせてタイマーを設定し、その後にページ遷移を実行
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 500); // 0.5秒後に実行
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav a[id="top"]').addEventListener('click', function (e) {

        e.preventDefault();
        // bodyにフェードアウトのクラスを追加
        document.body.classList.add('fade-out');

        // CSSのトランジションに合わせてタイマーを設定し、その後にページ遷移を実行
        setTimeout(function () {
            window.location.href = 'top.html';
        }, 500); // 0.5秒後に実行
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav a[id="profile"]').addEventListener('click', function (e) {

        e.preventDefault();
        // bodyにフェードアウトのクラスを追加
        document.body.classList.add('fade-out');

        // CSSのトランジションに合わせてタイマーを設定し、その後にページ遷移を実行
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 500); // 0.5秒後に実行
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav a[id="solty"]').addEventListener('click', function (e) {

        e.preventDefault();
        // bodyにフェードアウトのクラスを追加
        document.body.classList.add('fade-out');

        // CSSのトランジションに合わせてタイマーを設定し、その後にページ遷移を実行
        setTimeout(function () {
            window.open('https://www.solty.co.jp/', '_blank')
        }, 500); // 0.5秒後に実行
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav a[id="works"]').addEventListener('click', function (e) {

        e.preventDefault();
        // bodyにフェードアウトのクラスを追加
        document.body.classList.add('fade-out');

        // CSSのトランジションに合わせてタイマーを設定し、その後にページ遷移を実行
        setTimeout(function () {
            window.location.href = 'works.html';
        }, 500); // 0.5秒後に実行
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // モーダルの要素を取得
    var modal = document.getElementById("popup-modal");

    // 閉じるボタンの要素を取得
    var closeButton = document.querySelector(".close-button");

    // モーダルを表示する関数
    function showModal() {
        modal.style.display = "block";
    }

    // モーダルを閉じる関数
    function closeModal() {
        modal.style.display = "none";
    }

    // 閉じるボタンがクリックされたらモーダルを閉じる
    closeButton.addEventListener('click', closeModal);

    // モーダル外のエリアがクリックされたらモーダルを閉じる（オプショナル）
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // ページの読み込みが完了したらモーダルを表示する
    showModal();
});

window.addEventListener('load', function () {
    document.body.classList.add('fade-in');
});

