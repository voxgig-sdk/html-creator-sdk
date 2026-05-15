package core

type HtmlCreatorError struct {
	IsHtmlCreatorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHtmlCreatorError(code string, msg string, ctx *Context) *HtmlCreatorError {
	return &HtmlCreatorError{
		IsHtmlCreatorError: true,
		Sdk:              "HtmlCreator",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HtmlCreatorError) Error() string {
	return e.Msg
}
