//////////////  here is the questions///////////////

const questions = [
  {
    "number":"1",
    "question": "Magnetic storage became popular because it was ________.",
    "answers": ["rewritable, inexpensive and persistent","fast, inexpensive and persistent","rewritable, fast and persistent","inexpensive, fast and reliable"],
    "correctAnswer" : "rewritable, inexpensive and persistent",
  },{
    "number":"2",
    "question": "Recently, disk capacities have ________, access times have ________ and cost per unit storage has ________.    ",
    "answers": ["decreased, decreased, decreased     ","increased asymptotically, decreased, stayed the same     ","increased, decreased exponentially, decreased exponentially     ","none of the above     "],
    "correctAnswer" : "none of the above     ",
  },

  {
    "number":"3",

    "question": "________ is the amount of time required for the head to move from its current cylinder to its destination.     ",
    "answers": ["Seek time     ","Transmission time     ","Rotational latency time     ","none of the above    "],
    "correctAnswer" : "Seek time     ",
  },
  {    "number":"4",

    "question": "Moving-head disks store data in ________, which are part of larger units called _______, which form ________ when considered vertically.     ",
    "answers": ["sectors, cylinders, tracks     ","cylinders, tracks, sectors     ","tracks, sectors, cylinders     ","sectors, tracks, cylinders     "],
    "correctAnswer" : "sectors, tracks, cylinders     ",
  },
  {    "number":"5",

    "question": "Disk scheduling algorithms are designed to minimize ________ and/or ________, depending on the system’s requests.     ",
    "answers": ["seek latency, rotational time     ","request rate, turnaround time    ","seek time, rotational latency     ","none of the above     "],
    "correctAnswer" : "seek time, rotational latency     ",
  },
  {    "number":"6",

    "question": "Scheduling strategies are commonly evaluated by the system’s ________.     ",
    "answers": ["mean response time     ","variance of response times     ","throughput ","all of the above     "],
    "correctAnswer" : "all of the above     ",
  },
  {    "number":"7",

    "question": "Maximizing ________and minimizing ________can lead to increased ________.     ",
    "answers": ["predictability, mean response time, rotational latency     ","throughput, variance of response times, transmission time     ","throughput, mean response time, variance of response times     ","none of the above     "],
    "correctAnswer" : "throughput, mean response time, variance of response times     ",
  }
  ,
  {    "number":"8",

    "question": "FCFS scheduling tends to result in an acceptable amount of ________ at the expense of ________.     ",
    "answers": ["variance of response times, fairness     ","throughput, fairness     ","variance of response times, throughput     ","fairness, variance of response times     "],
    "correctAnswer" : "variance of response times, throughput     ",
  }
  ,
  {    "number":"9",

    "question": "Because SSTF scheduling exhibits high ________, it is inappropriate for real-time and interactive systems.     ",
    "answers": ["mean response time     ","variance of response times     ","throughput","both a and b     "],
    "correctAnswer" : "variance of response times     ",
  }
  ,
  {    "number":"10",

    "question": "SCAN disk scheduling considers ________ in addition to seek times.     ",
    "answers": ["rotational latency     ","direction ","transmission time     ","variance of response times    "],
    "correctAnswer" : "direction ",
  }
  ,
  {    "number":"11",

    "question": "Which if the following statements is false?     ",
    "answers": ["SCAN is often called the elevator algorithm.     ","SCAN can suffer from indefinite postponement of requests.     ","SCAN offers higher throughput than SSTF.     ","Both a and b.     "],
    "correctAnswer" : "SCAN offers higher throughput than SSTF.     ",
  }
  ,
  {    "number":"12",

    "question": "Under C-SCAN scheduling, which the disk arm finishes sweeping from the outermost track to the innermost track, it ________.     ",
    "answers": ["services the next n requests using scan.     ","skips to the mid-range tracks     ","reverses direction     ","jumps back to the outermost track     "],
    "correctAnswer" : "jumps back to the outermost track     ",
  }
  ,
  {    "number":"13",

    "question": "The primary advantage of F-SCAN scheduling over other SCAN strategies is ________.     ",
    "answers": ["improved seek time     ","reduced variance in response times     ","avoidance of indefinite postponement     ","both b and c     "],
    "correctAnswer" : "both b and c     ",
  }
  ,
  {    "number":"14",

    "question": "N-Step SCAN differs from F-SCAN in that ________.     ",
    "answers": ["N-Step SCAN always provides higher throughput than F-SCAN, but results in a larger variance in response times.     ","N-Step SCAN selects requests it will service during the current sweep according to the number of requests; F-SCAN selects such requests according to time.     ","N-Step SCAN prevents indefinite postponement, but F-SCAN does not.     ","None of the above—N-Step SCAN and F-SCAN are identical.     "],
    "correctAnswer" : "N-Step SCAN selects requests it will service during the current sweep according to the number of requests; F-SCAN selects such requests according to time.     ",
  }
  ,
  {    "number":"15",

    "question": "The LOOK algorithm is based on the ________ strategy, but it eliminates unnecessary seeks when there are no more requests in the current direction.     ",
    "answers": ["SCAN","FCFS ","F-SCAN    ","SSTF "],
    "correctAnswer" : "SCAN",
  }
  ,
  {    "number":"16",

    "question": "The C-LOOK algorithm reduces ________ compared to LOOK at the expense of ________.     ",
    "answers": ["variance of response times, fairness     ","mean response time, throughput     ","throughput, variance of response times     ","variance of response times, throughput     "],
    "correctAnswer" : "variance of response times, throughput     ",
  }
  ,
  {    "number":"17",

    "question": "Today’s hard disks exhibit seek times that are ________ rotational latency times.     ",
    "answers": ["much smaller than     ","the same order of magnitude as     ","much greater than     ","greater than     "],
    "correctAnswer" : "the same order of magnitude as     ",
  }
  ,
  {    "number":"18",

    "question": "In SLTF scheduling, requests are ordered by ________, with the ________ one being serviced first.     ",
    "answers": ["sector, nearest     ","track, nearest     ","size, smallest     ","size, largest     "],
    "correctAnswer" : "sector, nearest     ",
  }
  ,
  {    "number":"19",

    "question": "Both SPTF and SATF scheduling can lead to ________.     ",
    "answers": ["high mean response times     ","low throughput     ","high variance of response times     ","indefinite postponement     "],
    "correctAnswer" : "indefinite postponement     ",
  }
  ,
  {    "number":"20",

    "question": "Access time is defined as ________ plus ________.     ",
    "answers": ["positioning time, transmission time     ","seek time, positioning time     ","rotational latency, seek time     ","seek time, transmission time    "],
    "correctAnswer" : "positioning time, transmission time     ",
  }
  ,
  {    "number":"21",

    "question": "Today’s hard disks counteract efforts to improve performance using disk scheduling ________.     ",
    "answers": ["because little effort has been made to increase disk rotational speeds     ","by using alternate sectors dispersed throughout the disk to improve reliability     ","reordering disk requests     ","all of the above     "],
    "correctAnswer" : "reordering disk requests     ",
  }
  ,
  {    "number":"22",

    "question": "Complex disk scheduling strategies are most appropriate ________.     ",
    "answers": ["under heavy system load     ","for complex file organization structures     ","when accessing localized sequential files     ","under all circumstances     "],
    "correctAnswer" : "under heavy system load     ",
  }
  ,
  {    "number":"23",

    "question": "________ scheduling is appropriate for online transaction-processing systems.     ",
    "answers": ["FCFS","SSTF ","C-LOOK     ","none of the above     "],
    "correctAnswer" : "C-LOOK     ",
  }
  ,
  {    "number":"24",

    "question": "________ caching flushes data to disk immediately, ensuring it cannot be lost in the event of a system failure.     ",
    "answers": ["Write-back     ","Write-through     ","Buffer","Coherent"],
    "correctAnswer" : "Write-through     ",
  }
  ,
  {    "number":"25",

    "question": "Disk cache buffers are stored ________.     ",
    "answers": ["in a memory module attached to the disk drive     ","on a disk interface controller     ","in main memory     ","all of the above    "],
    "correctAnswer" : "all of the above    ",
  }
  ,
  {    "number":"26",

    "question": "Compression can improve disk performance at the expense of ________.     ",
    "answers": ["capacity","processor time     ","fault tolerance     ","data integrity     "],
    "correctAnswer" : "processor time     ",
  }
  ,
  {    "number":"27",

    "question": "Partitioning a drive can potentially ________ fragmentation.     ",
    "answers": ["increase ","eliminate ","decrease ","None of the above. Partitioning has no effect on fragmentation     "],
    "correctAnswer" : "increase ",
  }
  ,
  {    "number":"28",

    "question": "Disk arm anticipation can be implemented by ________.     ",
    "answers": ["moving the disk arm to a “hot spot” of disk activity     ","partitioning a disk     ","moving the disk arm to the middle tracks     ","both a and c     "],
    "correctAnswer" : "both a and c     ",
  }
  ,
  {    "number":"29",

    "question": "The letter “I” in RAID originally stood for ________, but has been revised to stand for ________.     ",
    "answers": ["independent, interleaved     ","independent, inexpensive     ","interleaved, independent     ","inexpensive, independent     "],
    "correctAnswer" : "inexpensive, independent     ",
  }
  ,
  {    "number":"30",

    "question": "The original motivation for RAID came from the observation that ________.     ",
    "answers": ["disk capacities were increasing, but disk I/O transfer rates were increasing at a much slower pace     ","main memory was faster than secondary storage     ","disks were becoming increasingly susceptible to failures     ","all of the above    "],
    "correctAnswer" : "disk capacities were increasing, but disk I/O transfer rates were increasing at a much slower pace     ",
  }
  ,
  {    "number":"31",

    "question": "RAID relies on units of data called ________, which when combined into larger chunks are known as ________.     ",
    "answers": ["sectors, tracks     ","strips, stripes     ","stripes, strips     ","fields, blocks     "],
    "correctAnswer" : "strips, stripes     ",
  }
  ,
  {    "number":"32",

    "question": "A primary drawback to RAID schemes is greatly decreased ________.     ",
    "answers": ["performance","mean-time-to-failure     ","disk space     ","redundancy"],
    "correctAnswer" : "mean-time-to-failure     ",
  }
  ,
  {    "number":"33",

    "question": "RAID level 0 can increase performance ________.     ",
    "answers": ["but does not implement striping     ","at the expense of capacity     ","but does not provide fault-tolerance     ","all of the above     "],
    "correctAnswer" : "but does not provide fault-tolerance     ",
  }
  ,
  {    "number":"34",

    "question": "RAID level 1 ________ of all RAID levels.     ",
    "answers": ["is the most fault-tolerant     ","is the most popular     ","offers the best performance     ","offers the highest total capacity     "],
    "correctAnswer" : "is the most fault-tolerant     ",
  }
  ,
  {    "number":"35",

    "question": "RAID level 1 ________.     ",
    "answers": ["can yield higher throughput for reads compared to writes     ","is the lowest “true” RAID level     ","uses mirroring     ","all of the above     "],
    "correctAnswer" : "all of the above     ",
  }
  ,
  {    "number":"36",

    "question": "________ is determined according to evenness or oddness of a sum of bits.    ",
    "answers": ["XOR ","ECC ","Parity ","None of the above     "],
    "correctAnswer" : "Parity ",
  }
  ,
  {    "number":"37",

    "question": "RAID level 2 schemes ________.     ",
    "answers": ["offer higher throughput than RAID level 0     ","are rarely implemented     ","are more space-efficient than RAID level 1     ","both b and c     "],
    "correctAnswer" : "both b and c     ",
  }
  ,
  {    "number":"38",

    "question": "RAID level 3 performs ________ and incurs ________ storage overhead than RAID level 2     ",
    "answers": ["better, less     ","worse, more     ","better, more     ","worse, less     "],
    "correctAnswer" : "better, less     ",
  }
  ,
  {    "number":"39",

    "question": "Disks in RAID level 4 are ________.     ",
    "answers": ["less fault tolerant than RAID level 3     ","striped at the block level     ","striped at the bit level     ","both b and c"],
    "correctAnswer" : "striped at the block level     ",
  }
  ,
  {    "number":"40",

    "question": "The most significant bottleneck in RAID level 4 is its ________.     ",
    "answers": ["parity generation     ","write performance     ","read performance     ","both b and c     "],
    "correctAnswer" : "write performance     ",
  }
  ,
  {    "number":"41",

    "question": "One technique that can improve RAID level 5 performance, called  ________, involves performing a read-modify-write cycle only when the system load is light.",
    "answers": ["parity logging     ","write combining     ","update imaging     ","AFRAID     "],
    "correctAnswer" : "AFRAID     ",
  }
  ,
  {    "number":"42",

    "question": "RAID level 5 provides performance that ________.     ",
    "answers": ["improve capacity at the expense of fault tolerance     ","depends on the presence a hardware controller     ","balances capacity and fault tolerance     ","increases fault tolerance at the expense of capacity     "],
    "correctAnswer" : "balances capacity and fault tolerance     ",
  }
  ,
  
  
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

chapterList[9].classList.add('cgt');

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