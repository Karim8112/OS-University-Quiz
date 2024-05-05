//////////////  here is the questions///////////////

const questions = [
  
 
  
  { "number":"1",
    
      "question": "In the 1970s and 1980s, what was an early roadblock to concurrent programming? ",
      "answers": ["Early operating systems did not allow several programs to execute concurrently. ","Early programming languages did not include primitives enabling programmers to write concurrent programs. ","Early computers were too slow to permit concurrency. ","all of the above "],
      "correctAnswer" : "Early programming languages did not include primitives enabling programmers to write concurrent programs. ",
    },
  
   
    { "number":"2",
    
    "question": "__________ , ___________ and ____________ are general-purpose programming languages that directly support concurrency through multithreading. ",
    "answers": ["C, C++, Python ",". Java, C#, Visual Basic .NET ","C++, Visual C++ .NET, Python ","Java, C, C# "],
    "correctAnswer" : ". Java, C#, Visual Basic .NET ",
  },
  
   
  { "number":"3",
    
      "question": "Which of the following statements about threads is false? ",
      "answers": ["Threads possess a subset of the resources contained in a process. ","Threads can be dispatched to a processor.   ","Threads cannot execute instructions independent of other processes. ","A process's threads can cooperate to attain a common goal efficiently. "],
      "correctAnswer" : "Threads cannot execute instructions independent of other processes. ",
    },
  
   
    { "number":"4",
    
    "question": "The POSIX specification provides the __________ standard for developing portable multithreaded applications. ",
    "answers": ["Win32 threads ","C-threads ","portable threads ","Pthreads "],
    "correctAnswer" : "Pthreads ",
  },
  
   
  { "number":"5",
    
      "question": "Multithreading is important because it can _________",
      "answers": ["facilitate cooperation/synchronization of activities ","improve performance and scalability ","facilitate software design and promote good programming practices ","all of the above "],
      "correctAnswer" : "all of the above ",
    },
  
   
    { "number":"6",
    
    "question": "Which of the following applications can benefit from multithreading? ",
    "answers": ["a Web server ","an image viewer ","a simple text editor ","both a) and c) "],
    "correctAnswer" : "a Web server ",
  },
  
   
  { "number":"7",
    
      "question": "A thread enters the waiting state when _________ ",
      "answers": ["it cannot perform further operations until it receives a signal from another thread ","it must wait for the completion of an I/O request ","it momentarily has no work to perform ","all of the above "],
      "correctAnswer" : "it cannot perform further operations until it receives a signal from another thread ",
    },
  
   
    { "number":"8",
    
    "question": "A(n) ____________ thread can enter the sleeping state for a specified period of time, after which it enters to the __________state.",
    "answers": ["ready, running ","running, blocked ","running, ready ","waiting, ready "],
    "correctAnswer" : "running, ready ",
  },
  
   
  { "number":"9",
    
      "question": "Many operating systems require __________ instructions to share resources than they do to initialize them, so in these systems, thread creation is ________  than process creation. ",
      "answers": ["fewer, slower ","fewer, faster ","more, slower ","more, faster "],
      "correctAnswer" : "fewer, faster ",
    },
  
   
    { "number":"10",
    
    "question": "Which of the following statements about thread operations is true? ",
    "answers": ["A process can continue execution after its primary thread exits. ","A thread can mask an abort signal. ","Thread cancellation always terminates the target thread immediately. ","When a thread joins another thread, the former does not execute until the latter terminates. "],
    "correctAnswer" : "When a thread joins another thread, the former does not execute until the latter terminates. ",
  },
  
   
  { "number":"11",
    
      "question": "User-level thread implementations are also called _______thread mappings. ",
      "answers": ["one-to-many ","many-to-many ","many-to-one ","one-to-one "],
      "correctAnswer" : "many-to-one ",
    },
  
   
    { "number":"12",
    
    "question": "Threads in user space can be more appropriate than kernel threads because ________",
    "answers": ["application developers can tune the threading library's scheduling algorithm to meet the needs of specific applications. ","user-level threads do not invoke the kernel for synchronization, which can reduce overhead. ","user-level threads do not require the operating system to support threads. ","all of the above "],
    "correctAnswer" : "all of the above ",
  },
  
   
  { "number":"13",
    
      "question": "Kernel-level threads are often described as _________ thread mappings. ",
      "answers": ["one-to-many ","many-to-many ","many-to-one ","one-to-one "],
      "correctAnswer" : "one-to-one ",
    },
  
   
    { "number":"14",
    
    "question": "Which of the following statements about kernel-level threads is false? ",
    "answers": ["Kernel-level threads require the operating system to manage all threads in the system. ","Software that employs kernel-level threads often is more portable than software that employs user-level threads. ","A process that uses kernel-level threads often can adjust the level of service each thread receives from the operating system. ","The kernel can manage each of a process's threads individually. "],
    "correctAnswer" : "Software that employs kernel-level threads often is more portable than software that employs user-level threads. ",
  },
  
   
  { "number":"15",
    
      "question": "The amount of overhead incurred by many-to-many thread mappings that implement thread pooling is ___________ the amount of overhead incurred  by one-to-one mappings. ",
      "answers": ["greater than ","less than ","the same as ","unrelated to "],
      "correctAnswer" : "less than ",
    },
  
   
    { "number":"16",
    
    "question": "Which of the following statements about scheduler activations is false? ",
    "answers": ["A scheduler activation creates threads and requests additional processors for its threads, if necessary. ","An additional scheduler activation is created for each processor allocated to a process. ","A scheduler activation is a user thread that can notify a kernel-level threading library of events. ","A scheduler activation executes the process's user-level threading-library initialization code. "],
    "correctAnswer" : "A scheduler activation is a user thread that can notify a kernel-level threading library of events. ",
  },
  
   
  { "number":"17",
    
      "question": "Identifying the recipient of a(n) _________ signal is ________ in a multithreaded system than in a system in which all processes contain a single  thread of control. ",
      "answers": ["asynchronous, simpler ","synchronous, more complex ","synchronous, simpler ","asynchronous, more complex "],
      "correctAnswer" : "asynchronous, more complex ",
    },
  
   
    { "number":"18",
    
    "question": "In which of the following events would the operating system send a synchronous signal? ",
    "answers": ["when an I/O operation completes ","when the operating system suspends a process ","when the operating system continues a process ","when a process or thread performs an illegal memory operation "],
    "correctAnswer" : "when a process or thread performs an illegal memory operation ",
  },
  
   
  { "number":"19",
    
      "question": "According to the POSIX specification, processes send signals by specifying a ________",
      "answers": ["pointer to a process control block ","any of the above are allowed ","thread identifier ","process identifier "],
      "correctAnswer" : "process identifier ",
    },
  
   
    { "number":"20",
    
    "question": "What could cause a thread to terminate prematurely? ",
    "answers": ["an exception (such an illegal memory reference) ","a cancellation signal from a process or thread ","both a) and b) ","neither a) nor b) "],
    "correctAnswer" : "both a) and b) ",
  },
  
   
  { "number":"21",
    
      "question": "A POSIX thread that defers cancellation____________ ",
      "answers": ["can be terminated at any point during its execution ","will not be cancelled until it explicitly checks for a cancellation request ","is not notified when a cancellation operation has been requested ","none of the above "],
      "correctAnswer" : "will not be cancelled until it explicitly checks for a cancellation request ",
    },
  
   
    { "number":"22",
    
    "question": "According to the POSIX threading API, processor registers, a stack and a signal mask are __________ ",
    "answers": ["shared between some threads in a process ","maintained individually for each thread in a process ","shared between all threads in a process ","none of the above "],
    "correctAnswer" : "maintained individually for each thread in a process ",
  },
  
   
  { "number":"23",
    
      "question": "In Linux, what is the difference between the fork and clone system calls? ",
      "answers": ["fork and clone spawn child processes in exactly the same way. ","Linux responds to the clone system call by creating a new task that contains a copy of all of its parent's resources. ","clone creates a copy of the calling task, and the copy becomes the parent of the task that issued the clone system call. ","clone accepts arguments that specify which resources to share with the spawned process. "],
      "correctAnswer" : "clone accepts arguments that specify which resources to share with the spawned process. ",
    },
  
   
    { "number":"24",
    
    "question": "In Linux, a process in the  _________state has been terminated but has not yet been removed from the system. ",
    "answers": ["zombie ","blocked ","sleeping ","dead "],
    "correctAnswer" : "zombie ",
  },
  
   
  { "number":"25",
    
      "question": "25. Which of the following statements about Windows XP threads is false? ",
      "answers": ["Threads are the primary unit of execution in Windows XP. ","Threads execute a portion of a process's code in the process's context. ","Each thread contains its own execution context. ","Each thread belonging to a process is assigned a unique virtual address space. "],
      "correctAnswer" : "Each thread belonging to a process is assigned a unique virtual address space. ",
    },
  
   
    { "number":"26",
    
    "question": "In Windows XP, a fiber is scheduled for execution _________.",
    "answers": ["by the operating system's scheduler ","by the process ","by the thread that creates it ","none of the above "],
    "correctAnswer" : "by the thread that creates it ",
  },
  
   
  { "number":"27",
    
      "question": "The size of a thread pool in Windows XP is _________",
      "answers": ["constant and specified by the programmer for each process ","variable, modified by the system in response to the volume of requests ","constant for all processes on a system ","all of the above are possible"],
      "correctAnswer" : "variable, modified by the system in response to the volume of requests ",
    },
  
   
    { "number":"28",
    
    "question": "In Windows XP, a thread enters the_______ state when the thread's requested data is currently unavailable, but the thread is otherwise ready to execute. ",
    "answers": ["unknown ","waiting ","transition ","standby "],
    "correctAnswer" : "transition ",
  },
  
   
  { "number":"29",
    
      "question": "In Java, the________ method of the Thread class contains the code that performs the 'real work' of a thread. ",
      "answers": ["start ","go ","run ","main "],
      "correctAnswer" : "run ",
    },
  
   
    { "number":"30",
    
    "question": "Java implements thread signaling using the ______ method of the Thread class. ",
    "answers": ["interrupt ","signal ","alert ","wake "],
    "correctAnswer" : "interrupt ",
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

chapterList[3].classList.add('cgt');

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