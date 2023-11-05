
/*generate statements */
function Statement(statementText, correctAnswer, id){
    this.statementText = statementText;
    this.correctAnswer = correctAnswer;
    this.id = id;
}

let idCnt = 1;
function seedStatements(){
    let s1 = new Statement(`The author's "Rich Dad" believed in the value of 
    entrepreneurship and investing in assets.`, true, "s"+idCnt++);
    let s2 = new Statement(`One of the core principles in the book is that it's better to work 
    for money than to have money work for you.`, false, "s"+idCnt++);
    let s3 = new Statement(`The book emphasizes the importance of job security and 
a steady paycheck as the path to financial success.`, false, "s"+idCnt++);
    let s4 = new Statement(` "Rich Dad Poor Dad" argues that your house is
     an asset because it can appreciate in value over time.`, true, "s"+idCnt++);
    let s5 = new Statement(`The author suggests that formal education and a college degree
     are the primary ways to achieve financial success.`, false, "s"+idCnt++);
    let s6 = new Statement(`The book teaches that financial IQ, or financial 
    intelligence, is a key factor in achieving financial success.`, true, "s"+idCnt++);
    let s7 = new Statement(`"Rich Dad Poor Dad" advocates for taking on substantial debt to fund 
    investments in real estate and other income-generating assets.`, true, "s"+idCnt++);
    let s8 = new Statement(`The book encourages individuals to rely on their job 
    and paycheck as the sole sources of income.`, false, "s"+idCnt++);
    let s9 = new Statement(`Robert Kiyosaki's "Poor Dad" achieved financial success
     primarily by saving money and avoiding financial risks.`, true, "s"+idCnt++);
    let s10 = new Statement(`The author believes that financial education and taking control of one's financial future are essential
     steps towards financial independence.`, true, "s"+idCnt++);
    let statementsArr = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
    
    const randomNumbers = [];

    while(randomNumbers.length<4){
        const randomNumber = Math.floor(Math.random() * statementsArr.length); 
        if(randomNumbers.indexOf(randomNumber)===-1) randomNumbers.push(randomNumber);
    }

    const statementsToGenerate = [];
    Array.from(randomNumbers).forEach(number=>{
        statementsToGenerate.push(statementsArr[number]);
    });
    return statementsToGenerate;
}

const statementsArr = seedStatements();

Array.from(statementsArr).forEach((statement)=>{
    let statements = document.querySelector("#statements");
    let div = document.createElement("div");
    div.innerHTML = statement.statementText;
    div.draggable = true;
    div.id = statement.id;
    div.classList.add("d-flex",  "justify-content-center", "bg-light", "w-75",  "py-3","my-2", 
    "border","border-5", "border-info", "text-center", "statement");
    statements.appendChild(div);
})


/* drag drop function */

const statementsZone = document.querySelector("#statements");
const trueZone = document.querySelector("#trueZone");
const falseZone = document.querySelector("#falseZone");
const statments = document.querySelectorAll(".statement")



trueZone.ondragover = allowDrop;
falseZone.ondragover = allowDrop;
statementsZone.ondragover = allowDrop;


function allowDrop(event){
    event.preventDefault();
}

Array.from(statments).forEach((statement) => {
    statement.ondragstart = drag;
  });

function drag(event){
    event.dataTransfer.setData('id', event.target.id);
}

trueZone.ondrop = drop;
falseZone.ondrop = drop;
statementsZone.ondrop = drop;

function drop(event){
    let statementId = event.dataTransfer.getData("id");
    let targetId = event.target.id;
    if(targetId=="statements"||targetId=="trueZone"||targetId=="falseZone"){
        let statement = document.getElementById(statementId);
        if(targetId=="statements"){
            if(statement.classList.contains("border-success")){
                statement.classList.remove("border-success");
            }
            if(statement.classList.contains("border-danger")){
                statement.classList.remove("border-danger");
            }
            statement.classList.add("border-info");
        }
        event.target.append(document.getElementById(statementId));
    }
}


/*check answers */
const checkBtn = document.querySelector("#checkBtn")
const winSound = new Audio("audio/win_sound.mp3")
checkBtn.onclick = check

function check(event){
    const trueAnswers = document.querySelector("#trueZone").querySelectorAll('.statement');
    let correctAnswersCnt = 0;
    Array.from(trueAnswers).forEach(answer=>{
        let statement = statementsArr.filter(function(el){
            return el.id===answer.id;
        })
        if(statement[0].correctAnswer==true){
            answer.classList.contains("border-info")?answer.classList.remove("border-info"):null;
            answer.classList.contains("border-danger")?answer.classList.remove("border-danger"):null;
            answer.classList.add("border-success");
            correctAnswersCnt++;
            
        }else{
            answer.classList.contains("border-info")?answer.classList.remove("border-info"):null;
            answer.classList.contains("border-success")?answer.classList.remove("border-success"):null;
            answer.classList.add("border-danger");
        
        }
    })

    const falseAnswers = document.querySelector("#falseZone").querySelectorAll(".statement");
    
    Array.from(falseAnswers).forEach(answer=>{
        let statement = statementsArr.filter(function(el){
            return el.id===answer.id;
        })
        if(statement[0].correctAnswer==false){
            answer.classList.contains("border-info")?answer.classList.remove("border-info"):null;
            answer.classList.contains("border-danger")?answer.classList.remove("border-danger"):null;
            answer.classList.add("border-success");
            correctAnswersCnt++;
            
        }else{
            answer.classList.contains("border-info")?answer.classList.remove("border-info"):null;
            answer.classList.contains("border-success")?answer.classList.remove("border-success"):null;
            answer.classList.add("border-danger");
        }
    })

    if(correctAnswersCnt==statementsArr.length){
        winSound.play();
        setTimeout(() => {
            confetti({
                particleCount: 300,
                spread: 200,
                origin: { y: 0.6 }
              });
        }, 2500);
        
    }
}


const reloadBtn = document.querySelector("#reload");
reloadBtn.addEventListener("click", ()=>{
    location.reload();
});

