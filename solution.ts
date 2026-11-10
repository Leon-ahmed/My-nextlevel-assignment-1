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


