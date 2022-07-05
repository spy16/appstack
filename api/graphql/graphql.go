package graphql

import (
	"context"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/spy16/moonshot/errors"
	"github.com/vektah/gqlparser/v2/gqlerror"
)

//go:generate gqlgen generate

// New returns a new instance of http Handler.
func New(res Resolver) http.Handler {
	schema := NewExecutableSchema(Config{
		Resolvers: &res,
	})

	gqlServer := handler.NewDefaultServer(schema)
	gqlServer.AddTransport(&transport.POST{})
	gqlServer.SetErrorPresenter(func(ctx context.Context, err error) *gqlerror.Error {
		ge := graphql.DefaultErrorPresenter(ctx, err)
		if ge.Unwrap() != nil {
			err = ge.Unwrap()
		} else {
			err = ge
		}

		e := errors.E(err)
		ext := map[string]interface{}{"code": e.Code}
		if e.Cause != "" {
			ext["cause"] = e.Cause
		}
		return &gqlerror.Error{
			Message:    e.Message,
			Extensions: ext,
		}
	})

	return gqlServer
}
