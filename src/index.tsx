import MyComponent from './components/MyComponents.tsx'; // 파일명 수정

const App: React.FC = () => {
  return (
    <div>
      <h1>hello, world</h1>
      <MyComponent message="컴포넌트" />
    </div>
  );
};

export default App;
