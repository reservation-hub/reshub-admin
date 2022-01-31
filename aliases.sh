alias admin-init="git submodule update --init reshub-deploy"
alias req-init="git submodule update --init app/src/utils/api/request-response-types"

alias ad-build="docker-compose build admin"
alias rh-ad="ad-build && docker-compose up admin"
alias ad-down="docker-compose down"
alias ad-bash="docker-compose exec admin bash"
alias ad-log="docker-compose logs -f --tail 100 admin"

alias rh-ad-prd-build="docker-compose build prod"
alias rh-ad-prd="rm -rf app/build && rh-ad-prd-build && docker-compose run prod"
alias rh-ad-prd-deploy="rh-ad-prd && scp -r app/build/build/* it-project:reshub-prod/admin/"
