pipeline {
    agent any

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                git url: 'https://github.com/purv04/to-do', branch: 'main'
            }
        }
        
        stage('Clean Existing Repo') {
            steps {
                script {
                    // Remove the existing repository directory if it exists
                    sh 'rm -rf to-do'
                }
            }
        }

        stage('Clone Repo') {
            steps {
                script {
                    // Clone the repository
                    sh 'git clone https://github.com/purv04/to-do.git'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t todo-app .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container
                    sh 'docker run -d -p 8080:8080 todo-app'
                }
            }
        }
    }
}
