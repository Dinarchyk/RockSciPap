function Compchoice(){
    var rndnumber = Math.random();
    if (rndnumber < 0.34) {
      rndnumber = "Камень";
    }
    else if (rndnumber <= 0.67) {
      rndnumber = "Ножницы";
    }
    else {
      rndnumber = "Бумага";
    }
    console.log("Компьютер: " + rndnumber);
    return rndnumber;
}
function complete (userschoice,compchoice){
    if (userschoice === compchoice) {
        alert( "Никто не победил!");
        return 0;
    }
    else if (userschoice === "Камень") {
      if (compchoice === "Ножницы") {
        alert("Победа! Ваш камень победил ножницы!");
        return 1;
      }
      else {
          alert("Поражение! Наша бумага победила ваш камень!");
        return -1;
      }
    }
    else if (userschoice === "Бумага") {
      if (compchoice === "Камень") {
        alert("Победа! Ваша бумага победила наш камень!");
        return 1;
      }
      else {
        alert( "Поражение! Наши ножницы победили вашу бумагу!");
        return -1;
      }
    }
    else if (userschoice === "Ножницы") {
      if (compchoice === "Бумага") {
        alert("Победа! Ваши ножницы победили нашу бумагу!");
        return 1;
      }
      else {
        alert("Поражение! Наш камень победил ваши ножницы!");
        return -1;
      }
    }
}
function game (){
    var victory_Count = 0;
    var round_Count = 1;
    var userschoice = "";
    while(true){
        if (victory_Count>=0)
            userschoice = prompt("Игра до 3-х побед, Раунд "+round_Count+", количество побед "+victory_Count+ ". Камень, ножницы или бумага?", "Камень Ножницы Бумага");
        else 
            userschoice = prompt("Игра до 3-х побед, Раунд "+round_Count+", количество поражений "+Math.abs(victory_Count)+ ". Камень, ножницы или бумага?", "Камень Ножницы Бумага");
        if ((userschoice ==null)||(userschoice == "")){
            alert("Вы решили закончить игру(");
            break;
        }
        round_Count++;
        victory_Count+= complete(userschoice, Compchoice());
        console.log("Количество побед"+victory_Count);
        if (victory_Count==2){
            round_Count = 1;
            victory_Count = 0;
            alert("Поздравляем с победой! Начать заново?");
        }
        else if (victory_Count == -2){
            round_Count = 1;
            victory_Count =0;
            alert("Вы проиграли но не отчаивайтесь, попытайте удачу снова) Начать?");
        }
    }
}
prompt("Игра камень, ножницы, бумага, начать?",'');
game();
