import { Header } from "../header";

export const GrandLayout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
