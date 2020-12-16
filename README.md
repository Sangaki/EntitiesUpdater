# Entities Service
small test task
# Technology stack:
  - Angular9
  - .NET Core 3.1
  - Postgre
  - Python (for generate and send data to service)

# Requirements?
  - Windows/*nix OS
  - Docker + Docker Compose

# How to run?
  - Open PowerShell/CommandLine/Terminal in this directory
  - Enter:
```sh
docker-compose up -d --build
```
  - ... (Some magic here)
  - Done!

# How it works?
 - Service is a REST API for working with an entity.
 - Initially, the database with entities [Entity01, ..., Entity20] is initialized, if there is none already. Each entity has a set of parameters [par0, par1, ..., par 19], equal to zero upon initialization.
 - Frontend part (angular) uses method GET "/api/ents" to obtain entity data and works with them.
 - Python Script uses method PUT "/api/ents/id" (id like Entity01) to update entities data with 10RPS (requests per second) (value can be changed)
 - Fronted updates data every 10 seconds (timer can be stopped), also avaliable manual updating without page reloading

 Launched and tested on Windows with Docker linux containers, but could potentially be run in any environment.