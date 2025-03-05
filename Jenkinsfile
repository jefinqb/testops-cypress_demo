pipeline {
    agent any

    tools {nodejs "Node 16"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
        CYPRESS_RECORD_KEY = credentials('Cypress_Record_Key')
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run e2e Tests') {
            steps {
                sh 'npx cypress run --spec -b chrome --record  --key ${CYPRESS_RECORD_KEY} --parallel'
            }
        }
    }

    post {
        always {

            publishHTML (target : [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: './cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Report',
                reportTitles: 'CypressReport'])
        
        }
    }
}
