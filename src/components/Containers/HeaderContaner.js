export default function HeaderContainer({ children }) {
  return (
    <header class="flex justify-between items-center pt-3 pb-6 px-20">
      {children}
    </header>
  );
}