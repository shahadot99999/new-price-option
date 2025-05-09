//import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    

    const studentMarks = [
        { id: 1, name: "Alice", mathMark: 78, physicsMark: 82, chemistryMark: 75 },
        { id: 2, name: "Bob", mathMark: 85, physicsMark: 79, chemistryMark: 88 },
        { id: 3, name: "Charlie", mathMark: 92, physicsMark: 91, chemistryMark: 89 },
        { id: 4, name: "David", mathMark: 74, physicsMark: 69, chemistryMark: 70 },
        { id: 5, name: "Ella", mathMark: 88, physicsMark: 84, chemistryMark: 90 },
        { id: 6, name: "Frank", mathMark: 81, physicsMark: 76, chemistryMark: 73 },
        { id: 7, name: "Grace", mathMark: 95, physicsMark: 93, chemistryMark: 96 },
        { id: 8, name: "Hannah", mathMark: 69, physicsMark: 70, chemistryMark: 65 },
        { id: 9, name: "Ian", mathMark: 90, physicsMark: 87, chemistryMark: 85 },
        { id: 10, name: "Julia", mathMark: 77, physicsMark: 80, chemistryMark: 78 },
      ];

    return (
        <div>
            <LChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="mathMark" stroke='red'></Line>
                <Line dataKey={'physicsMark'} stroke='green'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;