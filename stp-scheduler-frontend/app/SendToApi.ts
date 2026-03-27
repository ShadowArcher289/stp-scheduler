/**
 * Handles api calls to the backend
 * 
 * Author: Addison A
 * Last Updated: 2/20/2026
 * 
 * Edited by:
 * 
 */

/**
 * TODO: Implement this
 * Generates and returns an id string
 * @returns string, "fake-id"
 */
export function generateId(){
    return "fake-id";
}

/**
 * Sends a POST request to update the data in the backend given an entire csv file
 * @param csvData 
 */
export function updateFromCSV(csvData: any){
    var result: any;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(csvData)
    };

    fetch('http://localhost:8000/update/csv', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.

    return result;
}

/**
 * Sends a POST request to create a teacher in the backend
 * @param teacher 
 * @returns 
 */
export function createTeacher(teacher: any){
    var result: any;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(teacher)
    };

    fetch('http://localhost:8000/create/teacher', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.

    return result;
}

/**
 * Sends a PUT request to edit a teacher in the backend
 * @param teacher 
 * @returns 
 */
export function editTeacher(teacher: any){
    var result: any;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(teacher)
    };

    fetch('http://localhost:8000/edit/teacher', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.

    return result;
}

/**
 * Sends a POST request to create a student in the backend
 * @param student 
 * @returns 
 */
export function createStudent(student: any){
    var result: any;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    fetch('http://localhost:8000/create/student', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.
        
    return result;
}

/**
 * Sends a PUT request to edit a student in the backend
 * @param student 
 * @returns 
 */
export function editStudent(student: any){
    var result: any;

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    fetch('http://localhost:8000/edit/student', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.
        
    return result;
}

/**
 * Sends a POST request to create a section in the backend
 * @param section 
 * @returns 
 */
export function createSection(section: string){   
    var result: any;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: section
    };

    fetch('http://localhost:8000/create/section', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.
    
    return result;
}

/**
 * Sends a POST request to create a timeblock in the backend
 * @param timeblock 
 * @returns 
 */
export function createTimeblock(timeblock: string){
    var result: any;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: timeblock
    };

    fetch('http://localhost:8000/create/timeblock', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.

    return result;
}