import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount, render, shallow } from "enzyme";
import Registration from "../components/registration";
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from "react-dom/test-utils";

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
});