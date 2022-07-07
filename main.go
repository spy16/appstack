package main

import (
	"context"
	"os"
	"os/signal"
	"syscall"

	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/spy16/appstack/graphql"
	"github.com/spy16/moonshot"
)

var appCfg struct{}

func main() {
	ctx, cancel := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer cancel()

	app := &moonshot.App{
		Name:   "appstack",
		Short:  "A sample full-stack application",
		CfgPtr: &appCfg,
		Routes: func(r *chi.Mux) {
			r.Handle("/gql/query", graphql.New(graphql.Resolver{}))
			r.Handle("/gql/play", playground.Handler("GraphQL playground", "/gql/query"))
		},
	}

	os.Exit(app.Launch(ctx))
}
