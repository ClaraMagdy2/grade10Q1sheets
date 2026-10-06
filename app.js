const questions = [
["What is abstraction in computing?",["Showing every implementation detail","Hiding unnecessary implementation details while showing essential features","Removing all software","Replacing hardware"],1],
["Which is an example of hardware?",["Operating system","Python","Keyboard","Web browser"],2],
["Which software manages hardware resources and provides services to applications?",["Operating system","Keyboard","Monitor","Python list"],0],
["Which order best represents the layers from application toward physical components?",["Hardware → OS → Application","Application → System software/OS → Hardware","OS → Hardware → Application","Application → Hardware → OS"],1],
["What is Python?",["A programming language","A computer component","An operating system","A network cable"],0],
["Which Python command displays text on the screen?",["show()","display()","print()","writeText()"],2],
["Which sequence is a good computational-thinking programming process?",["Code → Guess → Delete → Stop","Think → Plan → Code → Test","Test → Print → Think → Plan","Search → Copy → Paste → Stop"],1],
["What does computational thinking help programmers do?",["Solve problems systematically","Only design websites","Avoid testing","Remove algorithms"],0],
["Which is a valid Python variable assignment?",["10 = score","score = 10","int score = 10","score == 10"],1],
["Which Python data type stores text?",["int","float","str","bool"],2],
["Which data type is 3.14?",["int","float","str","list"],1],
["Which creates a Python list?",["students = (\"Ali\", \"Mona\")","students = {\"Ali\", \"Mona\"}","students = [\"Ali\", \"Mona\"]","students = <\"Ali\", \"Mona\">"],2],
["Why are lists useful?",["They allow related values to be stored together","They only store one value","They replace the operating system","They prevent all errors"],0],
["What is the main purpose of an if statement?",["Repeat code forever","Make a decision based on a condition","Create a list","Print every variable"],1],
["Which keyword checks another condition after an if condition is false?",["else if","elif","otherwise","check"],1],
["Which loop is commonly used to repeat through items in a list?",["for","if","def","print"],0],
["What is debugging?",["Adding more errors","Finding and fixing problems in a program","Installing hardware","Writing comments only"],1],
["Which error usually occurs when Python code breaks the language syntax rules?",["SyntaxError","Logical success","Hardware error","List error"],0],
["A program runs but gives the wrong answer because the algorithm is incorrect. What type of problem is this?",["Syntax error","Logical error","Keyboard error","Operating-system error"],1],
["Which is the best debugging practice?",["Test the program, identify the error, fix it, and test again","Never test after making changes","Delete the entire program immediately","Ignore error messages"],0]
];

function buildQuiz(){
  const quiz=document.getElementById("quiz");
  quiz.innerHTML="";
  questions.forEach((q,i)=>{
    const div=document.createElement("div");
    div.className="question";
    div.id="q"+i;
    let options="";
    q[1].forEach((opt,j)=>{
      options += `<label class="option"><input type="radio" name="q${i}" value="${j}"> ${String.fromCharCode(65+j)}. ${opt}</label>`;
    });
    div.innerHTML=`<h3>${i+1}. ${q[0]}</h3>${options}`;
    quiz.appendChild(div);
  });
}
function checkAnswers(){
  let score=0;
  questions.forEach((q,i)=>{
    const box=document.getElementById("q"+i);
    box.classList.remove("correct","wrong");
    const old=box.querySelector(".feedback");
    if(old) old.remove();
    const selected=document.querySelector(`input[name="q${i}"]:checked`);
    const feedback=document.createElement("div");
    feedback.className="feedback";
    if(selected && Number(selected.value)===q[2]){
      score++;
      box.classList.add("correct");
      feedback.textContent="✓ Correct";
    }else{
      box.classList.add("wrong");
      feedback.textContent="✗ Incorrect — Correct answer: "+String.fromCharCode(65+q[2])+". "+q[1][q[2]];
    }
    box.appendChild(feedback);
  });
  const percent=score*5;
  const result=document.getElementById("result");
  result.style.display="block";
  result.textContent=`Your Score: ${score}/20 (${percent}%)`;
  window.scrollTo({top:document.querySelector(".card").offsetTop-20,behavior:"smooth"});
}
function resetQuiz(){
  buildQuiz();
  const result=document.getElementById("result");
  result.style.display="none";
  result.textContent="";
  window.scrollTo({top:0,behavior:"smooth"});
}
buildQuiz();
