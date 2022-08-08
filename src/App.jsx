import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="d-flex flex-column justify-content-between align-items-between">
      <Navbar />
      <Main/>
      <Footer />
    </div>
  )

}

export default App
