import React from 'react';

const ThokmandiNumbers = () => {
    const Numbers = [
        { number: "2003", detail: "Foundation of the Amanat Group" },
        { number: "20K+", detail: "Independent brands on Thokmandee" },
        { number: "100+", detail: "Trusted by diverse partner companies" },
        { number: "27", detail: "Countries served in the European Union" },
    ];

    return (
        <div className="bg-[#ebfcef] flex flex-wrap justify-center gap-10 py-10">
            {Numbers.map((x, i) => (
                <div key={i} className="flex flex-col gap-2 items-center xs:w-40 mx-6 md:w-48 text-center">
                    <h3 className="xs:text-xl md:text-[1.7rem] font-bold text-[#00422F]">{x.number}</h3>
                    <p className="xs:text-sm md:text-base text-gray-700">{x.detail}</p>
                </div>
            ))}
        </div>
    );
};

export default ThokmandiNumbers;
