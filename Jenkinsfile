pipeline {
    agent any

    environment {
        NODE_VERSION = '20'
        APP_NAME = 'app'
        PM2_HOME = '/var/lib/jenkins/.pm2'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    // Using NodeJS plugin - configure in Jenkins Global Tool Configuration
                    nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                        sh 'node --version'
                        sh 'npm --version'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                    sh 'yarn install --frozen-lockfile'
                }
            }
        }

        stage('Run Tests') {
            steps {
                nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                    sh 'yarn test-ci'
                }
            }
        }

        stage('Setup Environment') {
            steps {
                // Copy .env from Jenkins credentials (secret file)
                withCredentials([file(credentialsId: 'app-env-file', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                    sh 'yarn build'
                }
            }
        }

        stage('Deploy with PM2') {
            steps {
                nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                    script {
                        // Check if PM2 is installed globally
                        sh 'npm list -g pm2 || npm install -g pm2'
                        
                        // Stop existing process if running
                        sh "pm2 delete ${APP_NAME} || true"
                        
                        // Start application with PM2 ecosystem file
                        sh 'pm2 start ecosystem.config.js --env production'
                        
                        // Save PM2 process list
                        sh 'pm2 save'
                        
                        // Show status
                        sh 'pm2 status'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
            // Optionally notify via Slack, email, etc.
        }
        always {
            cleanWs()
        }
    }
}
