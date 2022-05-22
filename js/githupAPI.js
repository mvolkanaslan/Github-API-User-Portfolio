class githubApi{
    // Getting User Bio Info's
    static async getUserInformation(username){
        let url = `https://api.github.com/users/${username}`;
        let response = await fetch(url);
        let userInfo = await response.json();
        return userInfo;
    }

    static async getUserRepos(username){
        let url = `https://api.github.com/users/${username}/repos`;
        let response = await fetch(url);
        let userRepos = await response.json();
        return userRepos;
    }
}