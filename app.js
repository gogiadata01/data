
let students=[
    {
        name:"data",
        img:"img/travel.jpg",
        tarigi:2020/09/22,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:22
    },

    {
        name:"lika",
        img:"img/travel.jpg",
        tarigi:2020/09/3,
        stipendia:false,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:22
    },

    {
        name:"ana",
        img:"img/travel.jpg",
        tarigi:2020/09/30,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:23
    },

    {
        name:"lizi",
        img:"img/travel.jpg",
        tarigi:2020/09/21,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:24
    }, 

    {
        name:"giorgi",
        img:"img/travel.jpg",
        tarigi:2020/09/4,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:25
    }, 

    {
        name:"shako",
        img:"img/travel.jpg",
        tarigi:2020/09/3,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:26
    }, 

    {
        name:"salome",
        img:"img/travel.jpg",
        tarigi:2020/09/3,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:28
    }, ,

    {
        name:"mari",
        img:"img/travel.jpg",
        tarigi:2020/09/3,
        stipendia:true,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:22
    }, 

    {
        name:"nana",
        img:"img/travel.jpg",
        tarigi:2020/09/3,
        stipendia:false,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:29
    }, 

    {
        name:"megi",
        img:"img/travel.jpg",
        tarigi:20200926,
        stipendia:false,
        daswreba: 100,
        kursi:"პროგრამირება",
        age:19
    }, 
]


students.forEach(element => {
    // let role ;
    if (element.stipendia) {
        role =`<span class="badge bg-success">სტიპენდია</span>`;
    }
      else{
          role =`<span class="badge bg-danger">დასწრება</span>`;
    }
    
})

// function search(text){
//     // studentscard.innerHTML = '';

//     let studentsfilter ;

//     studentsfilter = students.filter(el =>{
//         return !el.name.search(text)
//     })

//     filterdate(studentsfilter);

// }



students.forEach(element =>{
    studentscard.innerHTML +=  `<div class="col-lg-4 mb-3" <div class="card">
    <img src="${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.daswreba}</p>
    <p class="card-text">${element.age}</p>
    <p class="card-text">${element.kursi}</p>
    <p class="card-text">${element.tarigi}</p>
    ${role}
   </div
    </div>
     </div>`
});