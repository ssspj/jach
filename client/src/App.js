import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useRef, useState } from "react"
// import Login from "./components/Login/Login";
// import Signup from "./components/Login/Signup";
// import Main from "./pages/Main";
// import List from "./board/List";
// import Modify from "./board/Modify";
// import View from "./board/View";
// import Write from "./board/Write";
// import Layout from "./Layout";

// function App() {

//   const [list, setList] = useState([    
//   ]);
//   const idRef = useRef(); 

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />}></Route>
//         <Route path="/signup" element={<Signup />}></Route>
//         <Route path="/main" element={<Main />}></Route>
//         <Route path="/board" element={<Layout />}>
//                 <Route path="list" element={<List list={list} />} />
//                 <Route path="view/:id" element={<View list={list} setList={setList} />} />
//                 <Route path="modify/:id" element={<Modify list={list} setList={setList} />} />
//                 <Route path="write" element={<Write list={list} setList={setList} idRef={idRef} />} />
//             </Route>
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;
