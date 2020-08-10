function Quiz(){
    var score = 0
    var q1rightAns1 = document.getElementById("q1.a4")
    var q1Ans2 = document.getElementById("q1.a1")
    var q1Ans3 = document.getElementById("q1.a2")
    var q1Ans4 = document.getElementById("q1.a3")
    if(q1rightAns1.checked===true){
             score++
             alert("Q1 ans right")
    }
    else{
        alert("Q1 ans wrong")
    }
    var q2rightAns1 = document.getElementById("q2.a2")
    var q2Ans2 = document.getElementById("q2.a1")
    var q2Ans3 = document.getElementById("q2.a3")
    var q2Ans4 = document.getElementById("q2.a4")
    if(q2rightAns1.checked===true){
             score++
             alert("Q2 ans right")
    }
    else{
        alert("Q2 ans wrong")
    }
    var q3rightAns1 = document.getElementById("q3.a3")
    var q3Ans2 = document.getElementById("q3.a1")
    var q3Ans3 = document.getElementById("q3.a2")
    var q3Ans4 = document.getElementById("q3.a4")
    if(q3rightAns1.checked===true){
             score++
             alert("Q3 ans right")
    }
    else{
        alert("Q3 ans wrong")
    }
    alert("Your score is " + score++  +"/3")

}