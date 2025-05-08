on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout code
      - name: Checkout repository
        uses: actions/checkout@v4

      # Step 2: Set up AWS credentials
      - name: Configure AWS Credentials
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
          aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY

      # Step 3: Detect bucket region
      - name: Detect bucket region
        id: bucket_region
        run: |
          REGION=$(aws s3api get-bucket-location --bucket devops-project-portfolio-2025 --query 'LocationConstraint' --output text)
          if [ "$REGION" = "None" ]; then
            REGION="us-west-2"
          fi
          echo "Bucket region is: $REGION"
          echo "region=$REGION" >> $GITHUB_OUTPUT

      # Step 4: Validate bucket exists
      - name: Check if bucket exists
        run: |
          aws s3api head-bucket --bucket devops-project-portfolio-2025
          echo "✅ Bucket exists!"

      # Step 5: Deploy to S3 (auto-region)
      - name: Deploy to S3
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          aws s3 sync public/ s3://devops-project-portfolio-2025 --region ${{ steps.bucket_region.outputs.region }} --acl public-read --delete
          echo "✅ Deployed to: http://devops-project-portfolio-2025.s3-website-${{ steps.bucket_region.outputs.region }}.amazonaws.com"
