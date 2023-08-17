import './App.css';
import CoursePage from './pages/CoursePage';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>                          {/* Landing Page */}
          <Route exact path='/Restaurants' element={<Restaurants/>}/>           {/* Show all Restraunts and let the user click cards to view that specific restraunt's reviews */}
          <Route exact path='/Login' element={<Login/>}/>                       {/* Login lol */}
          <Route exact path='/Register' element={<Register/>}/>                 {/* Register a new user */}
          <Route exact path='/Reviews/:_id' element={<Reviews/>}/>              {/* Shows all reviews for a specific restraunt */}
          <Route exact path='/CreateReview' element={<CreateReview/>}/>         {/* Create a review for a specific restraunt */}
          <Route exact path='/UpdateReview/:_id' element={<UpdateReview/>}/>
          <Route exact path='/SeeReviews' element={<SeeReviews/>}/>          {/* Update a specific review */}{/*/:_id*/}
        </Routes>
    </div>
  );
}

export default App;
