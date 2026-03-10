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
 * Sends a POST request to create a teacher in the backend
 * @param teacher 
 * @returns 
 */
export function createTeacher(teacher: string){
    var result: any;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: teacher
    };

    fetch('http://localhost:8000', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.

    return result;
}

/**
 * Sends a POST request to create a student in the backend
 * @param student 
 * @returns 
 */
export function createStudent(student: string){
    var result: any;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    fetch('http://localhost:8000/', requestOptions)
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

    fetch('http://localhost:8000/', requestOptions)
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

    fetch('http://localhost:8000/', requestOptions)
        .then(response => response.json())
        .then(data => result); // NOTE: This is the response data from the backend, idk what to do with it yet.

    return result;
}