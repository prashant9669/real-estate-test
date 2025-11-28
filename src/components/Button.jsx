export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}) {
  const base =
    "px-5 py-3 rounded-md font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-[#3FD797] text-black hover:brightness-110 hover:shadow-lg hover:-translate-y-1",
    secondary:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-black",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
