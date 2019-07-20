import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

export class GitHubApiService{
    options : any = {
        headers: {
            'User-Agent': 'request'
        }, 
        json: true
    }

    getUserInfo(userName: string, callback : (user: User) => any){
        
        request.get('https://api.github.com/users/' + userName, this.options, (error: any,response: any,body: any) => {
           let user = new User(body);
           callback(user);
        });
    }

    getRepos(userName: string, callback : (repos: Repo[]) => any){
        request.get('https://api.github.com/users/' + userName + '/repos', this.options, (error: any,response: any,body: any) => {           
          let repos = body.map(
                ( repo: any) => new Repo(repo)
            );
        callback(repos);
         });
    }
}