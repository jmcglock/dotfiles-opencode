---
description: Compress a markdown file to reduce tokens — preserve technical content, drop filler
---
Compress $ARGUMENTS into token-efficient form.

Rules:
- Preserve code blocks, URLs, file paths, identifiers, error messages verbatim
- Drop preamble, filler, pleasantries, hedging, redundant examples
- Use tables/lists over prose
- Merge near-duplicate sections
- Shorten headers but keep them meaningful
- Target: ≤50% original size with 100% information retention
