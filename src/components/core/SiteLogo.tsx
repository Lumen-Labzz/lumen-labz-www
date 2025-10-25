import LogoSVG from "/logo.svg";

const SiteLogo = () => {
  return (
    <a href="/">
      <img
        src={LogoSVG}
        className="size-12 rounded-md p-2"
        alt="Website logo"
      />
    </a>
  );
};

export default SiteLogo;
