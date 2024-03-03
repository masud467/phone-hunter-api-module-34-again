// fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
// .then(res => res.json())
// .then(data =>{
//     console.log(data.data[0].image)
// })


const loadPhone = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    // console.log(phones)
    displayPhones(phones,isShowAll)
}


const displayPhones = (phones,isShowAll) => {
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerHTML = ''
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    if(!isShowAll){
        phones= phones.slice(0,12)
    }
    
    phones.forEach(phone => {
        // console.log(phone)
       const phoneCard = document.createElement('div') 
       phoneCard.classList = 'card bg-base-100 shadow-xl'
       phoneCard.innerHTML = `
       <figure><img src="${phone.image}" alt="Shoes" />
       </figure>
       <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
          </div>
      </div>`

       phoneContainer.appendChild(phoneCard)
    });
    toggledLoadingSpinner(false)
}


const handleSearch = (isShowAll) =>{

    toggledLoadingSpinner(true)
    const searchView = document.getElementById('search-view')
    const searchViewText = searchView.value 
    // console.log(searchViewText)
    loadPhone(searchViewText,isShowAll)
}

const toggledLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

const handleShowAll = () => {
    handleSearch(true)
}



// loadPhone()
