const Tools = [
    {
        id: 1,
        image: "./images/jenkins.png",
        name: "jenkins",
        description: "Continuous Integration & Automation Server",
        availableVersions: ['latest','0.0.1'],
        selectedVersion: '',
        fields: [
            {
                name: 'username',
                value: '',
                label: 'Username',
                type: 'text'
            },
            {
                name: 'password',
                value: '',
                label: 'Password',
                type: 'password'
            }
        ]
    },
    {
        id: 2,
        image: "./images/gitlab.png",
        name: "gitlab",
        description: "Git Repository Management & Code Review Tool",
        availableVersions: ['latest'],
        selectedVersion: '',
        fields: [
            {
                name: 'username',
                value: '',
                label: 'Username',
                type: 'text'
            },
            {
                name: 'password',
                value: '',
                label: 'Password',
                type: 'password'
            }
        ]
    },
    {
        id: 3,
        image: "./images/sonar.png",
        name: "sonarqube",
        description: "Static Code Analysis",
        availableVersions: ['latest'],
        selectedVersion: '',
        fields: [
            {
                name: 'mysql_username',
                value: '',
                label: 'MySQL Username',
                type: 'text'
            },
            {
                name: 'mysql_password',
                value: '',
                label: 'MySQL Password',
                type: 'password'
            },
            {
                name: 'username',
                value: '',
                label: 'Sonar Username',
                type: 'text'
            },
            {
                name: 'password',
                value: '',
                label: 'Sonar Password',
                type: 'password'
            }
        ]
    },
    {
        id: 4,
        image: "./images/nexus.png",
        name: "nexus",
        description: "Software Repository Manager",
        availableVersions: [
            'latest',
            '0.2.4',
            '0.2.3',
            '0.2.2',
            '0.2.1',
            '0.2.0',
            '0.1.4',
            '0.1.3',
            '0.1.2',
            '0.1.1',
            '0.1.0'
        ],
        selectedVersion: '',
        fields: [
            {
                name: 'username',
                value: '',
                label: 'Username',
                type: 'text'
            },
            {
                name: 'password',
                value: '',
                label: 'Password',
                type: 'password'
            }
        ]
    },
    {
        id: 5,
        image: "./images/kibana.png",
        name: "kibana",
        description: "Kibana Dashboard for Logging (ELK)",
        availableVersions: ['latest'],
        selectedVersion: '',
        fields: []
    },
    {
        id: 6,
        image: "./images/selenium.png",
        name: "selenium",
        description: "Selenium Grid for Automated Testing",
        availableVersions: ['latest'],
        selectedVersion: '',
        fields: []
    },
    {
        id: 7,
        image:"./images/sensu.png",
        name: "sensu",
        description: "Monitoring",
        availableVersions: ['latest'],
        selectedVersion: '',
        fields: []
    }
    // {id: 8, image: "./images/ltb.png", alt: "Self Service Password", toolName: "Self Service Password", toolDescription: "Application that allows users to change their password"},
    // {id: 9, image: "./images/phpldapadmin.png", alt: "LDAP", toolName: "LDAP", toolDescription: "Browse to manage your LDAP server"}
]

export default Tools