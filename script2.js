//////////////  here is the questions///////////////

const questions = [
  
  
  { "number":"1",
  
    "question": "Operating systems use _________often provided by hardware manufacturers, to perform device-specific I/O operations",
    "answers": ["APIS ","controllers ","device drivers ","none of the above "],
    "correctAnswer" : "device drivers ",
  },

  { "number":"2",
  
  "question": "From the user's point of view, plug-and-play devices that are added to the system typically are ready to use _____________",
  "answers": ["after logging off and logging back onto the system ","immediately, with little or no user interaction ","after restarting the computer ","after manually configuring the operating system to identify the device "],
  "correctAnswer" : "immediately, with little or no user interaction ",
},

{ "number":"3",
  
    "question": "Which of the following hardware components are required to execute instructions in a general-purpose computer? ",
    "answers": ["mainboard ","processor ","main memory ","all of the above "],
    "correctAnswer" : "all of the above ",
  },

  { "number":"4",
  
  "question": "The ________ chip, typically located on the mainboard, stores instructions for basic hardware initialization and management. ",
  "answers": ["bootstrap ","firmware ","basic input/output system (BIOS) ","device driver "],
  "correctAnswer" : "basic input/output system (BIOS) ",
},

{ "number":"5",
  
    "question": "A(n) _________ is a piece of hardware that executes a set of machine-language instructions.",
    "answers": ["processor ","controller ","bus ","motherboard "],
    "correctAnswer" : "processor ",
  },

  { "number":"6",
  
  "question": "Within a processor, the ________ and the loads instructions into high-speed memory (i.e., instruction registers), the ________ performs basic arithmetic and logical operations",
  "answers": ["arithmetic and logic unit, instruction decode unit, instruction fetch unit ","instruction fetch unit, instruction decode unit, arithmetic and logic unit ","arithmetic and logic unit, instruction fetch unit, instruction decode unit ","instruction fetch unit, arithmetic and logic unit, instruction decode unit "],
  "correctAnswer" : "instruction fetch unit, instruction decode unit, arithmetic and logic unit ",
},

{ "number":"7",
  
    "question": "Which type of memory provides the fastest data access? ",
    "answers": ["L3 cache ","registers ","L1 cache ","L2 cache "],
    "correctAnswer" : "registers ",
  },

  { "number":"8",
  
  "question": "What is the role of a computer system's clock generator? ",
  "answers": ["It keeps track of the current date and time. ","It sets the frequency at which buses in the system transfer data. ","It provides power for the computer's internal clock. ","Both a) and c) "],
  "correctAnswer" : "It sets the frequency at which buses in the system transfer data. ",
},

{ "number":"9",
  
    "question": "Which of the following lists memory types from highest to lowest speed? ",
    "answers": ["L1 cache, registers, main memory, secondary storage ","registers, L2 cache, main memory, secondary storage ","secondary storage, main memory, L2 cache, registers ","registers, L1 cache, secondary storage, main memory "],
    "correctAnswer" : "registers, L2 cache, main memory, secondary storage ",
  },

  { "number":"10",
  
  "question": "Data stored on ________ media (i.e., caches) vanishes when the computer is turned off, whereas _______media (i.e., hard disks) preserve data  when no power is present. ",
  "answers": ["persistent, volatile ","random-access, sequential-access ","dynamic, static ","volatile, persistent "],
  "correctAnswer" : "volatile, persistent ",
},

{ "number":"11",
  
    "question": "As manufacturers develop new memory technologies, the speed and capacity of memory tend to _______while the cost per storage unit tends to_______. ",
    "answers": ["increase, decrease ","increase, increase ","decrease, increase ","decrease, decrease "],
    "correctAnswer" : "increase, decrease ",
  },

  { "number":"12",
  
  "question": "Why is hard disk storage much slower to access than main memory? ",
  "answers": ["Disks must be access via a hardware controller. ","Accessing data on a hard disk requires mechanical movement of the read/write head. ","Disks are located farther from a system's processors. ","all of the above "],
  "correctAnswer" : "Accessing data on a hard disk requires mechanical movement of the read/write head. ",
},

{ "number":"13",
  
    "question": "Removable media such as CD-Rs generally have _______ capacity and ________   latency than other forms of storage such as hard disks.  ",
    "answers": ["higher, lower ","higher, higher ","lower, higher ","lower, lower "],
    "correctAnswer" : "lower, higher ",
  },

  { "number":"14",
  
  "question": "A(n) ________ is a bus that connects exactly two devices, and a(n) _________  is a bus that several devices share to perform I/O operations. ",
  "answers": ["port, I/O channel ","I/O channel, port ","data bus, port ","data bus, I/O channel "],
  "correctAnswer" : "port, I/O channel ",
},

{ "number":"15",
  
    "question": "To prevent signals from colliding on the bus, ________  prioritize(s) access to memory by I/O channels and processors. ",
    "answers": ["a register ","interrupts ","a controller ","the processor scheduler "],
    "correctAnswer" : "a controller ",
  },

  { "number":"16",
  
  "question": "________ enables devices and controllers to transfer blocks of data to and from main memory directly",
  "answers": ["Direct memory access (DMA) ","Pipelining ","Interrupt-driven I/O ","Programmed I/O "],
  "correctAnswer" : "Direct memory access (DMA) ",
},

{ "number":"17",
  
    "question": "Which of the following devices is not considered a peripheral device? ",
    "answers": ["printer ","hard disk drive ","mainboard ","DVD drive "],
    "correctAnswer" : "mainboard ",
  },

  { "number":"18",
  
  "question": "Which of the following is not a serial interface? ",
  "answers": ["USB ","IEEE 1394 (FireWire or iLink) ","SCSI ","none of the above "],
  "correctAnswer" : "SCSI ",
},

{ "number":"19",
  
    "question": "In what ways do processors support operating system services? ",
    "answers": ["Processors inform the operating system of events such as program execution errors and changes in device status ","To create a secure system, processors often implement protection mechanisms by preventing processes from accessing privileged instructions. ","Most processors provide mechanisms for memory protection and memory management. ","all of the above "],
    "correctAnswer" : "all of the above ",
  },

  { "number":"20",
  
  "question": "As computer architectures have evolved, the number of privileged instructions (i.e., those instructions not accessible in user mode) has _______",
  "answers": ["increased dramatically ","decreased ","remained the same ","increased "],
  "correctAnswer" : "increased ",
},

{ "number":"21",
  
    "question": "Which of the following events would not lead to an exception being generated? ",
    "answers": ["a protection violation ","a hardware failure "," a disk I/O completion ","a logic error "],
    "correctAnswer" : " a disk I/O completion ",
  },

  { "number":"22",
  
  "question": "A(n)________ periodically generates an interrupt that causes a processor to invoke the operating system. ",
  "answers": ["clock generator ","interval timer ","time-of-day clock ","none of the above "],
  "correctAnswer" : "interval timer ",
},

{ "number":"23",
  
    "question": "Which of the following does not occur during bootstrapping? ",
    "answers": ["the system prepares to run user applications ","processor registers are initialized ","low-level operating system components are loaded into memory ","a login prompt is loaded "],
    "correctAnswer" : "a login prompt is loaded ",
  },

  { "number":"24",
  
  "question": "Which of the following events does not occur when a plug-and-play device is attached to a computer? ",
  "answers": ["The device uniquely identifies itself to the operating system. ","The device notifies the user that it is ready to use. ","The device indicates to the operating system the resources and services it requires to function properly. ","The device identifies the driver it requires to function "],
  "correctAnswer" : "The device notifies the user that it is ready to use. ",
},

{ "number":"25",
  
    "question": "A cache hit occurs when __________",
    "answers": ["a piece of data is removed from the cache. ","a piece of data is placed in cache memory. ","a referenced piece of data is not present in cache memory. ","a referenced piece of data is present in cache memory. "],
    "correctAnswer" : "a referenced piece of data is present in cache memory. ",
  },

  { "number":"26",
  
  "question": "_________improve system performance by temporarily storing data during transfers between devices or processes that operate at different speeds. ",
  "answers": ["Buffers ","Caches ","Controllers ","Registers "],
  "correctAnswer" : "Buffers ",
},

{ "number":"27",
  
    "question": "Computer languages can be classified as one of three types. Which of the following is not one of these types? ",
    "answers": ["Machine languages ","High-level languages ","Microcode languages ","Assembly languages "],
    "correctAnswer" : "Microcode languages ",
  },

  { "number":"28",
  
  "question": "Specifying elementary computer operations with English-like abbreviations forms the basis of ________ languages. ",
  "answers": ["Machine languages ","Assembly languages ","High-level languages ","Mid-level languages "],
  "correctAnswer" : "Assembly languages ",
},

{ "number":"29",
  
    "question": "Translator programs called ________convert high-level language programs into machine language. ",
    "answers": ["compilers ","interpreters ","assemblers ","none of the above "],
    "correctAnswer" : "compilers ",
  },

  { "number":"30",
  
  "question": "_________are programs that directly execute source code or code that has been reduced to low-level language but not machine code. ",
  "answers": ["compilers ","assemblers ","interpreters ","none of the above "],
  "correctAnswer" : "interpreters ",
},

{ "number":"31",
  
    "question": "IBM developed _________in the mid 1950s for scientific and engineering applications that require complex mathematical computations. ",
    "answers": ["Fortran ","C ","COBOL ","Pascal "],
    "correctAnswer" : "Fortran ",
  },

  { "number":"32",
  
  "question": "__________,a programming language designed for teaching structured programming in academic environments, was developed by Professor Nicklaus Wirth in 1971. ",
  "answers": ["Fortran ","C ","Pascal ","COBOL "],
  "correctAnswer" : "Pascal ",
},

{ "number":"33",
  
    "question": " The________ programming language facilitated concurrent programming",
    "answers": ["Pascal ","COBOL ","Ada ","Fortran "],
    "correctAnswer" : "Ada ",
  },

  { "number":"34",
  
  "question": "Objects have ______ such as color, size and weight; and they perform ________,such as moving, sleeping or drawing. ",
  "answers": ["methods, actions ","properties, actions ","actions, properties ","properties, attributes "],
  "correctAnswer" : "properties, actions ",
},

{ "number":"35",
  
    "question": "Fortran, Pascal, BASIC and C are all forms of ________",
    "answers": ["concurrent programming languages ","procedural programming languages ","object-oriented programming languages ","none of the above "],
    "correctAnswer" : "procedural programming languages ",
  },

  { "number":"36",
  
  "question": "The Portable Operating System Interface (POSIX) is an example of a(n): ",
  "answers": ["GUI ","protocol suite ","API ","device driver "],
  "correctAnswer" : "API ",
},

{ "number":"37",
  
    "question": "A compiler accepts_______  .   code, written in a high-level language, and returns executable ________ code that contains machine-language instructions.",
    "answers": ["assembly, source ","assembly, object ","object, source ","source, object "],
    "correctAnswer" : "source, object ",
  },

  { "number":"38",
  
  "question": "What is the role of the lexical analyzer in a compiler? ",
  "answers": ["The lexical analyzer separates the source code into tokens (e.g., keywords, identifiers, operators and punctuation). ","The lexical analyzer attempts to optimize the efficiency of the code. ","The lexical analyzer converts syntactic structures into instructions. ","The lexical analyzer groups tokens in a program's source code into syntactically correct statements. "],
  "correctAnswer" : "The lexical analyzer separates the source code into tokens (e.g., keywords, identifiers, operators and punctuation). ",
},

{ "number":"39",
  
    "question": "_________ is the process of integrating the various modules referenced by a program into a single executable unit. ",
    "answers": ["Compiling ","Linking ","Parsing ","Loading "],
    "correctAnswer" : "Linking ",
  },



{ "number":"40",
  
    "question": "Input to the linker can include which of the following items? ",
    "answers": ["control statements ","load modules ","object modules ","all of the above "],
    "correctAnswer" : "all of the above ",
  },

  { "number":"41",
  
  "question": "Which of the following statements about dynamic linking is false? ",
  "answers": ["References to external functions are not resolved until a process issues calls to the functions. ","Dynamic linking saves space on secondary storage, as only a single copy of a shared library must be stored. ","A dynamically linked program must be relinked when a library that is uses is modified. ","Shared library code can be stored separately from other program code. "],
  "correctAnswer" : "A dynamically linked program must be relinked when a library that is uses is modified. ",
},

{ "number":"42",
  
    "question": "_________ occurs when the loader places instructions and data units at particular memory addresses. ",
    "answers": ["Relocatable loading ","Absolute loading ","Memory binding ","Address binding "],
    "correctAnswer" : "Address binding ",
  },

  { "number":"43",
  
  "question": "Which of the following represents a correct sequence of events to transform software written in a high-level language to an executable program? ",
  "answers": ["compiling, loading, linking ","linking, compiling, loading ","linking, loading, compiling ","compiling, linking, loading "],
  "correctAnswer" : "compiling, linking, loading ",
},

{ "number":"44",
  
    "question": "Firmware consists of executable instructions, written using _________ and stored in persistent memory that is attached to a particular __________.",
    "answers": ["microprogramming, hardware device ","microprogramming, process ","concurrent programming, hardware device ","concurrent programming, process "],
    "correctAnswer" : "microprogramming, hardware device ",
  },

  { "number":"45",
  
  "question": "Which of the following is a true statement about middleware? ",
  "answers": ["Middleware permits applications to run on heterogeneous computer platforms. ","Middleware enables communication between computers in distributed systems. ","Middleware simplifies application development, as developers do not need to know the implementation details of the middleware. ","all of the above "],
  "correctAnswer" : "all of the above ",
},
  { "number":"46",
  
  "question": "An ODBC driver is a piece of middleware that: ",
  "answers": ["handles retrieving information from a database as requested by an application. ","hides the details of connecting an application to databases of several common database formats. ","both a and b ","neither a nor b "],
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

chapterList[1].classList.add('cgt');

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