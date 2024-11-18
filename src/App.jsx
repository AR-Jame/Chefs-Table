import Banner from "./components/header/Banner"
import Navber from "./components/header/Navber"
import SecendSec from "./components/SecendSection/SecendSec"

function App() {

  return (
    <>
    <div className="mx-[10%]">
      <Navber />
      <Banner />
    </div>
    <div className="mx-[10%]">
      <SecendSec />
    </div>
    </>
  )
}

export default App
