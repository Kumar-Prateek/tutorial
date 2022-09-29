pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "node -v"
                sh "sudo -p npm install"
                sh "sudo -p npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo -p rm -rf /var/www/tutorial"
                sh "sudo -p cp -r ${WORKSPACE}/build/ /var/www/tutorial/"
            }
        }
    }
}
