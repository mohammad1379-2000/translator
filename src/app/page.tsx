import * as React from "react";
import { Logo, RecordArea, ThemeSwitcher } from "component";
export default async function HomePage() {
  return (
    <div className={"w-screen h-screen"}>
      <Logo className={"m-5 fixed top-0 left-0"} />
      <ThemeSwitcher className={"fixed top-5 right-5"} />
      <RecordArea />
    </div>
  );
}
