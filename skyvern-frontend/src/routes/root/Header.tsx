import { useMatch, useSearchParams } from "react-router-dom";
import { NavigationHamburgerMenu } from "./NavigationHamburgerMenu";

function Header() {
  const [searchParams] = useSearchParams();
  const embed = searchParams.get("embed");
  const match =
    useMatch("/workflows/:workflowPermanentId/edit") ||
    location.pathname.includes("debug") ||
    embed === "true";

  if (match) {
    return null;
  }

  return (
    <header>
      <div className="flex h-24 items-center px-6">
        <NavigationHamburgerMenu />
      </div>
    </header>
  );
}

export { Header };
