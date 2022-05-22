function setUserReposToUI(userRepos){
    userRepos.map((repo,index)=>{
        userReposElement.insertAdjacentHTML("beforeend",
    `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button ${index==0 ?'':'collapsed'} p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index==0?"true":"false"}" aria-controls="collapse${index}">
            <i class="fa-regular fa-star"><span style="margin-left: 2px;"><span style="margin-right: 10px;">${repo.stargazers_count}</span></i><strong>${repo.name}</strong></span>
            </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse ${index==0?"show":""}" aria-labelledby="heading${index}" data-bs-parent="#userRepos">
                <div class="accordion-body">
                    <p class="mb-0" style="display:${repo.description?"block":"none"}"><span><b>Description : </b></span><span>${repo.description?repo.description:""}</span></p> 
                    <p class="mb-0" style="display:${repo.language?"block":"none"}"><span><b>Languages : </b>${repo.language}</span></p> 
                    <p class="mb-0"><span></span><a href="${repo.html_url}" target="blank">Click to Repo Page</a></p>
                </div>
            </div>
    </div>`)
    })
    
}