import './App.css';
import PaintProfile from './components/PaintProfile';
import userData from './user.json';


export default function App() {
  return (
    <PaintProfile
        avatar={userData.avatar}
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
    />
    
  )
};
