const ToolsAPI = {
    tools: [
        {repoName: "ADOP Area Chart Components SRC", artifact: "artifact-LS-345"},
        {repoName: "Components SRC ADOP Area Chart", artifact: "artifact-proj-snapshot"},
        {repoName: "Chart Components ADOP SRC Area", artifact: "artifact-toll-190"},
        ],
    all: function() { return this.tools},
    get: function(toolName) {
        return this.tools.find(toolName)
    }
}
export default ToolsAPI