// import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";

function App() {
  const submitForm = async (userData) => {
    await fetch(
      "https://react-http-fc08b-default-rtdb.firebaseio.com/names.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
        }),
      }
    );
  };

  return (
    <div className="app">
      <BasicForm onSubmit={submitForm} />
    </div>
  );
}

export default App;
