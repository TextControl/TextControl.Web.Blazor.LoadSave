var TextControl = TextControl || {};

TextControl.saveDocument = function (dotNetObject) {

	// save the document on TXTextControl object
	TXTextControl.saveDocument(TXTextControl.StreamType.InternalUnicodeFormat, function (document) {
		// call the .NET method 'ProcessDocument' with the saved document data
		dotNetObject.invokeMethodAsync('ProcessDocument', document.data);
	});

};

TextControl.loadDocument = function (document) {

	// load the document back into the editor (TXTextControl)
	TXTextControl.loadDocument(TXTextControl.StreamType.InternalUnicodeFormat, document);

};