const backgroundColor = [
    "#1e81b0",
    "#154c79"
];
const borderColor =
    [
        "#1e81b0",
        "#154c79"
    ];
const hoverBackgroundColor = "white";

export const monthlyRevenue = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [{ label: "Monthly Revenue", data: [10000, 12010, 22202, 12331, 12632, 20305, 23300, 11123]
        , backgroundColor:backgroundColor, borderColor:borderColor, hoverBackgroundColor:hoverBackgroundColor
     }]
};

export const yearlyRevenue = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [{ label: "Yearly Revenue", data: [100000, 120100, 222202, 123831, 152632]
         , backgroundColor:backgroundColor, borderColor:borderColor, hoverBackgroundColor:hoverBackgroundColor
     }]
}

export const weeklyRevenue = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [{ label: "Weekly Revenue", data: [1000, 1201, 2202, 1831, 1632]
         , backgroundColor:backgroundColor, borderColor:borderColor, hoverBackgroundColor:hoverBackgroundColor
     }]
}