const ToolsAPI = {
    tools: [
        {name: "Aguilar, Fred", branch: "pushed to branch feature/Gitlab", repo: " in repository Gitlab_Repo"},
        {name: "Bali, Indonesia", branch: "deleted branch feature/Delete", repo: " in repository Gitlab_Repo"},
        {name: "Cruz, Santa", branch: "merged pull request #8", repo: " in repository Gitlab_Repo"},
        {name: "Aguilar, Fred", branch: "pushed to branch feature/Gitlab", repo: " in repository Gitlab_Repo"},
        {name: "Bali, Indonesia", branch: "deleted branch feature/Delete", repo: " in repository Gitlab_Repo"},
        {name: "Cruz, Santa", branch: "merged pull request #8", repo: " in repository Gitlab_Repo"},
        {name: "Aguilar, Fred", branch: "pushed to branch feature/Gitlab", repo: " in repository Gitlab_Repo"},
        {name: "Bali, Indonesia", branch: "deleted branch feature/Delete", repo: " in repository Gitlab_Repo"},
        {name: "Cruz, Santa", branch: "merged pull request #8", repo: " in repository Gitlab_Repo"},
        {name: "Aguilar, Fred", branch: "pushed to branch feature/Gitlab", repo: " in repository Gitlab_Repo"},
        {name: "Bali, Indonesia", branch: "deleted branch feature/Delete", repo: " in repository Gitlab_Repo"},
        {name: "Cruz, Santa", branch: "merged pull request #8", repo: " in repository Gitlab_Repo"},
        {name: "Aguilar, Fred", branch: "pushed to branch feature/Gitlab", repo: " in repository Gitlab_Repo"},
        {name: "Bali, Indonesia", branch: "deleted branch feature/Delete", repo: " in repository Gitlab_Repo"},
        {name: "Cruz, Santa", branch: "merged pull request #8", repo: " in repository Gitlab_Repo"},
        {name: "Aguilar, Fred", branch: "pushed to branch feature/Gitlab", repo: " in repository Gitlab_Repo"},
        {name: "Bali, Indonesia", branch: "deleted branch feature/Delete", repo: " in repository Gitlab_Repo"},
        {name: "Cruz, Santa", branch: "merged pull request #8", repo: " in repository Gitlab_Repo"},
        ],
    all: function() { return this.tools},
    get: function(toolName) {
        return this.tools.find(toolName)
    }
}

export default ToolsAPI