# Asurvio Assistant

Asurvio's Fork of AdGuard Assistant is a userscript that helps you manage filtering right from the browser. With its aid you are able to manually block any element, whitelist or report the page, or see the website's security report — all without having to leave the current page.

### How to build

`yarn install`

| Command           | Output Dir    |
|-------------------|---------------|
| `yarn dev`        | build/dev     |
| `yarn beta`       | build/beta    |
| `yarn release`    | build/release |

Each command builds next files inside directory:
- `assistant.meta.js` - meta information for userscript
- `assistant.user.js` - userscript code
- `assistant.js` - code for embedding in another projects (it has functionality for selection of DOM nodes and rules building)
- `build.txt` - bamboo environment variables


Embedded version run as:

```
dsOneAssistant().start(null, callback);
```

Callback returns a rule string.

## Usage
### Installation

#### NPM
```
npm install asurvio-assistant-fork
```

### Usage of npm module
```
import { dsOneAssistant } from 'asurvio-assistant-fork'
dsOneAssistant().start(null, callback);
```

## Todo

- write tests
