let interviewList = [];
let rejectedList = [];
// let currentList = []
let currentStatus = "all";


let total =document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');



const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');



function calculateCount(){

    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}


calculateCount();


// to get card info-------------------------------
function getCardInfo(parentNode){
    return{
        companyName: parentNode.querySelector('.companyName').innerText,
        companyRole: parentNode.querySelector('.companyRole').innerText,
        salary: parentNode.querySelector('.salary').innerText,
        notAppliedBtn: parentNode.querySelector('.notAppliedBtn').innerText,
        job: parentNode.querySelector('.job').innerText,

    }
}

// filter button--------------------------------------------

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-400', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white')


     allFilterBtn.classList.add('bg-white')
    interviewFilterBtn.classList.add('bg-white')
    rejectedFilterBtn.classList.add('bg-white')


    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-white')
    selected.classList.add('bg-blue-400', 'text-white')



    if (id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();

    } else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden') 
    } else if(id == 'rejected-filter-btn'){
         allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }





} 

// main function--------------------------------------------------

mainContainer.addEventListener('click', function(event) {
    

    // interview button--------------------------------
   

    if(event.target.classList.contains('interview-btn')) {
         const parentNode = event.target.closest('.mx-auto');
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notApplied = parentNode.querySelector('.notAppliedBtn').innerText;
    const job = parentNode.querySelector('.job').innerText;
    const rejectedBtn = event.target.closest('.rejected-btn');
    const interviewBtn = event.target.closest('.interview-btn');


    parentNode.querySelector('.notAppliedBtn').innerText = 'Applied';

    const cardInfo = getCardInfo(parentNode);
       

    // const jobExist = interviewList.find(item=> item.companyName === cardInfo.companyName)

    
    
    if (!interviewList.find(item=> item.companyName === cardInfo.companyName)){
        interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(item=> item.companyName != cardInfo.companyName)

// --------------------------------------
  parentNode.remove();
  if(currentStatus=== 'interview-filter-btn'){
    renderInterview();
  }
  calculateCount();}

//   --======================================



// rejected button---------------------------------------------
 


if(event.target.classList.contains('rejected-btn')){



    const parentNode = event.target.closest('.mx-auto');
    // const companyName = parentNode.querySelector('.companyName').innerText;

    const cardInfo = getCardInfo(parentNode);

    interviewList = interviewList.filter(item => item.companyName !== companyName);

    if(!rejectedList.find(item=> item.companyName === companyName)){
        rejectedList.push(cardInfo);
    }
    parentNode.remove();

    if(currentStatus === 'rejected-filter-btn'){
        renderRejected();
    } 
    calculateCount();
}





// delete button---------------------------
if(event.target.classList.contains('delete')){


    const parentNode = event.target.closest('.mx-auto');
    const companyName = parentNode.querySelector('.companyName').innerText;


    interviewList = interviewList.filter(item=> item.companyName !== companyName);
    rejectedList = rejectedList.filter(item=> item.companyName !== companyName);

    parentNode.remove();


    if(currentStatus === 'interview-filter-btn'){
        renderInterview();
    }

    if(currentStatus === 'rejected-filter-btn'){
        renderRejected();
    }

    calculateCount();




}












// if(rejectedBtn){
//     // handleRejected(rejectedBtn);
//     const parentNode = rejectedBtn.closest('.mx-auto');
//     const companyName = parentNode.querySelector('.companyName').innerText;


//     const cardInfo = getCardInfo(parentNode);

//     interviewList = interviewList.filter(item=> item.companyName !== companyName);

//     if(!rejectedList.find(item=> item.companyName === companyName)){
//         rejectedList.push(cardInfo);
//     }
//     parentNode.remove();

//     if(!interviewFilterBtn.classList.contains('bg-blue-400')){
//         renderRejected();
//     } else {
//         renderInterview();
//     } 
//     calculateCount();

// }














//  ------------------------------------------------  
    

//     renderInterview();
//     calculateCount();


        // }
//      else if(event.target.classList.contains('rejected-btn')){
//          const parentNode = event.target.parentNode.parentNode;
//     const companyName = parentNode.querySelector('.companyName').innerText;
//     const companyRole = parentNode.querySelector('.companyRole').innerText;
//     const salary = parentNode.querySelector('.salary').innerText;
//     const notAppliedBtn = parentNode.querySelector('.notAppliedBtn').innerText;
//     const job = parentNode.querySelector('.job').innerText;

//     parentNode.querySelector('.notAppliedBtn').innerText = 'Rejected';

//     const cardInfo = {
//         companyName, companyRole, salary, notAppliedBtn, job
//     }


//     const jobExist = rejectedList.find(item=> item.companyName === cardInfo.companyName)

    
    
//     if (!jobExist) {
//         rejectedList.push(cardInfo);
//     }
//     interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName)


//     parentNode.remove();


//     renderRejected();
//     calculateCount();


    // }





})

// render interview---------------------------------------

function renderInterview (){
    filterSection.innerHTML = '';


    if(interviewList.length === 0){
        filterSection.innerText = `
        <div class= "text-center mt-10">
        <p class ="text-gray-500 text-lg">No Jobs Available</p>
        </div>
        `;
        return;
    }


    for (let interview of interviewList){
        console.log(interview);
        

        let div = document.createElement('div');
        div.className = `mx-auto w-[80%] bg-white shadow-sm p-5 rounded-md mt-5`
        div.innerHTML = `<div >
            <!-- part1 -->
            <div class="flex justify-between">
                <div >
                <h3 class="companyName font-bold text-xl">${interview.companyName}</h3>
                <p class="companyRole">${interview.companyRole}</p>
            </div>
            <div><button><i class="fa-regular fa-trash-can"></i>
            </button> </div>

            </div>
            <!-- part2 -->
             <p class="salary py-2">${interview.salary}</p>
             <button class="notAppliedBtn bg-gray-200 rounded-sm px-3 py-1 shadow-sm my-3">${interview.notAppliedBtn}</button>
             <p class="job">${interview.job}</p>

             <!-- part3 -->
              <div>
                <button class="text-green-400 border-2 border-green-400 px-3 py-2 rounded-md">Interview</button>
                <button class="text-red-400 border-2 border-red-400 px-3 py-2 rounded-md">Rejected</button>
              </div>

        </div>`;



        filterSection.appendChild(div);



    }
    calculateCount();

}


// render rejected------------------------------------------

function renderRejected (){
    filterSection.innerHTML = '';


    if(rejectedList.length === 0) {
        filterSection.innerHTML = `
        <div class= "text-center mt-10">
        <p class= "text-gray-500 text-lg">No Jobs Available</p>
        `;
        return;
    }


    for (let rejected of rejectedList){
        

        let div = document.createElement('div');
        div.className = `mx-auto w-[80%] bg-white shadow-sm p-5 rounded-md mt-5`
        div.innerHTML = `<div >
            <!-- part1 -->
            <div class="flex justify-between">
                <div >
                <h3 class="companyName font-bold text-xl">${rejected.companyName}</h3>
                <p class="companyRole">${rejected.companyRole}</p>
            </div>
            <div><button><i class="fa-regular fa-trash-can"></i>
            </button> </div>

            </div>
            <!-- part2 -->
             <p class="salary py-2">${rejected.salary}</p>
             <button class="notAppliedBtn bg-gray-200 rounded-sm px-3 py-1 shadow-sm my-3">${rejected.notAppliedBtn}</button>
             <p class="job">${rejected.job}</p>

             <!-- part3 -->
              <div>
                <button class="text-green-400 border-2 border-green-400 px-3 py-2 rounded-md">Interview</button>
                <button class="text-red-400 border-2 border-red-400 px-3 py-2 rounded-md">Rejected</button>
              </div>

        </div>`;



        filterSection.appendChild(div)


    } calculateCount();

}


// ---------------------------
