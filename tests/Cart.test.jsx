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

    it("should display the number based on an array reducer",()=>{

    })
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
  
    //Render a + and - button within the card
    it("render a + button",()=>{
        
    })
    it("render a - button",()=>{

    })
    //simulate an user click(this test probably sucks ignore it )
    it("it should increase the number when + button is  clicked", async ()=>{
        
        
    })
    it("it should decrease the number when - button is  clicked", async ()=>{
        
     
     
  })
  it("it should not decrease to negative", async ()=>{
        
})
  it("it should change with user input",async ()=>{
    
  })
  //i fucking hate testing
  it("user input cant make it negative",async ()=>{
   
  })
})