import {component$, useStore, useStylesScoped$} from "@builder.io/qwik";
import {formatSeconds} from "~/components/counter/counter.functions";
import styles from './counter.css?inline'

export default component$(() => {
    useStylesScoped$(styles);
    const state = useStore({
        value: 1000 * 60 * 60 * 8,
        intervalId: 0,
        isOvertime: false
    })

    return (
        <div class="counter">
            <div>
                <h1> {`${state.isOvertime ? '-' : ''}  ${ formatSeconds(state.value) }`} </h1>
                <div>
                    <button onClick$={() => {
                        state.value -= 1000;
                        state.intervalId = window.setInterval(() => {
                            if (state.isOvertime) {
                                state.value += 1000;
                            } else {
                                state.value -= 1000;
                            }

                            if (state.value <= 0) {
                                state.isOvertime = true;

                            }
                        }, 1000)} }>Start</button>
                    <button onClick$={() => {
                        if(state.intervalId) {
                            window.clearInterval(state.intervalId);
                        }

                    }}>Pause</button>
                    <button onClick$={() => {
                        if(state.intervalId) {
                            window.clearInterval(state.intervalId);
                            state.value = 1000 * 60 * 60 * 8
                        }

                    }}>Stop</button>
                </div>
            </div>
        </div>
    )
})
