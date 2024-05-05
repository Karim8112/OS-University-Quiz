//////////////  here is the questions///////////////
const questions = [
  
 


   
  { "number":"1",
    
  "question": "________, while plentiful, is slower than other forms of storage and not suitable for running programs. ",
  "answers": ["secondary storage ","cache ","main memory ","All of the above "],
  "correctAnswer" : "secondary storage ",
  },
  
     
  { "number":"2",
    
  "question": "Which of the following statements is false? ",
  "answers": ["Some systems cannot afford the overhead of virtual memory. ","Real memory management is unimportant in today's systems. ","Most of today's systems are virtual memory systems. ","Secondary storage cannot be referenced directly by a processor. "],
  "correctAnswer" : "Real memory management is unimportant in today's systems. ",
  },
  
     
  { "number":"3",
    
  "question": "Operating systems can divide main memory into portions called _______ so that one process cannot overwrite another's memory, either  inadvertently or maliciously. ",
  "answers": ["regions ","modules ","sections ","partitions "],
  "correctAnswer" : "partitions ",
  },
  
     
  { "number":"4",
    
  "question": "A memory manager's primary function is ________",
  "answers": ["to determine how to allocate available memory ","to interact with special memory management hardware ","to determine how to respond to changes in a process's memory usage ","all of the above "],
  "correctAnswer" : "all of the above ",
  },
  
     
  { "number":"5",
    
  "question": "According to___________,  many processes that access data and instructions once are likely to access them again in the future. ",
  "answers": ["access patterns ","temporal locality ","spatial locality ","Moore's Law "],
  "correctAnswer" : "temporal locality ",
  },
  
     
  { "number":"6",
    
  "question": "Going from lower to higher levels in the memory hierarchy, __________",
  "answers": ["storage capacity increases ","storage access time decreases ","storage cost per bit increases ","both a and b "],
  "correctAnswer" : "both a and b ",
  },
  
     
  { "number":"7",
    
  "question": "__________strategies determine which pieces of data to remove from main memory to free space for a new process. ",
  "answers": ["Fetch ","Placement ","Replacement ","both a and c "],
  "correctAnswer" : "Replacement ",
  },
  
     
  { "number":"8",
    
  "question": "_________strategies attempt to load a piece of program or data into memory before it is referenced. ",
  "answers": ["Next-fit placement ","First-fit placement ","Demand fetch ","Anticipatory fetch "],
  "correctAnswer" : "Anticipatory fetch ",
  },
  
     
  { "number":"9",
    
  "question": "In general, the overhead incurred by ___________ allocation is outweighed by the advantages of being able to store more processes in main memory at the same time. ",
  "answers": ["contiguous ","fragment ","segment ","noncontiguous "],
  "correctAnswer" : "noncontiguous ",
  },
  
     
  { "number":"10",
    
  "question": "Noncontiguous memory allocation splits programs into blocks of memory called _______ that can be loaded into nonadjacent “holes” in main memory. ",
  "answers": ["segments ","frames ","pages ","partitions "],
  "correctAnswer" : "segments ",
  },
  
     
  { "number":"11",
    
  "question": "Before the advent of ________. programmers wrote all the code necessary to implement a particular application, including the highly detailed machine-level input/output instructions. ",
  "answers": ["memory management ","object-oriented programming languages ","an IOCS ","a BIOS "],
  "correctAnswer" : "an IOCS ",
  },
  
     
  { "number":"12",
    
  "question": "_________is a technique that involves breaking a program into logical segments and keeping only the currently needed segment in memory at any one time. ",
  "answers": ["Caching ","Dynamic programming ","Creating overlays ","Swapping "],
  "correctAnswer" : "Creating overlays ",
  },
  
     
  { "number":"13",
    
  "question": "________can be thought of as a modern operating system-controlled version of overlays. ",
  "answers": ["IOCS ","Virtual memory ","Caching ","Noncontiguous memory "],
  "correctAnswer" : "Virtual memory ",
  },
  
     
  { "number":"14",
    
  "question": "A(n) ________ can be used in single-user contiguous memory allocation systems to prevent programs from damaging the operating system's memory",
  "answers": ["protection bit ","semaphore ","lock ","boundary register "],
  "correctAnswer" : "boundary register ",
  },
  
     
  { "number":"15",
    
  "question": "To allow programs to access and execute operating system instructions, operating systems provide _________.",
  "answers": ["system calls ","the executive mode of execution ","memory protection keys ","both a and b "],
  "correctAnswer" : "system calls ",
  },
  
     
  { "number":"16",
    
  "question": "_________was an early innovation that helped decrease the amount time the computer wasted between jobs. ",
  "answers": ["Single-user contiguous memory allocation ","Batch processing ","Interactive computing ","both a and b "],
  "correctAnswer" : "Batch processing ",
  },
  
     
  { "number":"17",
    
  "question": " A ________   reads and executes the control-language statements that define each job as well as helps prepare the system for the next job. ",
  "answers": ["boundary register ","batch processor ","job stream processor ","single-stream batch processor "],
  "correctAnswer" : "job stream processor ",
  },
  
     
  { "number":"18",
    
  "question": "Under fixed-partition multiprogramming, ________ occurs when a memory partition is larger than the memory and data of the process currently loaded into it.  ",
  "answers": ["garbage collection ","external fragmentation ","internal fragmentation ","compaction "],
  "correctAnswer" : "internal fragmentation ",
  },
  
     
  { "number":"19",
    
  "question": "In a partitioned memory environment, the single boundary register is replaced by the ________ and ________ registers which delimit the upper and  lower boundaries of a partition, respectively. ",
  "answers": ["base, limit ","low, high ","high, low ","limit, base "],
  "correctAnswer" : "limit, base ",
  },
  
     
  { "number":"20",
    
  "question": "__________ -partition multiprogramming allows a process to occupy only as much space as needed in an attempt to prevent _________ fragmentation",
  "answers": ["Fixed, internal ","Variable, external ","Variable, internal ","Fixed, external "],
  "correctAnswer" : "Variable, internal ",
  },
  
     
  { "number":"21",
    
  "question": "To maximize the use of available space, _________ combines adjacent holes in memory, while __________ relocates all occupied areas of memory to one end of main memory, leaving a single large free memory hole instead of numerous small holes. ",
  "answers": ["variable-partition multiprogramming, fixed-partition multiprogramming ","coalescing, compaction ","internal fragmentation, external fragmentation ","compaction, coalescing "],
  "correctAnswer" : "coalescing, compaction ",
  },
  
     
  { "number":"22",
    
  "question": "The significant overhead associated with  ________ makes it largely unsuitable for use in real-time systems. ",
  "answers": ["coalescing ","fixed-partition multiprogramming ","compaction ","memory protection "],
  "correctAnswer" : "compaction ",
  },
  
     
  { "number":"23",
    
  "question": "Under a _______ placement strategy, the system places an incoming job in the hole in main memory in which it fits most tightly. ",
  "answers": ["first-fit ","best-fit ","next-fit ","worst-fit "],
  "correctAnswer" : "best-fit ",
  },
  
     
  { "number":"24",
    
  "question": "The ___________ placement strategy allows the system to make a placement decision quickly and generally incurs the least amount of overhead of the various placement strategies. ",
  "answers": ["best-fit ","first-fit ","worst-fit ","none of the above "],
  "correctAnswer" : "first-fit ",
  },
  
     
  { "number":"25",
    
  "question": "_________temporarily removes a process from main memory to allow another process to make use of the system's resources. ",
  "answers": ["Coalescing ","Swapping ","Compacting ","Switching "],
  "correctAnswer" : "Swapping ",
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

chapterList[6].classList.add('cgt');

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