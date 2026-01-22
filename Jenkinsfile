pipeline {
    agent any

    environment {
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
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'yarn test-ci'
            }
        }

        stage('Setup Environment') {
            steps {
                withCredentials([file(credentialsId: 'app-env-file', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Deploy with PM2') {
            steps {
                script {
                    sh 'npm list -g pm2 || npm install -g pm2'
                    sh "pm2 delete ${APP_NAME} || true"
                    sh 'pm2 start ecosystem.config.js --env production'
                    sh 'pm2 save'
                    sh 'pm2 status'
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
        always {
            cleanWs()
        }
    }
}
