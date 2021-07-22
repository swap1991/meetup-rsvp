import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount, shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Registration from "../components/registration";

describe('Registration form', () => {
    configure({ adapter: new Adapter() });

    it("should contain Registration form header", () => {
        const wrapper = shallow(<Registration />)
        const header = <h2 className="text-light text-center mt-5">Registration Form</h2>;
        expect(wrapper.contains(header)).toEqual(true);
    });

    it("should contain 7 input fields", () => {
        act(() => {
            const wrapper = mount(<Router><Registration /></Router>);
            expect(wrapper.find('input').length).toEqual(7);
        });
    });

    it("should not submit if required fields are empty", async () => {
        await act(async () => render(<Router><Registration /></Router>));
        fireEvent.submit(screen.getByRole("button"));
        expect(await screen.findAllByText("Name is required")).toHaveLength(1);
        expect(await screen.findAllByText("Age is required")).toHaveLength(1);
        expect(await screen.findAllByText("Date of birth is required")).toHaveLength(1);
        expect(await screen.findAllByText("Profession is required")).toHaveLength(1);
        expect(await screen.findAllByText("Locality is required")).toHaveLength(1);
        expect(await screen.findAllByText("Number of guests is required")).toHaveLength(1);
        expect(await screen.findAllByText("Address is required")).toHaveLength(1);
        cleanup();
    });
});