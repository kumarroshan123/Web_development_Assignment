import { useContext} from 'react'
import { Themecontext } from './components/themecontext';
import { Usercontext } from './components/usercontext';
import { Signup } from './components/Signup';

function App() {
  const { theme, onclick } = useContext(Themecontext);
  const { userdetail, log, logout } = useContext(Usercontext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="theme-switcher">
        <p>Current Theme: {theme}</p>
        <button onClick={onclick} className="theme-toggle-btn">Toggle Theme</button>
      </div>
      <div className="user-section">
        {log ? (
          <>
            <p>Welcome, {userdetail.username}!</p>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Signup />
        )}
      </div>
    </div>
  );
}

export default App;