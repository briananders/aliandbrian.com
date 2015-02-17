#!/bin/zsh
echo "Changing build permissions to 755"
chmod -R 755 build/
echo "Moving Files to S3"
aws s3 sync build/ s3://staging.aliandbrian.com --recursive
echo "Done"

# /bin/zsh deploy_staging.sh