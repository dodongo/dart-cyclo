import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "dart-cyclo" is now active!');
	console.log('hi');

	// var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.fileName;
	// console.log(currentlyOpenTabfilePath);
	// if (currentlyOpenTabfilePath !== undefined) {
	// 	console.log(currentlyOpenTabfilePath);
	// }

	// var currentlyOpenTabfileName = path.basename(currentlyOpenTabfilePath);

	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);

	const complexity = "0";

	/**
	  1. Obtain CFG (Control Flow Graph)
	  2. Ex:
				A -> B -> C -> D -> E -> F -> A
				 ------------------>
					-------------->
			------------------------------> G
	  3.
	   E = number of edges

		V = number of vertices

		K = number of graph components

		C = number of conditions/decision points

		M (Cyclomatic Complexity) = C + 1
	 **/

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
