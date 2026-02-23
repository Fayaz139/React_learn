import { useState } from "react"
import FullView from "./components/leftSection/fullView"
import Info from "./components/rightSection/info"

function App() {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1716807335226-dfe1e2062db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww"
  )
  return (
   <>
    <div className="flex justify-between h-screen w-full">
      <FullView image={selectedImage} />
      <Info onSelectImage={setSelectedImage} />
    </div>
   </>
  )
}

export default App
