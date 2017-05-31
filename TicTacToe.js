/**
 * Created by matthias on 29/05/17.
 */
$(document).ready(function () {
    var cCoup = 0;
    var adversaire;
    var bot;
    var caseBot;
    var winner;
    var winningPosition = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [3, 6, 9],
        [2, 5, 8],
        [1, 5, 9],
        [3, 5, 7]
    ];
    var xIsNext = true;
    var tab = [$(".square-1"), $(".square-2"), $(".square-3"),
        $(".square-4"), $(".square-5"), $(".square-6"),
        $(".square-7"), $(".square-8"), $(".square-9")];
    var findWinner = function(){

        winningPosition.forEach(function(elem){
            if(tab[elem[0]-1].html() && tab[elem[0]-1].html() === tab[elem[1]-1].html() && tab[elem[0]-1].html() === tab[elem[2]-1].html() ){
                winner = tab[elem[0]-1].html()
            }
        })
    };
    var gestionClick = function(i){
        if(xIsNext && !tab[i].html() && !winner){
            tab[i].html("X");
            cCoup++;
            xIsNext = !xIsNext;
        }
        else if(!tab[i].html() && !winner){
            tab[i].html("O");
            cCoup++;
            xIsNext = !xIsNext;
        }
        findWinner();

        if(bot === "X" && xIsNext && !winner){
            botPlay();
        }
        else if(bot === "O" && !xIsNext && !winner){
            botPlay();
        }
        if(!winner)
            findWinner();
        if(cCoup === 9){
            $(".info").html("Equality!");
            bot = "";
            setTimeout(resetBoard, 2000);
        }

        if(winner){

            $(".info").html(winner + " has win!");
            bot = "";
            setTimeout(resetBoard, 2000);
        }
    };
    var botPlay = function(){
        caseBot = Math.floor(Math.random() * 9);
        if(!tab[caseBot].html()){
            tab[caseBot].html(bot);
            xIsNext = !xIsNext;
            cCoup++;
        }
        else{
            botPlay();
        }

    };
    var resetBoard = function () {

        xIsNext = true;
        tab.forEach(function (elem) {
            elem.html("");
        })
        $(".info").html(null);
        winner = null;
        $(".board").css("display", "none");
        $(".select-adversaire").css("display", "initial");
        cCoup = 0;
    };


    tab[0].click(function () {
        gestionClick(0);
    });
    tab[1].click(function () {
        gestionClick(1);
    });
    tab[2].click(function () {
        gestionClick(2);
    });
    tab[3].click(function () {
        gestionClick(3);
    });
    tab[4].click(function () {
        gestionClick(4);
    });
    tab[5].click(function () {
        gestionClick(5);
    });
    tab[6].click(function () {
        gestionClick(6);
    });
    tab[7].click(function () {
        gestionClick(7);
    });
    tab[8].click(function () {
        gestionClick(8);
    });

    $(".vs-player").click(function () {
        console.log("click!");
        $(".select-adversaire").css("display", "none");
        $(".board").css("display", "initial");
    })
    $(".vs-bot").click(function () {
        $(".select-adversaire").css("display", "none");
        $(".select-form").css("display", "initial");
    })

    $(".play-O").click(function () {
        bot = "X";
        $(".select-form").css("display", "none");
        $(".board").css("display", "initial");
        botPlay(bot);
    })
    $(".play-x").click(function(){
        bot = "O";
        $(".select-form").css("display", "none");
        $(".board").css("display", "initial");
    })


});