form1 = document.getElementById("b1")
sol1=["I have waited an hour to get the tickets.","I've waited an hour to get the tickets."]
sol2=["Why don't you come to visit us on Sunday?","Why do not you come to visit us on Sunday?"]
sol3=["Let's take a taxi. I don't want us to be late.","Let us take a taxi.I do not want us to be late","Let us take a taxi.I don't want us to be late","Let's take a taxi. I do not want us to be late"]
sol4=["Did Ron go upstairs to study or to play?"]
sol5=["Hurry up to finish your homework."]
sol6=["Come and sit in the garden."]
sol7=["Let's go play soccer this afternoon.","Let's go to play soccer this afternoon.","Let us go to play soccer this afternoon.","Let us go play soccer this afternoon."]
sol8=["Meryl doesn't know whether to accept her boss's invitation or not.","Meryl does not know whether to accept her boss's invitation or not."]
sol9=["I have told you many times not to read my emails.","I've told you many times not to read my emails."]
sol10=["Do you want me to turn on the light?"]
const solutions = [sol1,sol2,sol3,sol4,sol5,sol6,sol7,sol8,sol9,sol10]

const correct = () => {
    let mark = 0
    let mark2 = mark
    let mistakes = new Array(0)
    let s1 = document.exercise.s1.value
    let s2 = document.exercise.s2.value
    let s3 = document.exercise.s3.value
    let s4 = document.exercise.s4.value
    let s5 = document.exercise.s5.value
    let s6 = document.exercise.s6.value
    let s7 = document.exercise.s7.value
    let s8 = document.exercise.s8.value
    let s9 = document.exercise.s9.value
    let s10 = document.exercise.s10.value
    let answers1 = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]
    let answers = answers1.map( e => e.trim())

    for(let a = 0;a<10;a++){
        while(answers[a][answers[a].length-2] == " "){
            answers[a] = answers[a].slice(0,answers[a].length-2)+answers[a].slice(answers[a].length-1,answers[a].length)
            alert(answers[a])
        }
        
    }
    const ss1 = () => {
        document.getElementById("sol1").innerHTML = sol1[0]
    }


    for(let i = 0;i<answers.length;i++){
        for(let j = 0;j<solutions[i].length;j++){
            mark2 = mark
            if(solutions[i][j] == answers[i]){
                mark ++
                break
            }
        }
        if ( mark2 != mark){
            mistakes.push("Right answer")
        }
        else{
            mistakes.push("Wrong answer : "+answers[i]+" The solution is : "+solutions[i][0])
        }
    }
    for( let k = 0;k< 10;k++){
        if (mistakes[k] != "Right answer"){
            document.getElementById("sol"+String(k+1)).innerHTML = "<button onclick=ss"+(k+1)+"()>Show solutions</button> <img src='https://icon2.cleanpng.com/20190228/bre/kisspng-red-x-stock-photography-image-letter-portable-netw-5c7878899969a0.1754724515513990496284.jpg' height=20vh width=20vh>"
        }
        else{
            document.getElementById("sol"+String(k+1)).innerHTML ="<img src='https://image.freepik.com/premium-photo/green-tick-mark-white-background_172429-560.jpg' height=20vh width=20vh>"
        }
    }
    document.getElementById("mark").innerHTML = "VOTO : "+ mark

}

function ss1 () {
    document.getElementById("sol1").innerHTML= sol1[0]
}

function ss2 () {
    document.getElementById("sol2").innerHTML= sol2[0]
}

function ss3 () {
    document.getElementById("sol3").innerHTML= sol3[0]
}

function ss4 () {
    document.getElementById("sol4").innerHTML= sol4[0]
}

function ss5 () {
    document.getElementById("sol5").innerHTML= sol5[0]
}

function ss6 () {
    document.getElementById("sol6").innerHTML= sol6[0]
}

function ss7 () {
    document.getElementById("sol7").innerHTML= sol7[0]
}

function ss8 () {
    document.getElementById("sol8").innerHTML= sol8[0]
}

function ss9 () {
    document.getElementById("sol9").innerHTML= sol9[0]
}

function ss10 () {
    document.getElementById("sol10").innerHTML= sol10[0]
}

