// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package inspections.actions;

import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import org.apache.commons.io.IOUtils;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

/**
 * Reads the contents form the provided file document, using the specified encoding, and returns it as string.
 */
public class StringFromFile extends CustomJavaAction<java.lang.String>
{
	private IMendixObject __fileDoc;
	private system.proxies.FileDocument fileDoc;

	public StringFromFile(IContext context, IMendixObject fileDoc)
	{
		super(context);
		this.__fileDoc = fileDoc;
	}

	@java.lang.Override
	public java.lang.String executeAction() throws Exception
	{
		this.fileDoc = __fileDoc == null ? null : system.proxies.FileDocument.initialize(getContext(), __fileDoc);

		// BEGIN USER CODE
			Charset charset = StandardCharsets.UTF_8;
			if (fileDoc == null) {
				return null;
			}
			try (
				InputStream f = Core.getFileDocumentContent(getContext(), fileDoc.getMendixObject());) {
				return IOUtils.toString(f, charset);
			}
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "StringFromFile";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
