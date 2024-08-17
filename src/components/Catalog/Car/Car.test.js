import { render, screen } from "@testing-library/react";
import Car from "./Car";
import { BrowserRouter } from "react-router-dom";

describe('Car Component', () => {


    test(`brand title`, () => {
        const brand = 'Test Audi';

        render(<BrowserRouter>
        <Car _id = {"id"} brand={brand}/>
        </BrowserRouter>
        );
        expect(screen.queryByText(brand)).toBeInTheDocument();
    });

    
})