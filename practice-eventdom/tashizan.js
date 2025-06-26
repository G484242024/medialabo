function greeting() {
    let i1 = document.querySelector('input[name="left"]');
    let name1 = Number(i1.value);

    let i2 = document.querySelector('input[name="right"]');
    let name2 = Number(i2.value);

    let p = document.querySelector('span#answer');
    p.textContent = name1 + name2;
}
b = document.querySelector('button#calc');
b.addEventListener('click', greeting); 