# HtmlCreator SDK utility: feature_add
module HtmlCreatorUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
