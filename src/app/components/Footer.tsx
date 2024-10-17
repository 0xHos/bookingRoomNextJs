export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-slate-700 p-4">
        Booking &copy; {currentYear} All Right Reserved.
      </footer>
    </>
  );
}
