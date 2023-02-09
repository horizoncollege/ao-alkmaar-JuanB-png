function TimeSnatcher() {
    const Outputh1 = document.querySelector('h1');
    const fullDate = new Date;
    const hour = fullDate.getHours();
    const greeting = ['Goede nacht :) (Ga naar naar bed)', 'Goede morgen :)', 'Goede middag :)', 'Goede avond :)'];
    let count = 0;
    switch (true) {
        case hour > 17:
            count = 3;
            break;
        case hour > 11:
            count = 2;
            break;
        case hour > 5:
            count = 1;
            break;
        default:
            count = 0;
            break;
    }
    Outputh1.innerHTML = greeting[count] + " Welkom bij Jan Braulio's ao-alkmaar site";
}

TimeSnatcher();