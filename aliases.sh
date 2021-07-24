alias admin-init="git submodule update --init reshub-deploy"

alias rhadmin="docker-compose build && docker-compose up"
alias addown="docker-compose down"
alias adbash="docker-compose exec admin bash"
alias adlog="docker-compose logs -f --tail 100 admin"