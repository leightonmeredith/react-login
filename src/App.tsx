
import { Outlet } from "react-router";

function App() {
  // DECLARATIVE APPROACH
  // return (
  //   <BrowserRouter>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //     </nav>

  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  return (
    <>
      <div className="App">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App