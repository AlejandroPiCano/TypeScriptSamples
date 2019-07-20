import {GitHubApiService} from './GitHubApiService';
import {User} from './User';
import {Repo} from './Repo';
import * as _ from 'lodash';


export class GitHubApiServiceIndex{
  
    ShowDemo = function(){
        let svc = new GitHubApiService();
        let userName = 'AlejandroPiCano';
        
        svc.getUserInfo(userName, (user: User) => {
            svc.getRepos(userName, (repos: Repo[]) => {
                // Get repos order by fork count.
                let sortedRepos = _.sortBy(repos, [(repo:Repo) => {repo.forkCount}]);
        
                user.repos = sortedRepos;
                console.log(user);
            });
        });
        
    }
}



