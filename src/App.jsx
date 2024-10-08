import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import useTheme from './UseTheme'; // Import the theme hook

const App = () => {
  const theme = useTheme(); // Get the current theme ('dark' or 'light')

  return (
    <>
      {/* Pass the theme as a prop */}
      <Sidebar theme={theme} />
      <Main theme={theme} />
    </>
  );
}

export default App;
