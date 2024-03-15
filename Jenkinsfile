// pipeline{    
//     environment {
//         DOCKER_HUB_CREDENTIALS = credentials('docker_hub_credentials')
//         IMAGE_NAME = "app1"
//         IMAGE_TAG = 'latest' 
//     }
//     agent none 
//     stages{
//         stage('Build Image'){
//             agent any 
//             steps{
//                 script{
//                     bat 'docker build -t jeanmwenyi/$IMAGE_NAME:$IMAGE_TAG .'
//                 }
//             }
            
//         }
//     }
// }
pipeline {    
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_hub_credentials')
        IMAGE_NAME = "app1"
        IMAGE_TAG = 'latest' 
    }
    agent none 
    stages {
        stage('Build Image') {
            agent any 
            steps {
                bat(script: 'docker build -t jeanmwenyi/%IMAGE_NAME%:%IMAGE_TAG% .')
            }
        }
    }
}