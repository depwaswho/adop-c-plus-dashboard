const ToolsAPI = {
    tools: [
        {projName: "ADOP Area Chart Components SRC", status: "Passed"},
        {projName: "Components SRC ADOP Area Chart", status: "Failed"},
        {projName: "Chart Components ADOP SRC Area", status: "Passed"},
        ],
    all: function() { return this.tools},
    get: function(toolName) {
        return this.tools.find(toolName)
    }
}
export default ToolsAPI