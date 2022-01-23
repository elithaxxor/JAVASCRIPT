const Header = ( {title} ) => {
    var time = new Date();
    
return(
  

    <p> <h1> {title}</h1>{time.getHours()} {time.getMinutes()}, {time.getSeconds()} </p>
);
}

export default Header; 