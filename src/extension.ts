import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "dart-cyclo" is now active!');

	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);

	const complexity = "0";
	statusBarItem.text = `Avg. Cyclo: ${complexity}`;
	statusBarItem.show();

	let disposable = vscode.commands.registerCommand(
		'dart-cyclo.calcCycloForCurrFile',
		() => {
			vscode.window.showInformationMessage('Hello World from dart-cyclo!');
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }
