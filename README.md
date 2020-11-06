docker ps -a
docker rm $(docker ps -aq)
docker images 
docker rmi $(docker images -aq)