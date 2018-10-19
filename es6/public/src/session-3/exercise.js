import { data } from './exercise.mock';

export const load = (delay = 10) => {
    return new Promise((resolve) => {
        let id = setTimeout(function () {
            resolve(data);
            clearTimeout(id);
        }, delay);
    })
}

export class StudentsList {
    constructor() {
        this.list = [];
    }
    load() {
        let promise = load();
        promise.then(data => {
            this.list = data.map((student) => this.formatStudent(student))
        });
        return promise;
    }
    formatStudent(student = { first_name: 'Juan', last_name: 'Perez', gender: 'Male', email: 'juan.perez@gmail.com' }) {
        const {
            first_name: firstName,
            last_name: lastName,
            gender,
            email
        } = student;

        return { firstName, lastName, gender, email };
    }
    getStudent(callback = () => false) {
        let student = this.list.find(callback);
        
        return student || this.formatStudent(student);
    }
    getWomenStudents() {
        return this.list.filter(student => student.gender === 'Female');
    }
}