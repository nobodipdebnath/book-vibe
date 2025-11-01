import React from "react";
import { Bar, BarChart,  XAxis, YAxis } from "recharts";

const data = [
  { name: "The Great Gatsby", uv: 192 },
  { name: "To Kill a Mockingbird", uv: 281},
  { name: "1984", uv: 328},
  { name: "The Catcher in the Rye", uv: 224 },
  { name: "Pride and Prejudice", uv: 279 },
];
const getPath = (x, y, width, height) => `
  M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
  x + width / 2
}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
  x + width
}, ${y + height}
  Z
`;
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} fill={fill} stroke="none" />;
};
export const About = () => {
  return (
    <div className="flex justify-center my-10">
      <BarChart width={1024} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="green" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};
