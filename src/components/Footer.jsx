const Footer = ({ website }) => {
  return <h5 className="text-center">Copyright : {website} </h5>;
};

export default Footer;

Footer.defaultProps = {
  website: "@shivaniii1712.com",
};
