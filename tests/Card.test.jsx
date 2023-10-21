import { render, screen, waitFor } from "@testing-library/react";
import { describe, vi } from 'vitest'
import { act } from "react-dom/test-utils";
import { it } from "vitest";
import Card from "../src/components/Card"

//Things i need to test
//Mock an api call with a json

describe("Card",()=>{
  
    //mock an api call
    it("mock api call",async ()=>{
      //mock object
      const mockItem =
        {title:'Unit Test',
        price:'52.32'
      }
     await vi.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockItem)
    })
  );
        await act(async()=>{
          render(<Card></Card>)
        })
        
       waitFor(()=>{
        console.log()
         expect((screen.getByTestId("test-title").textContent).toMatch("Unit Test"))}) 
    })
  
})