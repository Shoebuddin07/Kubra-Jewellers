import './Navbar.css'

const Navbar = () => {
  return (
    <div  className="Navbar">
       
          <div className='logo' ><p>KJ</p></div>
        
        <ul>
            <li className='NavElements' >Rings</li>
            <li>Ear Rings</li>
            <li>Necklace</li>
            <li>More</li>
            <li>Ear Rings</li>
            <li>Necklace</li>
            <li>More</li>
        </ul>
        <div className='Search' >
            <input type='text' placeholder='search' ></input>
        </div>
    </div>
  )
}

export default Navbar