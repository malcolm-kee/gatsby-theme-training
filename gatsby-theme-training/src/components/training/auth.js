import netlifyIdentity from 'netlify-identity-widget';
import React from 'react';

const noop = () => {};

const AuthContext = React.createContext({
  user: null,
  login: noop,
  logout: noop,
});

if (typeof window !== 'undefined') {
  netlifyIdentity.init();
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(netlifyIdentity.currentUser());

  React.useEffect(() => {
    netlifyIdentity.on('login', setUser);
    netlifyIdentity.on('logout', () => setUser(null));
  }, []);

  const value = React.useMemo(() => {
    return {
      user,
      isLoggedIn: user !== null,
      login: () => netlifyIdentity.open(),
      logout: () => netlifyIdentity.logout(),
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => React.useContext(AuthContext);
