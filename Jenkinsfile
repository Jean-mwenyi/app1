pipeline {
    agent any
    
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_hub_credentials')
        VMWARE_WORKSTATION_CREDENTIALS = credentials('your-vmware-workstation-credentials-id')
    }
    
    stage('Build Docker Image') {
        steps {
            sh 'docker build -t jeanmwenyi/app1:latest .'
        }
    }
        
    stage('Push Docker Image') {
        steps {
            script {
                withCredentials([usernamePassword(credentialsId:DOCKER_HUB_CREDENTIALS , usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                        sh 'docker push jeanmwenyi/app1:latest'
                }
            }
        }
    }
        
        // stage('Connect to VMware Workstation') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: VMWARE_WORKSTATION_CREDENTIALS, usernameVariable: 'VMWARE_USERNAME', passwordVariable: 'VMWARE_PASSWORD')]) {
        //                 // Ajoutez les commandes pour vous connecter à VMware Workstation
        //             }
        //         }
        //     }
        // }
        
        // stage('Execute Kubernetes Commands') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: VMWARE_WORKSTATION_CREDENTIALS, usernameVariable: 'VMWARE_USERNAME', passwordVariable: 'VMWARE_PASSWORD')]) {
        //                 // Ajoutez les commandes pour exécuter des commandes sur votre cluster Kubernetes
        //             }
        //         }
        //     }
        // }
}
