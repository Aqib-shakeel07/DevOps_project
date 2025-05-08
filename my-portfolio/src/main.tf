terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.3.0"
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = "devops-project-portfolio-2025"

  tags = {
    Name        = "DevOps Project Portfolio"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_acl" "portfolio_bucket_acl" {
  bucket = aws_s3_bucket.portfolio_bucket.id
  acl    = "private"
}

output "bucket_name" {
  value = aws_s3_bucket.portfolio_bucket.bucket
}

