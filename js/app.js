const searchBtn = document.getElementById("searchBtn");
const usernameText = document.getElementById("userName");
const userReposElement = document.getElementById("userRepos");
const userProfile = document.getElementById("userProfile");
const alertArea =document.getElementsByClassName("alert-area")[0];
eventListener();
const user = new User();
function eventListener(){

    searchBtn.addEventListener("click",getGithubUserData)
    usernameText.addEventListener("keypress",(e)=>{
        e.code==="Enter"?getGithubUserData():null;
    })
}
function getGithubUserData(){
    let username = usernameText.value;
    userReposElement.innerHTML="";
    userProfile.innerHTML="";
    githubApi.getUserData(username).then(user=>{
        if(user.info.message){}
        else{
            setUserInfoToUI(user.info);
            setUserReposToUI(user.repos);
        }
        
    }).catch(err=>{
        alertArea.insertAdjacentHTML("afterbegin",`
        <div class="alert alert-danger text-center p-2" role="alert">
        <b>The Github User You are looking for was not found!</b>
        </div>
        `);
        setTimeout(()=>{
            alertArea.innerHTML="";
        },1500)
        
    });
    
    
    
}