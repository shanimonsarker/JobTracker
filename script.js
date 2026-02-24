let interviewList = [];
let rejectedList = [];



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



function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-400', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white')


     allFilterBtn.classList.add('bg-white')
    interviewFilterBtn.classList.add('bg-white')
    rejectedFilterBtn.classList.add('bg-white')


    const selected = document.getElementById(id);

    selected.classList.remove('bg-white')
    selected.classList.add('bg-blue-400', 'text-white')



    if (id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')

    } else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }





} 

mainContainer.addEventListener('click', function(event){
    
   

    if(event.target.classList.contains('interview-btn')){
         const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notApplied = parentNode.querySelector('.notAppliedBtn').innerText;
    const job = parentNode.querySelector('.job');

    parentNode.querySelector('.notAppliedBtn').innerText = 'Applied'

    const cardInfo = {
        companyName, companyRole, salary, notApplied, job
    }


    const jobExist = interviewList.find(items=> items.companyName === cardInfo.companyName)

    
    
    if (!jobExist) {
        interviewList.push(cardInfo);
    }
    renderInterview()


    }
     else if(event.target.classList.contains('rejected-btn')){
         const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notApplied = parentNode.querySelector('.notAppliedBtn').innerText;
    const job = parentNode.querySelector('.job');

    parentNode.querySelector('.notAppliedBtn').innerText = 'Rejected'

    const cardInfo = {
        companyName, companyRole, salary, notApplied, job
    }


    const jobExist = rejectedList.find(items=> items.companyName === cardInfo.companyName)

    
    
    if (!jobExist) {
        rejectedList.push(cardInfo);
    }
    renderInterview()


    }





})


function renderInterview (){
    filterSection.innerHTML = ''


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

        </div>`

        calculateCount();


        filterSection.appendChild(div)


    }

}


function renderRejected (){
    filterSection.innerHTML = ''


    for (let rejected of rejectedList){
        

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

        </div>`

        calculateCount();


        filterSection.appendChild(div)


    }

}