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
 * @param {MxObject} orderItem
 * @returns {Promise.<MxObject>}
 */
export async function SplitString(orderItem) {
	// BEGIN USER CODE
	return new Promise(function(resolve, reject)
	{
			let OrderParts = orderItem.get("BarcodeResult").split("_");
			orderItem.set('ItemName',OrderParts[0]);
			orderItem.set('UnitOfMeasure',OrderParts[1]);
			orderItem.set('UnitCount',OrderParts[2]);
			orderItem.set('Price',OrderParts[3]);
			orderItem.set('TotalAmount',(OrderParts[2] * OrderParts[3]).toFixed(2));

			resolve(orderItem);		

	});
	// END USER CODE
}
