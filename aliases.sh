alias admin-init="git submodule update --init reshub-deploy"

alias admin-up="docker-compose build && docker-compose up"
alias admin-down="docker-compose down"
alias admin-bash="docker-compose exec admin bash"
alias admin-log="docker-compose logs -f --tail 100 admin"