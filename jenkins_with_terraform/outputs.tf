output "instance_ip" {
    description = "The public IP Address of EC2 Instance"
    value = aws_instance.my_instance.public_ip
}