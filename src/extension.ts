import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "dart-cyclo" is now active!');

	let disposable = vscode.commands.registerCommand(
		'dart-cyclo.calcCycloForCurrFile',
		() => {
			vscode.window.showInformationMessage('Hello World from dart-cyclo!');
		}
	);

	vscode.workspace.onDidOpenTextDocument((document) => {
		if (document.languageId === 'dart') {
			const complexity = "0";
			vscode.window.setStatusBarMessage(`Avg. Cyclo: ${complexity}`);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
