class githubApi{
    // Get User Data from API and set properties User object
    static async getUserData(username){
        let url = `https://api.github.com/users/`;
        let responseInfo = await fetch(url+username);
        let responseRepos = await fetch(url+username+"/repos");
        user.info = await responseInfo.json();
        user.repos = await responseRepos.json();
        return user;
    }
}