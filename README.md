# dotfiles-opencode

My personal [opencode](https://opencode.ai) configuration.

## What's in here

- **opencode.json** — model, permissions, plugins, MCP, references
- **tui.json** — theme
- **themes/** — custom `jmcglock` theme
- **agent/** — custom agents (`big-pickle`)
- **commands/** — slash commands
- **skills/** — on-demand skills
- **plugins/** — local plugins (rtk, caveman, env-protection)

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

### npm

- `opencode-claude-auth` — Claude auth
- `opencode-notificator` — desktop notifications
- `opencode-dynamic-context-pruning` — prune stale tool outputs
- `opencode-wakatime` — time tracking
- `opencode-type-inject` — inject TS/Svelte types on file reads

### local

- **rtk** — rewrites bash commands via `rtk rewrite` for token savings
- **caveman** — terse mode tracker + slash commands
- **env-protection** — blocks reading `.env` files

## MCP

- **context7** — library docs
- **gh_grep** — search GitHub code examples

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
| `references` | External repos/dirs for context |

See the [opencode config docs](https://opencode.ai) for the full schema.
