import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Privacy from './Privacy';
import Terms from './Terms';
import Support from './Support';
import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}
