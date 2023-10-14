// App.test.jsx

import { render, screen } from "@testing-library/react";
import App from "./App";
import Cards from "../src/components/Cards";
import MainPage from "../src/components/MainPage";
//test if header loads
describe("Main Page component",()=>{
  it("render correct header",()=>{
    render(<MainPage></MainPage>)
    expect(screen.queryByRole("banner")).toBeInTheDocument();
  })
})
