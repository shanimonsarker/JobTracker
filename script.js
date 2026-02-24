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


    }





} 

mainContainer.addEventListener('click', function(event){
    console.log(event.target.classList.contains('interview-btn'))
   

    if(event.target.classList.contains('interview-btn')){
         const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notApplied = parentNode.querySelector('.not-applied-btn').innerText;
    const job = parentNode.querySelector('.job');

    const cardInfo = {
        companyName, companyRole, salary, notApplied, job
    }


    const jobExist = interviewList.find(items=> items.companyName === cardInfo.companyName)

    parentNode.querySelector('.not-applied-btn').innerText = 'Applied'
    
    if (!jobExist) {
        interviewList.push(cardInfo);
    }
    renderInterview()


    }

})


function renderInterview (){
    filterSection.innerHTML = ''


    for (let interview of interviewList){
        

        let div = document.createElement('div');
        div.className = `mx-auto w-[80%] bg-white shadow-sm p-5 rounded-md mt-5`
        div.innerHTML = `<div >
            <!-- part1 -->
            <div class="flex justify-between">
                <div >
                <h3 class="companyName font-bold text-xl">Mobile First Corp</h3>
                <p class="companyRole">React Native Developer</p>
            </div>
            <div><button><i class="fa-regular fa-trash-can"></i>
            </button> </div>

            </div>
            <!-- part2 -->
             <p class="salary py-2">Remote • Full-time • $130,000 - $175,000</p>
             <button class="not-applied-btn bg-gray-200 rounded-sm px-3 py-1 shadow-sm my-3">Not Applied</button>
             <p class="job">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

             <!-- part3 -->
              <div>
                <button class="text-green-400 border-2 border-green-400 px-3 py-2 rounded-md">Interview</button>
                <button class="text-red-400 border-2 border-red-400 px-3 py-2 rounded-md">Rejected</button>
              </div>

        </div>`


        filterSection.appendChild(div)


    }

}