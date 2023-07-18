import { LogoIcon } from "./Icons";
import { Toolbar } from "./Toolbar/Toolbar";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between gap-2 border-b border-zinc-300 px-4 py-3 md:px-10">
      <div className="flex items-center gap-2">
        <div className="relative h-7 w-7">
          <LogoIcon />
        </div>
        <h1 className="hidden text-base font-semibold md:inline">Json Tree</h1>
      </div>
      <Toolbar />
    </header>
  );
}
