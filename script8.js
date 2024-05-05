//////////////  here is the questions///////////////

const questions = [
  
 


   
  { "number":"1",
    
  "question": "In a virtual memory system, ________",
  "answers": ["each virtual address space is much smaller than the real address space ","determining how to map virtual addresses to physical addresses is of great importance ","MMUS convert physical addresses to virtual addresses during execution ","111when the system is ready to run a process, the system loads the process's code and data from main memory into cache 11"],
  "correctAnswer" : "determining how to map virtual addresses to physical addresses is of great importance ",
  },
  
     
  { "number":"2",
    
  "question": "Systems that use dynamic address translation exhibit ______ -the property that contiguous addresses in a process's virtual address space not be contiguous in physical memory. ",
  "answers": ["transparent contiguity ","dynamic contiguity ","static contiguity ","artificial contiguity "],
  "correctAnswer" : "artificial contiguity ",
  },
  
     
  { "number":"3",
    
  "question": "In block mapping systems, ________",
  "answers": ["fixed-size blocks are called segments ","variable-size blocks are called pages ","the larger the average block size, the larger the amount of mapping information ","larger blocks can lead to internal fragmentation and can take longer to transfer between secondary storage and main memory "],
  "correctAnswer" : "larger blocks can lead to internal fragmentation and can take longer to transfer between secondary storage and main memory ",
  },
  
     
  { "number":"4",
    
  "question": "In a block mapping system, suppose that a is a base address stored in the block map table origin register and that the block map table for the process with base address a contains the real address b' for the start of virtual block b in main memory and the real address d' for the start of block d in main memory. What is the real address of virtual address v = (b, d)? ",
  "answers": ["a + b' ","a + d' ","d' + b ","b'+d "],
  "correctAnswer" : "b'+d ",
  },
  
     
  { "number":"5",
    
  "question": "In a paging system, ________",
  "answers": ["a page frame is always larger than an incoming page ","given the virtual memory address v = (p, d), where page p is in page frame p' and the fixed page size is ps, then the real memory address of v is (p' + d) * Ps ","when a process references a page that is not in main memory, the operating system loads the nonresident page into memory from secondary storage ","a page frame is always smaller than the incoming page "],
  "correctAnswer" : "when a process references a page that is not in main memory, the operating system loads the nonresident page into memory from secondary storage ",
  },
  
     
  { "number":"6",
    
  "question": "When a page references a page that is not in main memory, the processor generates a(n) ________",
  "answers": ["TLB miss ","missing-segment fault ","general protection fault ","page fault "],
  "correctAnswer" : "page fault ",
  },
  
     
  { "number":"7",
    
  "question": "Consider paging address translation by direct mapping. Given the base address, a, in the page table origin register, virtual address v = (p, d) entry p' (in the page table starting at address a) for the page frame corresponding to virtual page p, what is the real address corresponding to?",
  "answers": ["p' concatenated with d ","(a + p) d ","(a + p) concatenated with d ","p' * d "],
  "correctAnswer" : "p' concatenated with d ",
  },
  
     
  { "number":"8",
    
  "question": "Which of the following statements about direct mapping is false? ",
  "answers": ["The direct-mapped page table typically is kept in main memory. ","If a process contains n pages in virtual memory space, then the direct-mapped page table for the process contains entries successively for page 0, page 1, page 2,….","Using direct-mapping page address translation can cause the computer system to run programs faster. ","Direct mapping is much like accessing an array location via subscripting. "],
  "correctAnswer" : "Using direct-mapping page address translation can cause the computer system to run programs faster. ",
  },
  
     
  { "number":"9",
    
  "question": "An associative mapping _________",
  "answers": ["provides better performance than direct mapping ","is too expensive to implement ","stores the entire page table in content-addressed associative memory ","all of the above "],
  "correctAnswer" : "all of the above ",
  },
  
     
  { "number":"10",
    
  "question": "A combined direct/associative mapping holds only a small percentage of the complete page table for a process in _______ and keeps the complete page table in _________",
  "answers": ["associative memory, secondary storage ","secondary storage, direct-mapped memory ","direct-mapped memory, secondary storage ","associative memory, main memory "],
  "correctAnswer" : "associative memory, main memory ",
  },
  
     
  { "number":"11",
    
  "question": "Under direct/associative mapping, ________ ",
  "answers": ["accessing the associative memory is slower than accessing the main memory ","better performance can be achieved than under a complete associative mapping ","the number of entries in the TLB needs to be large to achieve good performance ","the page table entries maintained in the TLB typically correspond only to the more-recently referenced pages "],
  "correctAnswer" : "the page table entries maintained in the TLB typically correspond only to the more-recently referenced pages ",
  },
  
     
  { "number":"12",
    
  "question": "In multilevel page tables, ________ is reduced compared to direct-mapped tables when process's use only a small number of pages. ",
  "answers": ["internal fragmentation ","external fragmentation ","memory fragmentation ","table fragmentation "],
  "correctAnswer" : "table fragmentation ",
  },
  
     
  { "number":"13",
    
  "question": "The overhead incurred by multilevel page address translation is _______ ",
  "answers": ["significant due to increased table fragmentation ","offset by caches and TLBS ","significant due to additional memory references ","none of the above "],
  "correctAnswer" : "offset by caches and TLBS ",
  },
  
     
  { "number":"14",
    
  "question": "In an inverted page table, the number of PTES that must be stored in main memory is proportional to ________",
  "answers": ["the size of virtual memory ","the size of the process ","the size of physical memory ","the size of a virtual address space "],
  "correctAnswer" : "the size of physical memory ",
  },
  
     
  { "number":"15",
    
  "question": "Inverted page tables use ______  to map virtual pages to PTES. ",
  "answers": ["arrays ","chaining mechanisms ","hash functions ","linked lists "],
  "correctAnswer" : "hash functions ",
  },
  
     
  { "number":"16",
    
  "question": "To improve performance, a designer can attempt to reduce the number of collisions that occur in an inverted page table by ________ ",
  "answers": ["increasing the size of the inverted page table ","increasing the range of the hash function using a hash anchor table ","both a and b ","none of the above "],
  "correctAnswer" : "increasing the range of the hash function using a hash anchor table ",
  },
  
     
  { "number":"17",
    
  "question": "Page sharing _________",
  "answers": ["increases the amount of main memory required for a group of processes to run efficiently ","decreases a system's degree of multiprogramming ","does not allow modifiable procedures from being used by more than one process at the same time ","none of the above "],
  "correctAnswer" : "does not allow modifiable procedures from being used by more than one process at the same time ",
  },
  
     
  { "number":"18",
    
  "question": "Using copy-on-write to ensure that two processes do not interfere with each other when modifying pages ________",
  "answers": ["slows down process creation ","improves performance when processes modify a significant amount of shared data during execution ","both a and b ","none of the above "],
  "correctAnswer" : "none of the above ",
  },
  
     
  { "number":"19",
    
  "question": "All of a process's segments __________ ",
  "answers": ["must consist of contiguous memory locations ","are maintained in main memory during execution ","must be the same size ","must be placed adjacent to one another in main memory "],
  "correctAnswer" : "must consist of contiguous memory locations ",
  },
  
     
  { "number":"20",
    
  "question": "In a system that uses segmentation address translation by direct mapping, ________ ",
  "answers": ["the segment map table origin register contains the segment map table's base address value ","the mapping mechanism uses the information stored in the segment map table to translate the virtual address to a physical address ","the sum of the segment map table's base address and the segment number determines the location of the segment's map table entry ","all of the above "],
  "correctAnswer" : "all of the above ",
  },
  
     
  { "number":"21",
    
  "question": "A(n) ________ is generated when a displacement is greater than a segment length. ",
  "answers": ["segment-overflow exception ","segment-protection exception ","general protection fault ","missing-segment fault "],
  "correctAnswer" : "segment-overflow exception ",
  },
  
     
  { "number":"22",
    
  "question": "Sharing _________ using segmentation can simplify memory management compared to paging. ",
  "answers": ["reentrant code ","an object ","a dynamic array ","all of the above "],
  "correctAnswer" : "a dynamic array ",
  },
  
     
  { "number":"23",
    
  "question": " ________access is useful for reentrant code because it allows a process to execute a segment or make its own copy of a segment which it may modify",
  "answers": ["Read/execute ","Read/write ","Write/execute ","Execute only "],
  "correctAnswer" : "Read/execute ",
  },
  
     
  { "number":"24",
    
  "question": "A process given append-only access to a segment may ______",
  "answers": ["write information to the segment ","read information from the segment ","pass program control to instructions in that segment for execution on a processor ","write additional information to the end of the segment, but not modify existing information "],
  "correctAnswer" : "write additional information to the end of the segment, but not modify existing information ",
  },
  
     
  { "number":"25",
    
  "question": "In a combined segmentation/paging system, _______",
  "answers": ["segments typically are arranged across multiple pages ","all the pages of a segment must be in main memory at once ","virtual memory pages that are contiguous in virtual memory must be contiguous in main memory ","all of the above "],
  "correctAnswer" : "segments typically are arranged across multiple pages ",
  },
  
     
  { "number":"26",
    
  "question": "In a paged and segmented system using combined associative/direct mapping, ________",
  "answers": ["the associative memory is unimportant to the efficient operation of the dynamic address translation ","the more tables a system maintains in main memory, the fewer processes it can support ","the benefit of maintaining only a few of the tables in main memory at any one time is that address translation proceeds faster at execution time ","missing-segment faults, segment-overflow exceptions and segment-protection exceptions can never occur during dynamic address translation "],
  "correctAnswer" : "the more tables a system maintains in main memory, the fewer processes it can support ",
  },
  
     
  { "number":"27",
    
  "question": "In a segmentation/paging virtual memory system, two processes share memory when________ ",
  "answers": ["each process uses the same segment map table ","each process has a segment map table entry that points to the same page table ","each process shares a page table ","both a and c "],
  "correctAnswer" : "each process has a segment map table entry that points to the same page table ",
  },
  
     
  { "number":"28",
    
  "question": "In the IA-32 architecture, the _______register typically stores a process's code segment selector (which typically corresponds to the segment  containing its executable instructions). ",
  "answers": ["SS ","FS ","ES ","CS "],
  "correctAnswer" : "CS ",
  },
  
     
  { "number":"29",
    
  "question": "For operating systems that maintain more than 8,192 segments, or that maintain a separate segment map table for each process, the IA-32 architecture requires the base address of each local descriptor table to be stored in the ________",
  "answers": ["local descriptor table register ","global descriptor table register ","global descriptor table ","none of the above "],
  "correctAnswer" : "global descriptor table ",
  },
  
     
  { "number":"30",
    
  "question": "In the IA-32 architecture, a(n)______ occurs when a process has attempted to access memory outside of its segment. ",
  "answers": ["segment-overflow exception ","general protection fault exception ","TLB miss ","page fault "],
  "correctAnswer" : "general protection fault exception ",
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

chapterList[7].classList.add('cgt');

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