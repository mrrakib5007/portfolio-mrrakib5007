import Image from "next/image";

export default function Logo({
  width = 40,
  height = 40,
  className = "object-contain",
  priority = false,
}) {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Rakib Logo"
        width={width}
        height={height}
        className={`theme-logo-light ${className}`}
        priority={priority}
      />
      <Image
        src="/logo_white.png"
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        className={`theme-logo-dark ${className}`}
        priority={priority}
      />
    </>
  );
}
