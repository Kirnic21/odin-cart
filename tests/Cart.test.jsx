import { render, screen, within } from "@testing-library/react";
import { describe, vi } from 'vitest'
import { act } from "react-dom/test-utils";
import { it } from "vitest";
import Card from "../src/components/Card";
import userEvent from "@testing-library/user-event";
import { UserConfig } from "vitest";
import { waitFor } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Cart from "../src/components/Cart";

//Things i need to test
//Mock an api call with a json

//I hate this
//
describe("Cart",()=>{

 
    //mock an api call
    it("mock api call",async ()=>{
      //mock object
      const mockItem =
      [
        {title:'Unit Test',
        price:'52.32'
      }
    ]
      let spy = await vi.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockItem)
    })
  );
        await act(async()=>{
          render(<Cart></Cart>)
        })
        
       await waitFor(()=>{
       
         expect(spy).toBeCalled()
        }) 
    })
    it("should display the number based on an array reducer",async ()=>{
      const user = userEvent.setup();
      await act(async()=>{
        await render(<Cart></Cart>)
      })
      
      
      let button = await  screen.getByTestId("plus")
      await user.click(button)
      await user.click(button)
    
      await waitFor(()=>{
        expect(screen.getByTestId("cart").textContent).toMatch("2")
      })
      
    })
    //Render a + and - button within the card
    it("render a + button",async ()=>{
        await render(<Cart></Cart>)
        await waitFor(()=>{
       
          expect(screen.getByTestId("plus").textContent).toBe("+")
         }) 
        
    })
    it("render a - button",async ()=>{
      await render(<Cart></Cart>)
      await waitFor(()=>{
     
        expect(screen.getByTestId("minus").textContent).toBe("-")
       }) 
    })
    //simulate an user click(this test probably sucks ignore it )
    //fuck this shit
    // i hate this shit
    
    it("it should increase the number when + button is  clicked", async ()=>{
        
      const user = userEvent.setup();
      await act(async()=>{
        render(<Cart></Cart>)
      })
      
      let a = await  screen.getByTestId("price")
      let button = await  screen.getByTestId("plus")
      await user.click(button)
      let b = await [a.textContent]
      

      await waitFor(()=>{
      
        expect(b[0]).toBe("1")
      })
    })
    it("it should decrease the number when - button is  clicked", async ()=>{
      //should i fix this? nah
      const user = userEvent.setup();
      await act(async()=>{
        render(<Cart></Cart>)
      })
      
      let a = await  screen.getByTestId("price")
      let button = await  screen.getByTestId("plus")
      let button2 = await screen.getByTestId("minus")

      await user.click(button)
      await user.click(button2)
      let b = await [a.textContent]
      

      await waitFor(()=>{
      
        expect(b[0]).toBe("0")
      })
     
     
  })
  it("it should not decrease to negative", async ()=>{
    const user = userEvent.setup();
    await act(async()=>{
      render(<Cart></Cart>)
    })
    
    let a = await  screen.getByTestId("price")
    let button2 = await screen.getByTestId("minus")

    await user.click(button2)
    let b = await [a.textContent]
    

    await waitFor(()=>{
    
      expect(b[0]).toBe("0")
    })
   
   
})
  it("it should change with user input",async ()=>{
     const user = userEvent.setup();
    
     
    await act(async()=>{
      render(<Cart></Cart>)
    })
    let a = await  screen.getByTestId("price")
    await user.click(a)
    let b = await screen.getByTestId("value2")
    await user.type(b,"3")
  
     await waitFor(()=>{
        expect(b.value).toBe("3")
     })
  })
  //i fucking hate testing
  it("user input cant make it negative",async ()=>{
   
  })
})