import React from "react";

// component의 type선언시 interface를 사용해도된다
type GreetingsProps = {
    name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    <div>Hello, {name}</div>
);

export default Greetings;