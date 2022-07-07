# 💻 AppStack

A template project with Go backend and React (Chakra UI) frontend.

## Get Started

1. Clone the repository.
2. Search and replace `appstack` everywhere.

This is a hybrid repo with Go and React projects.

- To run frontend in development mode: `yarn start`
- To run backend in development mode: `go run main.go`
- To build backend: `make backend`
- To build frontend: `make frontend`
- To generate a docker image release: `make release`

### FrontEnd

The front-end is built with:

1. Typescript
2. Chakra UI
3. React Router

### Backend

The Go backend is built with [spy16/moonshot](https://github.com/spy16/moonshot) which combines the following:

1. [chi](https://github.com/go-chi/chi) router for HTTP routing.
2. [sirupsen/logrus](https://github.com/sirupsen/logrus) for logging.
3. [spf13/cobra](https://github.com/spf13/cobra) for CLI.
4. [spf13/viper](https://github.com/spf13/viper) for configuration management.
