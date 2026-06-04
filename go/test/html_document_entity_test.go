package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/html-creator-sdk/go"
	"github.com/voxgig-sdk/html-creator-sdk/go/core"

	vs "github.com/voxgig-sdk/html-creator-sdk/go/utility/struct"
)

func TestHtmlDocumentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.HtmlDocument(nil)
		if ent == nil {
			t.Fatal("expected non-nil HtmlDocumentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := html_documentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "html_document." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		htmlDocumentRef01Ent := client.HtmlDocument(nil)
		htmlDocumentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "html_document"}, setup.data), "html_document_ref01"))

		htmlDocumentRef01DataResult, err := htmlDocumentRef01Ent.Create(htmlDocumentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		htmlDocumentRef01Data = core.ToMapAny(htmlDocumentRef01DataResult)
		if htmlDocumentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func html_documentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "html_document", "HtmlDocumentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read html_document test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse html_document test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"html_document01", "html_document02", "html_document03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID": idmap,
		"HTMLCREATOR_TEST_LIVE":      "FALSE",
		"HTMLCREATOR_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HTMLCREATOR_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewHtmlCreatorSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HTMLCREATOR_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HTMLCREATOR_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
