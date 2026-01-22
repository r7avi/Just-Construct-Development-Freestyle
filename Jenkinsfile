pipeline {
    agent any

    environment {
        APP_NAME = 'app'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {
        stage('Setup Permissions') {
            steps {
                checkout scm
                sh 'chmod +x scripts/setup-permissions.sh'
                sh 'sudo bash scripts/setup-permissions.sh'
            }
        }

        stage('Setup Node.js') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'rm -f yarn.lock'
                sh 'yarn install'
            }
        }

        stage('Setup Environment') {
            steps {
                withCredentials([file(credentialsId: 'app-env-file', variable: 'ENV_FILE')]) {
                    sh 'sudo rm -f .env'
                    sh 'sudo cp "$ENV_FILE" .env'
                    sh 'sudo chown jenkins:jenkins .env'
                }
            }
        }

        stage('Start Dev Server') {
            steps {
                script {
                    sh 'sudo PM2_HOME=/root/.pm2 pm2 delete $APP_NAME || true'
                    sh 'sudo PM2_HOME=/root/.pm2 pm2 start yarn --name $APP_NAME --cwd "$(pwd)" -- run dev'
                    sh 'sudo PM2_HOME=/root/.pm2 pm2 save'
                    sh 'sudo PM2_HOME=/root/.pm2 pm2 status'
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
        }
    }
}
