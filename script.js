var quiz = [];


quiz.push({
    question: "In the anime series “Full Metal Alchemist”, what do Alchemists consider the greatest taboo?",
    option1: "Practice of Magic",
    option2: "Human Transmutation",
    option3: "Arts",
    answer: "2"
})

quiz.push({
    question: "In 'One Piece', what does 'the Pirate King' mean to the captain of the Straw Hat Pirates?",
    option1: "Ruler",
    option2: "Freedom",
    option3: "Power",
    answer: "2"
})

quiz.push({
    question: "What sport is being played in the Anime Eyeshield 21?",
    option1: "Basketball",
    option2: "Tennis",
    option3: "American Football",
    answer: "3"
})

quiz.push({
    question: "Who is the main character with yellow hair in the anime Naruto?",
    option1: "Naruto",
    option2: "Minato",
    option3: "Ichigo",
    answer: "1"
})

quiz.push({
    question: "What is the last name of Edward and Alphonse in the Fullmetal Alchemist series",
    option1: "Albert",
    option2: "Elric",
    option3: "Kameha",
    answer: "2"
})

var question= document.getElementById("question");
question.innerHTML = quiz[0].question;
var option1 = document.getElementById("1");
option1.innerHTML = quiz[0].option1;

var option2 = document.getElementById("2");
option2.innerHTML = quiz[0].option2;

var option3 = document.getElementById("3");
option3.innerHTML = quiz[0].option3;

i =0;
x=0;
scorePoints = 0;


function next(){
    i++
    if(i==5){
        alert("GAME OVER" + " You scored " + scorePoints);
    }
    else{
    var question= document.getElementById("question");
    question.innerHTML = quiz[i].question;

    var option1 = document.getElementById("1");
    option1.innerHTML = quiz[i].option1;
    option1.style.backgroundColor = "white";
    option1.style.color = "black";

    var option2 = document.getElementById("2");
    option2.innerHTML = quiz[i].option2;
    option2.style.backgroundColor = "white";
    option2.style.color = "black";

    var option3 = document.getElementById("3");
    option3.innerHTML = quiz[i].option3;
    option3.style.backgroundColor = "white";
    option3.style.color = "black";
    }
}

function select(){
    var ele = event.srcElement.id;
    var elem = document.getElementById(ele);
    console.log(elem);
}


function answer(){
    var ele = event.srcElement.id;
    var elem = document.getElementById(ele);
    var right = document.getElementById(quiz[i].answer);
    var scores = document.getElementById("points");
    
    if(ele == quiz[x].answer){
        scorePoints++;
        scores.innerHTML = scorePoints;
        elem.style.backgroundColor = "green";
        elem.style.color = "white";
    }
    else if(ele != quiz[x].answer){
        elem.style.backgroundColor = "red";
        elem.style.color = "white";
        right.style.backgroundColor = "green";
        right.style.color = "white";
    }

    x++
}



