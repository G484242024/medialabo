
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let i = 0; i < data.results.shop.length; i++) {
    console.log((i + 1) + "件目の検索結果");
    console.log("名前:", data.results.shop[i].name);
    console.log("住所:", data.results.shop[i].address);
    console.log("予算:", data.results.shop[i].budget.name);
    console.log("キャッチコピー:", data.results.shop[i].catch);
    console.log("ジャンル:", data.results.shop[i].genre.name);
    console.log("営業時間:", data.results.shop[i].open);
    console.log("最寄駅:", data.results.shop[i].station_name);
    if (data.results.shop[i].sub_genre) {
      console.log("サブジャンル:", data.results.shop[i].sub_genre.name);
    } else {
      console.log("サブジャンル: なし");
    }
    console.log("ロゴイメージ(pc)", data.results.shop[i].logo_image);
  }
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector('div#result');
  if (old !== null) {
    old.remove();
  }
  let oldMessage = document.querySelector('p#endMessage');
  if (oldMessage !== null) {
    oldMessage.remove();
  }
  let p = document.querySelector('p#message');
  p.textContent = data.results.shop.length + "件がヒットしました";

  let r = document.createElement('div');
  r.classList.add('box');
  r.setAttribute('id', 'result');
  let b = document.querySelector('body');
  b.insertAdjacentElement('beforeend', r);

  for (let shop of data.results.shop) {
    let d = document.createElement('div');


    let h2 = document.createElement('h2');
    h2.textContent = shop.name;
    h2.classList.add('h2');
    d.insertAdjacentElement('beforeend', h2);


    let u = document.createElement('ul');

    let l = document.createElement('li');
    l.textContent = '住所: ' + shop.address;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '予算: ' + shop.budget.name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = 'キャッチコピー: ' + shop.catch;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = 'ジャンル: ' + shop.genre.name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '営業時間: ' + shop.open;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '最寄駅: ' + shop.station_name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    if (shop.sub_genre) {
      l.textContent = 'サブジャンル: ' + shop.sub_genre.name;
    } else {
      l.textContent = 'サブジャンル: なし';
    }
    u.insertAdjacentElement('beforeend', l);

    let img = document.createElement('img');
    img.classList.add('sign');
    img.setAttribute('src', shop.logo_image);

    d.insertAdjacentElement('beforeend', img);


    d.insertAdjacentElement('beforeend', u);


    r.insertAdjacentElement('beforeend', d);
  }
  let o = document.createElement('p');
  o.textContent = '検索結果は以上です';
  o.setAttribute('id', 'endMessage');
  let x = document.querySelector('div#result');
  x.insertAdjacentElement('afterend', o);
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
// イベントハンドラ登録
b = document.querySelector('button#sendRequest');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  let genre = document.getElementById('genre').value;
  console.log("選択されたジャンル:", genre);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';
  console.log("アクセスするURL:", url);
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  print(data);
  printDom(data);

}

// 通信エラー処理
function showError(err) {
  console.log(err);
}

// 通信完了時
function finish() {
  console.log('Ajax 通信が終わりました');
}
