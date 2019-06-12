const ToolsAPI = {
    tools: [
        {id: 1, image: "./images/jenkins.png", alt: "Jenkins", toolName: "Jenkins", toolDescription: "Continuous Integration & Automation Server"},
        {id: 2, image: "./images/gitlab.png", alt: "Gitlab", toolName: "Gitlab", toolDescription: "Git Repository Management & Code Review Tool"},
        {id: 3, image: "./images/sonar.png", alt: "Sonarqube", toolName: "Sonarqube", toolDescription: "Static Code Analysis"},
        {id: 4, image: "./images/nexus.png", alt: "Nexus", toolName: "Nexus", toolDescription: "Software Repository Manager"},
        {id: 5, image: "./images/kibana.png", alt: "Kibana", toolName: "Kibana", toolDescription: "Kibana Dashboard for Logging (ELK)"},
        {id: 6, image: "./images/selenium.png", alt: "Selenium", toolName: "Selenium", toolDescription: "Selenium Grid for Automated Testing"},
        {id: 7, image: "./images/sensu.png", alt: "Sensu", toolName: "Sensu", toolDescription: "Monitoring"},
        // {id: 8, image: "./images/ltb.png", alt: "Self Service Password", toolName: "Self Service Password", toolDescription: "Application that allows users to change their password"},
        // {id: 9, image: "./images/phpldapadmin.png", alt: "LDAP", toolName: "LDAP", toolDescription: "Browse to manage your LDAP server"}
    ],
    all: function() { return this.tools},
    get: function(toolName) {
        return this.tools.find(toolName)
    }
}

export default ToolsAPI