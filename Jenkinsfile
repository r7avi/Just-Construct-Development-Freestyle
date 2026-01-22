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
        stage('Checkout') {
            steps {
                checkout scm
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
                    sh 'cp "$ENV_FILE" .env'
                }
            }
        }

        stage('Start Dev Server') {
            steps {
                script {
                    sh 'sudo npm list -g pm2 || sudo npm install -g pm2'
                    sh "sudo pm2 delete ${APP_NAME} || true"
                    sh "sudo pm2 start yarn --name ${APP_NAME} --cwd \"\$(pwd)\" -- run dev"
                    sh 'sudo pm2 save'
                    sh 'sudo pm2 status'
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
