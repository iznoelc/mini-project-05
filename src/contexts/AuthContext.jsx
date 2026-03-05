/** AuthContext.jsx
 * creates the authContext context, which will be modified in AuthProvider.jsx to provide the authentication functionality.
 * in a separate file to prevent react fast refresh from losing the context state
 */
import { createContext } from "react";

export const AuthContext = createContext(null);