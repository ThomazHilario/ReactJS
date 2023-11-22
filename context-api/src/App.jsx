import Provider from "./assets/contextApi"
import RoutePage from "./Routes"

function App() {
  return (
    <>
      <Provider>
        <RoutePage/>
      </Provider>
    </>
  )
}

export default App
