//////////////  here is the questions///////////////

const questions = [
  
  { "number":"1",

    "question": "Networks of computers have become so powerful that they are used to:",
    "answers": ["construct lifelike 3D animations ","model the Earth's climate","emulate human intelligence ","all of the above"],
    "correctAnswer" : "all of the above",
  },


  { "number":"2",
  
    "question": "Operating systems can be found in which of the following devices?",
    "answers": ["automobiles ","MP3 players"," cell phones"," all of the above"],
    "correctAnswer" : " all of the above",
  },


  { "number":"3",
  
    "question": "The software that contains the core components of the operating system is called the________",
    "answers": ["controller","kernel","root","none of the above"],
    "correctAnswer" : "kernel",
  },


  { "number":"4",
  
    "question": "Which of the following statements about computing in the 1940s and 1950s is false?",
    "answers": ["The earliest digital computers of the 1940s and 1950s included operating systems.","Programmers often entered programs in machine language one bit at time using mechanical switches. ","Machine-language programs could be entered using punched cards.","all of the above"],
    "correctAnswer" : "all of the above",
  },


  { "number":"5",
  
    "question": "Which of the following statements about the single-stream batch-processing systems of the 1950s is false?",
    "answers": ["Jobs typically required extensive user input during program execution. "," Jobs could run for days at a time.","Programs were submitted in groups or batches.","An entire program had to be loaded into memory for the program to run."],
    "correctAnswer" : "Jobs typically required extensive user input during program execution. ",
  },


  { "number":"6",
  
    "question": "________jobs in a multiprogramming computer system mainly use peripheral devices to perform their tasks.",
    "answers": ["processor-bound ","compute-bound ","I/O-bound","none of the above"],
    "correctAnswer" : "I/O-bound",
  },


  { "number":"7",
  
    "question": "Which of the following was a benefit of the timesharing systems of the 1960s?",
    "answers": ["Multiple interactive users could operate simultaneously.","Timesharing made it possible for real-time systems to provide quick results to users."," The average turnaround time decreased significantly.","all of the above"],
    "correctAnswer" : "all of the above",
  },


  { "number":"8",
  
    "question": "Ken Thompson and Dennis Ritchie designed the high-level language _______specifically to implement the UNIX operating system.",
    "answers": ["Java","Visual Basic","C++","C"],
    "correctAnswer" : "C",
  },


  { "number":"9",
  
    "question": "During the 1970s, communication throughout the United States and across local area networks increased due to the proliferation of the Department of Defense's__________communication standards and Xerox's _________	standard.",
    "answers": ["TCP/IP, Ethernet"," Ethernet, TCP/IP ","HITP, TCP/IP","POP, Ethernet"],
    "correctAnswer" : "TCP/IP, Ethernet",
  },


  { "number":"10",
  
    "question": "In the 1980s, software such as spreadsheet programs, word processors, database packages and graphics packages helped drive the_______revolution by creating demand from businesses that could use these products to increase their productivity.",
    "answers": ["personal computing ","mainframe computing ","timesharing","distributed computing"],
    "correctAnswer" : "personal computing ",
  },


  { "number":"11",
  
    "question": "In a distributed computing environment, clients are_____________",
    "answers": ["user computers that request remote services","computers that perform requested services","often dedicated to one type of task, such as rendering graphics or managing databases ","none of the above"],
    "correctAnswer" : "user computers that request remote services",
  },


  { "number":"12",
  
    "question": "The________is the grandparent of today's Internet.",
    "answers": ["World Wide Web","TCP/IP protocol","Ethernet ","ARPAnet"],
    "correctAnswer" : "ARPAnet",
  },


  { "number":"13",
  
    "question": "The________ helps ensure that messages are properly routed from sender to receiver and that the messages arrive intact.",
    "answers": [" Transmission Control Protocol (TCP) ","HyperText Markup Language (HTML) ","Internet Protocol (IP)","The Ethernet standard"],
    "correctAnswer" : " Transmission Control Protocol (TCP) ",
  },


  { "number":"14",
  
    "question": "Tim Berners-Lee developed the _______in 1990.",
    "answers": ["graphical user interface (GUI) ","Internet","World Wide Web (WWW)","TCP/IP standard"],
    "correctAnswer" : "World Wide Web (WWW)",
  },


  { "number":"15",
  
    "question": "The development of the Internet and World Wide Web made _________commonplace among personal computers.",
    "answers": ["distributed computing","open-source software","object-oriented programming"," supercomp Li ting "],
    "correctAnswer" : "distributed computing",
  },


  { "number":"16",
  
    "question": "The source code of software is distributed freely, allowing programmers to examine and modify the software before compiling and executing it",
    "answers": ["free","open-source","proprietary","all of the above"],
    "correctAnswer" : "open-source",
  },


  { "number":"17",
  
    "question": "_________encompass a set of standards that allow applications to exchange data via the Internet.",
    "answers": ["Distributed computing "," Web services","Web browsers","none of the above"],
    "correctAnswer" : " Web services",
  },


  { "number":"18",
  
    "question": "A system that exhibits massive parallelism__________",
    "answers": ["has one processor that performs many independent parts of computations at the same time ","communicates over a network to supply a specific set of operations that other applications can invoke"," has a large number of processors that perform many independent parts of computations in parallel ","none of the above"],
    "correctAnswer" : " has a large number of processors that perform many independent parts of computations in parallel ",
  },


  { "number":"19",
  
    "question": "A(n) _______	allows programmers to perform complicated system tasks simply by calling predefined functions.",
    "answers": ["application programming interface (API)","  system call","Web service","none of the above"],
    "correctAnswer" : "application programming interface (API)",
  },


  { "number":"20",
  
    "question": "An application base is the combination of the __________ and operating system environment in which applications are developed",
    "answers": ["hardware","software","both a and b","neither a nor b"],
    "correctAnswer" : "hardware",
  },


  { "number":"21",
  
    "question": "__________systems are characterized by a minimal amount of code, specialized power management resources and user-friendly interfaces.",
    "answers": ["Embedded ","Virtual","Peal-time ","Mission-critical"],
    "correctAnswer" : "Embedded ",
  },


  { "number":"22",
  
    
    "question": "Virtual machines promote ________the ability for software to run on multiple platforms.",
    "answers": ["security","scalability","portability","extensibility"],
    "correctAnswer" : "portability",
  },


  { "number":"23",
  "question": "A user may interact with an operating system via an application such as _________",
  "answers": ["a graphical user interface (GUI) ","an API","a command-line interpreter","either b) or c)"],
  "correctAnswer" : "either b) or c)",
   
    
  },


  { "number":"24",
  
  
  "question": " The ________is the part of the operating system that determines when and for how long a process executes.",
    "answers": ["disk scheduler","	processor scheduler","interprocess communication manager ","file system manager"],
    "correctAnswer" : "	processor scheduler",
    
  },


  { "number":"25",
  "question": "An efficient operating system generally achieves_________throughput and___________average turnaround time.",
  "answers": ["high, low ","low, high ","low, low ","high, high"],
  "correctAnswer" : "high, low ",
  },


  { "number":"26",
  "question": "A(n) ________operating system can adapt well to new technologies and can be modified to perform tasks beyond its original design; a(n) _______operating system is designed to operate on many hardware configurations.",
    "answers": ["extensible, robust","scalable, extensible","extensible, portable","robust, portable"],
    "correctAnswer" : "extensible, portable",
    
  },


  { "number":"27",
  "question": "Which type of system features direct intercommunication between every component, making the system highly efficient?",
    "answers": ["microkernel operating system ","monolithic operating system ","layered operating system"," distributed operating system"],
    "correctAnswer" : "monolithic operating system ",
    
  },


  { "number":"28",
  
    "question": "Which of the following statements about layered operating systems is true?",
    "answers": ["Layered operating systems group components that perform similar functions into layers.","User processes' requests may need to interact with multiple layers, resulting in slower performance than in a monolithic system. ","Layered operating systems are easier to modify than monolithic operating systems.","all of the above."],
    "correctAnswer" : "all of the above.",
  },


  { "number":"29",
  
    "question": "In a microkemel architecture, the kernel typically includes only a small number of services, such as  ______most other services, such as_______, execute outside of the kernel with a lower privilege level.",
    "answers": ["device management, networking","interprocess communication, low-level memory management"," low-level memory management, file system management ","networking, process management"],
    "correctAnswer" : " low-level memory management, file system management ",
  },


  { "number":"30",
  
    "question": "Advantages to distributed systems include:",
    "answers": ["They are easy to implement.","They provide the illusion that multiple computers are a single powerful computer.","A process can access any of the system's resources regardless of where it executes. ","Both a) and b)"],
    "correctAnswer" : "Both a) and b)",
  },


  { "number":"31",
  
    "question": "Sun's________enables users to access remote files as if the files were on the local computer.",
    "answers": ["Coda File System","Network File System (NFS)"," Distributed File System (DFS) ","Andrew File System"],
    "correctAnswer" : "Network File System (NFS)",
  },


  

  // { "number":"999999999999",
  
  //   "question": "test",
  //   "answers": ["1111111","111111","111111","11111"],
  //   "correctAnswer" : "555555",
  // },


  
  
];


////////////and here is the code////////////
const startSolvingButton = document.querySelector('.start_solving');
const submitButton = document.querySelector('.submit');
const showAnswersButton = document.querySelector('.showAnswers');
const questionsContainer = document.getElementById('questions-container');
const AnswerCount = document.querySelector('.count');
const chapterList = document.querySelectorAll('.chapters-list a');
let count=0;
let numberOfQuestion = questions.length;

chapterList[0].classList.add('cgt');

const correctTextArray=[];
// making the questions


questions.forEach((data, index) => {
  // making the question DIV
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question';
  //making the question text
  const questionText = document.createElement('h3');
  questionText.innerText = index+1 + `- `+ data['question'];
  questionText.className= "question-text";
  questionDiv.appendChild(questionText);

  //making the question answers
  const answer = document.createElement('div');
  answer.className = 'answer';


  // making the answers  inside the answer div inside the question div
  data.answers.forEach((answerText, answerIndex) => {
    const radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.name = `answer${index}`;
  radioInput.setAttribute("id",`answer${index}${answerIndex}`)
  radioInput.value = answerText;
  const answerLabel = document.createElement('label');
  answerLabel.textContent = answerText;
  answerLabel.setAttribute('for',`answer${index}${answerIndex}`);
  answer.appendChild(radioInput);
  answer.appendChild(answerLabel);
  // answer.insertAdjacentHTML("beforeend", "</br>")
    
    
  });

  questionDiv.appendChild(answer);

  // printing the correct Answer
  const correctAnswer = document.createElement('p');
  const correctText = data.correctAnswer;
  correctAnswer.className = 'correctAnswer';
  correctAnswer.innerHTML = `the answer is: <span>"${correctText}" </span>`;
  questionDiv.appendChild(correctAnswer);
  correctTextArray.push(correctText);


  //set the question inside the questions container
  questionsContainer.appendChild(questionDiv);
});

// defining the question boxes
const questionBoxes= document.querySelectorAll('.question');
console.log(questionBoxes);

// defining the correct answers
const correctAnswers = document.querySelectorAll('.correctAnswer');
console.log(correctAnswers);
console.log(correctTextArray);

// the initial state
//the initial submit button
submitButton.disabled = true;
submitButton.style.backgroundColor = '#727272';
submitButton.style.color = '#fff';

// the initial show/reset
showAnswersButton.classList.add('btn-show');

// the initial start button
startSolvingButton.classList.remove('btn-start');

// the initial checkpoints
const choices = document.querySelectorAll('.answer input');

choices.forEach(choice => {
  choice.checked = false;
  choice.setAttribute('disabled', 'true');  
});

// the initial count
AnswerCount.classList.add('hidden');



// /////////////set the show/reset button//////////////////////
showAnswersButton.addEventListener('click', function(){
  showAnswersButton.classList.add('btn-show');
  startSolvingButton.classList.remove('btn-start')

  //show the answers
  correctAnswers.forEach( (answer, index) =>{
    answer.innerHTML = `the answer is: <span>"${correctTextArray[index]}" </span>`;
    answer.classList.remove('hidden');
    
  })

  //the reset submit button
submitButton.disabled = true;
submitButton.style.backgroundColor = '#727272';
submitButton.style.color = '#fff';


// the reset checkpoints
const choices = document.querySelectorAll('.answer input');

choices.forEach(choice => {
  choice.checked = false;
  choice.setAttribute('disabled', 'true');  
});





});



//////////////////////set the start solving button///////////////////////////////

startSolvingButton.addEventListener('click', function(){
  showAnswersButton.classList.remove('btn-show');
  startSolvingButton.classList.add('btn-start')
  count=0;
  AnswerCount.innerHTML='';
  AnswerCount.classList.remove('cg');
  AnswerCount.classList.remove('cr');
  correctAnswers.forEach((answer)=>{
    answer.classList.remove('cg');
    answer.classList.remove('cr');
    answer.classList.remove('blackspan');
    answer.classList.remove('true');
    answer.innerHTML='';
  })

  //hide the answers
  correctAnswers.forEach( answer =>{
    answer.classList.add('hidden');
  })





  //the start of submit button
submitButton.disabled = false;
submitButton.style.backgroundColor = '#087f5b';
submitButton.style.color = '#fff';

//show button will be enabled
showAnswersButton.disabled=false;

// the start of  checkpoints
const choices = document.querySelectorAll('.answer input');

choices.forEach(choice => {
  choice.checked = false;
});

choices.forEach(choice => {
 
  choice.removeAttribute('disabled');
});






// reset the count to 0
AnswerCount.classList.add('hidden');

// resest colors of borders
questionBoxes.forEach(question=>{
  question.style.borderBottom = '#111 solid 2px';
})

});


//////////////////////set the submit button/////////////////////////////////

submitButton.addEventListener("click",function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showAnswersButton.classList.add('btn-show');
  startSolvingButton.classList.remove('btn-start');

   //the reset submit button
submitButton.disabled = true;
submitButton.style.backgroundColor = '#727272';
submitButton.style.color = '#fff';



//disable the reset button
showAnswersButton.disabled=true;

// messure count and set the correct Aswers
let i;
for (i=0;i<numberOfQuestion;i++){
  const userAnwers = document.getElementsByName(`answer${i}`);
  
  let selectedAnswer;

  userAnwers.forEach(answer =>{
    if (answer.checked){
        selectedAnswer = answer.value;
        
    }
  });

  if (selectedAnswer==correctTextArray[i]){
    count++;
    correctAnswers[i].innerHTML="true!"
    correctAnswers[i].classList.add('cg');
    correctAnswers[i].classList.add('true');
    questionBoxes[i].style.borderBottom = '#087f5b solid 2px'

  }

  else{
    correctAnswers[i].innerHTML=`<span> ${correctTextArray[i]} </span>`
    correctAnswers[i].classList.add('cr');
    correctAnswers[i].classList.add('blackspan');
    questionBoxes[i].style.borderBottom = 'red solid 2px'
  }

}
// show the answers
correctAnswers.forEach( (answer) =>{
  
  answer.classList.remove('hidden');
  
})
// show count

if (count==numberOfQuestion){
  AnswerCount.innerHTML=`correct: 
${count} out of ${numberOfQuestion} <br> click start solving to try again`;
AnswerCount.classList.add('cg');
}

else{
  AnswerCount.innerHTML=`you made: 
  ${count} out of ${numberOfQuestion} <br> click start solving to try again`;
  AnswerCount.classList.add('cr');
}

AnswerCount.classList.remove('hidden');

choices.forEach(choice=>{
  choice.disabled=true;
})


})


////////////////////set the nav button/////////////////////////////
const navButton = document.querySelector('.list-btn');
const nav = document.querySelector('.nav');

navButton.addEventListener('click', function(){

  nav.classList.toggle('nav-open');

});