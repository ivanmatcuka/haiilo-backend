import { ItemsCarousel } from "@/components/ItemsCarousel";
import { Userbar } from "@/components/Userbar";

function App() {
  return (
    <div className="p-4 mx-auto max-w-lg">
      <div className="w-full flex justify-between">
        <h1 className="text-xl font-bold mb-4">Pick Items</h1>
        <Userbar />
      </div>
      <ItemsCarousel />
    </div>
  );
}

export default App;
