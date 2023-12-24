import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverFocus from "./components/HoverFocus";
import Navbar from "./components/Navbar";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typografy from "./components/Typografy";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1 className="text-2xl text-center text-purple-700 font-bold">
        Hello Tailwind
      </h1> */}
      {/* <Typografy /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverFocus /> */}
      {/* <FlexAndResponsive /> */}
      <Profile />
    </div>
  );
}

export default App;
