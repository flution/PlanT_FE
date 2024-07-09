import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';

// pages
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import AuthSuccessPage from './pages/Login/AuthSuccess';
import WritePage from './pages/Write/WritePage';
import WritePlanPage from './pages/Write/WritePlanPage';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/success" element={<AuthSuccessPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/write/plan" element={<WritePlanPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
};

export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import { LoadScript } from '@react-google-maps/api';

// import UpperNavbar from './components/Navbar/UpperNavbar';
// import BottomNavbar from './components/Navbar/BottomNavbar';
// // pages
// import DetailPage from './pages/DetailPage';
// import MainPage from './pages/MainPage';
// import LoginPage from './pages/Login/LoginPage';
// import AuthSuccessPage from './pages/Login/AuthSuccess';
// import WriteSelectPage from './pages/Write/WriteSelectPage';

// const App: React.FC = () => {
//   return (
//     <div>
//       {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}> */}
//       <UpperNavbar />
//       <Routes>
//         <Route path="/main" element={<MainPage />} />
//         <Route path="/detail" element={<DetailPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/auth/success" element={<AuthSuccessPage />} />
//         <Route path="/write" element={<WriteSelectPage></WriteSelectPage>} />
//       </Routes>
//       <BottomNavbar />
//       {/* </LoadScript> */}
//     </div>
//   );
// };

// export default App;
