//////////////  here is the questions///////////////

const questions = [
  
 

 
  { "number":"1",
    
      "question": "Which of the following is not a performance criterion that a processor scheduler should attempt to satisfy. ",
      "answers": ["latency ","throughput ","maximizing processor utilization ","none of the above "],
      "correctAnswer" : "none of the above ",
    },
  
     
  { "number":"2",
    
  "question": "The intermediate-level scheduler determines ___________",
  "answers": ["which active process the system will assign to a processor when one next becomes available ","which jobs may gain admission to the system and actively compete for system resources ","which jobs may actively compete for processors ","none of the above "],
  "correctAnswer" : "which jobs may actively compete for processors ",
  },
  
   
  { "number":"3",
    
      "question": "At a minimum, an operating system typically implements_________ ",
      "answers": ["a high-level scheduler ","a high-level, intermediate-level and low-level scheduler ","a high-level and a low-level scheduler ","an intermediate-level and a low-level scheduler "],
      "correctAnswer" : "an intermediate-level and a low-level scheduler ",
    },
  
     
  { "number":"4",
    
  "question": "The  ____________dispatches a processor to the process chosen to execute next. ",
  "answers": ["high-level scheduler ","intermediate-level scheduler ","low-level scheduler ","both b and c "],
  "correctAnswer" : "low-level scheduler ",
  },
  
   
  { "number":"5",
    
      "question": "Under__________ scheduling, processes can be interrupted whether they have completed their current task or not. ",
      "answers": ["Dynamic","static ","preemptive ","nonpreemptive "],
      "correctAnswer" : "preemptive ",
    },
  
     
  { "number":"6",
    
  "question": "A disadvantage of preemptive scheduling is ________",
  "answers": ["increased overhead ","that short processes can experience lengthy service delays while longer processes complete ","the possibility that a process can monopolize the system while executing an infinite loop ","both a and b "],
  "correctAnswer" : "increased overhead ",
  },
  
   
  { "number":"7",
    
      "question": "A________ priority system incurs less overhead than a _________  priority system but is less responsive to changing conditions in the system. ",
      "answers": ["nonpreemptive, preemptive ","static, dynamic ","preemptive, nonpreemptive ","dynamic, static "],
      "correctAnswer" : "static, dynamic ",
    },
  
     
  { "number":"8",
    
  "question": "When a user purchases priority, that user's process _________",
  "answers": ["gets a higher level of service than processes that have not purchased priority ","can preempt any resource from another process ","gets immediate access to resources ","none of the above "],
  "correctAnswer" : "gets a higher level of service than processes that have not purchased priority ",
  },
  
   
  { "number":"9",
    
      "question": "__________is not generally considered one of the most important objectives in scheduler design. ",
      "answers": ["Minimizing overhead ","Enforcing priorities ","Maximizing throughput ","Avoiding indefinite postponement "],
      "correctAnswer" : "Minimizing overhead ",
    },
  
     
  { "number":"10",
    
  "question": "A scheduling discipline is said to be _________ if all similar processes are treated the same, and no process can suffer indefinite postponement due to scheduling issues. ",
  "answers": ["fair ","portable ","scalable ","predictable "],
  "correctAnswer" : "fair ",
  },
  
   
  { "number":"11",
    
      "question": "________occurs when a low-priority process temporarily is assigned higher priority than a high-priority process. ",
      "answers": ["Indefinite postponement ","Priority inversion ","Batch processing ","Deadlock"],
      "correctAnswer" : "Priority inversion ",
    },
  
     
  { "number":"12",
    
  "question": "A(n) _________ process tends to use all the processor time that the system allocates for it.",
  "answers": ["I/O-bound ","interactive ","processor-bound ","batch "],
  "correctAnswer" : "processor-bound ",
  },
  
   
  { "number":"13",
    
      "question": "A system should provide good response times to a(n) ________ process, whereas a(n) _______ process generally can withstand reasonable delays. ",
      "answers": ["I/O-bound, processor-bound ","batch, interactive ","processor-bound, I/O-bound ","interactive, batch "],
      "correctAnswer" : "interactive, batch ",
    },
  
     
  { "number":"14",
    
  "question": "Under _________ scheduling, processes execute in the order the scheduler receives them. ",
  "answers": ["FIFO ","HRRN ","SRT ","RR "],
  "correctAnswer" : "FIFO ",
  },
  
   
  { "number":"15",
    
      "question": "FIFO scheduling ________",
      "answers": ["preempts processes after they have executed beyond the maximum timeout value ","is most appropriate for scheduling interactive processes ","is fair in that it schedules processes according to their arrival times ","is fair in that important processes get preference over unimportant processes "],
      "correctAnswer" : "is fair in that it schedules processes according to their arrival times ",
    },
  
     
  { "number":"16",
    
  "question": "When the quantum size is too_________, the overhead involved in _________dominates and performance degrades",
  "answers": ["large, adjusting priorities ","small, context-switching ","small, adjusting priorities ","large, context-switching "],
  "correctAnswer" : "small, context-switching ",
  },
  
   
  { "number":"17",
    
      "question": "The use of aging in a round-robin scheme helps to _________ ",
      "answers": ["reduce the overhead of context-switching ","prevent deadlock ","enforce mutual exclusion ","prevent indefinite postponement "],
      "correctAnswer" : "prevent indefinite postponement ",
    },
  
     
  { "number":"18",
    
  "question": "Under SPF scheduling, important processes will be executed __________",
  "answers": ["before less important processes can execute ","according to their estimated time to completion ","in a random order to ensure fairness ","after less important processes have completed execution "],
  "correctAnswer" : "according to their estimated time to completion ",
  },
  
   
  { "number":"19",
    
      "question": "SPF scheduling might be desirable when ________ is the primary goal of the system. ",
      "answers": ["good interactivity ","minimum overhead ","high throughput ","fairness "],
      "correctAnswer" : "high throughput ",
    },
  
     
  { "number":"20",
    
  "question": "HRRN is a(n) _________  scheduling discipline in which each process's priority is a function of its _________",
  "answers": ["preemptive, service time and time spent waiting for service ","nonpreemptive, service time ","preemptive, service time ","nonpreemptive, service time and time spent waiting for service"],
  "correctAnswer" : "nonpreemptive, service time and time spent waiting for service",
  },
  
   
  { "number":"21",
    
      "question": "Incorporating ___________ when assigning priorities allows HRRN to avoid indefinite postponement, similar to aging in RR schemes. ",
      "answers": ["throughput ","variance of response times ","wait time ","service time "],
      "correctAnswer" : "wait time ",
    },
  
     
  { "number":"22",
    
  "question": "SRT scheduling essentially incorporates ________ into SPF scheduling.",
  "answers": ["HRRN ","preemption ","batch processing ","aging "],
  "correctAnswer" : "preemption ",
  },
  
   
  { "number":"23",
    
      "question": "__________contributes to a larger overhead in SRT than SPF. ",
      "answers": ["Estimating future process behavior ","Accounting for potential user abuse ","Performing preemptions ","both a and b "],
      "correctAnswer" : "Performing preemptions ",
    },
  
     
  { "number":"24",
    
  "question": "In general, multilevel feedback queues push _______ processes to lower-level queues and _________ processes to higher-level queues, resulting in rapid response times to interactive requests. ",
  "answers": ["processor-bound, I/O-bound ","I/O-bound, processor-bound ","low-priority, high-priority ","both a and c "],
  "correctAnswer" : "processor-bound, I/O-bound ",
  },
  
   
  { "number":"25",
    
      "question": "Multilevel feedback queuing___________ ",
      "answers": ["is most appropriate for real-time systems ","is an example of an adaptive mechanism ","incurs too much overhead to be practical in real systems ","both a and c "],
      "correctAnswer" : "is an example of an adaptive mechanism ",
    },
  
     
  { "number":"26",
    
  "question": "Fair share scheduling ensures_________ ",
  "answers": ["fairness across sets of processes grouped by individual user ","fairness across sets of unrelated processes ","that the performance of a process is affected only by the population of its process group ","both a and c "],
  "correctAnswer" : "that the performance of a process is affected only by the population of its process group ",
  },
  
   
  { "number":"27",
    
      "question": "Deadline scheduling is most important in  ________ systems. ",
      "answers": ["real-time ","single-user ","batch-processing ","interactive "],
      "correctAnswer" : "real-time ",
    },
  
     
  { "number":"28",
    
  "question": "The intense resource management that deadline scheduling requires often leads to increased ________ in those systems. ",
  "answers": ["latency ","overhead ","throughput ","both a and b "],
  "correctAnswer" : "overhead ",
  },
  
   
  { "number":"29",
    
      "question": "Soft real-time scheduling __________",
      "answers": ["benefits from low interrupting clock rates ","ensures that real-time processes are dispatched before other processes in the system ","guarantees that real-time processes meet their timing constraints ","all of the above "],
      "correctAnswer" : "ensures that real-time processes are dispatched before other processes in the system ",
    },
  
     
  { "number":"30",
    
  "question": "__________scheduling algorithms guarantee that a process's timing constraints are always met. ",
  "answers": ["Hard real-time ","Preemptive ","Nonpreemptive ","Soft real-time "],
  "correctAnswer" : "Hard real-time ",
  },
  
   
  { "number":"31",
    
      "question": "The _________ algorithm bases priority on the amount of time until a process's deadline and the remaining execution time until its task has completed",
      "answers": ["deadline rate-monotonic ","earliest-deadline-first ","rate-monotonic ","minimum-laxity-first "],
      "correctAnswer" : "minimum-laxity-first ",
    },
  
     
  { "number":"32",
    
  "question": "In an operating system that supports threads, processor scheduling can be performed by _________",
  "answers": ["the operating system, by dispatching processes ","the operating system, by dispatching threads ","user-level libraries, by dispatching threads ","all of the above "],
  "correctAnswer" : "all of the above ",
  },
  
   
  { "number":"33",
    
      "question": "If there are multiple threads at the highest priority level in the Java virtual machine, those threads execute using a(n)_______ algorithm scheduling ",
      "answers": ["FIFO ","SRT ","SPF ","round-robin "],
      "correctAnswer" : "round-robin ",
    },
  
     
  { "number":"34",
    
  "question": "On a system that does not support timeslicing, Java threads will run to completion in order unless they voluntarily relinquish control by calling the_______ method. ",
  "answers": ["suspend ","sleep ","yield ","halt "],
  "correctAnswer" : "yield ",
  },
  
  
     
  // { "number":"999999999999",
    
  // "question": "test",
  // "answers": ["1111111","111111","111111","11111"],
  // "correctAnswer" : "555555",
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

chapterList[5].classList.add('cgt');

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