a = document.querySelector('button#search');
a.addEventListener('click', search);

function search(){
let kensaku = document.querySelector('input[name="keyword"]');
let genre = kensaku.value;
console.log('検索キー: ' + genre); 
let p = document.querySelector('p#message');
p.textContent = '2件がヒットしました。'
}