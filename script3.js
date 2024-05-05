//////////////  here is the questions///////////////

const questions = [
  
  
  { "number":"1",
    
      "question": "Which of the following is not typically part of a process's address space? ",
      "answers": ["data region ","stack region ","register region ","text region "],
      "correctAnswer" : "register region ",
    },
  
    
    { "number":"2",
    
    "question": "Which of the following is a synonym for 'process'? ",
    "answers": ["task ","program ","executable code ","all of the above "],
    "correctAnswer" : "task ",
  },
  
    
  { "number":"3",
    
      "question": "How many processes truly can execute concurrently in a system at any time? ",
      "answers": ["any number ","at least as many as there are processors ","at most as many as there are processors ","none of the above "],
      "correctAnswer" : "at most as many as there are processors ",
    },
  
    
    { "number":"4",
    
    "question": "Which of the following states is not a discrete process state? ",
    "answers": ["unblocked state ","running state ","ready state ","blocked state "],
    "correctAnswer" : "unblocked state ",
  },
  
    
  { "number":"5",
    
      "question": "Typically, the ready list of ready processes is maintained in ________ order, while the blocked list of blocked processes is ______.",
      "answers": ["random, prioritized ","prioritized, unordered ","alphabetical, ordered chronologically ","chronological, prioritized "],
      "correctAnswer" : "prioritized, unordered ",
    },
  
    
    { "number":"6",
    
    "question": "When a user runs a program, processes are created and inserted into the _______ list. ",
    "answers": ["blocked ","running ","ready ","dispatched "],
    "correctAnswer" : "ready ",
  },
  
    
  { "number":"7",
    
      "question": "________assigns a processor to the first process in the ready list. ",
      "answers": ["Loading","Instantiating ","Dispatching ","Initializing "],
      "correctAnswer" : "Dispatching ",
    },
  
    
    { "number":"8",
    
    "question": "Which of the following state transitions is not possible? ",
    "answers": ["running to blocked ","blocked to running ","blocked to ready ","ready to running "],
    "correctAnswer" : "blocked to running ",
  },
  
    
  { "number":"9",
    
      "question": "A process control block (PCB) typically includes which of the following information? ",
      "answers": ["the process state ","the process's execution context ","the process identification number (PID) ","all of the above "],
      "correctAnswer" : "all of the above ",
    },
  
    
    { "number":"10",
    
    "question": "Which of the following typically is not part of a process's execution context? ",
    "answers": ["pointers to the process's parent and child processes ","registers that store pointers to the process's address space ","process management registers ","general-purpose registers that store process data "],
    "correctAnswer" : "registers that store pointers to the process's address space ",
  },
  
    
  { "number":"11",
    
      "question": "Which of the following statements is true? ",
      "answers": ["A child process may belong to multiple parents at once. ","Each parent process may create only one child process. ","Spawning new processes yields a hierarchical process structure. ","none of the above "],
      "correctAnswer" : "Spawning new processes yields a hierarchical process structure. ",
    },
  
    
    { "number":"12",
    
    "question": "Which of the following may occur when a process is destroyed? ",
    "answers": ["The process's memory and other resources are returned to the system. ","The process is removed from any system lists or tables. ","The destroyed process's children are destroyed. ","all of the above "],
    "correctAnswer" : "all of the above ",
  },
  
    
  { "number":"13",
    
      "question": "What operation is particularly useful for detecting security threats and debugging software? ",
      "answers": ["suspend ","dispatch ","abort ","block "],
      "correctAnswer" : "suspend ",
    },
  
    
    { "number":"14",
    
    "question": "Which of the following can occur? ",
    "answers": ["A running process may suspend itself. ","A running process may be suspended by a blocked process. ","A running process may be suspended by a ready process. ","none of the above "],
    "correctAnswer" : "A running process may suspend itself. ",
  },
  
    
  { "number":"15",
    
      "question": "What must occur for a system to perform a context switch? ",
      "answers": ["The kernel must save the current running process's execution context to the process's PCB. ","The kernel must load the previous execution context of a ready process. ","both a) and b) ","none of the above "],
      "correctAnswer" : "both a) and b) ",
    },
  
    
    { "number":"16",
    
    "question": "An operating system must be designed such that _______",
    "answers": ["context switches are transparent to processes ","context-switching time is maximized ","as many 'useful' computations as possible are performed while switching contexts ","all of the above "],
    "correctAnswer" : "context switches are transparent to processes ",
  },
  
    
  { "number":"17",
    
      "question": "A(n) _______ is a set of instructions to be executed in response to a certain type of interrupt. ",
      "answers": ["interrupt handler ","trap ","context switch ","interrupt vector "],
      "correctAnswer" : "interrupt handler ",
    },
  
    
    { "number":"18",
    
    "question": "_______can be used instead of interrupts to inform the processor of changes in device status? ",
    "answers": ["Events ","Querying ","Exceptions ","Polling "],
    "correctAnswer" : "Polling ",
  },
  
    
  { "number":"19",
    
  
  "question": "The interrupt vector ________.",
  "answers": ["is an array of pointers to interrupt handlers. ","can be modified only by running processes. ","stores information about each interrupt that occurs. ","is an array of pointers to PCBs of processes generating interrupts. "],
  "correctAnswer" : "is an array of pointers to interrupt handlers. ",
     
    },
  
    
    { "number":"20",
    "question": "Software-generated interrupts in the IA-32 architecture can be used to __________.",
      "answers": ["perform system calls ","indicate errors occurring in hardware ","indicate an I/O completion ","none of the above "],
      "correctAnswer" : "perform system calls ",
  },
  
    
  { "number":"21",
    
      
      "question": "What type of exception would occur in the IA-32 architecture if a process attempts to divide by zero? ",
      "answers": ["fault ","trap ","abort ","any of the above could occur "],
      "correctAnswer" : "fault ",
    },
  
    
    { "number":"22",
    
    "question": "________employs interprocess communication. ",
    "answers": ["A text editor sending a document to a print spooler ","A distributed application used to find large prime numbers ","A Web browser retrieving data from a distant server ","all of the above "],
    "correctAnswer" : "all of the above ",
  },
  
    
  { "number":"23",
    
      "question": "Which of the following statements about signals is true? ",
      "answers": ["All operating systems use the same set of signals. ","Signals often are used to pass data between processes. ","Signals notify a process that an event has occurred. ","all of the above "],
      "correctAnswer" : "Signals notify a process that an event has occurred. ",
    },
  
    
    { "number":"24",
    
    "question": "When a process  ________ a signal, the operating system responds to the signal using the default signal handler; however, when a process __________ a signal of a particular type, the operating system does not deliver signals of that type and does not respond to the signal. ",
    "answers": ["masks, ignores ","catches, masks ","masks, catches ","ignores, masks "],
    "correctAnswer" : "ignores, masks ",
  },
  
    
  { "number":"25",
    
      "question": "A _______. send is an example of _________ communication that requires the sender to wait for receipt notification before continuing program execution",
      "answers": ["blocking, asynchronous ","nonblocking, synchronous ","nonblocking, asynchronous ","blocking, synchronous "],
      "correctAnswer" : "blocking, synchronous ",
    },
  
    
    { "number":"26",
    
    "question": "Which of the following statements about pipes is true? ",
    "answers": ["The operating system synchronizes access to a pipe. ","A pipe serves as a buffer through which two or more processes can exchange data. ","After a process reads data from the pipe, the data is removed from the pipe. ","all of the above "],
    "correctAnswer" : "all of the above ",
  },
  
    
  { "number":"27",
    
      "question": "Sending and receiving processes often use______  to ensure that messages are properly received. ",
      "answers": ["a synchronization protocol ","an acknowledgment protocol ","an authorization protocol ","a receipt protocol "],
      "correctAnswer" : "an acknowledgment protocol ",
    },
  
    
    { "number":"28",
    
    "question": "Which of the following statements about UNIX processes is true? ",
    "answers": ["The UNIX kernel allows user processes to modify PCBs as needed. ","The process table allows the operating system to access information regarding every process. ","UNIX processes are provided with a range of physical addresses in which to store its code, data and stack. ","all of the above "],
    "correctAnswer" : "The process table allows the operating system to access information regarding every process. ",
  },
  
    
  { "number":"29",
    
      "question": "When a child process is spawned, the UNIX fork system call returns ______ to the parent process and ______ to the child process. ",
      "answers": ["a value of zero, the PID of the parent process ","the PID of the child process, a value of zero ","the PID of the child process, a value of one ","a value of one, the PID of the parent process "],
      "correctAnswer" : "the PID of the child process, a value of zero ",
    },
  
    
    { "number":"30",
    
    "question": "In UNIX systems, kernel processes often have ________. numerical priority values and typically have _______ scheduling priority than user processes",
    "answers": ["positive, lower ","negative, higher ","positive, higher ","negative, lower "],
    "correctAnswer" : "negative, higher ",
  },
  
    
  // { "number":"999999999999",
    
  //     "question": "test",
  //     "answers": ["1111111","111111","111111","11111"],
  //     "correctAnswer" : "555555",
  //   },
  
  
    
    
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

chapterList[2].classList.add('cgt');

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