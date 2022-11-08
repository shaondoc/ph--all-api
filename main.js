const searchPhone = ()=>{

    const SearchValue = document.getElementById('input-field');
    const searchtext = SearchValue.value
    console.log(searchtext);
    SearchValue.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`)
    .then(res=> res.json())
    .then(data=> {
      display(data) 
      console.log(data.status) 
    })
}


const display= data=>{
    const discontainer = document.getElementById('dis-result');
    discontainer.textContent='';
    console.log(discontainer)
    if (data.status) {
        for (const phone of data.data) {
            const div =document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
               <img width="50%" src="${phone.image}" class="card-img-top img-thumbnail" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${phone.phone_name}</h5>
                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               </div>
             </div>`;
    
             discontainer.appendChild(div);
            console.log(phone
                )
        }
    } else {
        const div =document.createElement('div');
        div.classList.add('col');

        div.innerHTML='<p> no data found</p>'
        discontainer.appendChild(div);
        console.log('no data found')
    }

    // for (const phone of data.data) {
    //     const div =document.createElement('div');
    //     div.classList.add('col');
    //     div.innerHTML = `
    //     <div class="card">
    //        <img width="50%" src="${phone.image}" class="card-img-top img-thumbnail" alt="...">
    //        <div class="card-body">
    //          <h5 class="card-title">${phone.phone_name}</h5>
    //          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //        </div>
    //      </div>`;

    //      discontainer.appendChild(div);
    //     console.log(phone
    //         )
    // }
}