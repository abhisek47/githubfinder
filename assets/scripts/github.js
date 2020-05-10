class Github {
    constructor(){
        this.client_id = 'd53ff88ecf92dbff5dff';
        this.client_secret = '35a2017b60eee8b7f74dc8b9533b831d936dd733';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return { profile, repos }
    }
}