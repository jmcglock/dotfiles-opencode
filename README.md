# dotfiles-opencode

My personal [opencode](https://opencode.ai) configuration.

## What's in here

- **opencode.json** — model, permissions, plugins
- **opencode.jsonc** — schema-only config (editor validation)
- **agent/** — custom agents
- **commands/** — slash commands
- **plugins/** — opencode plugins (caveman, rtk)

## How to use

1. Clone this repo:

```sh
git clone git@github.com:jmcglock/dotfiles-opencode.git ~/.config/opencode
```

2. Remove the `.git` directory so it doesn't conflict with your own git repos:

```sh
rm -rf ~/.config/opencode/.git
```

3. Restart opencode to load the config.

## Plugins

### rtk

Rewrites bash commands via `rtk rewrite` for token savings. Requires [rtk](https://github.com/jmcglock/rtk) in PATH.

### caveman

Terse mode tracker with slash commands (`/caveman`, `/caveman-commit`, `/caveman-review`).

## Customization

Fork this repo and change `opencode.json` to fit your setup. Key fields:

| Field | Purpose |
|-------|---------|
| `model` | Default model (provider/model-id) |
| `small_model` | Model for lightweight tasks |
| `permission` | Tool access rules |
| `plugin` | Plugins to load |
| `mcp` | MCP server connections |
| `agent` | Custom agents |

See the [opencode config docs](https://opencode.ai) for the full schema.
