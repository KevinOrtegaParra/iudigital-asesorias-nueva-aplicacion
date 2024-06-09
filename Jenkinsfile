pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio'){
            steps {
                git branch: 'main', url: 'https://github.com/KevinOrtegaParra/iudigital-asesorias-nueva-aplicacion.git'
            }
        }
        stage('Construir imagen de Docker'){
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGODB_URI', variable: 'MONGODB_URI')
                    ]) {
                        docker.build('mi-proyecto-microservicio:v1', "--build-arg MONGODB_URI=${MONGODB_URI} .")
                    }
                }
            }
        }
        stage('Desplegar contenedores Docker'){
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGODB_URI', variable: 'MONGODB_URI')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }

}