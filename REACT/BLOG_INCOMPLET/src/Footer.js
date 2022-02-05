const Footer = () => {
    const date = new Date();
    return(
    <footer className='Footer'>
        <p> Copyleft &copy; [All Wrongs Reserved]{date.getFullYear()}</p>

    </footer>
    )
}

export default Footer