// App.test.jsx

import { render, screen } from "@testing-library/react";

import { vi } from 'vitest'
import Pricetag from "../src/components/Pricetag";
import { it } from "vitest";
import userEvent from "@testing-library/user-event";
import { UserConfig } from "vitest";
import { waitFor } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
//Man Fuck test but lets go
//Mock test 1, it fetches something from hell(this shit is hard im gonna do the others first)

describe("Pricetag ",()=>{
    //Render a + and - button within the card 
    it("render a + button",()=>{
        let card = render(<Pricetag></Pricetag>)
        const button = screen.getByRole("button", { name: "+" });
        expect(button.textContent).toMatch("+")
    })
    it("render a - button",()=>{
        let card = render(<Pricetag></Pricetag>)
        const button = screen.getByRole("button", { name: "-" });
        expect(button.textContent).toMatch("-")
    })
    //simulate an user click(this test probably sucks ignore it )
    it("it should increase the number when + button is  clicked", async ()=>{
        
        const user = userEvent.setup()
        let card = render(<Pricetag></Pricetag>)
        const appear = screen.getByRole("button",{name:"0"})
        await user.click(appear)
        const button =  screen.getByRole("button",{name:"+"})
        await user.click(button)
        await waitFor(()=> expect(screen.getByRole("textbox").defaultValue).toMatch("1"))
    })
    it("it should decrease the number when - button is  clicked", async ()=>{
        
      const user = userEvent.setup()
      let card = render(<Pricetag></Pricetag>)
      const appear = screen.getByRole("button",{name:"0"})
      await user.click(appear)
      const button =  screen.getByRole("button",{name:"+"})
      await user.click(button)
      const button2 =  screen.getByRole("button",{name:"-"})
      await user.click(button2)
      await waitFor(()=> expect(screen.getByRole("textbox").defaultValue).toMatch("0"))
  })
  it("it should not decrease to negative", async ()=>{
        
    const user = userEvent.setup()
    let card = render(<Pricetag></Pricetag>)
    const appear = screen.getByRole("button",{name:"0"})
    await user.click(appear)
    const button2 =  screen.getByRole("button",{name:"-"})
    await user.click(button2)
    await waitFor(()=> expect(screen.getByRole("textbox").defaultValue).toMatch("0"))
})
  it("it should change with user input",async ()=>{
    const user = userEvent.setup()
    let card = render(<Pricetag></Pricetag>)
    const appear = screen.getByRole("button",{name:"0"})
    await user.click(appear)

    const input = await screen.getByRole("textbox")
    await user.type(input, "2")
    await fireEvent.submit(input);

    await waitFor(()=> expect(screen.getByTestId("price").textContent).toMatch("2"))
  })
  //i fucking hate testing
  it("user input cant make it negative",async ()=>{
    const user = userEvent.setup()
    let card = render(<Pricetag></Pricetag>)
    const appear = screen.getByRole("button",{name:"0"})
    await user.click(appear)

    const input = await screen.getByRole("textbox")
    let negativeNumber = -2
    await user.type(input, negativeNumber.toString())
   
    await fireEvent.submit(input);

    await waitFor(()=> expect(screen.getByTestId("price").textContent).toMatch("0"))
  })
  })
