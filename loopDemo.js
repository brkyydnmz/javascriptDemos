function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit);
}

for (var i = 1; i <= 8; i++) {
    console.log(i +". KOLON");
    for (var j = 1; j <= 6; j++) {
        console.log(sayiUret());
    }

}

//6*8 kere sayı üretir yani 48,for içinde for dan dolayı her kolonda 6 taneden 8 tane kolon