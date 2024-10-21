import profilePic from './assets/profile.png'

export default function Profile(){
    const title = "Phaniraj"
    const text = "I conduct trainings for CDAC Bangalore and Hyderabad"
    return(
        <div className='card'>
            <img className='card-image' src={profilePic} alt="profile pic"/>
            <h2 className="card-title">{title}</h2>
            <hr/>
            <p className='card-text'>{text}</p>
        </div>
    )
}