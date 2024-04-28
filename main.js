let turn = "x";
let flag = 0 ;
let title = document.getElementById("title").innerHTML;
document.getElementById("start").onclick = function(){
    if(turn === "x"){
        document.getElementById("title").innerHTML = "X turn";
        document.getElementById("title").style.marginLeft = "130px";
        document.body.style.backgroundColor = "#984936d9";
    }
    if(turn === "o"){
        document.getElementById("title").innerHTML = "O turn";
        document.getElementById("title").style.marginLeft = "130px";
        document.body.style.backgroundColor = "white";
    }
    flag = 1;
};
function game(id){
    if(flag === 1){
    let value = document.getElementById(id);
    if(turn === "x" && value.innerHTML == "")
    {   
        value.innerHTML = "X";
        turn = "o";
    }
    else if(turn === "o" && value.innerHTML == ""){
        value.innerHTML = "O";
        turn = "x";
        document.getElementById(id).style.backgroundColor = "blue";
    }
    if(turn === "x"){
        document.getElementById("title").innerHTML = "X turn";
        document.getElementById("title").style.marginLeft = "130px";
        document.body.style.backgroundColor = "#984936d9";
    }
    else if(turn === "o"){
        document.getElementById("title").innerHTML = "O turn";
        document.getElementById("title").style.marginLeft = "130px";
        document.body.style.backgroundColor = "white";
    }
    winner();
}
}
let allsquare = [];
function winner(){
    for(let i=1 ; i<=9 ; i++){
        allsquare[i] = document.getElementById(`place${i}`).innerHTML;
    }
    if(allsquare[1] === allsquare[2] && allsquare[2] === allsquare[3] && allsquare[1] != ""){
        if(allsquare[1] == "X"){
        document.getElementById("title").innerHTML = "Player One Wins";
        document.getElementById("title").style.marginLeft = "20px";
        document.getElementById("title").style.color = "white";
        document.getElementById("text2").style.color = "white";
        document.body.style.backgroundImage = "url(wins.gif)";
        setInterval(function(){
            document.getElementById("title").innerHTML = "Next Game after 5 second";
        },1000);
        setTimeout(function(){
            location.reload();
        },4000);
    }
    else if(allsquare[1] == "O"){
        document.getElementById("title").innerHTML = "Player Two Wins";
        document.getElementById("title").style.marginLeft = "20px";
        document.getElementById("title").style.color = "white";
        document.getElementById("text2").style.color = "white";
        document.body.style.backgroundImage = "url(wins.gif)";
        setInterval(function(){
            document.getElementById("title").innerHTML = "Next Game after 5 second";
        },1000);
        setTimeout(function(){
            location.reload();
        },4000);
    }
}

else if(allsquare[4] === allsquare[5] && allsquare[5] === allsquare[6] && allsquare[4] != ""){
    if(allsquare[4] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[4] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}

else if(allsquare[7] === allsquare[8] && allsquare[8] === allsquare[9] && allsquare[7] != ""){
    if(allsquare[7] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[7] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)"; 
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}

else if(allsquare[1] === allsquare[5] && allsquare[5] === allsquare[9] && allsquare[1] != ""){
    if(allsquare[1] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[1] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}

else if(allsquare[3] === allsquare[5] && allsquare[5] === allsquare[7] && allsquare[3] != ""){
    if(allsquare[3] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[3] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}

else if(allsquare[1] === allsquare[4] && allsquare[4] === allsquare[7] && allsquare[1] != ""){
    if(allsquare[1] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[1] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}

else if(allsquare[2] === allsquare[5] && allsquare[5] === allsquare[8] && allsquare[2] != ""){
    if(allsquare[2] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[2] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}

else if(allsquare[3] === allsquare[6] && allsquare[6] === allsquare[9] && allsquare[3] != ""){
    if(allsquare[3] == "X"){
    document.getElementById("title").innerHTML = "Player One Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
else if(allsquare[3] == "O"){
    document.getElementById("title").innerHTML = "Player Two Wins";
    document.getElementById("title").style.marginLeft = "20px";
    document.getElementById("title").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.body.style.backgroundImage = "url(wins.gif)";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}
else if(allsquare[1] != "" && allsquare[2] != "" && allsquare[3] != "" && allsquare[4] != "" &&allsquare[5] != "" 
&&allsquare[6] != "" &&allsquare[7] != "" &&allsquare[8] != "" &&allsquare[9] != "" ) 
{
    document.getElementById("title").innerHTML = "Draw";
    document.getElementById("title").style.marginLeft = "130px";
    document.getElementById("title").style.color = "red";
    document.body.style.backgroundColor = "white";
    setInterval(function(){
        document.getElementById("title").innerHTML = "Next Game after 5 second";
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}
}