# Smart Copy for Chatbots

This extension, "Smart Copy for Chatbots," enhances productivity by allowing users to easily copy the relative path, file name, and contents of the current file in Visual Studio Code. This information is formatted in a way that's convenient for pasting into chatbots, like **ChatGPT**, or other text-based interfaces.

## Features

- **Copy File Information**: Quickly copy the relative path, file name, and contents of the current file to the clipboard.
- **Easy Access**: Use the extension via the Command Palette, right-click context menu, or an icon in the editor's title bar.

> Tip: This extension is particularly useful for developers working with chatbots, documentation, or any scenario where quick access to file information is beneficial.

**Using this extension should give you the following output to your clipboard:**
```
File Path: {relative path of the active file}
File Name: {name of the active file}

{contents of the active file}
```

## Installation

To install the extension manually using the .vsix file:

1. Download the .vsix file for the extension from the [GitHub Releases page](https://github.com/bhaverland/vscode-smart-copy-for-chatbots/releases).
2. Open Visual Studio Code.
3. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar.
4. Click on the `...` at the top-right of the Extensions view and select `Install from VSIX....`
Navigate to the downloaded `.vsix file`, select it, and click 'Install'.

## Usage

1. **Through Command Palette**:
   - Open the Command Palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux).
   - Type `Copy File Info to Clipboard` and select the command.
   - <img width="800" alt="Command Palette" src="https://github.com/bhaverland/vscode-smart-copy-for-chatbots/assets/101616799/322b4624-4ac7-4720-bc44-c7c2ec75ad09">


2. **Right-Click Context Menu**:
   - Right-click in the open file editor.
   - Select `Copy File Info to Clipboard` from the context menu.
   - <img width="800" alt="Right-Click Context Menu" src="https://github.com/bhaverland/vscode-smart-copy-for-chatbots/assets/101616799/63d1cdb5-6e51-4b11-8897-7228a816d49c">


3. **Editor Title Bar Icon**:
   - Click on the "copy" icon in the editor's title bar.
   - <img width="800" alt="Editor Title Bar Icon" src="https://github.com/bhaverland/vscode-smart-copy-for-chatbots/assets/101616799/902b5bf8-60d0-4460-b444-fc23eb903952">


## Requirements

No additional requirements or dependencies are needed for this extension.

## Extension Settings

This extension does not contribute any settings.

## Known Issues

No known issues at this time. Please report issues on the GitHub repository.

## Release Notes

### 1.0.0

Initial release of Smart Copy for Chatbots.

---

## Additional Information

For more information and updates, visit the [GitHub repository](https://github.com/bhaverland/smart-copy-for-chatbots).

**Enjoy using Smart Copy for Chatbots!**
