/*let matn = "Salom";
let raqam = 12345;
let soz;*/
// let rost = true;        /* true & false */

/*let rost = 45 == 45?true:false;*/
/*document.write(rost);*/

//let arrayObject = [45,78,'salom','matn',true,false,'javascript','olma',123]
//let oddiyObject = {ism: "Islom", yoshi: 18, mahallasi: "Oltintopgan", dusti: "Sardor"}
// document.write(typeof oddiyObject)
//console.log(oddiyObject.ism, oddiyObject.dusti)


// Function in JS




/*function savatchaniTekshir(uzatilganContainer=[12,"text"]) {
    if (uzatilganContainer.length == 0){
        document.write("Savatchaning ichida " + uzatilganContainer.length + " dona ma'lumot bor!");
    }else{
        document.write("Savatchaning ichida " + uzatilganContainer.length + " ta ma'lumot bor!");
    }
}
let container = [12,78,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
savatchaniTekshir(container)*/

let sana = new Date();

sana.setFullYear(2007);
sana.setMonth(2);
sana.setDate(30);

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftaKuni = sana.getDay()

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let hafta = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write("Bugun " + yil + " yil " + oylar[oy] + "ning " + kun + "-kuni. " + "Haftaning " + hafta[haftaKuni] + " kuni.")