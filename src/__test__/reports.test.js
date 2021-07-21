import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Reports from "../components/reports";

describe('Reports', () => {
    configure({ adapter: new Adapter() });

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Reports />)
    });

    it("should contain 3 cards", () => {
        expect(wrapper.find('Card').length).toEqual(3);
        expect(wrapper.find('Card').at(0).text()).toContain("Average group size2");
        expect(wrapper.find('Card').at(1).text()).toContain("Number of professionals44");
        expect(wrapper.find('Card').at(2).text()).toContain("Number of students56");
    });
});