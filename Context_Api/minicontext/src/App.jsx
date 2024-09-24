import UserContextProvider from "./Context/UserContextProvider"


function App() {
 

  return (
    <>
    <UserContextProvider>
     <h1 className="bg-black text-white text-center mx-4 my-2">Hello</h1>

    </UserContextProvider>
    </>
  )
}

export default App
