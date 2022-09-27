import "./styles.css";

/* Exercise
1. Update the HelloSomeone component to accept a name and a greeting property.
   It should display the greeting and the name (for example: Hello Luigi)
   
2. If the name is "Mario", the component should display "Boss" instead of the name

3. add another prop "hasDarkMode" as a boolean and add the class "dark" to the div in the HelloSomeone
   component if it is true
   - make the darkMode attribute true only for Luigi
*/

export default function App() {
  return (
    <section>
      <HelloSomeone name="Mario" greeting="Hi" />
      <HelloSomeone name="Luigi" greeting="Hello" hasDarkMode />
      <HelloSomeone name="Bowser" greeting="Hey" />
    </section>
  );
}

const HelloSomeone = () => {
  return <div></div>;
};
