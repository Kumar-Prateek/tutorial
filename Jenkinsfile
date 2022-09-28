pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo -s npm install"
                sh "sudo -s npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo -s rm -rf /var/www/tutorial"
                sh "sudo -s cp -r ${WORKSPACE}/build/ /var/www/tutorial/"
            }
        }
    }
}
