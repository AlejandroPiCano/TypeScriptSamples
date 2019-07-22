"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
        this.options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
    }
    GitHubApiService.prototype.getUserInfo = function (userName, callback) {
        request.get('https://api.github.com/users/' + userName, this.options, function (error, response, body) {
            var user = new User_1.User(body);
            callback(user);
        });
    };
    GitHubApiService.prototype.getRepos = function (userName, callback) {
        request.get('https://api.github.com/users/' + userName + '/repos', this.options, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            callback(repos);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
