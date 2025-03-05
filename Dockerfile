ARG NODE_VERSION='20.1.0'
ARG CHROME_VERSION='121.0.6167.139-1'
ARG EDGE_VERSION='121.0.2277.83-1'
ARG FIREFOX_VERSION='122.0'


FROM cypress/factory

WORKDIR /cypressinternal

COPY package.json cypress.config.js email_cypress.config.js cypress.env.json base_reporter_config.json custom_support_file.js lambdatest-config.json Jenkinsfile /cypressinternal

COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npx","cypress","run"]