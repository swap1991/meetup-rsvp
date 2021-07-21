import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import RegisteredUsers from "../components/registeredUsers";

describe('Registered users', () => {
    configure({ adapter: new Adapter() });

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<RegisteredUsers />)
    });

    it("should contain Registered users header", () => {
        const header = <h2 className="text-light text-center mt-5">Registered Users</h2>;
        expect(wrapper.contains(header)).toEqual(true);
    });

    it("should return 5 records on searching for 'north'", () => {
        wrapper.find('input').first().simulate('change', { target: { value: 'north' } });
        expect(wrapper.find('div.m-1').length).toEqual(5);
    });

    it("should return no records on searching for 'asd'", () => {
        wrapper.find('input').first().simulate('change', { target: { value: 'asd' } });
        expect(wrapper.find('div.m-1').length).toEqual(1);
        expect(wrapper.find('div.m-1').first().text()).toBe("No records found");
    });
});