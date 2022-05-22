function setUserInfoToUI(userInfo){
    
    userProfile.insertAdjacentHTML("afterbegin",
    `
        <div class="card d-flex  justify-content-center mb-3 shadow-sm bg-body rounded">
            <img src="${userInfo.avatar_url}" class="card-img-top rounded-circle p-5">
            <div class="card-body pt-0 ">
                <div class=" d-flex flex-column">
                    <span class="fs-4"><b>${userInfo.name?userInfo.name:""}</b></span>
                    <span>${userInfo.location?userInfo.location:''}</span>
                    <p class="mb-0">${userInfo.bio?userInfo.bio:""}</p>
                    <p class="mb-0">${userInfo.company?userInfo.company:""}</p>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <div class="col-6"><i class="fa-solid fa-users" style="color: #0b5ed7;"></i><span class="text-secondary " style="margin-left:10px">${userInfo.followers} Followers</span></div>
                <div class="col-6"><i class="fa-solid fa-user-group" style="color: #0b5ed7;"></i><span class="text-secondary" style="margin-left:10px">${userInfo.following} Following</span></div>
            </div>
            <div class="card-footer" style="display:${userInfo.twitter_username?"block":"none"};">
                <li class="list-group-item d-flex justify-content-between align-items-center"><i class="fa-brands fa-twitter "></i><span class="text-secondary">@${userInfo.twitter_username}</span></li>
            </div>
            
        </div>
    `)
}