// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} base64string
 * @param {MxObject} imageDocument
 * @returns {Promise.<boolean>}
 */
export async function SaveBase64toImage(base64string, imageDocument) {
	// BEGIN USER CODE
	const b64toBlob = async (b64Data) => {
		const url = b64Data;
		const response = await fetch(url);
		const blob = await response.blob();
		return blob;
	};

	return new Promise (async function(resolve,reject) {
		const blob = await b64toBlob(base64string);
		const onSuccess = () => {
			resolve(true);
		}
		const onError = () => {
			resolve(false);
		}
    	mx.data.saveDocument(imageDocument.getGuid(), imageDocument.get("Name"), {}, blob, onSuccess, onError);
	});
	// END USER CODE
}
