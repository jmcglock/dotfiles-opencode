---
description: Create a PR from current branch — title + body from diff
---
Create a PR for current branch.

Steps:
1. `git status` + `git log --oneline -5` + `git diff main...HEAD`
2. Generate concise title (≤60 chars, imperative)
3. Body: what changed, why, how to test
4. `gh pr create --head <branch> --base main --title "..." --body "..."`
5. Return PR URL.
