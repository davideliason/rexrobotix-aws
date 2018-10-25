## RexRobotix - AWS
### October 24, 2018
### [David Eliason](http://www.davethemaker.com)

### What
This is a Single Page App (SPA) using the MERN stack to provide CRUD functionality. This is built upon an EC2 instance which has a custom VPC, subnet, route table, internet gateway. 

Express server is at port 8080, and the react client uses a proxy to connect to the server using a production build.

### How

1. Created Custom VPC with 10.0.0.0/16 CIDR block 2 subnets in different Availability Zones (AZ)
  1a. create public-facing subnet us-west-2a 10.0.1.0/24
  1b. create private subnet us-west-2b 10.0.2.0/24
  1c. created internet gateway attached to the VPC
  1d. created Route Table for public-facing subnet
  1e. Auto-assigned IP addressed for public subnet
2. Created EC2 instance of Ubuntu 16.04
  [helpful tutorial](https://medium.com/@Keithweaver_/setting-up-mern-stack-on-aws-ec2-6dc599be4737)
  2a. ssh'd into the EC2 instance
  2b. updated server
  ```
  sudo apt-get update && sudo apt-get upgrade -y
  ```
  2c. installed Nginx
  ```
  sudo apt-get install nginx -y
  ```
  2d. Started Nginx
  ```
  sudo systemctl start nginx
  ```

3. Installed Node.js
  3.1 updated system
  ```
  sudo apt-get update
  ```
  3.2 install packages
  ```
  sudo apt-get install build-essential libssl-dev
  ```
  3.3 install nvm
  ```
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```
  3.4 installed node.js version 11.0.0
  ```
  nvm install 11.0.0
  ```
  3.5 updated Nginx config file for adding domain
  - all HTTP web traffic redirected to port 8080
4.0 Used Route53 to point DNS name to rexrobotix.com
5.0 Created key for Github within project folder, then added that key to Github, and thus able to clone repo to EC2 instance
6.0 Server-side
  6.1 created simple express server instance and spun up on 8080, route53 worked correctly displaying server output with mongoDB connection accessing collection
  6.2 created CRA build on remote server, then spun up server to serve those files
  








