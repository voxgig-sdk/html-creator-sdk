package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewHtmlDocumentEntityFunc func(client *HtmlCreatorSDK, entopts map[string]any) HtmlCreatorEntity

