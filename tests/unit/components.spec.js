import Vue from "vue";
import Vuex from "vuex";
import {expect} from "chai";
import { shallowMount,createLocalVue } from '@vue/test-utils'
import App from "@/App.vue";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("addTodo test", () => {
    it('should ', function () {
        let store = new Vuex.Store({

            state: {
                newTodoTitle: "",
                editTodo: "",
                beforeEditCache: "",
                todos: [
                    {
                        title: "我是NO.1",
                        completed: false,
                    },
                    {
                        title: "千年老二",
                        completed: true,
                    },
                    {
                        title: "唐家三少",
                        completed: false,
                    }
                ],
                filter: "all",
            },
            getters: {
                allCompleted: state => state.todos.every(todo => todo.completed),
                showTodos: state => {
                    if (state.filter === "active") {
                        return state.todos.filter(item => !item.completed)
                    } else if (state.filter === "completed") {
                        return state.todos.filter(item => item.completed)
                    } else {
                        return state.todos;
                    }
                },
                todosCount: state => {
                    if (state.filter === "active") {
                        return state.todos.filter(todo => !todo.completed).length
                    } else if (state.filter === "completed") {
                        return state.todos.filter(todo => todo.completed).length
                    } else {
                        return state.todos.length;
                    }
                }
            },

        });
        const wrapper = shallowMount(TheFooter,{store,localVue});
        let str = wrapper.find('.todo-count strong').text()
        expect(Number(str)).to.equal(store.state.todos.length);

    });
})