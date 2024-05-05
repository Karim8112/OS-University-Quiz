//////////////  here is the questions///////////////

const questions = [
  
 
 
  { "number":"1",
    
      "question": "Threads that operate independently of one another but must occasionally interact to perform cooperative tasks are said to execute ________",
      "answers": ["synchronously ","in parallel ","simultaneously ","asynchronously "],
      "correctAnswer" : "asynchronously ",
    },
  
   
    { "number":"2",
    
    "question": "Preventing more than one thread from accessing a shared variable simultaneously is known as _______  access to the shared variable. ",
    "answers": ["excluding ","serializing ","protecting ","synchronizing "],
    "correctAnswer" : "serializing ",
  },
  
   
  { "number":"3",
    
      "question": "________restricts access to a shared variable to only one thread at any given time. ",
      "answers": ["asynchronism ","serialization ","mutual exclusion ","protection "],
      "correctAnswer" : "mutual exclusion ",
    },
  
   
    { "number":"4",
    
    "question": "An example of a producer/consumer relationship is__________ ",
    "answers": ["an application that copies data from a fixed-size buffer to a CD-RW ","a word processor that sends data to a buffer to be printed ","both a and b ","none of the above "],
    "correctAnswer" : "both a and b ",
  },
  
   
  { "number":"5",
    
      "question": "In Java, Object method notify transitions a thread from the _______state to the ______state. ",
      "answers": ["running, waiting ","blocked, waiting ","ready, running ","waiting, ready "],
      "correctAnswer" : "waiting, ready ",
    },
  
   
    { "number":"6",
    
    "question": "In Java, the sleep method call must appear in part of a ________ statement because it might throw an exception indicating that the thread was interrupted before its sleep time expired. ",
    "answers": ["try...catch ","switch ","if...else ","do...while "],
    "correctAnswer" : "try...catch ",
  },
  
   
  { "number":"7",
    
      "question": "Which of the following statements about critical sections is false? ",
      "answers": ["If one thread is already in its critical section, another thread must wait for the executing thread to exit its critical section before continuing. ","Once a thread has exited its critical section, a waiting thread may enter its critical section. ","Only one thread at a time can execute the instructions in its critical section for a particular resource. ","All threads must wait whenever any critical section is occupied. "],
      "correctAnswer" : "All threads must wait whenever any critical section is occupied. ",
    },
  
   
    { "number":"8",
    
    "question": "Code inside a critical section should ________",
    "answers": ["run as quickly as possible ","prevent the possibility of infinite loops ","access shared, modifiable data ","all of the above "],
    "correctAnswer" : "all of the above ",
  },
  
   
  { "number":"9",
    
      "question": "The constructs that encapsulate a thread's critical section are sometimes called _________",
      "answers": ["synchronism delimiters ","critical section primitives ","protection delimiters ","mutual exclusion primitives "],
      "correctAnswer" : "mutual exclusion primitives ",
    },
  
   
    { "number":"10",
    
    "question": "Which property of mutual exclusion primitives is inappropriate for multiprocessor systems? ",
    "answers": ["A thread that is executing instructions outside its critical section cannot prevent any other threads from entering their critical sections. ","The solution is implemented purely in software on a machine without specially designed mutual exclusion machine-language instructions. ","No assumption can be made about the relative speeds of asynchronous concurrent threads. ","A thread must not be indefinitely postponed from entering its critical section. "],
    "correctAnswer" : "The solution is implemented purely in software on a machine without specially designed mutual exclusion machine-language instructions. ",
  },
  
   
  { "number":"11",
    
      "question": "A thread that uses processor cycles to continually test a condition before entering its critical section is said to be __________ ",
      "answers": ["indefinitely postponed ","lockstep synchronized ","busy waiting ","deadlocked "],
      "correctAnswer" : "busy waiting ",
    },
  
   
    { "number":"12",
    
    "question": "Lockstep synchronization does not __________",
    "answers": ["occur when threads must enter and leave their critical sections in strict alternation ","occur as a result of using a single variable to govern access to threads' critical sections ","force faster threads to operate at the same speed as slower threads ","improve the efficiency of a process by forcing threads to operate at the same speed "],
    "correctAnswer" : "improve the efficiency of a process by forcing threads to operate at the same speed ",
  },
  
   
  { "number":"13",
    
      "question": "________occurs when an infinite loop prevents progress in a multithreaded application. ",
      "answers": ["Lockstep synchronization ","Busy waiting ","Indefinite postponement ","Deadlock "],
      "correctAnswer" : "Deadlock ",
    },
  
   
    { "number":"14",
    
    "question": "Lamport's Bakery Algorithm does not require__________ ",
    "answers": ["that any operations occur atomically ","a large number of shared variables ","complicated loops ","all of the above "],
    "correctAnswer" : "all of the above ",
  },
  
   
  { "number":"15",
    
      "question": "Which of the following statements about Lamport's Bakery Algorithm is false? ",
      "answers": ["The thread possessing the ticket with the highest numerical value can enter its critical section. ","Lamport's algorithm enforces mutual exclusion. ","Lamport's algorithm allows multiple threads to obtain the same ticket number. ","A thread's ticket number is reset when the thread exits its critical section. "],
      "correctAnswer" : "The thread possessing the ticket with the highest numerical value can enter its critical section. ",
    },
  
   
    { "number":"16",
    
    "question": "Which of the following mutual exclusion algorithms require instructions to be executed atomically? ",
    "answers": ["Peterson's algorithm ","Lamport's algorithm ","Dekker's algorithm ","both a and b "],
    "correctAnswer" : "both a and b ",
  },
  
   
  { "number":"17",
    
      "question": " Disabling interrupts _______",
      "answers": ["is a viable solution for mutual exclusion in a multiprocessor system ","typically prevents a thread from being preempted while accessing shared data ","on a uniprocessor system could result in an infinite loop causing the system to hang ","both b and c "],
      "correctAnswer" : "both b and c ",
    },
  
   
    { "number":"18",
    
    "question": "A _________ is a variable that governs access to critical sections. ",
    "answers": ["primitive ","controller ","flag ","lock "],
    "correctAnswer" : "lock ",
  },
  
   
  { "number":"19",
    
      "question": "The test-and-set instruction ___________",
      "answers": ["prevents deadlock ","prevents indefinite postponement ","eliminates the possibility that a thread is preempted between reading a value from a memory location and writing a new value to the memory location ","none of the above "],
      "correctAnswer" : "eliminates the possibility that a thread is preempted between reading a value from a memory location and writing a new value to the memory location ",
    },
  
   
    { "number":"20",
    
    "question": "Many system architectures support a(n)____________ instruction that enables a thread to exchange the values of two variables atomically. ",
    "answers": ["test-and-set ","swap ","switch ","semaphore "],
    "correctAnswer" : "swap ",
  },
  
   
  { "number":"21",
    
      "question": "Which of the following statements about semaphores is false? ",
      "answers": ["A thread performs the V operation before exiting its critical section. ","A thread performs the P operation after it enters its critical section. ","Initializing a semaphore creates a queue that stores references to threads waiting to enter their critical sections protected by that semaphore. ","Initializing a semaphore sets the value of a protected variable to indicate that no thread is executing its critical section. "],
      "correctAnswer" : "A thread performs the P operation after it enters its critical section. ",
    },
  
   
    { "number":"22",
    
    "question": "What happens when a thread calls P(S) when it wants to enter its critical section, where S is a binary semaphore set to 1? ",
    "answers": ["The thread is blocked and added to a queue of waiting threads. ","The semaphore is set to 2. ","The thread is allowed to enter its critical section and S is decremented. ","none of the above "],
    "correctAnswer" : "The thread is allowed to enter its critical section and S is decremented. ",
  },
  
   
  { "number":"23",
    
      "question": "Which of the following statements about semaphores is true? ",
      "answers": ["If several threads attempt a P( S ) operation simultaneously, only one thread should be allowed to proceed. ","P and V operations should be indivisible operations. ","A semaphore implementation should guarantee that threads do not suffer indefinite postponement. ","all of the above "],
      "correctAnswer" : "all of the above ",
    },
  
   
    { "number":"24",
    
    "question": "Semaphores can be used for each of the following purposes except: ",
    "answers": ["to prevent shared variables from getting corrupted ","to protect access to a critical section ","to synchronize two or more concurrent threads ","to notify the process that an event has occurred "],
    "correctAnswer" : "to notify the process that an event has occurred ",
  },
  
   
  { "number":"25",
    
      "question": "If a thread attempts a P operation when a counting semaphore has been decremented to zero,_________ ",
      "answers": ["the thread returns a resource to the pool and increments the semaphore to 1 ","the thread obtains a resource from the pool and the semaphore remains equal to 0 ","the thread must wait until a resource is returned to the pool by a V operation ","the thread obtains a resource from the pool and decrements the semaphore to -1 "],
      "correctAnswer" : "the thread must wait until a resource is returned to the pool by a V operation ",
    },
  
   
    { "number":"26",
    
    "question": "Semaphore operations can be implemented in the kernel of a multiprocessor system by: ",
    "answers": ["controlling access (via busy waiting) to a shared ready list. ","giving one processor the job of controlling the ready list. ","both a and b ","none of the above "],
    "correctAnswer" : "both a and b ",
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

chapterList[4].classList.add('cgt');

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