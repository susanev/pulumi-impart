// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package config

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
)

// The Impart api endpoint
func GetEndpoint(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "impart:endpoint")
	if err == nil {
		return v
	}
	return getEnvOrDefault("", nil, "IMPART_ENDPOINT").(string)
}

// The Impart api token
func GetToken(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "impart:token")
	if err == nil {
		return v
	}
	return getEnvOrDefault("", nil, "IMPART_TOKEN").(string)
}
