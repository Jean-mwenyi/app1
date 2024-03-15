/* groovylint-disable CompileStatic */
pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_hub_credentials')
        IMAGE_NAME = 'app1'
        IMAGE_TAG = 'latest'
    }
    stages {
        stage('Build Image') {
            steps {
                bat "docker build -t jeanmwenyi/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials(
                    [
                        usernamePassword(
                        credentialsId: DOCKER_HUB_CREDENTIALS,
                        usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD'
                        )
                    ]
                ) {
                    bat 'docker login -u mwenyimalijean@1999 -p poney@1999'
                    bat "docker push jeanmwenyi/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
    /* groovylint-disable-next-line FileEndsWithoutNewline */
    }
}
