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
        event.target.append(document.getElementById(statementId));
    }
}

