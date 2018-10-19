import { StudentsList, load } from "../../public/src/session-3/exercise";
import { data } from "../../public/src/session-3/exercise.mock";

describe('Exercise', function () {

    describe('Promises', function () {
        it('Load function should exists', function () {
            expect(load).toBeDefined();
        })
        it('Should pull information from mocked data', function (done) {
            load().then(function (info) {
                expect(data).toEqual(info);
                done();
            })
        })
    })
    describe('StudentsList class', function () {
        describe('Definition', function () {
            it('Should exists StudentsList class', function () {
                expect(StudentsList).toBeDefined();
            })
            it('Should exists getWomenStudents method', function () {
                expect(StudentsList.prototype.getWomenStudents).toBeDefined();
            })
            it('Should exists getStudent method', function () {
                expect(StudentsList.prototype.getStudent).toBeDefined();
            })
            it('Should exists formatStudent method (this method fixes last_name to lastName and first_name to firstName)', function () {
                expect(StudentsList.prototype.getStudent).toBeDefined();
            })
        });
    });
    describe('StudentsList class functionality', function () {
        
        it('Should get all the women students', function (done) {
            let studentsList = new StudentsList();
            studentsList.load().then(function () {
                expect(studentsList.getWomenStudents()).toEqual(
                    data.filter(v => v.gender === 'Female').map((student) => studentsList.formatStudent(student))
                )
                done();
            })
        })
        
        it('Should get the first student\'s firstName and lastName by destructuring aliasing', function (done) {
            let studentsList = new StudentsList();
            studentsList.load().then(function () {
                let { firstName, lastName } = studentsList.getStudent((student, i) => i === 0);
                
                expect(firstName).toBe(data[0].first_name);
                expect(lastName).toBe(data[0].last_name);
                
                done();
            })
        })
        it('Should get a default student\'s firstName and lastName by destructuring aliasing', function (done) {
            let studentsList = new StudentsList();
            studentsList.load().then(function () {
                let { firstName, lastName } = studentsList.getStudent(() => false);
                
                expect(firstName).toBe('Juan');
                expect(lastName).toBe('Perez');
                done();
            })
        })
    })
})