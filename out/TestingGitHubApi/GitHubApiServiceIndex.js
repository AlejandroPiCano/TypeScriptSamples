"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var _ = __importStar(require("lodash"));
var GitHubApiServiceIndex = /** @class */ (function () {
    function GitHubApiServiceIndex() {
        this.ShowDemo = function () {
            var svc = new GitHubApiService_1.GitHubApiService();
            var userName = 'AlejandroPiCano';
            svc.getUserInfo(userName, function (user) {
                svc.getRepos(userName, function (repos) {
                    // Get repos order by fork count.
                    var sortedRepos = _.sortBy(repos, [function (repo) { repo.forkCount; }]);
                    user.repos = sortedRepos;
                    console.log(user);
                });
            });
        };
    }
    return GitHubApiServiceIndex;
}());
exports.GitHubApiServiceIndex = GitHubApiServiceIndex;
