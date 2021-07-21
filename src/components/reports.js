import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Pie, Line } from 'react-chartjs-2';
import mockData from "../assets/mocks/MOCK_DATA.json";

const peopleByAgeRange = {
    labels: ['13-18', '18-25', '25+'],
    datasets: [
        {
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const peopleByLocality = {
    labels: [],
    datasets: [
        {
            label: 'no. of people by locality',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const lineChartOptions = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

export default function Reports() {
    const avgGroupSize = Math.round(mockData.map(user => user.noOfGuests + 1).reduce((a, b) => a + b)/mockData.length);
    const noOfProfessionals = mockData.filter(user => user.profession === "Employed").length;
    const noOfStudents = mockData.filter(user => user.profession === "Student").length;

    useEffect(() => {
        const ageRangeData = [
            mockData.filter(user => user.age >= 13 && user.age <= 18).length,
            mockData.filter(user => user.age > 18 && user.age <= 25).length,
            mockData.filter(user => user.age > 25).length
        ];
        peopleByAgeRange.datasets[0].data = ageRangeData;

        const localityLabels = [];
        mockData.forEach(user => {
            if (localityLabels.indexOf(user.locality) === -1) {
                localityLabels.push(user.locality);
            }
        });
        peopleByLocality.labels = localityLabels;
        const localityWiseData = [];
        localityLabels.forEach(locality => {
            localityWiseData.push(mockData.filter(user => user.locality === locality).length);
        })
        peopleByLocality.datasets[0].data = localityWiseData;
    });

    return (
        <div className="reports-wrapper">
            <div className="card-wrapper">
                <Card>
                    <Card.Body>
                        <Card.Title>Average group size</Card.Title>
                        <Card.Text>
                            {avgGroupSize}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Number of professionals</Card.Title>
                        <Card.Text>
                            {noOfProfessionals}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Number of students</Card.Title>
                        <Card.Text>
                            {noOfStudents}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-5">
                <h2 className="text-light text-center mb-3">Number of people by age range</h2>
                <Pie className="pie-chart" data={peopleByAgeRange} />
            </div>
            <div className="mt-5">
                <h2 className="text-light text-center mb-3">Number of people by locality</h2>
                <Line data={peopleByLocality} options={lineChartOptions} />
            </div>
        </div>
    );
}