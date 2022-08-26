import Card from './component/Card';
import './App.css';

function App() {
    return (
    <div className="App" id="box">
    <Card color="red" head="Java " title="Dr. James Arthur Gosling" para="Java was developed and supported earlier by Sun Microsystem and now by Oracle, after their acquisition of Sun Microsystem in January 2010." />
    
    <Card color="green" head="C language" title="Dennis MacAlistair Ritchie" para="An American computer scientist, created the C programming language between 1967 and 1973 at AT& T Bell Labs." />
    
    <Card color="blue" head="C++" title="Bjarne Stroustrup" para="C++, as the name suggested, is the next-generation language at the time C was popular. It comes with an object-oriented programming feature."/>

    <Card color="orange" head="Python" title="Guido van Rossum" para="Python is a general-purpose, high-level programming language whose design philosophy emphasizes code readability. Its syntax is said to be bright and expressive. Python is designed by Guido van Rossum of CWI."/>

    <Card color="#ff0091" head="JavaScript" title="Brendan Eich" para="JavaScript is a prototype-based scripting language that is dynamic, weakly typed, and has first-class functions, designed by Brendan Eich and developed by Netscape Communications Corporation."/>
    </div>
  );
}

export default App;
