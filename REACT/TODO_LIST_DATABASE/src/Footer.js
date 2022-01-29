const Footer = ({}) => {
    var today = new Date();
    return (
        <footer>
            <p>
                {" "}
                <strike> Copyright </strike>
                &copy; {today.getFullYear()} <div> Copyleft [allwrongs reserved] </div>
                <a href='.\About'> About This Project </a>
            </p>
        </footer>
    );
};

export default Footer;