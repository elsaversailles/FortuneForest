import { useState } from 'react';
import { fortuneForest_backend } from 'declarations/fortuneForest_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    fortuneForest_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main className="container mx-auto px-4 py-8">
    <img src="/logo2.svg" alt="DFINITY logo" className="w-32 mx-auto mb-8" />
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2 text-lg font-medium">Enter your name:</label>
        <input 
          id="name" 
          type="text" 
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Click Me!
      </button>
    </form>
    {greeting && (
      <section id="greeting" className="max-w-md mx-auto p-4 border border-gray-300 rounded-md bg-gray-100">
        <p className="text-xl text-center">{greeting}</p>
      </section>
    )}
  </main>
  );
}

export default App;
