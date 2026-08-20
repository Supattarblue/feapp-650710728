import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { 
    id: 650710680, 
    name: 'ชุติมา สหพรอุดมการ', 
    nickname: 'ตาล', 
    major: 'เทคโนโลยีสารสนเทศ', 
    favorites: ['ชาเขียว', 'แมว'] 
  },
  { 
    id: 650710728, 
    name: 'สุภัทรา เค้าสำราญ', 
    nickname: 'ตอง', 
    major: 'เทคโนโลยีสารสนเทศ', 
    favorites: ['ชามะลิ', 'เล่นเกม'] 
  },
  { 
    id: 650710729, 
    name: 'สมศักดิ์ รักเรียน', 
    nickname: 'บอย', 
    major: 'วิทยาการคอมพิวเตอร์', 
    favorites: ['อ่านหนังสือ', 'กาแฟดำ'] 
  }
];


function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;