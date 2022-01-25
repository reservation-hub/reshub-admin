FROM reshub-admin:latest as builder

ARG REACT_APP_BASE_URL=$REACT_APP_BASE_URL \
    REACT_APP_GOOGLE_CLIENT_ID=$REACT_APP_GOOGLE_CLIENT_ID \
    REACT_APP_GOOGLE_CLIENT_SECRET=$REACT_APP_GOOGLE_CLIENT_SECRET

RUN yarn install && yarn build

FROM nginx:latest

COPY --from=builder ./app/build /var/www
COPY ./docker/prod/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
