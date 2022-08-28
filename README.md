# LearningDSA

## Starting Node
* Installing node modules
```
$ npm install --force --legacy-peer-deps 
```
* Running Test Cases 
```
$ npm test
```
## Installing Docker 
```
$ sudo apt install docker.io
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
$ newgrp docker 
```
### Creating Docker Images
```
$ docker build . -t testing
```
### Listing Docker Images
```
$ docker images
```
### Creating Docker Container
```
$ docker run -it testing
```
### List Active Containers
```
$ docker ps 
```
### List All Conatiners
```
$ docker ps -a
```
### Kill All Containers
```
$ docker ps -a -q | xargs docker rm -f
# alternate command
$ docker rm -f $(docker ps -a -q) 
```
### Kill Single Docker Container
```
$ docker rm -f <container_id>
```
### Kill All Images
```
$ docker rmi -f $(docker images -q)
```
### Kill Single Docker Image
```
$ docker rmi -f <container_id>
```
### Run Docker Container
```
$ docker run -it testing
# for running the conatiner on background
$ docker run -t testing
```