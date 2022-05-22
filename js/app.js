const searchBtn = document.getElementById("searchBtn");
const usernameText = document.getElementById("userName");
const userReposElement = document.getElementById("userRepos");
const userProfile = document.getElementById("userProfile");

eventListener();

function eventListener(){

    searchBtn.addEventListener("click",()=>{
        let username = usernameText.value;
        githubApi.getUserInformation(username).then(userInfo=>setUserInfoToUI(userInfo));

        githubApi.getUserRepos(username).then(repos=>setUserReposToUI(repos))
    })
}