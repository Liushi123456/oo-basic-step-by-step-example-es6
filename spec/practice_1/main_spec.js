"use strict";
import _ from "lodash";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
var expect =  chai.expect;

chai.use(sinonChai);
import Person from "../../src/practice_1/person";

describe("Person", ()=>{
    it("should have field name and age", ()=>{
        var person = new Person("Tom", 21); expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);
    });

    it("should have a method introduce, introduce person with name and age", ()=>{
        var person = new Person("Tom", 21);

        var introduce = person.introduce();

        expect(introduce).to.equal("My name is Tom. I am 21 years old.");

    });
});
