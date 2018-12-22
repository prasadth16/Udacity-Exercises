import React ,{Component} from 'react'

class FavMovieUtil extends Component
{
  render()
  {
  	const profiles=this.props.profiles
    const users=this.props.users
    const movies=this.props.movies
    return(
      		<ul className="favMovieDisplayList">
      {profiles.map(profile=>(
             <li id={profile.id}>
                <div className="favMovieDisplay">
                         <p> {users[profile.userID].name}'s favorite movie is{movies[profile.favoriteMovieID].name}</p>
                </div>
             </li>
            ))}
      </ul>
    )
  }
}
export default FavMovieUtil