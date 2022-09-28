pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo -S admin npm install"
                sh "sudo -S admin npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo -S admin rm -rf /var/www/tutorial"
                sh "sudo -S admin cp -r ${WORKSPACE}/build/ /var/www/tutorial/"
            }
        }
    }
}
