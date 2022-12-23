// 2 vize (%40) ve 1 final (%60) notuna göre hesaplanan ort icin;
// a- Eger ortalama 50 ve ustuyse gecti degilse bile kaldı yazsın
// b- Gecmek icin ortalama 50 bile olsa final notu en az 50 olacak
// c- finalden 70 alındığında ortalama 50'nin altında olsa bile geçilsin


let vize1=1;
let vize2=1;
let final=71;

let  ortalama = (((vize1+vize2)/2)*0.4)+(final*0.6);
console.log("Ortalamanız "+ortalama);

if(ortalama>=50&&final>50||final>=70)
{
    console.log("gectiniz");
}
else{
    console.log ("Kaldınız");
}
