package voxgightmlcreatorsdk

import (
	"github.com/voxgig-sdk/html-creator-sdk/core"
	"github.com/voxgig-sdk/html-creator-sdk/entity"
	"github.com/voxgig-sdk/html-creator-sdk/feature"
	_ "github.com/voxgig-sdk/html-creator-sdk/utility"
)

// Type aliases preserve external API.
type HtmlCreatorSDK = core.HtmlCreatorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HtmlCreatorEntity = core.HtmlCreatorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HtmlCreatorError = core.HtmlCreatorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewHtmlDocumentEntityFunc = func(client *core.HtmlCreatorSDK, entopts map[string]any) core.HtmlCreatorEntity {
		return entity.NewHtmlDocumentEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHtmlCreatorSDK = core.NewHtmlCreatorSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
