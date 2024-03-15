pipeline{    
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_hub_credentials')
        IMAGE_NAME = "app1"
        IMAGE_TAG = 'latest' 
    }
    agent none 
    stages{
        stage('Build Image'){
            agent any 
            steps{
                script{
                    sh 'docker build -t jeanmwenyi/$IMAGE_NAME:$IMAGE_TAG .'
                }
            }
            
        }
    }
}