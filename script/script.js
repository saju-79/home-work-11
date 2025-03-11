 function loadCatagorise(){
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => {
        displayCatagori( data.categories);
        const btnAll = document.getElementById("btn-all")
        btnAll.classList.add("active")
    })
 }
 //video contener 
 function vedieoContainer(){
       
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((Response) => Response.json())
        .then((data) => displayVideo(data.videos))
 }
 function removeActive (){
    const activeButtons = document.getElementsByClassName("active");
    for(let btn of activeButtons ){
        btn.classList.remove("active");
    }
 }
 //load catagoris video
 const loadVideo = (id) =>{
      console.log(id)
      const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
      fetch(url).then((res) => res.json())
      .then((data) => {
        removeActive ()
        const clickButton = document.getElementById(`btn-${id}`)
        clickButton.classList.remove("active")
       
        console.log(clickButton)
        displayVideo(data.category);

      })
 }
function displayCatagori(cats){
    
  
    const category = document.getElementById("category-container");
    for(let cat of cats){
        
        const div = document.createElement("div");
        div.innerHTML = `
        <button id = "btn-${cat.category_id}" onclick="loadVideo(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        category.appendChild(div);
    }
}
//video conteainer 
const displayVideo = (videos) =>{

    const videoContenar = document.getElementById("video-container");
    videoContenar.innerHTML = ""
    if(videos.lenght == 0){
         videoContenar.innerHTML = ` 
         <!-- page work -->
            <div class="
             col-span-full flex flex-col text-center items-center justify-center space-y-4 py-20">
                <img class="text-center items-center justify-center" src="Icon.png" alt="">
                <h3 class="font-bold text-3xl ">Oops!! Sorry, There is no content here</h3>
            </div>
            `;
       
           return;
     }
 videos.forEach(video => {
     
     const videoCard = document.createElement("div");
    videoCard.innerHTML = `
     
          <!-- card digai,n  -->
          <div class="card bg-[#dfd5d5]   shadow-lg">
            <figure class="relative">
              <img
                class="w-full h-[220px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 text-white p-1 text-sm bg-black rounded-sm right-2">3hrs 56 min ago</span>
            </figure >
            <div class="flex gap-3 px-0 p-4">
                <!-- profail section -->
              <div class="">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <!-- text sectiion -->
              <div class="flex-row">
                  <h2 class="font-bold text-lg text-[#171717] ">${video.title}</h2>
                    <h3 class="text-[#636161] text-sm font-normal flex ">${video.authors[0].profile_name}  ${video.authors[0].verified == true ?`<img class="w-6 ml-2" src="https://img.icons8.com/?size=48&id=Zp4s1XVxL3I4&format=png" alt="">` : ""} </h3>
                   <h3  class="text-[#636161] text-sm font-normal">${video.
                    others.views

                    }views</h3>
            </div>
            </div>
          
        </div>


    `
    videoContenar.appendChild(videoCard)
 });

}
loadCatagorise()
 