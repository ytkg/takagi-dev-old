function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center h-12 bg-black text-white font-mono">
      <p className="md:block hidden">Copyright &copy; {year} takagi.dev All rights reserved.</p>
      <p className="md:hidden">&copy; {year} takagi.dev</p>
    </div>
  );
}

export default Footer;
