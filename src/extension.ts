import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "smart-copy-for-chatbots.copyFileContents",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No file is open");
        return;
      }

      const document = editor.document;
      const fullPath = document.uri.fsPath;
      const relativePath = vscode.workspace.asRelativePath(fullPath, false);
      const fileName = path.basename(fullPath);
      const fileContents = document.getText();

      const dataToCopy = `File path: ${relativePath}\nFile name: ${fileName}\n\n\`\`\`\n${fileContents}\n\`\`\``;
      await vscode.env.clipboard.writeText(dataToCopy);
      vscode.window.showInformationMessage(
        "File path, name, and contents copied to clipboard!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
