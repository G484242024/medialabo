console.log('こんにちは');
let x;
x = 3;
x = x + 1;
console.log(x);
let campus = {
  address: "八王子市館町",
  buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
  gakka: ["機械システム工学科", "電子システム工学科", "情報工学科", "デザイン学科"],
};
console.log(campus.address);
for(let room of campus.buildingD){
    console.log(room);
}
for(let gaka of campus.gakka){
    console.log(gaka);
}