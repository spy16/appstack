package graphql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
)

// Greet is the resolver for the greet field.
func (r *queryResolver) Greet(ctx context.Context, name *string) (string, error) {
	if name != nil {
		return fmt.Sprintf("Hello %s!", *name), nil
	}
	return "Hello!", nil
}

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
