// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package pusher.actions;

import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.pusher.rest.Pusher;

/**
 * Create an authentication token for listener to subscribe to notify events
 * 
 * https://github.com/pusher/pusher-http-java#authenticating-private-channels
 */
public class Authenticate extends CustomJavaAction<java.lang.String>
{
	private java.lang.String AppID;
	private java.lang.String Key;
	private java.lang.String Secret;
	private java.lang.String Cluster;
	private java.lang.String SocketID;
	private java.lang.String Channel;

	public Authenticate(IContext context, java.lang.String AppID, java.lang.String Key, java.lang.String Secret, java.lang.String Cluster, java.lang.String SocketID, java.lang.String Channel)
	{
		super(context);
		this.AppID = AppID;
		this.Key = Key;
		this.Secret = Secret;
		this.Cluster = Cluster;
		this.SocketID = SocketID;
		this.Channel = Channel;
	}

	@java.lang.Override
	public java.lang.String executeAction() throws Exception
	{
		// BEGIN USER CODE
		if (this.AppID == null || this.AppID.isEmpty()) {
			throw new Exception("AppID parameter should not be empty");
		}
		if (this.Key == null || this.Key.isEmpty()) {
			throw new Exception("Key parameter should not be empty");
		}
		if (this.Secret == null || this.Secret.isEmpty()) {
			throw new Exception("Secret parameter should not be empty");
		}
		if (this.Cluster == null || this.Cluster.isEmpty()) {
			throw new Exception("Cluster parameter should not be empty");
		}
		if (!this.Cluster.matches("eu|mt1|us2|ap1|ap2")){
			throw new Exception("Cluster parameter should a value from the list: eu, mt1, us2, ap1, ap2");
		}
		if (this.SocketID == null || this.SocketID.isEmpty()) {
			throw new Exception("SocketID parameter should not be empty");
		}
		if (this.Channel == null || this.Channel.isEmpty()) {
			throw new Exception("Channel parameter should not be empty");
		}

		Pusher pusher = new Pusher(AppID, Key, Secret);
		String authBody = pusher.authenticate(SocketID, Channel);

		return authBody;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "Authenticate";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
