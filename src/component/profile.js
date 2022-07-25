import React, {Component} from 'react'


class Profile  extends Component {
constructor(){
    super()
    this.state ={
    Bio:'I am a student at GO My Code Academy ',
    Profession:'FullName="Boubaker Saif" Age="25 years old"'
    }
}
render() { 
    let Bio = this.state.Bio
    let Profession = this.state.Profession

    return (
    <div className="App">
        <img src="http://www.lorrayndepeyer.com/wp-content/uploads/2016/09/profile_silhouette-1.png" className="mr-3" alt="MyPhoto"  style={{width:"280px"}}/>
        <h3>{Bio}</h3> 
        <h4>{Profession}</h4>

        </div>
    );
}
}

export default Profile ;

