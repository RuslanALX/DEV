let n=25;
while(n>1){
    n--;
    console.log(number(n));
    function number (n){
        switch (n) { 
            case 5 : return 'Пять';
            case 13 : return 'Тринадцать';
            case 13 : return 'Тринадцать';
            case 22 : return 'Двадцать два';
            case 35 : return 'Тридцать пять';
            case 98 : return 'Девяносто восемь';
            default: return n;
        }
    }
}


