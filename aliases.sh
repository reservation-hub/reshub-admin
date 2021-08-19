alias admin-init="git submodule update --init reshub-deploy"
alias ent-init="git submodule update --init app/src/entities"

alias rh-ad="docker-compose build && docker-compose up"
alias ad-down="docker-compose down"
alias ad-bash="docker-compose exec admin bash"
alias ad-log="docker-compose logs -f --tail 100 admin"