import React from 'react'
import axios from 'axios'
import "../pages/styles.scss"
import { Player } from 'video-react'
class Home extends React.Component {


  state = {
    user: []
  }

  componentDidMount(){
    axios.get('https://randomuser.me/api/')
    .then(res => {
      if (res.status === 200) {
        console.log(res.data.results);
        this.setState({
          user: res.data.results
        })
      }
    })
  }

  render() {
    const user = this.state.user
    console.log(user);
    
    return (
      <div className="container">
        {
          user.map((data, index) => (
            <ul key={index}>
              <li>{data.name.first}</li>
              <img className="imgaja" src={data.picture.large}/>
            </ul>
          ))
        }



        <div className="feet">
        <Player  >
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
        </Player>
        </div>
      </div>
    )
  }
}

export default Home
