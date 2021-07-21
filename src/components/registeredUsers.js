import { useState } from "react";
import mockData from "../assets/mocks/MOCK_DATA.json";

export default function RegisteredUsers() {
    const [users, setUsers] = useState(mockData);
    
    function searchInList(val) {
        setUsers(mockData.filter(user => user.name.toLowerCase().indexOf(val) !== -1 || user.locality.toLowerCase().indexOf(val) !== -1));
    }

    return(
        <div>
            <h2 className="text-light text-center mt-5">Registered Users</h2>
            <div className="search-box text-center">
                <input type="text" placeholder="Search..." onChange={e => searchInList(e.target.value)} />
            </div>
            <div className="list-wrapper border rounded">
                {users && users.map((row, index) => 
                <div className="m-1 py-2 px-3 bg-light rounded" key={`row-${index}`}>
                    <span className="text-muted fw-bold">{index+1}.</span>
                    <span className="text-danger fw-bold ms-2">{row.name}</span><i> from </i>
                    <span className="text-primary fw-bold">{row.locality}</span>
                </div>)}
            </div>
        </div>
    );
}