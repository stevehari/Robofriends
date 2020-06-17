import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Searchbox from'../components/Searchbox';
import './App.css';



class App extends Component
{
	constructor()
	{
		super();
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount()
	{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(users=> {this.setState({robots:users})});
	}
	onsearchchange=(event)=>
	{
		this.setState({ searchfield: event.target.value})
	}

	render(){
		const{robots,searchfield}=this.state;
		const filterrobots=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length?
		 <h1>Loading</h1>:
		          <div className='tc'>
		           <h1 className='f1'>RoboFriends</h1>
		           <Searchbox searchchange={this.onsearchchange}/>
		           <Scroll>
		            <Cardlist robots={filterrobots}/>
		           </Scroll>
		          </div>
}
}
export default App;