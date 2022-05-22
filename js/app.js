const searchBtn = document.getElementById("searchBtn");
const usernameText = document.getElementById("userName");
const userReposElement = document.getElementById("userRepos");
const userProfile = document.getElementById("userProfile");
const alertArea =document.getElementsByClassName("alert-area")[0];

eventListener();
const user = new User(); // Creating new user Object

function eventListener(){
    searchBtn.addEventListener("click",getGithubUserData);
    usernameText.addEventListener("keypress",(e)=>{
        e.code==="Enter"?getGithubUserData():null;
    })
}


function getGithubUserData(){
    let username = usernameText.value.trim().toLowerCase();
    userReposElement.innerHTML="";
    userProfile.innerHTML="";

    //check valid user and get data
    githubApi.getUserData(username).then(user=>{
        // if username is not valid show error message fot 2 secs
        if(user.info.message){            
            alertArea.insertAdjacentHTML("afterbegin",`
            <div class="alert alert-danger text-center p-2" role="alert">
            <b>The Github User You are looking for was not found!</b>
            </div>
            `);
            
            setTimeout(()=>{
                alertArea.innerHTML="";
            },1500)
        }
        else{
            //user is valid send data to UI operation
            setUserInfoToUI(user.info);
            setUserReposToUI(user.repos);
        }
    }) 
}