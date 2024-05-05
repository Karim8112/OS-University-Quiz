//////////////  here is the questions///////////////

const questions = [
  
 


   
  { "number":"1",
    
  "question": "Virtual memory fetch strategies determine when a page or segment should be moved from______  to ________ ",
  "answers": ["main memory, secondary storage ","main memory, the TLB ","seconday storage, main memory ","the TLB, registers "],
  "correctAnswer" : "seconday storage, main memory ",
  },
  
  
     
  { "number":"2",
    
  "question": "Virtual memory replacement strategies determine _________",
  "answers": ["how many pages should be added to main memory ","which page or segment to remove to provide space for an incoming page or segment ","which pages should be brought into memory because a process is likely to reference them soon ","when the system should update page or segment table entries "],
  "correctAnswer" : "which page or segment to remove to provide space for an incoming page or segment ",
  },
  
  
     
  { "number":"3",
    
  "question": "Which of the following computer operations involves the highest degree of spatial locality? ",
  "answers": ["a traversal of a linked-list data structure ","a linear array traversal ","a function used for calculating a factorial ","a traversal of a tree data structure "],
  "correctAnswer" : "a linear array traversal ",
  },
  
  
     
  { "number":"4",
    
  "question": "According to temporal locality, processes are likely to reference pages that _______ ",
  "answers": ["are located at address near recently referenced pages in memory ","have been referenced recently ","have been preloaded into memory ","none of the above "],
  "correctAnswer" : "have been referenced recently ",
  },
  
  
     
  { "number":"5",
    
  "question": "Which of the following reasons makes demand paging a desirable fetch policy? ",
  "answers": ["Demand paging improves performance for processes with predictable memory-access patterns. ","Demand paging guarantees that the system brings into main memory only those pages that processes actually need. ","Demand paging improves performance by preloading pages that are likely to be needed in the future. ","all of the above "],
  "correctAnswer" : "Demand paging guarantees that the system brings into main memory only those pages that processes actually need. ",
  },
  
  
     
  { "number":"6",
    
  "question": "Demand paging is disadvantageous because ________ ",
  "answers": ["a process in a demand-paged system must accumulate pages one at a time ","as a process references each new page, it must wait while the system transfers that page to main memory ","system performance can suffer drastically if much of main memory is occupied by a process that cannot execute until new pages are fetched ","all of the above "],
  "correctAnswer" : "all of the above ",
  },
  
  
     
  { "number":"7",
    
  "question": "________is not important in determining the success of a prepaging strategy? ",
  "answers": ["The amount of main memory allocated to prepaging ","The type of data contained in preloaded pages ","The number of pages that are preloaded at once ","The heuristic that determines which pages are preloaded "],
  "correctAnswer" : "The type of data contained in preloaded pages ",
  },
  
  
     
  { "number":"8",
    
  "question": "Anticipatory paging strategies that load a few of a process's contiguous pages when the process references a nonresident page exploit _________",
  "answers": ["the process's space-time product ","temporal locality ","block allocation ","spatial locality "],
  "correctAnswer" : "spatial locality ",
  },
  
  
     
  { "number":"9",
    
  "question": "Page-replacement strategies typically attempt to  ______ the number of page faults a process experiences as it runs from start to finish, hopefully  ______ the process's execution time. ",
  "answers": ["reduce, reducing ","reduce, increasing ","increase, increasing ","increase, reducing "],
  "correctAnswer" : "reduce, reducing ",
  },
  
  
     
  { "number":"10",
    
  "question": "Which of the following activities could lead to significant overhead in a page-replacement strategy? ",
  "answers": ["predicting future page use to determine which pages to replace ","all of the above ","marking pages as dirty or modified ","asynchronously flushing modified pages to disk "],
  "correctAnswer" : "predicting future page use to determine which pages to replace ",
  },
  
  
     
  { "number":"11",
    
  "question": "Under a random page replacement strategy, ________ ",
  "answers": ["each page in main memory has a unique likelihood of being selected for replacement ","the system is consistently likely to achieve high performance ","there is generally a small probability that the page that is replaced will be referenced soon ","all of the above "],
  "correctAnswer" : "there is generally a small probability that the page that is replaced will be referenced soon ",
  },
  
  
     
  { "number":"12",
    
  "question": "A FIFO page-replacement strategy can be implemented with relatively low overhead using a ________ ",
  "answers": ["binary tree ","stack ","hash table ","queue "],
  "correctAnswer" : "queue ",
  },
  
  
     
  { "number":"13",
    
  "question": "Why is a FIFO page-replacement strategy impractical for most systems? ",
  "answers": ["The strategy's implementation incurs substantial overhead. ","It could accidentally replace a heavily used page, such as one belonging to a text editor shared by several users. ","It replaces the page that has been in main memory the shortest amount of time. ","It could lead to a decreased page-fault rate. "],
  "correctAnswer" : "It could accidentally replace a heavily used page, such as one belonging to a text editor shared by several users. ",
  },
  
  
     
  { "number":"14",
    
  "question": "According to the FIFO Anomaly (also called Belady's Anomaly) certain page reference patterns cause ________ page faults when the number of page frames allocated to a process is ________",
  "answers": ["more, increased ","fewer, decreased ","fewer, increased ","more, decreased "],
  "correctAnswer" : "more, increased ",
  },
  
  
     
  { "number":"15",
    
  "question": "The least-recently-used (LRU) page-replacement strategy ________",
  "answers": ["relies on spatial locality as a heuristic for determining which pages to replace in main memory ","can incur substantial overhead ","always performs better than FIFO ","all of the above "],
  "correctAnswer" : "can incur substantial overhead ",
  },
  
  
     
  { "number":"16",
    
  "question": "LRU replaces the page that has spent the _________",
  "answers": ["shortest time in memory ","shortest time in memory without being referenced ","longest time in memory without being referenced ","longest time in memory "],
  "correctAnswer" : "longest time in memory without being referenced ",
  },
  
  
     
  { "number":"17",
    
  "question": "The least-frequently-used (LFU) page-replacement strategy can be implemented using _________",
  "answers": ["a stack of pages in main memory ","a counter for each page in main memory ","a queue of pages in main memory ","none of the above "],
  "correctAnswer" : "a counter for each page in main memory ",
  },
  
  
     
  { "number":"18",
    
  "question": "Under a not-used-recently (NUR) page-replacement strategy, the best page to replace (if available) is one that has _________",
  "answers": ["not been referenced but has been modified ","been referenced but not modified ","been both referenced and modified ","been neither referenced nor modified "],
  "correctAnswer" : "been neither referenced nor modified ",
  },
  
  
     
  { "number":"19",
    
  "question": "NUR is based on the idea that _________",
  "answers": ["a page that has not been recently used is likely to be used in the near future ","a page that has not been recently used is not likely to be used in the near future ","a page that has been recently used is not likely to be used in the near future ","none of the above "],
  "correctAnswer" : "a page that has not been recently used is not likely to be used in the near future ",
  },
  
  
     
  { "number":"20",
    
  "question": "The second-chance page-replacement strategy ________",
  "answers": ["moves pages found at the head of a FIFO queue with the referenced bit turned on back to the tail of the queue to avoid replacing them ","relies on a modified bit to determine which page to replace ","searches through a circular list of pages and replaces the first page it encounters that has the referenced bit turned off ","none of the above "],
  "correctAnswer" : "moves pages found at the head of a FIFO queue with the referenced bit turned on back to the tail of the queue to avoid replacing them ",
  },
  
  
     
  { "number":"21",
    
  "question": "The far page-replacement strategy utilizes an_______  that characterizes a process's reference patterns",
  "answers": ["access vector ","access table ","access list ","access graph "],
  "correctAnswer" : "access graph ",
  },
  
  
     
  { "number":"22",
    
  "question": "Why has the far page-replacement strategy not been implemented in real systems? ",
  "answers": ["It is impossible to determine a particular process's reference patterns ","The execution-time overhead it requires is too great. ","It has been shown mathematically to perform at far below optimal levels. ","all of the above "],
  "correctAnswer" : "The execution-time overhead it requires is too great. ",
  },
  
  
     
  { "number":"23",
    
  "question": "Thrashing is the term used to describe________ ",
  "answers": ["what occurs when a disk receives many I/O requests ","what occurs when a process references nonsequential pages in its address space ","excessive paging activity causing low processor utilization ","an unstable system "],
  "correctAnswer" : "excessive paging activity causing low processor utilization ",
  },
  
  
     
  { "number":"24",
    
  "question": "Which of the following statements about working set memory management is false? ",
  "answers": ["Working sets are static once a process begins executing. ","A process's next working set may differ substantially from its current one. ","The 'true' working set of a process is the set of pages that must reside in main memory for the process to execute efficiently. ","none of the above "],
  "correctAnswer" : "Working sets are static once a process begins executing. ",
  },
  
  
     
  { "number":"25",
    
  "question": "The page-fault-frequency (PFF) strategy adjusts the process's resident page set ________",
  "answers": ["after a process is preempted ","after each time a page is flushed ","after each memory reference ","only after each page fault "],
  "correctAnswer" : "only after each page fault ",
  },
  
  
     
  { "number":"26",
    
  "question": "Under the PFF strategy, those pages that belong to a particular process and are currently in memory are referred to as the process's _________",
  "answers": ["active page set ","resident page set ","'true' working set ","running page set "],
  "correctAnswer" : "resident page set ",
  },
  
  
     
  { "number":"27",
    
  "question": "________is a technique that can improve working set page replacement by removing pages from memory a process is no longer using. ",
  "answers": ["Anticipatory page replacement ","Asynchronous page flushing ","Voluntary page release ","none of the above "],
  "correctAnswer" : "Voluntary page release ",
  },
  
  
     
  { "number":"28",
    
  "question": "Which of the following statements about page sizes is false? ",
  "answers": ["A smaller page size would help a process establish a smaller, tighter working set, leaving more memory available to other processes. ","A large page size reduces the range of memory that the TLB can reference with each entry. ","Large page sizes reduce page table fragmentation by decreasing the number of page table entries. ","A system transferring information from main memory to secondary storage using a small page size may require several separate I/O operations, which could increase a process's space-time product. "],
  "correctAnswer" : "A large page size reduces the range of memory that the TLB can reference with each entry. ",
  },
  
  
     
  { "number":"29",
    
  "question": "In today's systems, what is the 'industry-standard' page size? . ",
  "answers": ["4KB ","4MB ","There is no 'industry-standard' page size. ","8KB "],
  "correctAnswer" : "There is no 'industry-standard' page size. ",
  },
  
  
     
  { "number":"30",
    
  "question": "In a system containing several concurrent processes, a running process with a small working set tends to experience a _____number of page faults as the page size _______",
  "answers": ["greater, decreases ","constant, increases ","greater, increases ","constant, decreases "],
  "correctAnswer" : "greater, increases ",
  },
  
  
     
  { "number":"31",
    
  "question": "The average interfault time _______ as the number of page frames allocated to a process _______",
  "answers": ["remains constant, increases ","remains constant, decreases ","increases, increases ","increases, decreases "],
  "correctAnswer" : "increases, increases ",
  },
  
  
     
  { "number":"32",
    
  "question": "The global LRU (gLRU) page-replacement strategy replaces the least-recently-used page in _________",
  "answers": ["the entire system ","the lowest-priority process ","the currently executing process ","the least-recently-executed process "],
  "correctAnswer" : "the entire system ",
  },
  
  
     
  { "number":"33",
    
  "question": "Under the SEQ global replacement strategy, when looping behavior is detected, the _________ strategy is employed. ",
  "answers": ["not-used-recently (NUR) ","least-recently-used (LRU) "," most-recently-used (MRU) ","first-in-first-out (FIFO) "],
  "correctAnswer" : " most-recently-used (MRU) ",
  },
  
  
     
  { "number":"34",
    
  "question": "Linux uses a variation of the________  algorithm to approximate an ________  page-replacement strategy. ",
  "answers": ["clock, LRU ","NUR, LRU ","clock, LFU ","NUR, LFU "],
  "correctAnswer" : "clock, LRU ",
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

chapterList[8].classList.add('cgt');

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