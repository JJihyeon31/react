import logo from './logo.svg';
import './App.css';
import ImageUploader from './component/ImageUploader';

function App() {
  return (
    <div>
      <h1>이미지 업로더</h1>
      <ImageUploader /> {/* ImageUploader 컴포넌트를 사용 */}
    </div>
  );
}

export default App;
