pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo -auth admin:admin npm install"
                sh "sudo -auth admin:admin npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo -auth admin:admin rm -rf /var/www/tutorial"
                sh "sudo -auth admin:admin cp -r ${WORKSPACE}/build/ /var/www/tutorial/"
            }
        }
    }
}
