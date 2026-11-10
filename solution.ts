function multiplyValue(value: number, multiplier?: number): number {
    return value * (multiplier ?? 2);
}



function processInput(inp: string | number | boolean): string | number {
    if (typeof inp === "string") {
        return inp.trim().toLowerCase();
    }

    if (typeof inp === "number") {
        return inp * 10;
    }

    return inp ? "Active" : "Inactive";
}





function formatCoordinate(
    coordinate: readonly [number, number, string],
): string {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(c: Course[], minStudents: number): Course[] {
    return c.filter(
        (c) => c.isPublished && c.students >= minStudents,
    );
}







































class Employee {

    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {

        this.name = name;
        this.baseSalary = baseSalary;

    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }

}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }

}

 








function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}


