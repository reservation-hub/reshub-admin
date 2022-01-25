alias admin-init="git submodule update --init reshub-deploy"
alias ent-init="git submodule update --init app/src/entities"
alias req-init="git submodule update --init app/src/utils/api/request-response-types"

alias rh-ad="docker-compose build admin && docker-compose up admin"
alias ad-down="docker-compose down"
alias ad-bash="docker-compose exec admin bash"
alias ad-log="docker-compose logs -f --tail 100 admin"

alias rh-ad-prd-build="docker-compose build prod"
alias rh-ad-prd="rh-ad-prd-build && docker-compose up prod"
