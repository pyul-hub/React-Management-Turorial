import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '20010101',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍이동',
  'birthday': '20020101',
  'gender': '남자',
  'job': '회사원',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길순',
  'birthday': '20030101',
  'gender': '여자',
  'job': '프로그래머',
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
