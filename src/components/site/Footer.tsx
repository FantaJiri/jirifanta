export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jiří Fanta — Sportovní masáže</p>
        <p>jirifanta.cz</p>
      </div>
    </footer>
  );
}
