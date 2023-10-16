import { render, screen } from "@testing-library/react";
import { describe, vi } from 'vitest'
import Pricetag from "../src/components/Pricetag";
import { it } from "vitest";
import userEvent from "@testing-library/user-event";
import { UserConfig } from "vitest";
import { waitFor } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
//Things i need to test
//Mock an api call with a json
//mock an api call with image
describe("Cart",()=>{
    it("should not be negative",()=>{
        
    })
    it("should display the number based on an array length",()=>{

    })
    
})