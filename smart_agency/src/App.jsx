import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import ReturnPolicy from './pages/ReturnPolicy.jsx'
import DeliveryPolicy from './pages/DeliveryPolicy.jsx'
import TermsPolicy from './pages/TermsPolicy.jsx'
import Blog1 from './pages/Blog1.jsx'
import Blog2 from './pages/Blog2.jsx'
import Blog3 from './pages/Blog3.jsx'
import Blog4 from './pages/Blog4.jsx'
import Blog5 from './pages/Blog5.jsx'
import Blog6 from './pages/Blog6.jsx'
import Blog7 from './pages/Blog7.jsx'
import Blog8 from './pages/Blog8.jsx'
import Blog9 from './pages/Blog9.jsx'
import Blog10 from './pages/Blog10.jsx'
import Blog11 from './pages/Blog11.jsx'
import Blog12 from './pages/Blog12.jsx'
import Blog13 from './pages/Blog13.jsx'
import Blog14 from './pages/Blog14.jsx'
import Blog15 from './pages/Blog15.jsx'
import Blog16 from './pages/Blog16.jsx'
import Blog17 from './pages/Blog17.jsx'
import BusinessAgility from './pages/trainings/BusinessAgility.jsx'
import ManagementAgile from './pages/trainings/ManagementAgile.jsx'
import ScrumMaster from './pages/trainings/ScrumMaster.jsx'
import ProductOwnership from './pages/trainings/ProductOwnership.jsx'
import AIProjectManagers from './pages/trainings/AIProjectManagers.jsx'
import AtlassianTools from './pages/trainings/AtlassianTools.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './i18n.js'
import LanguageSwitcher from './components/LanguageSwitcher.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
      <LanguageSwitcher/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/return' element={<ReturnPolicy/>}/>
        <Route path='/delivery' element={<DeliveryPolicy/>}/>
        <Route path='/terms' element={<TermsPolicy/>}/>
        <Route path='/blog1' element={<Blog1/>}/>
        <Route path='/blog2' element={<Blog2/>}/>
        <Route path='/blog3' element={<Blog3/>}/>
        <Route path='/blog4' element={<Blog4/>}/>
        <Route path='/blog5' element={<Blog5/>}/>
        <Route path='/blog6' element={<Blog6/>}/>
        <Route path='/blog7' element={<Blog7/>}/>
        <Route path='/blog8' element={<Blog8/>}/>
        <Route path='/blog9' element={<Blog9/>}/>
        <Route path='/blog10' element={<Blog10/>}/>
        <Route path='/blog11' element={<Blog11/>}/>
        <Route path='/blog12' element={<Blog12/>}/>
        <Route path='/blog13' element={<Blog13/>}/>
        <Route path='/blog14' element={<Blog14/>}/>
        <Route path='/blog15' element={<Blog15/>}/>
        <Route path='/blog16' element={<Blog16/>}/>
        <Route path='/blog17' element={<Blog17/>}/>
        <Route path='/businessagility' element={<BusinessAgility/>}/>
        <Route path='/managementagile' element={<ManagementAgile/>}/>
        <Route path='/scrummaster' element={<ScrumMaster/>}/>
        <Route path='/productownership' element={<ProductOwnership/>}/>
        <Route path='/aiprojectmanagers' element={<AIProjectManagers/>}/>
        <Route path='/atlassiantools' element={<AtlassianTools/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


