import { render, screen } from "@testing-library/react";
import { describe, vi } from 'vitest'
import { act } from "react-dom/test-utils";
import { it } from "vitest";
import userEvent from "@testing-library/user-event";
import { UserConfig } from "vitest";
import { waitFor } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Cart from "../src/components/Cart";
import Card from "../src/components/Card"
import { unmountComponentAtNode } from "react-dom";
//Things i need to test
//Mock an api call with a json

describe("Card",()=>{
    let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
    it("should display the number based on an array reducer",()=>{

    })
    //mock an api call
    it("should display an card with mocked stuff",async ()=>{
        const fakeItem={
          title:"wee wee",
          image:"oh well",
          price:"69.420",
      
          
        }
        vi.spyOn(global,"fetch").mockImplementation(()=>{
          Promise.resolve({
            json:()=> Promise.resolve(fakeitem)
          })
        })
        await act(async()=>{
          render(<Card></Card>,container)
        })
        //note to self, learn how to test images
        expect((container.querySelector(".title").textContent).toBe("wee wee"))
    })
})