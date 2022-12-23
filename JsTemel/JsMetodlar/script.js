//let ogrenciler = ["Eray","Cakir","Merve"];

//sonuc = ogrenciler.length;

// Array to string 

//sonuc = ogrenciler.toString();
//sonuc= ogrenciler.join(" ");


//Eleman silme
//sonuc= ogrenciler.pop(); //Son eleman silinir ve silinen eleman geri döndürülür;

//sonuc=ogrenciler.shift();  //ilk eleman silinir

//Eleman ekleme
//sonuc=ogrenciler.push("soyko"); //Dizinin sonuna eleman ekler

//sonuc = ogrenciler.unshift("Soyko ");

//let markalar1=["Mazda","Toyota"];

//let markalar2=["Opel","Renualt"];

//let markalar3=["Mercedes"];

//sonuc = markalar1.concat(markalar2);//Birleştirdi

 //sonuc = markalar1.splice(0,0,markalar2);


//console.log(sonuc);
//console.log(markalar1);

////////////////////////////////////////////////////////////////






// 1- "Elma,Armut,Muz,Cilek" elemanlarına sahip bir dizi oluştur

let meyveler = ["Elma","Armut","Muz","Cilek"];

// 2- Dizi kac elemanlıdır ?

console.log(meyveler.length);

// 3- Dizinin ilk ve son elemanı nedir ?
console.log(meyveler[0]);
console.log(meyveler.length-1);

// 4- Elma dizinin bir elemanındır ?

console.log(meyveler.includes("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz
 meyveler.push("Kiraz");

// 6- Dizinin son 2 elemanını siliniz.

   meyveler.splice(meyveler.length-2,2);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencini yaşını ve not ortalaamasını hesaplayınız.

/*
    Öğrenci 1 : Yigit Bilgi 2010  (70,60,80)
    Öğrenci 2 : Ada Bilgi 2012    (80,80,90)
    Öğrenci 3   Ahmet Turan 2019   (60,60,70)
*/
