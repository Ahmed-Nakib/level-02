interface Developer<T, X=null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}
interface appleWatch{
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
}

const poorDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
}, {brand: 'Yamaha', engineCapacity: '200c'}> = {
    name: "Rakib",
    salary: 20000,
    device: {
        brand: "lenovo",
        model: "A12",
        releasedYear: "2002"
    },
    smartWatch: {
        heartRate: "80bpm",
        stopWatch: true
    },
    bike:{
        brand: "Yamaha",
        engineCapacity: '200c'
    }
};

//best code

const richDeveloper: Developer<appleWatch> = {
    name: "Nakib",
    salary: 20000,
    device: {
        brand: "Hp",
        model: "fd2",
        releasedYear: "2022"
    },
    smartWatch: {
        heartRate: "80bpm",
        stopWatch: true,
        callSupport: true
    }
};