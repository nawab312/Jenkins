variable "aws_region" {
    description = "AWS Region to deploy resources"
    default = "us-east-1"
}

variable "ami_id" {
    description = "Amazon Machine Image to use for EC2 Instance"
}

variable "instance_type" {
    description = "The type of instance to deploy"
    default     = "t2.micro"
}