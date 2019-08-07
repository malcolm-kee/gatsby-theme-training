import netlifyIdentity from 'netlify-identity-widget';
import React from 'react';

const noop = () => {};

// eslint-disable-next-line no-undef
const isLocal = process.env.NODE_ENV === 'development';

const AuthContext = React.createContext({
  user: null,
  login: noop,
  logout: noop,
});

if (typeof window !== 'undefined') {
  netlifyIdentity.init();
}

export const AuthProvider = ({ children, disableAuth }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    netlifyIdentity.on('login', setUser);
    netlifyIdentity.on('logout', () => setUser(null));
    const currentUser = netlifyIdentity.currentUser();
    if (currentUser && !user) {
      setUser(currentUser);
    }
  }, []);

  const value = React.useMemo(() => {
    return {
      user,
      isLoggedIn: isLocal || disableAuth || user !== null,
      login: () => netlifyIdentity.open(),
      logout: () => netlifyIdentity.logout(),
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => React.useContext(AuthContext);
