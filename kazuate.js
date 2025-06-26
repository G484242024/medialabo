// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

a = document.querySelector('button#print');
a.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kazu"]');
  let yoso = Number(i.value);
  kaisu = kaisu + 1;
  let p1 = document.querySelector('span#kaisu');
  p1.textContent = kaisu
  let p = document.querySelector('span#answer');
  p.textContent = yoso;

  // 課題3-1: 正解判定する
  let rusult = document.querySelector('p#result');
  if (yoso === kotae) {
    rusult.textContent = '正解です。おめでとう！'
  } else if (kaisu <= 2 && yoso > kotae) {
    rusult.textContent = 'まちがい。答えはもっと小さいですよ'
  } else if (kaisu <= 2 && yoso < kotae) {
    rusult.textContent = 'まちがい。答えはもっと大きいですよ'
  } else if (kaisu === 3) {
    rusult.textContent = 'まちがい。残念でした答えは' + kotae + 'です。'
  } else if (kaisu >= 4) {
    rusult.textContent = '答えは' + kotae + 'でした。すでにゲームは終わっています。'
  }

  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
