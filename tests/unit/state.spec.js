import Vue from "vue";
import { expect } from "chai";
import store from "@/store.js";

describe("State Test", () => {
    it("state exist", () => {
        expect(store.state).to.exist;
    });

    it("state initial empty value",()=>{
        expect(store.state.newTodoTitle).to.equal("");
        expect(store.state.editTodo).to.equal("");
        expect(store.state.beforeEditCache).to.equal("");
    });

    it("state initial array length",()=>{
        expect(store.state.todos.length).to.equal(3);
    });
    it("state initial filter",()=>{
        expect(store.state.filter).to.equal("all");
    });

    it('allCompleted should be false ', ()=> {
        expect(store.getters.allCompleted).to.equal(false);
    });

    it('initial todosCount should be 3 ', ()=> {
        expect(store.getters.todosCount).to.equal(3);
    });

})