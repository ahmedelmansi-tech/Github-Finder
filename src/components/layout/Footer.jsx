const Footer = () => {
  const day = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primry-content footer-center">
      <p> Copyright &copy; {day} all Rights reserved </p>
    </footer>
  );
};

export default Footer;
