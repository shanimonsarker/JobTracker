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
console.log(mainContainer)



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
} 

mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notApplied = parentNode.querySelector('.not-applied-btn').innerText;
    // const companyName = parentNode.querySelector('.companyName');

    const cardInfo = {
        companyName, companyRole, salary, notApplied
    }


    console.log(cardInfo);


})