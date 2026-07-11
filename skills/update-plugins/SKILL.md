---
name: update-plugins
description: Update all npm opencode plugins to latest. Use when the user wants to refresh plugins, update plugin packages, or reinstall opencode plugins.
---

# Update plugins

Refresh every npm plugin listed in `opencode.json` by clearing the local package cache so the next opencode start reinstalls `@latest`.

## Steps

1. Read `~/.config/opencode/opencode.json` (or project `opencode.json` if present).
2. Collect `plugin` entries that are npm packages (strings, or first element of `[name, options]` tuples).
3. Skip local plugins:
   - paths starting with `./`, `../`, `/`, `~`, or `file://`
   - anything under `plugins/` already on disk
4. For each npm plugin name (strip version suffix if present):

```sh
rm -rf ~/.cache/opencode/packages/<name> ~/.cache/opencode/packages/<name>@*
```

5. Optionally force-fetch latest now (does not require restart to download, but restart still required to load):

```sh
# for each npm plugin name
bun add --cwd ~/.cache/opencode/packages <name>@latest
```

Prefer the cache-clear approach if `bun add` layout differs on this machine.

6. Report:
   - which plugins were refreshed
   - which were skipped (local)
   - remind user to **quit and restart opencode** so plugins reload

## Notes

- opencode installs npm plugins into `~/.cache/opencode/packages/` on demand.
- Bare package names are treated as `@latest` at install time.
- Local plugins (`plugins/*.ts`, `plugins/*/`) are not updated this way — those are repo-managed.
- Do not commit cache changes. Only commit `opencode.json` if the user asked to add/remove/pin plugins.
