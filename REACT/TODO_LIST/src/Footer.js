const Footer = ({ length }) => {
    const today = new Date();
    
    return(
        <footer>
            <p> [{length}] {length === 1 ? `[Item] ${length}`:`[list items] ${length}`} Copyright &copy; {today.getFullYear()} </p>
        </footer>
    );
}

export default Footer; 
