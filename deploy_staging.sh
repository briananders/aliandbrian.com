#!/bin/zsh
echo "Changing build permissions to 755"
chmod -R 755 build/
echo "Moving Files to EC2"
rsync -avz build/ briananders.me:/home/ec2-user/staging_a_and_b
echo "restarting nginx"
ssh -t briananders.me 'sudo /etc/init.d/nginx restart'

# /bin/zsh deploy_staging.sh