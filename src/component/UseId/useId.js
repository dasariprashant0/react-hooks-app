import { useId } from "react";

function Id() {
  const id = useId();

  return (
    <>
      <h1>useId Hook</h1>
      <form>
        <label htmlFor={id}>Please Enter Your Name</label>
        <input type="text" id={id} />
      </form>
    </>
  );
}
export default Id;
