pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: git url: 'https://github.com/purv04/to-do'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker rm -f todo-app || true
                    docker run -d -p 3000:3000 --name todo-app todo-app
                '''
            }
        }
    }
}
